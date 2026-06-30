import Scene from './components/Scene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Arcade from './components/Arcade';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-white/90 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Scene />
      
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 relative z-10 pt-20">
        <Hero />
        <Projects />
        <Certifications />
        <Skills />
        <Arcade />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
