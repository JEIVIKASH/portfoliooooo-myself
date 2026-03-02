import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Data Analyst", "Digital Marketing Analyst", "AI & DS Engineer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, typeIndex + 1));
        setTypeIndex(p => p + 1);
        if (typeIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(current.substring(0, typeIndex - 1));
        setTypeIndex(p => p - 1);
        if (typeIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex(p => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typeIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-40 h-40 border border-[#00f3ff]/10 rounded-full animate-spin-slow border-dashed"></div>
        <div className="absolute top-1/3 left-12 w-24 h-24 border border-[#bc13fe]/10 rounded-full animate-spin-slow" style={{animationDirection:'reverse', animationDuration:'8s'}}></div>
        <div className="absolute bottom-1/4 right-8 w-52 h-52 border border-[#ffd700]/10 rounded-full animate-spin-slow border-dotted" style={{animationDirection:'reverse'}}></div>
        <div className="absolute bottom-1/3 right-14 w-32 h-32 border border-[#00f3ff]/10 rounded-full animate-spin-slow" style={{animationDuration:'6s'}}></div>

        {/* Corner decorations */}
        <div className="absolute top-24 left-6 w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00f3ff]/30"></div>
          <div className="absolute top-0 left-0 h-full w-[1px] bg-[#00f3ff]/30"></div>
        </div>
        <div className="absolute top-24 right-6 w-16 h-16">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-[#bc13fe]/30"></div>
          <div className="absolute top-0 right-0 h-full w-[1px] bg-[#bc13fe]/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="order-2 md:order-1 space-y-6">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 luxury-badge">
              <span className="w-2 h-2 rounded-full bg-[#00ff41] inline-block animate-pulse-fast"></span>
              SYSTEM ONLINE // AVAILABLE FOR HIRE
            </div>

            {/* Name */}
            <div>
              <p className="font-mono text-[#00f3ff]/60 text-sm tracking-[4px] mb-2">INITIALIZING PROFILE...</p>
              <h1 className="text-5xl md:text-7xl font-black font-orbitron text-white leading-none tracking-tight">
                HI, I'M
              </h1>
              <h1 className="text-5xl md:text-7xl font-black font-orbitron leading-none tracking-tight mt-1">
                <span className="gradient-text glitch" data-text="JEIVIKASH N">JEIVIKASH N</span>
              </h1>
            </div>

            {/* Role typing */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px]" style={{background: 'linear-gradient(90deg, #00f3ff, transparent)'}}></div>
              <p className="text-xl md:text-2xl font-mono" style={{color: '#00f3ff'}}>
                {displayText}
                <span className="typing-cursor"></span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-base leading-relaxed max-w-lg border-l-2 border-[#00f3ff]/40 pl-4 font-rajdhani">
              I craft beautiful, functional digital experiences that solve real-world problems.
              Passionate about AI, data analytics, and building things that matter.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 py-4 border-y border-white/5">
              {[['4+', 'Projects'], ['2+', 'Years Learning'], ['10+', 'Technologies']].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-counter">{num}</div>
                  <div className="text-gray-500 text-xs font-mono tracking-widest">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="neon-btn px-8 py-3 text-center text-sm">
                VIEW MY WORK
              </a>
              <a href="#contact"
                className="px-8 py-3 text-center font-bold font-orbitron text-sm text-white transition-all
                           border border-white/20 hover:border-white/50 hover:bg-white/5 tracking-widest
                           backdrop-blur-sm"
                style={{clipPath:'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'}}>
                HIRE ME
              </a>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Outer rings */}
              <div className="absolute -inset-6 border border-[#00f3ff]/10 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-12 border border-[#bc13fe]/8 rounded-full animate-spin-slow" style={{animationDirection:'reverse', animationDuration:'20s'}}></div>
              <div className="absolute -inset-4 border-2 border-dashed border-[#00f3ff]/15 rounded-full animate-spin-slow" style={{animationDuration:'15s'}}></div>

              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-full ring-pulse"
                   style={{boxShadow: '0 0 60px rgba(0,243,255,0.2), 0 0 120px rgba(0,243,255,0.1)'}}></div>

              {/* Avatar frame */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-[#00f3ff]/50"
                   style={{boxShadow: '0 0 30px #00f3ff, inset 0 0 30px rgba(0,243,255,0.1)'}}>
                <img
                  src="/vikash.png"
                  alt="Jeivikash Avatar"
                  className="w-full h-full object-cover"
                  style={{objectPosition: 'center'}}
                  onError={(e) => {
                    e.target.style.display='none';
                    e.target.parentNode.innerHTML += `
                      <div style="width:100%;height:100%;background:#121420;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;">
                        <span style="font-size:4rem;color:#00f3ff;font-family:Orbitron">JN</span>
                        <span style="font-size:0.6rem;color:#00f3ff;font-family:monospace;letter-spacing:4px">AVATAR</span>
                      </div>`;
                  }}
                />
              </div>

              {/* Corner accent badges */}
              <div className="absolute -top-2 -right-2 luxury-badge text-xs py-1 px-2">AI & DS</div>
              <div className="absolute -bottom-2 -left-2 luxury-badge text-xs py-1 px-2" style={{borderColor:'rgba(188,19,254,0.3)',color:'#bc13fe'}}>FRESHER</div>

              {/* Floating dots */}
              {[0,1,2,3,4,5,6,7].map(i => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#00f3ff]"
                     style={{
                       top: `${50 + 52 * Math.sin(i * Math.PI / 4)}%`,
                       left: `${50 + 52 * Math.cos(i * Math.PI / 4)}%`,
                       boxShadow: '0 0 6px #00f3ff',
                       opacity: 0.6,
                     }}></div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
        <span className="font-mono text-[10px] tracking-[4px] text-[#00f3ff]">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#00f3ff] to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
