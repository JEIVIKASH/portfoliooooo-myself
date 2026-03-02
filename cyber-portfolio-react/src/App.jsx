import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';

// Luxury Particle System
const ParticleSystem = () => {
  useEffect(() => {
    const container = document.getElementById('particles-luxury');
    if (!container) return;
    const particles = [];
    const count = 35;
    const colors = ['#00f3ff', '#bc13fe', '#ffd700', '#00ff41'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.width = (Math.random() * 2 + 1) + 'px';
      p.style.height = p.style.width;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (Math.random() * 12 + 8) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.boxShadow = `0 0 ${Math.floor(Math.random() * 4 + 2)}px currentColor`;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach(p => p.remove());
  }, []);
  return <div id="particles-luxury" className="particles-container" />;
};

function App() {
  return (
    <div className="font-rajdhani text-lg relative">
      {/* Background Layers */}
      <div className="scanlines"></div>
      <div className="cyber-grid"></div>
      <ParticleSystem />

      {/* Luxury Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Top luxury gold line */}
      <div className="gold-line fixed top-0 left-0 z-50" style={{opacity: 0.4}}></div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <PerformanceMonitor />
    </div>
  );
}

export default App;
