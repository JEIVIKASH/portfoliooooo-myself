import React from 'react';

const Experience = () => {
  const workExperience = [
    {
      title: "AI & MACHINE LEARNING",
      company: "Iconic Software Solutions",
      period: "12/2024",
      type: "INTERNSHIP",
      description: "Focused on Anaconda Python and advanced ML techniques for practical applications.",
      accent: '#00f3ff',
    }
  ];

  const education = [
    {
      title: "NPTEL: INDUSTRY 4.0",
      issuer: "Funded by MoE, Govt. of India",
      period: "2025",
      badge: "ELITE+SILVER 82%",
      description: "Introduction To Industry 4.0 And IoT.",
      accent: '#00ff41',
    },
    {
      title: "NPTEL: PYTHON",
      issuer: "Funded by MoE, Govt. of India",
      period: "2024",
      badge: "CERTIFIED",
      description: "The Joy of Computing using Python.",
      accent: '#00ff41',
    },
    {
      title: "INDUSTRIAL VISIT",
      issuer: "Srishti Innovative Educational Service",
      period: "2024",
      badge: "ATTENDED",
      description: "One Day Industrial Visit at Srishti.",
      accent: '#00ff41',
    }
  ];

  const TimelineItem = ({ item, index }) => (
    <div className="relative pl-10 group" key={index}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
           style={{
             borderColor: item.accent,
             background: '#0a0b14',
             boxShadow: `0 0 8px ${item.accent}60`,
           }}>
      </div>

      <div className="glass-panel border p-5 transition-all duration-300 group-hover:border-opacity-60"
           style={{borderColor: item.accent + '20'}}
           onMouseEnter={e => e.currentTarget.style.borderColor = item.accent + '50'}
           onMouseLeave={e => e.currentTarget.style.borderColor = item.accent + '20'}>

        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h4 className="font-orbitron font-bold text-white text-sm tracking-wide">{item.title}</h4>
          <div className="flex gap-2 items-center">
            {item.type && (
              <span className="text-[10px] font-mono px-2 py-0.5" style={{color: item.accent, border:`1px solid ${item.accent}40`, background: item.accent + '10'}}>
                {item.type}
              </span>
            )}
            {item.badge && (
              <span className="text-[10px] font-mono px-2 py-0.5" style={{color:'#ffd700', border:'1px solid rgba(255,215,0,0.3)', background:'rgba(255,215,0,0.05)'}}>
                {item.badge}
              </span>
            )}
            <span className="text-[10px] font-mono text-gray-600">{item.period}</span>
          </div>
        </div>

        <p className="text-xs font-mono mb-2" style={{color: item.accent + '80'}}>{item.issuer || item.company}</p>
        <p className="text-gray-500 text-xs font-mono leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] gold-line opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="luxury-badge inline-block mb-4" style={{borderColor:'rgba(188,19,254,0.3)', color:'#bc13fe'}}>SECTION_05 // EXPERIENCE</div>
          <h2 className="cyber-heading text-4xl md:text-5xl text-white mb-3">
            <span style={{color:'#bc13fe'}}>/</span> EXPERIENCE & EDUCATION
          </h2>
          <p className="font-mono text-sm text-gray-600 tracking-widest">// CAREER_TIMELINE_LOG</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#00f3ff] rounded"></div>
              <h3 className="font-orbitron text-lg font-bold text-white tracking-widest">WORK EXPERIENCE</h3>
            </div>
            <div className="relative space-y-6">
              <div className="timeline-line" style={{background:'linear-gradient(180deg, #00f3ff, transparent)'}}></div>
              {workExperience.map((exp, i) => <TimelineItem item={exp} index={i} key={i} />)}
              {/* Empty state hint */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full border border-dashed border-[#00f3ff]/30"></div>
                <div className="glass-panel border border-dashed border-white/5 p-4 text-center">
                  <p className="font-mono text-xs text-gray-700">// MORE_COMING_SOON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#00ff41] rounded"></div>
              <h3 className="font-orbitron text-lg font-bold text-white tracking-widest">EDUCATION & CERTS</h3>
            </div>
            <div className="relative space-y-6">
              <div className="timeline-line" style={{background:'linear-gradient(180deg, #00ff41, transparent)'}}></div>
              {education.map((edu, i) => <TimelineItem item={edu} index={i} key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
