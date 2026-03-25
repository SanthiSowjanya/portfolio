"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

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
      </motion.div>
    </div>
  );
}
