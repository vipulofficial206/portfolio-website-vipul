import { GraduationCap } from 'lucide-react';
import { SKILLS, EDUCATION } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Technical <br /> Proficiency</h2>
            <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-400"></span> 02 / Expertise
            </p>
          </div>
          <p className="text-white/60 leading-relaxed mb-12 font-light text-lg">
            I focus on creating seamless digital experiences using modern technologies. 
            My expertise spans across the full development lifecycle, from designing intuitive UI/UX with Tailwind CSS to building robust backend architectures with Node.js and Express. 
            I am particularly passionate about integrating Machine Learning and Deep Learning models into web applications, utilizing Gemini APIs for advanced AI features and FastAPI for high-performance backend services.
          </p>
          
          <div className="space-y-8 glass p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] -z-10 rounded-full" />
            <div>
              <h4 className="font-mono text-sm text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="p-2 bg-emerald-500/10 rounded-lg"><GraduationCap className="w-5 h-5" /></span> Education
              </h4>
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-emerald-500/20 pl-6 py-1 relative group">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <h5 className="font-bold text-lg mb-1">{edu.degree}</h5>
                    <p className="text-sm text-white/50 mb-2">{edu.school} &bull; <span className="text-white/30">{edu.period}</span></p>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{edu.grade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 content-start">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="group">
              <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-6 pb-2 border-b border-white/10 group-hover:border-emerald-500/30 transition-colors">
                {skillGroup.category}
              </h4>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-white/70 flex items-center gap-3 font-light hover:text-white transition-colors hover:translate-x-1 transform duration-300">
                    <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-emerald-500/50 rounded-full transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
