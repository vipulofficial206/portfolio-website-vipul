import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-cyan-900/50 bg-[#050505] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm uppercase tracking-widest">
          <Terminal className="w-4 h-4" /> 
          <span>System.Exit({currentYear})</span>
        </div>
        
        <p className="text-white/50 text-sm font-mono text-center md:text-left">
          Crafted in the cyber realm by <span className="text-cyan-400 font-bold hover-glitch">Vipul</span>.
        </p>
        
        <div className="flex items-center gap-6 text-xs font-mono uppercase text-white/30 tracking-widest">
          <span className="hover:text-fuchsia-400 cursor-help transition-colors">V_1.0.0</span>
          <span className="hover:text-cyan-400 cursor-help transition-colors">All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
