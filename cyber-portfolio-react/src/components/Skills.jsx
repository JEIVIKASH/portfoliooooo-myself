import React, { useEffect, useRef, useState } from 'react';

const AnimatedBar = ({ level, color }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="progress-bar-container">
      <div className="progress-bar-fill" style={{width: `${width}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)`}}></div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: "fas fa-laptop-code",
      accent: '#00f3ff',
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JAVASCRIPT", level: 92 },
      ]
    },
    {
      title: "BACKEND",
      icon: "fas fa-server",
      accent: '#bc13fe',
      skills: [
        { name: "PYTHON", level: 88 },
        { name: "JAVA", level: 85 },
        { name: "NODE.JS", level: 80 },
      ]
    },
    {
      title: "DATABASE",
      icon: "fas fa-database",
      accent: '#ffd700',
      skills: [
        { name: "POSTGRESQL", level: 87 },
        { name: "MONGODB", level: 83 },
        { name: "REDIS", level: 75 },
      ]
    },
    {
      title: "TOOLS",
      icon: "fas fa-tools",
      accent: '#00ff41',
      skills: [
        { name: "AWS", level: 82 },
        { name: "DOCKER", level: 78 },
        { name: "GIT", level: 93 },
      ]
    }
  ];

  const techStack = ['React', 'Python', 'TensorFlow', 'OpenCV', 'AWS', 'Docker', 'Git', 'PostgreSQL', 'Node.js', 'NumPy', 'spaCy', 'NLP'];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] gold-line opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="luxury-badge inline-block mb-4" style={{borderColor:'rgba(0,255,65,0.3)',color:'#00ff41'}}>SECTION_04 // ARSENAL</div>
          <h2 className="cyber-heading text-4xl md:text-5xl text-white mb-3">
            <span style={{color:'#00ff41'}}>/</span> SKILLS & TECHNOLOGIES
          </h2>
          <p className="font-mono text-sm text-gray-600 tracking-widest">// WEAPON_PROFICIENCY_MATRIX</p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <div key={i} className="glass-panel border group hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300"
                 style={{borderColor: cat.accent + '20', borderTopWidth: '2px', borderTopColor: cat.accent}}>

              {/* Card header */}
              <div className="p-5 border-b" style={{borderColor: 'rgba(255,255,255,0.04)'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center"
                       style={{
                         background: cat.accent + '15',
                         border: `1px solid ${cat.accent}40`,
                         clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)'
                       }}>
                    <i className={`${cat.icon} text-sm`} style={{color: cat.accent}}></i>
                  </div>
                  <h3 className="font-orbitron font-bold text-white text-sm tracking-widest">{cat.title}</h3>
                </div>
              </div>

              {/* Skills */}
              <div className="p-5 space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-mono text-gray-400 tracking-widest">{skill.name}</span>
                      <span className="text-xs font-mono font-bold" style={{color: cat.accent}}>{skill.level}%</span>
                    </div>
                    <AnimatedBar level={skill.level} color={cat.accent} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Orbit / Tag Cloud */}
        <div className="hud-card p-8 text-center">
          <div className="card-shine"></div>
          <p className="font-mono text-xs text-gray-600 mb-6 tracking-widest">// TECH_STACK_INVENTORY</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-tag text-xs py-1.5 px-4 hover:scale-105 transition-transform cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
