import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_ADDRESS || 'charansowji9557@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'yral avfn unpu arnx',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS || 'charansowji9557@gmail.com',
      to: 'charansowji9557@gmail.com',
      subject: `Portfolio Contact Form: New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
