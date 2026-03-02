import React from 'react';

const About = () => {
  const infoBadges = [
    { icon: 'fas fa-map-marker-alt', color: '#bc13fe', label: 'LOCATION', value: 'TIRUNELVELI, INDIA' },
    { icon: 'fas fa-microchip', color: '#00f3ff', label: 'DEPARTMENT', value: 'AI & DS' },
    { icon: 'fas fa-gamepad', color: '#ffd700', label: 'LEVEL', value: 'FRESHER' },
    { icon: 'fas fa-code', color: '#00ff41', label: 'PROJECTS', value: '4 COMPLETED' },
  ];

  const traits = [
    { label: 'ADAPTABILITY', color: '#00f3ff' },
    { label: 'TEAM_PLAYER', color: '#00ff41' },
    { label: 'EMOTIONAL IQ', color: '#bc13fe' },
    { label: 'QUICK_LEARNER', color: '#ffd700' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] gold-line opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="luxury-badge inline-block mb-4">SECTION_02 // ABOUT</div>
          <h2 className="cyber-heading text-4xl md:text-5xl text-white mb-3">
            <span style={{color:'#00f3ff'}}>/</span> ABOUT ME
          </h2>
          <div className="luxury-divider max-w-xs mx-auto">
            <span className="text-[#00f3ff]/40 font-mono text-xs">◆</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Biography Card */}
          <div className="hud-card p-8 space-y-6">
            <div className="card-shine"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#00f3ff] to-[#bc13fe] rounded"></div>
              <h3 className="text-xl font-bold font-orbitron tracking-widest" style={{color:'#00f3ff'}}>BIOGRAPHY DATA</h3>
            </div>

            <div className="font-mono text-sm space-y-2 text-gray-300 leading-relaxed">
              <p><span style={{color:'#00ff41'}}>$</span> <span style={{color:'#00f3ff'}}>cat</span> profile.txt</p>
              <p className="text-gray-400 pl-4 border-l border-[#00f3ff]/20">
                Dedicated B.Tech AI&DS student at FX Engineering College, with a strong ability to handle pressure situations effectively.
              </p>
              <p className="text-gray-400 pl-4 border-l border-[#bc13fe]/20">
                Quick and smart learner with keen interest in technology, problem-solving, and innovation. Passionate about applying technical knowledge to real-world challenges.
              </p>
              <p className="text-gray-400 pl-4 border-l border-[#ffd700]/20">
                When not coding — exploring new tech, contributing to open source, or mentoring aspiring developers.
              </p>
            </div>

            {/* Traits */}
            <div>
              <p className="text-xs font-mono text-gray-600 mb-3 tracking-widest">// SOFT_SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {traits.map(t => (
                  <span key={t.label}
                    className="text-xs font-mono px-3 py-1 border tracking-wider"
                    style={{borderColor: t.color + '50', color: t.color, background: t.color + '0d'}}>
                    [{t.label}]
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <a href="#contact" className="neon-btn px-6 py-2 text-xs">CONTACT ME</a>
              <a href="#" className="px-6 py-2 text-xs font-orbitron font-bold tracking-widest text-white/60 border border-white/10 hover:border-white/30 hover:text-white transition-all"
                style={{clipPath:'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-4">
            {infoBadges.map((info, i) => (
              <div key={i}
                className="glass-panel group flex items-center gap-4 p-5 border transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.08)]"
                style={{borderColor: info.color + '20'}}>
                <div className="w-12 h-12 flex items-center justify-center border flex-shrink-0"
                  style={{
                    borderColor: info.color + '40',
                    background: info.color + '0d',
                    clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
                  }}>
                  <i className={`${info.icon} text-lg`} style={{color: info.color}}></i>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-[3px] text-gray-600 mb-1">{info.label}</p>
                  <p className="font-bold font-orbitron text-white text-sm tracking-wider group-hover:text-[#00f3ff] transition-colors">{info.value}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fas fa-chevron-right text-xs" style={{color: info.color}}></i>
                </div>
              </div>
            ))}

            {/* Quick fact */}
            <div className="glass-panel p-4 border border-[#ffd700]/10 text-center"
                 style={{clipPath:'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
              <p className="font-mono text-xs text-gray-600 mb-1">// CURRENT_FOCUS</p>
              <p className="font-orbitron text-sm font-bold" style={{
                background: 'linear-gradient(135deg, #00f3ff, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>AI & DATA ANALYTICS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
