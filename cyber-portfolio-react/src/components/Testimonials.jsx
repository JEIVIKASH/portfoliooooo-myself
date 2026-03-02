import React, { useState } from 'react';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "G.Brintha",
      role: "Asst. Professor",
      type: "MENTOR",
      initials: "GB",
      accent: '#00f3ff',
      content: "Jeivikash is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding."
    },
    {
      id: 2,
      name: "Dr.R.Ravi",
      role: "Professor, FXEC",
      type: "PROFESSOR",
      initials: "RR",
      accent: '#00ff41',
      content: "Working with Jeivikash was a game-changer. He has deep technical knowledge and approaches challenges with creativity and precision."
    },
    {
      id: 3,
      name: "Clement",
      role: "Warden, FXEC",
      type: "ADMIN",
      initials: "CW",
      accent: '#ffd700',
      content: "Jeivikash has an incredible eye for design. He brings mockups to life with pixel-perfect precision and a strong work ethic."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{background:'rgba(8,9,18,0.8)'}}>
      <div className="absolute top-0 left-0 w-full h-[1px] gold-line opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="luxury-badge inline-block mb-4">SECTION_06 // FEEDBACK</div>
          <h2 className="cyber-heading text-4xl md:text-5xl text-white mb-3">
            <span style={{color:'#00f3ff'}}>/</span> WHAT PEOPLE SAY
          </h2>
          <p className="font-mono text-sm text-gray-600 tracking-widest">// PEER_REVIEW_LOG</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id}
              className="hud-card p-6 cursor-pointer transition-all duration-300"
              onClick={() => setActive(i)}
              style={i === active ? {borderColor: t.accent + '60', boxShadow: `0 0 25px ${t.accent}15`} : {}}>
              <div className="card-shine"></div>

              {/* Quote icon */}
              <div className="text-3xl font-serif mb-4 leading-none" style={{color: t.accent + '40'}}>"</div>

              {/* Content */}
              <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6 italic">
                {t.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{borderColor:'rgba(255,255,255,0.05)'}}>
                <div className="w-10 h-10 flex items-center justify-center font-bold font-orbitron text-sm flex-shrink-0"
                     style={{
                       background: t.accent + '15',
                       color: t.accent,
                       border: `1px solid ${t.accent}40`,
                       clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)'
                     }}>
                  {t.initials}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white font-orbitron text-xs tracking-wide">{t.name}</p>
                  <p className="text-gray-600 text-xs font-mono">{t.role}</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5"
                      style={{color: t.accent, border:`1px solid ${t.accent}30`, background: t.accent + '08'}}>
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((t, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                borderRadius: i === active ? '4px' : '50%',
                background: i === active ? testimonials[active].accent : 'rgba(255,255,255,0.1)',
              }}>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
