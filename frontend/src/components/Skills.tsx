import { motion } from 'motion/react';
import { SKILLS } from '../data/portfolioData';
import { Code2, Cpu, Database, Brain } from 'lucide-react';

const icons = {
  "Frontend": <Code2 className="w-5 h-5" />,
  "Backend": <Database className="w-5 h-5" />,
  "ML & Data Science": <Brain className="w-5 h-5" />,
  "Tools & Databases": <Cpu className="w-5 h-5" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-fuchsia-900/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-gaming uppercase hover-glitch text-white text-center">Skills</h2>
        <p className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Technical Expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {SKILLS.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-xl border border-fuchsia-500/20 hover:border-fuchsia-400 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              {icons[skillGroup.category as keyof typeof icons]}
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="text-fuchsia-400">
                {icons[skillGroup.category as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold font-gaming uppercase tracking-wider text-white">{skillGroup.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-[#050505] text-white/80 border border-fuchsia-900/50 rounded-sm text-sm font-mono hover:text-fuchsia-300 hover:border-fuchsia-500 transition-colors shadow-[0_0_10px_rgba(217,70,239,0)] hover:shadow-[0_0_10px_rgba(217,70,239,0.3)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
