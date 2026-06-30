import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-cyan-900/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-gaming uppercase hover-glitch text-white">Project Inventory</h2>
        <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Select your quest</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-cyan-500/20 hover:border-cyan-400"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-80" />
            
            <div className="relative h-48 w-full overflow-hidden border-b border-cyan-900/50">
              <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-950/50 text-cyan-400 rounded-sm border border-cyan-500/30">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold font-gaming uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase bg-cyan-950/50 text-cyan-300 border border-cyan-800/50 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-mono uppercase text-white/50 hover:text-fuchsia-400 transition-colors"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-mono uppercase text-white/50 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Deploy
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
