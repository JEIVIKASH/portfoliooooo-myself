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

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — contact info */}
          <div className="space-y-8">
            <h3 className="font-orbitron text-2xl font-bold text-white">Let's Work <span className="gradient-text">Together</span></h3>
            <p className="font-mono text-gray-500 text-sm leading-relaxed">
              Ready to bring your ideas to life? Open to freelance projects, collaborations, and full-time opportunities.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 border transition-all group-hover:shadow-lg"
                       style={{
                         borderColor: info.color + '40',
                         background: info.color + '0d',
                         clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                       }}>
                    <i className={`${info.icon} text-sm`} style={{color: info.color}}></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-600 tracking-[3px]">{info.label}</p>
                    <p className="text-white font-mono text-sm group-hover:text-[#00f3ff] transition-colors">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-gray-600 tracking-widest mb-4">// SOCIAL_LINKS</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="social-icon" style={{borderColor: s.color + '40', color: s.color}}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="hud-card p-8">
            <div className="card-shine"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#00f3ff] rounded"></div>
              <p className="font-mono text-xs text-[#00f3ff] tracking-widest">// SEND_MESSAGE</p>
            </div>

            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-4xl" style={{color:'#00ff41'}}>✓</div>
                <p className="font-orbitron text-lg text-white">TRANSMISSION SUCCESSFUL</p>
                <p className="font-mono text-sm text-gray-500">Message received. Will respond shortly.</p>
                <button onClick={() => setSent(false)} className="neon-btn px-6 py-2 text-xs mt-4">NEW MESSAGE</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[3px] text-[#00f3ff]/60 mb-2">USER_ID</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="luxury-input" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-[3px] text-[#00f3ff]/60 mb-2">CONTACT_REF</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="luxury-input" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-[3px] text-[#00f3ff]/60 mb-2">SUBJECT</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                    className="luxury-input" placeholder="Project Inquiry" required />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-[3px] text-[#00f3ff]/60 mb-2">DATA_PACKET</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    rows="4" className="luxury-input resize-none" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="w-full neon-btn py-3 text-sm flex items-center justify-center gap-3" disabled={sending}>
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin"></span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-xs"></i>
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
