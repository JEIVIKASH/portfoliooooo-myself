import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [themeMode, setThemeMode] = useState('cyber'); // cyber, luxury, neon, matrix

  const themeModes = [
    { id: 'cyber', name: 'CYBER', color: '#00f3ff', icon: 'fas fa-microchip' },
    { id: 'luxury', name: 'LUXURY', color: '#ffd700', icon: 'fas fa-gem' },
    { id: 'neon', name: 'NEON', color: '#ff00ff', icon: 'fas fa-bolt' },
    { id: 'matrix', name: 'MATRIX', color: '#00ff00', icon: 'fas fa-code' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-[#00f3ff]/20 shadow-[0_4px_30px_rgba(0,243,255,0.05)]'
        : 'bg-transparent border-b border-white/5'
    }`}>
      {/* Top accent line */}
      <div className="h-[1px] w-full" style={{background: 'linear-gradient(90deg, transparent, #00f3ff, #bc13fe, #ffd700, transparent)'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#00f3ff]/50 flex items-center justify-center relative"
                 style={{clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'}}>
              <span className="text-[#00f3ff] font-bold font-mono text-xs">JN</span>
              <div className="absolute inset-0 bg-[#00f3ff]/5"></div>
            </div>
            <div className="text-xl font-bold font-orbitron tracking-widest text-white glitch" data-text="JEIVIKASH N"
                 style={{textShadow: '0 0 20px rgba(0,243,255,0.4)'}}>
              JEIVIKASH N
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                onClick={() => setActiveSection(link.id)}
                style={activeSection === link.id ? { color: themeModes.find(m => m.id === themeMode)?.color || '#00f3ff' } : {}}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 neon-btn px-5 py-2 text-xs" style={{borderColor: themeModes.find(m => m.id === themeMode)?.color || '#00f3ff', color: themeModes.find(m => m.id === themeMode)?.color || '#00f3ff'}}>
              HIRE ME
            </a>

            {/* Theme Toggle */}
            <div className="ml-6 flex items-center gap-2">
              <span className="text-[10px] font-mono text-gray-600 tracking-widest">THEME</span>
              <div className="flex gap-1 p-1 glass-panel border border-white/10">
                {themeModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setThemeMode(mode.id)}
                    className="w-8 h-8 flex items-center justify-center transition-all duration-300 relative group"
                    style={{
                      background: themeMode === mode.id ? mode.color + '20' : 'transparent',
                      border: themeMode === mode.id ? `1px solid ${mode.color}60` : '1px solid transparent'
                    }}
                    title={mode.name}
                  >
                    <i className={`${mode.icon} text-xs transition-all duration-300`}
                       style={{
                         color: themeMode === mode.id ? mode.color : 'rgba(255,255,255,0.4)',
                         filter: themeMode === mode.id ? `drop-shadow(0 0 8px ${mode.color})` : 'none'
                       }}></i>
                    {themeMode === mode.id && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                           style={{background: mode.color}}></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Container */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center gap-1">
              {themeModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setThemeMode(mode.id)}
                  className="w-7 h-7 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: themeMode === mode.id ? mode.color + '20' : 'transparent',
                    border: themeMode === mode.id ? `1px solid ${mode.color}60` : '1px solid transparent'
                  }}
                  title={mode.name}
                >
                  <i className={`${mode.icon} text-[10px]`}
                     style={{
                       color: themeMode === mode.id ? mode.color : 'rgba(255,255,255,0.4)'
                     }}></i>
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="border border-white/20 w-9 h-9 flex flex-col items-center justify-center gap-1 px-2"
              style={{borderColor: themeModes.find(m => m.id === themeMode)?.color + '40' || '#00f3ff40'}}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`block w-5 h-[1px] transition-all ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
                    style={{background: themeModes.find(m => m.id === themeMode)?.color || '#00f3ff'}}></span>
              <span className={`block w-5 h-[1px] transition-all ${mobileOpen ? 'opacity-0' : ''}`}
                    style={{background: themeModes.find(m => m.id === themeMode)?.color || '#00f3ff'}}></span>
              <span className={`block w-5 h-[1px] transition-all ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
                    style={{background: themeModes.find(m => m.id === themeMode)?.color || '#00f3ff'}}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden glass-panel border-t py-4 px-4 mb-2"
               style={{borderColor: themeModes.find(m => m.id === themeMode)?.color + '10' || '#00f3ff10'}}>
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block py-2 nav-link text-sm"
                style={{color: activeSection === link.id ? themeModes.find(m => m.id === themeMode)?.color || '#00f3ff' : ''}}
                onClick={() => setMobileOpen(false)}
              >
                [{link.label}]
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
