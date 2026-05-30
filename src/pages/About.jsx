function About() {
  const processTimeline = [
    { id: '01', title: 'Measurement Session', desc: 'Mapping physical structure matrix manually.' },
    { id: '02', title: 'Pattern Canvas', desc: 'Drafting asymmetric blueprints on high-grade trace paper.' },
    { id: '03', title: 'Embellishments', desc: 'Traditional handwork integration (tilla, zardozi embroidery).' },
    { id: '04', title: 'Bespoke Stitching', desc: 'High-end elite couture machinery execution.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      
      {/* Top Banner Header */}
      <div className="text-center space-y-4">
        <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-bold block gold-text-glow">
          Our Journey of Elegance Est. Karachi
        </span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-wide">Our Story & Founder</h1>
        <div className="w-24 h-[1px] bg-[#D4AF37]/30 mx-auto"></div>
      </div>

      {/* Main Info Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm text-[#FDFBF7]/70 font-light leading-relaxed tracking-wide">
            Established in Karachi, <strong>Libas by Bilal</strong> embodies the heritage of Pakistani craftsmanship, providing premium ladies tailoring with unparalleled elegance and modern custom designs. We blend rich traditions with luxury aesthetics, ensuring each garment is a masterpiece.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="gold-border-card p-6 text-center">
              <span className="text-2xl text-[#D4AF37] block mb-1">📐</span>
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono">Our Mission</h4>
              <p className="text-[11px] text-[#FDFBF7]/50 mt-2 font-light">Empowering grace via flawless luxury stitching infrastructure.</p>
            </div>
            <div className="gold-border-card p-6 text-center">
              <span className="text-2xl text-[#D4AF37] block mb-1">🪡</span>
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono">Our Vision</h4>
              <p className="text-[11px] text-[#FDFBF7]/50 mt-2 font-light">Global benchmark for South Asian bespoke bridal couture.</p>
            </div>
          </div>
        </div>
        
        {/* Arch Image Block from Board */}
        <div className="justify-self-center lg:justify-self-end w-full max-w-sm aspect-[3/4] p-2 bg-[#121212] border border-[#D4AF37]/20 arch-shape overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80" 
            alt="Artisan Sizing Canvas Mapping" 
            className="w-full h-full object-cover arch-shape filter brightness-90"
          />
        </div>
      </section>

      {/* Behind the Scenes Timeline Grid */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-[#D4AF37]">Behind The Scenes Process</h2>
          <p className="text-xs font-mono text-[#FDFBF7]/40 tracking-widest uppercase mt-1">Meticulous Craft Steps</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processTimeline.map((step) => (
            <div key={step.id} className="gold-border-card p-6 space-y-4 relative">
              <div className="text-2xl font-serif text-[#D4AF37]/20 font-bold absolute top-3 right-5">{step.id}</div>
              <h3 className="text-base font-serif text-[#D4AF37] pt-2">{step.title}</h3>
              <p className="text-xs text-[#FDFBF7]/60 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Atmosphere Footer block */}
      <section className="gold-border-card p-8 md:p-12 text-center space-y-4">
        <h3 className="text-xl font-serif tracking-wider text-[#D4AF37]">Fashion Studio Atmosphere</h3>
        <p className="text-xs text-[#FDFBF7]/60 max-w-xl mx-auto font-light leading-relaxed">
          Our private flagship studio in Karachi is fully customized for elite bridal/pret consultation slot sessions.
        </p>
        <span className="inline-block text-[10px] font-mono bg-[#1a150e] border border-[#D4AF37]/20 px-4 py-2 text-[#D4AF37] uppercase tracking-widest">
          📍 Location: 5L North Karachi Near Rajput ground
        </span>
      </section>

    </div>
  );
}

export default About;