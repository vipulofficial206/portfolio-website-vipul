import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Terminal } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      
      const response = await fetch('https://vipul-portfolio-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-cyan-900/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-gaming uppercase hover-glitch text-white">Comm_Link</h2>
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Establish Connection</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-panel p-8 md:p-10 rounded-2xl border border-cyan-500/30 relative overflow-hidden group"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Player Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#050505]/50 border border-cyan-900/50 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#050505]/50 border border-cyan-900/50 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label htmlFor="message" className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-3 h-3" /> Message Payload
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-[#050505]/50 border border-cyan-900/50 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono resize-none"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-gaming font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed clip-path-slant rounded-sm"
          >
            {status === 'loading' ? (
              <span className="animate-pulse">Transmitting...</span>
            ) : status === 'success' ? (
              <span>Transmission Successful!</span>
            ) : status === 'error' ? (
              <span className="text-red-900">Transmission Failed</span>
            ) : (
              <>
                <Send className="w-5 h-5" /> Execute
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
