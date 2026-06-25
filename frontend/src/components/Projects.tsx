import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Selected Works</h2>
          <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-emerald-400"></span> 01 / Projects
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group glass rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-500 cursor-pointer flex flex-col hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-2 relative"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-6 p-2 bg-[#050505]/80 backdrop-blur-md rounded-xl text-emerald-400 border border-white/5 transform group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
            </div>
            
            <div className="p-8 flex flex-col grow relative z-10 bg-gradient-to-b from-transparent to-[#050505]/50">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
              <p className="text-emerald-400/80 font-mono text-[10px] mb-4 uppercase tracking-widest">{project.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6 grow font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-white/60 uppercase tracking-wider group-hover:border-emerald-500/20 group-hover:text-emerald-100 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors w-fit overflow-hidden"
              >
                <span className="relative">
                  View on GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 transition-all group-hover:w-full"></span>
                </span>
                <ExternalLink className="w-4 h-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
