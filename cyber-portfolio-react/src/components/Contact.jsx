import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setFormData({ name: '', email: '', subject: '', message: '' }); }, 1500);
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'EMAIL', value: 'n.jeivikash@gmail.com', color: '#00f3ff' },
    { icon: 'fas fa-phone', label: 'PHONE', value: '+91 9345721416', color: '#bc13fe' },
    { icon: 'fas fa-map-marker-alt', label: 'LOCATION', value: 'Tirunelveli, India', color: '#ffd700' },
  ];

  const socials = [
    { icon: 'fab fa-linkedin-in', color: '#00f3ff', href: '#' },
    { icon: 'fab fa-github', color: '#ffffff', href: '#' },
    { icon: 'fab fa-twitter', color: '#bc13fe', href: '#' },
    { icon: 'fab fa-instagram', color: '#ffd700', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{background:'rgba(10,11,20,0.7)'}}>
      <div className="absolute top-0 left-0 w-full h-[1px] gold-line opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="luxury-badge inline-block mb-4">SECTION_07 // COMMS</div>
          <h2 className="cyber-heading text-4xl md:text-5xl text-white mb-3">
            <span style={{color:'#00f3ff'}}>/</span> ESTABLISH CONNECTION
          </h2>
          <p className="font-mono text-sm text-gray-600 tracking-widest">// SECURE_CHANNEL_OPEN</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {/* Left — contact info */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white">Let's Work <span className="gradient-text">Together</span></h3>
            <p className="font-mono text-gray-500 text-xs sm:text-sm leading-relaxed">
              Ready to bring your ideas to life? Open to freelance projects, collaborations, and full-time opportunities.
            </p>

            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 group">
                  <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center flex-shrink-0 border transition-all group-hover:shadow-lg"
                       style={{
                         borderColor: info.color + '40',
                         background: info.color + '0d',
                         clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
                       }}>
                    <i className={`${info.icon} text-xs md:text-sm`} style={{color: info.color}}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-gray-600 tracking-[2px] md:tracking-[3px]">{info.label}</p>
                    <p className="text-white font-mono text-xs md:text-sm group-hover:text-[#00f3ff] transition-colors truncate">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-gray-600 tracking-widest mb-3 md:mb-4">// SOCIAL_LINKS</p>
              <div className="flex gap-2 md:gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="social-icon w-10 h-10 md:w-11 md:h-11" style={{borderColor: s.color + '40', color: s.color}}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="hud-card p-4 sm:p-6 md:p-8">
            <div className="card-shine"></div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-1 h-4 md:h-6 bg-[#00f3ff] rounded"></div>
              <p className="font-mono text-[10px] text-[#00f3ff] tracking-widest">// SEND_MESSAGE</p>
            </div>

            {sent ? (
              <div className="text-center py-8 md:py-12 space-y-3 md:space-y-4">
                <div className="text-2xl md:text-4xl" style={{color:'#00ff41'}}>✓</div>
                <p className="font-orbitron text-base md:text-lg text-white">TRANSMISSION SUCCESSFUL</p>
                <p className="font-mono text-xs md:text-sm text-gray-500">Message received. Will respond shortly.</p>
                <button onClick={() => setSent(false)} className="neon-btn px-4 py-2 md:px-6 py-2 text-xs mt-4">NEW MESSAGE</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[2px] md:tracking-[3px] text-[#00f3ff]/60 mb-2">USER_ID</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="luxury-input text-sm" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-[2px] md:tracking-[3px] text-[#00f3ff]/60 mb-2">CONTACT_REF</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="luxury-input text-sm" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-[2px] md:tracking-[3px] text-[#00f3ff]/60 mb-2">SUBJECT</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                    className="luxury-input text-sm" placeholder="Project Inquiry" required />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-[2px] md:tracking-[3px] text-[#00f3ff]/60 mb-2">DATA_PACKET</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    rows="3 sm:rows-4" className="luxury-input resize-none text-sm" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="w-full neon-btn py-2.5 md:py-3 text-xs md:text-sm flex items-center justify-center gap-3" disabled={sending}>
                  {sending ? (
                    <>
                      <span className="w-3 h-3 md:w-4 md:h-4 border border-current border-t-transparent rounded-full animate-spin"></span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-[10px] md:text-xs"></i>
                      TRANSMIT MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
