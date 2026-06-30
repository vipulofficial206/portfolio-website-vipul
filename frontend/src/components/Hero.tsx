import { motion } from 'motion/react';
import { Terminal, Code2 } from 'lucide-react';
import { GITHUB_STATS } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 pt-20 relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
          <span className="text-[10px] font-mono text-fuchsia-400 uppercase tracking-[0.2em] animate-pulse">System Online // Portfolio Active</span>
        </div>
        
        <h2 className="font-mono text-cyan-400 text-sm mb-4 tracking-widest uppercase border-l-2 border-cyan-500 pl-3">
          Web Developer & ML Specialist
        </h2>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-gaming font-bold tracking-tighter mb-6 leading-[1.1] uppercase">
          <span className="block hover-glitch transition-transform">THAMMINANA</span>
          <span className="text-gradient">VIPUL</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-white/70 mb-8 leading-relaxed font-mono">
          <span className="text-cyan-500">{'>'}</span> Initializing developer profile... <br/>
          <span className="text-cyan-500">{'>'}</span> Loading skills: React, TypeScript, MERN, WebGL... <br/>
          <span className="text-cyan-500">{'>'}</span> Status: Ready to build scalable and interactive web applications.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-gaming uppercase font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] clip-path-slant">
            Contact Me
          </a>
          <a href="#projects" className="px-8 py-4 glass-panel hover:bg-white/5 text-white font-gaming uppercase font-bold transition-all transform hover:-translate-y-1 border border-cyan-500/50">
            View Projects
          </a>
          <a 
            href="https://drive.google.com/file/d/1KdTrIzS759HHC6n7TE1ZYUz0kjvg0TU0/view?usp=drive_link" 
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 glass-panel hover:bg-white/5 text-cyan-400 font-mono font-bold transition-all flex items-center gap-2 transform hover:-translate-y-1 border-b-2 border-fuchsia-500"
          >
            <Terminal className="w-5 h-5" /> Resume.pdf
          </a>
        </div>

        <div className="flex gap-8 border-t border-cyan-900/50 pt-8">
          {GITHUB_STATS.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="flex flex-col group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-1 group-hover:text-fuchsia-400 transition-colors">
                {stat.icon}
                <span className="text-xl font-gaming font-bold neon-text">{stat.value}</span>
              </div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        {/* Avatar container styled like a futuristic hologram display */}
        <div className="relative w-80 h-80 group">
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite] border-t-cyan-400 border-b-fuchsia-500"></div>
          <div className="absolute inset-2 border border-fuchsia-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          
          <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-black shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent mix-blend-overlay z-10 opacity-50"></div>
            <img 
              src="https://github.com/vipulofficial206.png" 
              alt="Vipul" 
              className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        {/* Floating UI elements */}
        <div className="absolute -right-10 top-10 glass-panel p-3 rounded-lg border-l-2 border-fuchsia-500 animate-bounce" style={{ animationDuration: '3s' }}>
          <Code2 className="text-fuchsia-400 w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
