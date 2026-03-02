import React, { useEffect, useRef } from 'react';
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
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme, THEMES } from './ThemeContext';

/* ─── Particle system — re-seeds when theme changes ─── */
const THEME_PARTICLES = {
  cyber:   ['#00f3ff', '#bc13fe', '#ffd700', '#00ff41'],
  minimal: ['#e2e8f0', '#94a3b8', '#64748b', '#cbd5e1'],
  matrix:  ['#00ff41', '#39ff14', '#00cc33', '#7fff00'],
  nebula:  ['#bc13fe', '#e040fb', '#7928ca', '#ff6fff'],
};

const ParticleSystem = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear old particles
    container.innerHTML = '';

    const colors = THEME_PARTICLES[theme] || THEME_PARTICLES.cyber;
    const count  = 35;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left             = Math.random() * 100 + 'vw';
      const sz                 = (Math.random() * 2 + 1) + 'px';
      p.style.width            = sz;
      p.style.height           = sz;
      p.style.background       = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration= (Math.random() * 12 + 8) + 's';
      p.style.animationDelay   = (Math.random() * 10) + 's';
      p.style.boxShadow        = `0 0 ${Math.floor(Math.random() * 4 + 2)}px currentColor`;
      container.appendChild(p);
    }
  }, [theme]); // re-runs every time theme changes

  return (
    <div
      ref={containerRef}
      className="particles-container"
      style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' }}
    />
  );
};

/* ─── Inner app (needs theme context) ─── */
const AppInner = () => {
  const { theme } = useTheme();

  return (
    <div className="font-rajdhani text-lg relative" data-theme={theme}>
      {/* ── Fixed background layers ── */}
      <div className="scanlines" />
      <div className="cyber-grid" />
      <ParticleSystem />

      {/* ── Floating ambient orbs ── */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Top luxury accent line ── */}
      <div
        className="gold-line fixed top-0 left-0 z-50"
        style={{ opacity: 0.4 }}
      />

      {/* ── Page sections ── */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />

      {/* ── Floating UI widgets ── */}
      <ThemeToggle />
      <PerformanceMonitor />
    </div>
  );
};

/* ─── Root export ─── */
export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
