import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-cyan-900/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-gaming uppercase hover-glitch text-white text-center">Achievements</h2>
        <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Education & Certifications</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-8 pb-2 border-b border-cyan-900/50">
            <Award className="text-cyan-400 w-6 h-6" />
            <h3 className="text-2xl font-bold font-gaming uppercase tracking-wider text-white">Certifications</h3>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="block glass-panel p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all hover:-translate-y-1 group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors font-mono">{cert.title}</h4>
                    <p className="text-white/50 text-sm font-mono uppercase">{cert.issuer}</p>
                  </div>
                  <div className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-8 pb-2 border-b border-fuchsia-900/50">
            <Award className="text-fuchsia-400 w-6 h-6" />
            <h3 className="text-2xl font-bold font-gaming uppercase tracking-wider text-white">Education</h3>
          </div>
          <div className="space-y-4">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl border border-fuchsia-500/20 hover:border-fuchsia-400 transition-colors group">
                <h4 className="font-bold text-lg mb-1 group-hover:text-fuchsia-400 transition-colors font-mono">{edu.degree}</h4>
                <p className="text-white/70 mb-2 font-gaming text-sm">{edu.school}</p>
                <div className="flex justify-between items-center text-sm font-mono text-white/50 uppercase">
                  <span>{edu.period}</span>
                  <span className="text-fuchsia-400">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
