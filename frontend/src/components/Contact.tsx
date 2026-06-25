import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const value = import.meta.env.VITE_API_BASE;

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${value}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setFormStatus('success');
        setFormMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
      setFormMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-[0_0_50px_rgba(16,185,129,0.05)] border border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Let's build something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">extraordinary.</span></h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 text-white/70 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 border border-white/5 group-hover:border-emerald-500/30 group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-light tracking-wide group-hover:text-white transition-colors">vipulofficial206@gmail.com</span>
              </div>
              <div className="flex items-center gap-6 text-white/70 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 border border-white/5 group-hover:border-emerald-500/30 group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg font-light tracking-wide group-hover:text-white transition-colors">+91 81792 70795</span>
              </div>
              <div className="flex items-center gap-6 text-white/70 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 border border-white/5 group-hover:border-emerald-500/30 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg font-light tracking-wide group-hover:text-white transition-colors">Amaravati, India</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-[#050505]/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-2">Name</label>
                <input
                  required
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 focus:bg-white/5 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-2">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 focus:bg-white/5 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-2">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-[#050505]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 focus:bg-white/5 transition-all resize-none"
              />
            </div>
            <button
              disabled={formStatus === 'loading'}
              className="w-full py-5 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-black font-bold text-lg rounded-2xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)]"
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {formMessage && (
              <p className={`text-sm font-mono text-center p-3 rounded-xl ${formStatus === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {formMessage}
              </p>
            )}
            <p className="text-xs text-white/30 text-center font-light pt-2">
              Note: The message may be sent after a 50-second delay due to the backend being deployed on a free instance.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
