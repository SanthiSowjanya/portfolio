"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.5a6.5 6.5 0 0 0-1.7-4.5 5.8 5.8 0 0 0-.2-4.5s-1.4-.5-4.5 1.7a14.5 14.5 0 0 0-8 0C3.4 2 2 2.5 2 2.5a5.8 5.8 0 0 0-.2 4.5 6.5 6.5 0 0 0-1.7 4.5c0 7 3 8.2 6 8.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black/60 border border-white/5 p-8 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gray-600/30 rounded-full blur-[60px]" />
        
        <h1 className="text-4xl font-bold text-white mb-2 relative z-10 tracking-tight">Get In Touch</h1>
        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed">
          Fill out the form below to shoot me an email!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input 
              required
              type="text" 
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all font-mono text-sm"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input 
              required
              type="email" 
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all font-mono text-sm"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea 
              required
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all resize-none font-mono text-sm"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'loading'}
            className="w-full bg-gray-800 hover:bg-gray-700 active:bg-gray-600 border border-gray-600 text-white font-medium py-4 rounded-lg transition-colors mt-2 disabled:opacity-50"
            type="submit"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>
          
          {status === 'success' && (
            <p className="text-green-400 text-center text-sm font-medium mt-2 leading-relaxed">Message sent to charansowji9557@gmail.com! (Python Backend API processed it)</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm font-medium mt-2">Failed to send message. Please try again.</p>
          )}
        </form>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center relative z-10 border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm mb-2 sm:mb-0 sm:mr-4 font-mono">Or find me elsewhere:</p>
          <a href="https://github.com/SanthiSowjanya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all group">
            <GithubIcon className="w-5 h-5 group-hover:text-gray-300" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/santhi-sowjanya-chokka-708004255" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all group">
            <LinkedinIcon className="w-5 h-5 group-hover:text-[#0a66c2]" />
            <span>LinkedIn</span>
          </a>
        </div>

      </motion.div>
    </div>
  );
}
