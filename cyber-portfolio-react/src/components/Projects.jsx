import React, { useState } from 'react';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ethical SoMA Using Pyphisher",
      description: "Simulated phishing attacks on social media platforms in a controlled lab. Created fake login pages for awareness training. Analyzed response behavior patterns.",
      icon: "fas fa-user-secret",
      accent: '#00f3ff',
      category: 'CYBERSECURITY',
      status: 'COMPLETED',
      technologies: ["Nmap", "Python", "ZAB"],
    },
    {
      id: 2,
      title: "AI Resume Screener",
      description: "Designed AI system to rank resumes using NLP. Extracted key details like skills and education. Matched resumes to job descriptions efficiently.",
      icon: "fas fa-file-contract",
      accent: '#bc13fe',
      category: 'MACHINE LEARNING',
      status: 'COMPLETED',
      technologies: ["NLP", "TensorFlow", "spaCy"],
    },
    {
      id: 3,
      title: "Aerial Artboard",
      description: "Uses OpenCV to let users draw in the air by tracking a colored object or hand gestures via camera. Computer Vision application.",
      icon: "fas fa-hand-sparkles",
      accent: '#ffd700',
      category: 'COMPUTER VISION',
      status: 'COMPLETED',
      technologies: ["OpenCV", "NumPy", "Pandas"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{background:'rgba(10,11,20,0.6)'}}>
      {/* Top/Bottom accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] gold-line opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] gold-line opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="luxury-badge inline-block mb-4" style={{borderColor:'rgba(255,230,0,0.3)',color:'#ffe600'}}>SECTION_03 // MISSIONS</div>
          <h2 className="cyber-heading text-4xl md:text-5xl text-white mb-3">
            <span style={{color:'#ffe600'}}>/</span> COMPLETED MISSIONS
          </h2>
          <p className="font-mono text-sm text-gray-600 tracking-widest">// BATTLE_LOG: 3 OPERATIONS EXECUTED</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="hud-card group flex flex-col"
              style={{'--card-accent': project.accent}}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-shine"></div>
              <div className="project-scanline" style={{background:`linear-gradient(90deg,transparent,${project.accent},transparent)`}}></div>

              {/* Thumbnail area */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden"
                   style={{background: project.accent + '08', borderBottom: `1px solid ${project.accent}20`}}>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20"
                     style={{backgroundImage: `linear-gradient(${project.accent}20 1px, transparent 1px), linear-gradient(90deg, ${project.accent}20 1px, transparent 1px)`, backgroundSize: '20px 20px'}}></div>

                <i className={`${project.icon} text-5xl transition-all duration-500 z-10 ${hovered === project.id ? 'scale-125' : 'scale-100'}`}
                   style={{color: project.accent, textShadow: `0 0 20px ${project.accent}`}}></i>

                {/* Category badge */}
                <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-1 tracking-widest"
                     style={{color: project.accent, border: `1px solid ${project.accent}40`, background: project.accent + '10'}}>
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1" style={{color:'#00ff41',border:'1px solid #00ff4130',background:'#00ff4110'}}>
                  ● {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-3 text-white font-orbitron tracking-wide leading-tight">{project.title}</h3>
                <p className="text-gray-500 mb-4 text-sm font-mono leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag" style={{borderColor: project.accent + '40', color: project.accent, background: project.accent + '08'}}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t" style={{borderColor:'rgba(255,255,255,0.05)'}}>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest transition-all hover:opacity-80"
                     style={{color: project.accent}}>
                    <i className="fas fa-play text-[10px]"></i> DEMO
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-gray-600 hover:text-white transition-all">
                    <i className="fab fa-github text-[10px]"></i> CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
