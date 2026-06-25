import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { GITHUB_STATS } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 pt-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em]">Available for new projects</span>
        </div>
        <h2 className="font-mono text-emerald-400 text-sm mb-4 tracking-widest uppercase">Web Dev, UI Engineer & ML/DL Specialist</h2>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
          THAMMINANA <br />
          <span className="text-gradient">VIPUL</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/60 mb-8 leading-relaxed font-light">
          Web Developer with hands-on experience building scalable and interactive web applications using React, TypeScript, and the MERN stack. 
          Strong in UI engineering, 3D web experiences, ML/DL projects, and modern JavaScript development.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Get in touch
          </a>
          <a href="#projects" className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all transform hover:-translate-y-1">
            View Projects
          </a>
          <a 
            href="https://drive.google.com/file/d/1KdTrIzS759HHC6n7TE1ZYUz0kjvg0TU0/view?usp=drive_link" 
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center gap-2 transform hover:-translate-y-1"
          >
            <FileText className="w-5 h-5" /> Resume
          </a>
        </div>

        <div className="flex gap-8 border-t border-white/5 pt-8">
          {GITHUB_STATS.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="flex flex-col group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 text-emerald-400 mb-1 group-hover:scale-110 transition-transform origin-left">
                {stat.icon}
                <span className="text-xl font-bold">{stat.value}</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border border-emerald-500/30 rotate-3 hover:rotate-0 transition-all duration-500 shadow-[0_0_50px_rgba(16,185,129,0.15)] group relative">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src="https://github.com/vipulofficial206.png" 
            alt="Vipul" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/20 blur-[50px] -z-10" />
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 blur-[50px] -z-10" />
      </motion.div>
    </section>
  );
}
