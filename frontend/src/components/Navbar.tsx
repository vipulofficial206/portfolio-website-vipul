import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export default function Navbar() {
  const socialIcons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    email: <Mail className="w-5 h-5" />
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-cyan-900/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-gaming font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors uppercase flex items-center gap-2 group">
          <div className="w-3 h-3 bg-cyan-500 rounded-sm group-hover:animate-pulse"></div>
          Vipul<span className="text-cyan-500">_OS</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          <a href="#projects" className="text-white/70 hover:text-cyan-400 transition-colors">Inventory</a>
          <a href="#skills" className="text-white/70 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#arcade" className="text-cyan-400 hover:text-fuchsia-400 transition-colors hover-glitch">Arcade</a>
          <a href="#contact" className="px-4 py-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-sm">Comm_Link</a>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-cyan-400 transition-colors hover:scale-110 transform"
              aria-label={link.label}
            >
              {socialIcons[link.id as keyof typeof socialIcons]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
