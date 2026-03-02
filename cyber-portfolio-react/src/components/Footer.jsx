import React from 'react';

const Footer = () => {
  const links = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const socials = [
    { icon: 'fab fa-linkedin-in', href: '#', color: '#00f3ff' },
    { icon: 'fab fa-github', href: '#', color: '#ffffff' },
    { icon: 'fab fa-twitter', href: '#', color: '#bc13fe' },
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{background:'#050505'}}>
      {/* Top luxury line */}
      <div className="absolute top-0 left-0 w-full h-[1px]" style={{background:'linear-gradient(90deg, transparent, #00f3ff, #bc13fe, #ffd700, transparent)'}}></div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{backgroundImage:'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)', backgroundSize:'40px 40px'}}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#00f3ff]/40 flex items-center justify-center"
                   style={{clipPath:'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'}}>
                <span className="font-mono text-xs font-bold text-[#00f3ff]">JN</span>
              </div>
              <span className="font-orbitron font-bold text-xl text-white tracking-widest glitch" data-text="JEIVIKASH N">
                JEIVIKASH N
              </span>
            </div>
            <p className="font-mono text-xs text-gray-600 leading-relaxed max-w-xs">
              Data Analyst & AI Engineer crafting digital solutions that matter.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                   className="w-9 h-9 border flex items-center justify-center text-xs transition-all hover:scale-110"
                   style={{
                     borderColor: s.color + '30',
                     color: s.color + '80',
                     clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
                   }}
                   onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; e.currentTarget.style.boxShadow = `0 0 12px ${s.color}40`; }}
                   onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + '30'; e.currentTarget.style.color = s.color + '80'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-[#00f3ff]/60 tracking-[3px] mb-4">// NAVIGATION</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map(l => (
                <a key={l.label} href={l.href} className="footer-link text-sm hover:pl-2 transition-all duration-200">
                  › {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="font-mono text-xs text-[#00f3ff]/60 tracking-[3px] mb-4">// SYSTEM_STATUS</p>
            <div className="space-y-3">
              {[
                { label: 'AVAILABILITY', value: 'OPEN', color: '#00ff41' },
                { label: 'RESPONSE_TIME', value: '< 24H', color: '#00f3ff' },
                { label: 'CURRENT_STACK', value: 'AI & REACT', color: '#bc13fe' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-600">{item.label}</span>
                  <span className="font-mono text-xs font-bold" style={{color: item.color}}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line opacity-10 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-700">
            © 2024 JEIVIKASH N. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse-fast"></span>
            <span className="font-mono text-xs text-gray-700">BUILT WITH REACT + TAILWIND CSS</span>
          </div>
          <p className="font-mono text-xs" style={{color:'#00f3ff40'}}>
            v1.0.0 // LUXURY_EDITION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
