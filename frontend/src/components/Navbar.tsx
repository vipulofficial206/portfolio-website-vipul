import { motion } from 'motion/react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono font-bold text-xl tracking-tighter text-gradient">VIPUL.DEV</span>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#projects" className="hover:text-white transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#skills" className="hover:text-white transition-colors relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#certifications" className="hover:text-white transition-colors relative group">
            Certifications
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://github.com/vipulofficial206" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 glass hover:bg-white/10 hover:text-emerald-400 rounded-full transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/thamminana-vipul-588024327" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 glass hover:bg-white/10 hover:text-emerald-400 rounded-full transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5 p-6 flex flex-col gap-6"
        >
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#certifications" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-emerald-400 transition-colors">Certifications</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-emerald-400 transition-colors">Contact</a>
          <div className="flex gap-6 pt-4 border-t border-white/5">
            <a href="https://github.com/vipulofficial206" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/thamminana-vipul-588024327" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
