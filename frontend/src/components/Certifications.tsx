import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Certifications</h2>
          <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-emerald-400"></span> 03 / Recognition
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/5 blur-[30px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500" />
            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-300 border border-white/5">
              {cert.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-emerald-300 transition-colors">{cert.title}</h3>
            <p className="text-white/40 text-xs font-mono uppercase mb-6 flex-grow">{cert.issuer}</p>
            <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-emerald-500/20 transition-colors mt-auto">
              <span className="text-emerald-400/80 font-mono text-xs">{cert.year}</span>
              <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-emerald-400 transition-colors transform group-hover:scale-110" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
