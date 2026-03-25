from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
# Enable CORS for the Next.js frontend (default port 3000)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    sender_email = data.get('email')
    message = data.get('message')

    if not all([name, sender_email, message]):
        return jsonify({"error": "Missing required fields"}), 400

    # Configure your email credentials here or via environment variables
    # For Gmail, you need an App Password if 2FA is enabled
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 587
    # Use environment variables for security
    EMAIL_ADDRESS = os.environ.get("EMAIL_ADDRESS", "your_email@gmail.com")
    EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD", "your_app_password")
    
    # Destination email
    DEST_EMAIL = "charansowji9557@gmail.com"

    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = DEST_EMAIL
        msg['Subject'] = f"Portfolio Contact Form: New message from {name}"
        
        body = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}"
        msg.attach(MIMEText(body, 'plain'))

        # Check if dummy credentials are used
        if EMAIL_ADDRESS == "your_email@gmail.com":
            print("--- WARNING: Email not sent because credentials are not configured ---")
            print(f"To: {DEST_EMAIL}\nSubject: {msg['Subject']}\nBody:\n{body}")
            print("--------------------------------------------------------------------")
            return jsonify({"success": True, "message": "Message logged successfully (configure SMTP to send emails)"})

        # Connect to server and send
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        return jsonify({"success": True, "message": "Email sent successfully"})
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({"error": "Failed to send email"}), 500

if __name__ == '__main__':
    # Run the server on port 5000
    app.run(port=5000, debug=True)
