import { motion } from 'motion/react';
import { Github, Mail, Phone, MapPin, ExternalLink, Code2, Cpu, Layout, Database, Trash2, Lock, FileText, Linkedin, ArrowUp, GraduationCap, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Scene from './components/Scene';
const value = import.meta.env.VITE_API_BASE;

const PROJECTS = [
  {
    title: "Form Canvas",
    subtitle: "MERN Stack Form Builder",
    description: "A full-stack form builder with drag-and-drop creation, real-time preview, and response analytics. Built with MongoDB, Express, React, and Node.js.",
    tags: ["MERN", "Tailwind CSS", "Recharts", "JWT"],
    link: "https://github.com/vipulofficial206/Form_canvas",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ohm’s Law Circuit Board",
    subtitle: "3D Interactive Web Platform",
    description: "Interactive 3D circuit simulation platform for real-time calculation of voltage, current, and resistance. Built with React, TypeScript, and Three.js.",
    tags: ["React", "Three.js", "TypeScript", "WebGL"],
    link: "https://github.com/vipulofficial206/Ohm-s-Law-Circuit-Builder",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Flipkart Clone",
    subtitle: "MERN Stack E-commerce",
    description: "A full-featured e-commerce platform clone with product listings, cart management, and user authentication using the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/vipulofficial206/Flipkart_clone_mern_stack",
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Plant Doctor",
    subtitle: "AI Disease Detection",
    description: "An AI-powered application that detects plant diseases from images, providing diagnosis and treatment recommendations.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "https://github.com/vipulofficial206/plant-doctor",
    icon: <Code2 className="w-6 h-6" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRCMF-TtNaYB_-6g_xoWQ3fQC4JBqKD6ygQ&s?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Food Nutritionist",
    subtitle: "AI Nutrition Analyzer",
    description: "Analyze food items from images to get nutritional information and health insights using Gemini AI and computer vision.",
    tags: ["Gemini AI", "React", "Node.js", "Vision"],
    link: "https://github.com/vipulofficial206/food_nutritionist",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "GitHub Profile Analyzer",
    subtitle: "Stats Visualization",
    description: "A tool to visualize GitHub profile statistics, repository contributions, and language usage with interactive charts.",
    tags: ["GitHub API", "React", "Recharts", "Tailwind"],
    link: "https://github.com/vipulofficial206/GitHubProfileAnalyzer",
    icon: <Github className="w-6 h-6" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5di8TBwj5Co4SpG19e0qcYIArAOh4py-Pmg&s?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "QR Generator",
    subtitle: "Utility Tool",
    description: "Generate custom QR codes for URLs, text, and contact information with real-time preview and download options.",
    tags: ["React", "QR Code API", "JavaScript"],
    link: "https://github.com/vipulofficial206/QRGenerator",
    icon: <Code2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "EAT-IT",
    subtitle: "Food Ordering App",
    description: "Responsive food-ordering frontend with reusable UI components, cart functionality, and optimized performance.",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/vipulofficial206/EAT-IT-Frontend",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  }
];

const SKILLS = [
  { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "ML & Deep Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "Gemini APIs and Integrations", "FastAPI"] },
  { category: "Backend & DB", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"] },
  { category: "Tools & Others", items: ["Three.js", "Git/GitHub", "Axios", "JWT Auth", "DevOps Basics"] }
];

const CERTIFICATIONS = [
  { 
    title: "Devops, Agile & Design Thinking", 
    issuer: "IBM", 
    year: "2025",
    link: "https://courses.vit.skillsnetwork.site/certificates/773243bbcbc6468297fa7bf267fcb5fb",
    icon: <Cpu className="w-5 h-5" />
  },
  { 
    title: "DevOps Fundamentals", 
    issuer: "IBM", 
    year: "2025",
    link: "https://courses.vit.skillsnetwork.site/certificates/31c1497e4c234ee48e9aeff8fe18ba3f",
    icon: <Database className="w-5 h-5" />
  },
  { 
    title: "Web Development", 
    issuer: "Smarted", 
    year: "2025",
    link: "https://drive.google.com/file/d/1SAyQtBvNY2Uzy0javlwFPAatS_qJv3Yq/view?usp=sharing",
    icon: <Layout className="w-5 h-5" />
  },
  { 
    title: "IBM-DevOps", 
    issuer: "Prolearn / Adroit Technologies", 
    year: "2025",
    link: "https://drive.google.com/file/d/1SAyQtBvNY2Uzy0javlwFPAatS_qJv3Yq/view?usp=sharing",
    icon: <Code2 className="w-5 h-5" />
  }
];

const EDUCATION = [
  { degree: "B.Tech in Computer Science & Engineering", school: "VIT-AP University", period: "2023 – 2027", grade: "8.31 CGPA" },
  { degree: "Senior Secondary (XII), Science", school: "MPC", period: "2021 – 2023", grade: "93%" }
];

const GITHUB_STATS = [
  { label: "Repositories", value: "10+", icon: <Database className="w-4 h-4" /> },
  { label: "Contributions", value: "50+", icon: <Code2 className="w-4 h-4" /> },
  { label: "Experience", value: "1+ Years", icon: <Cpu className="w-4 h-4" /> },
];

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [passkey, setPasskey] = useState('');
  const [activePasskey, setActivePasskey] = useState('');
  const [showPasskeyPrompt, setShowPasskeyPrompt] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleAdminAccess = () => {
  setShowPasskeyPrompt(true);
};

  const verifyPasskey = async () => {
  try {
    const res = await fetch(`${value}/api/admin/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passkey }),
    });

    if (!res.ok) {
      throw new Error("Invalid passkey");
    }

    setActivePasskey(passkey);
    setShowPasskeyPrompt(false);
    setPasskey('');
    await fetchMessages();
  } catch (err) {
    alert("Invalid admin passkey");
  }
};

const fetchMessages = async () => {
  try {
    const res = await fetch(`${value}/api/messages`, {
      headers: {
        'x-admin-passkey': activePasskey
      }
    });

    if (!res.ok) {
      throw new Error("Unauthorized");
    }

    const data = await res.json();
    setMessages(data);
    setShowAdmin(true);
  } catch (err) {
    alert("Admin authentication failed");
  }
};

  const deleteMessage = async (id: string) => {
  if (!confirm('Are you sure you want to delete this message?')) return;

  try {
    const res = await fetch(`${value}/api/messages/${id}`, {
      method: 'DELETE',
      headers: {
        'x-admin-passkey': activePasskey
      }
    });

    if (!res.ok) throw new Error();

    setMessages(prev => prev.filter(m => m._id !== id));
  } catch {
    alert("Failed to delete message");
  }
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${value}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setFormStatus('success');
        setFormMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setFormStatus('error');
      setFormMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen font-sans">
      <Scene />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter">VIPUL.DEV</span>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/vipulofficial206" 
              target="_blank" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thamminana-vipul-588024327" 
              target="_blank" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white/60 hover:text-white"
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
            className="md:hidden absolute top-16 left-0 w-full bg-amber-200 border-b text-black border-white/5 p-6 flex flex-col gap-6"
          >
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Skills</a>
            <a href="#certifications" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Certifications</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contact</a>
            <div className="flex gap-6 pt-4 border-t border-white/5">
              <a href="https://github.com/vipulofficial206" target="_blank"><Github className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/in/thamminana-vipul-588024327" target="_blank"><Linkedin className="w-6 h-6" /></a>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em]">Available for new projects</span>
            </div>
            <h2 className="font-mono text-emerald-400 text-sm mb-4 tracking-widest uppercase">Web Dev, UI Engineer & ML/DL Specialist</h2>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              THAMMINANA <br />
              <span className="text-gradient">VIPUL</span>
            </h1>
            <p className="max-w-2xl text-lg text-white/60 mb-8 leading-relaxed">
              Web Developer with hands-on experience building scalable and interactive web applications using React, TypeScript, and the MERN stack. 
              Strong in UI engineering, 3D web experiences, ML/DL projects, and modern JavaScript development.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all transform hover:scale-105">
                Get in touch
              </a>
              <a href="#projects" className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all">
                View Projects
              </a>
              <a 
                href="https://drive.google.com/file/d/1KdTrIzS759HHC6n7TE1ZYUz0kjvg0TU0/view?usp=drive_link" 
                target="_blank"
                className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center gap-2"
              >
                <FileText className="w-5 h-5" /> Resume
              </a>
            </div>

            <div className="flex gap-8 border-t border-white/5 pt-8">
              {GITHUB_STATS.map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    {stat.icon}
                    <span className="text-xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-2 border-emerald-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://github.com/vipulofficial206.png" 
                alt="Vipul" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 blur-3xl -z-10" />
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-20 md:py-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Selected Works</h2>
              <p className="text-white/40 font-mono text-sm uppercase tracking-widest">01 / Projects</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-4xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050505] to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-6 p-2 bg-emerald-500/20 backdrop-blur-md rounded-xl text-emerald-400">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-emerald-400/60 font-mono text-xs mb-4 uppercase">{project.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold group-hover:text-emerald-400 transition-colors"
                  >
                    View on GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 md:py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Certifications</h2>
              <p className="text-white/40 font-mono text-sm uppercase tracking-widest">02 / Recognition</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl hover:border-emerald-500/50 transition-all group"
              >
                <div className="mb-6 p-3 bg-emerald-500/10 rounded-2xl w-fit text-emerald-400 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold mb-1 leading-tight">{cert.title}</h3>
                <p className="text-white/40 text-xs font-mono uppercase mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-emerald-400 font-mono text-xs">{cert.year}</span>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-emerald-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Technical <br /> Proficiency</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                I focus on creating seamless digital experiences using modern technologies. 
                My expertise spans across the full development lifecycle, from designing intuitive UI/UX with Tailwind CSS to building robust backend architectures with Node.js and Express. 
                I am particularly passionate about integrating Machine Learning and Deep Learning models into web applications, utilizing Gemini APIs for advanced AI features and FastAPI for high-performance backend services.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Education
                  </h4>
                  <div className="space-y-4">
                    {EDUCATION.map((edu) => (
                      <div key={edu.degree} className="border-l-2 border-emerald-500/20 pl-4 py-1">
                        <h5 className="font-bold text-sm">{edu.degree}</h5>
                        <p className="text-xs text-white/40">{edu.school} &bull; {edu.period}</p>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase">{edu.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map(skill => (
                      <li key={skill} className="text-white/60 flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 border-t border-white/5">
          <div className="glass rounded-4xl md:rounded-[3rem] p-6 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Let's build something <br /> extraordinary.</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="p-3 glass rounded-2xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>vipulofficial206@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="p-3 glass rounded-2xl">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+91 81792 70795</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="p-3 glass rounded-2xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Amaravati, India</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
                <button
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all disabled:opacity-50"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {formMessage && (
                  <p className={`text-sm font-mono ${formStatus === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {formMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/20 font-mono text-xs uppercase tracking-[0.2em]">
        <div className="mb-4">
          &copy; 2025 Thamminana Vipul &bull; Built with MERN & Three.js
        </div>
        <button 
          onClick={handleAdminAccess}
          className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2 mx-auto"
        >
          <Lock className="w-3 h-3" /> Admin Access
        </button>
      </footer>

      {/* Passkey Prompt */}
      {showPasskeyPrompt && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowPasskeyPrompt(false)} />
          <div className="relative glass p-8 rounded-3xl w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Admin Passkey</h3>
            <input
              type="password"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && verifyPasskey()}
              placeholder="Enter passkey..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 mb-4"
              autoFocus
            />
            <div className="flex gap-2">
              <button onClick={() => setShowPasskeyPrompt(false)} className="flex-1 py-2 glass rounded-xl text-sm">Cancel</button>
              <button onClick={verifyPasskey} className="flex-1 py-2 bg-emerald-500 text-black font-bold rounded-xl text-sm">Verify</button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-black rounded-full shadow-lg hover:bg-emerald-400 transition-all transform hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowAdmin(false)} />
          <div className="relative glass w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-4xl flex flex-col">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Contact Submissions</h2>
              <button onClick={() => setShowAdmin(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ExternalLink className="w-5 h-5 rotate-45" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto grow">
              {messages.length === 0 ? (
                <p className="text-white/40 text-center py-20 font-mono">No messages yet.</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg._id} className="p-6 bg-white/5 rounded-2xl border border-white/10 group relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-emerald-400">{msg.name}</h4>
                          <p className="text-xs text-white/40 font-mono">{msg.email}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-white/20 uppercase">
                            {new Date(msg.createdAt).toLocaleDateString()}
                          </span>
                          <button 
                            onClick={() => deleteMessage(msg._id)}
                            className="p-2 text-red-400/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                            title="Delete message"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
