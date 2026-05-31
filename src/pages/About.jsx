import founderImage from "../assets/images/Aboutus.JPG";

function About() {
  const processTimeline = [
    {
      id: "01",
      title: "Measurement Session",
      desc: "Precise body measurements are taken to ensure perfect fitting and comfort."
    },
    {
      id: "02",
      title: "Pattern Drafting",
      desc: "Custom patterns are designed according to body structure and style requirements."
    },
    {
      id: "03",
      title: "Embellishments",
      desc: "Handcrafted embroidery, tilla, and zardozi work for premium finishing."
    },
    {
      id: "04",
      title: "Bespoke Stitching",
      desc: "High-quality stitching with professional tailoring techniques and modern machinery."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-bold block gold-text-glow">
          Our Journey of Elegance • Karachi
        </span>

        <h1 className="text-4xl md:text-6xl font-serif tracking-wide">
          Our Story & Founder
        </h1>

        <div className="w-24 h-[1px] bg-[#D4AF37]/30 mx-auto"></div>
      </div>

      {/* Founder Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">

          <p className="text-sm text-[#FDFBF7]/70 font-light leading-relaxed tracking-wide">
            <strong className="text-[#D4AF37]">Muhammad Bilal</strong> is the founder of
            <strong> Libas by Bilal</strong>, a premium ladies tailoring brand based in Karachi.

            <br /><br />

            With <strong>8 years of experience in suit stitching</strong> and
            <strong> 5 years of professional tailoring expertise</strong>, he has mastered the art of creating perfectly fitted,
            elegant, and high-quality garments.

            <br /><br />

            From bridal wear to party dresses, casual suits, and custom designs, every outfit is stitched with precision,
            care, and attention to detail. Our goal is to deliver clothing that enhances confidence, beauty, and style.

            <br /><br />

            At Libas by Bilal, traditional craftsmanship meets modern fashion to deliver luxury stitching services in Karachi.
          </p>

          {/* Mission Vision */}
          <div className="grid grid-cols-2 gap-4 pt-4">

            <div className="gold-border-card p-6 text-center">
              <span className="text-2xl text-[#D4AF37] block mb-1">📐</span>
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono">Our Mission</h4>
              <p className="text-[11px] text-[#FDFBF7]/50 mt-2 font-light">
                Deliver premium tailoring with perfect fitting and elegant finishing.
              </p>
            </div>

            <div className="gold-border-card p-6 text-center">
              <span className="text-2xl text-[#D4AF37] block mb-1">🪡</span>
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono">Our Vision</h4>
              <p className="text-[11px] text-[#FDFBF7]/50 mt-2 font-light">
                To become Karachi’s most trusted luxury tailoring brand.
              </p>
            </div>

          </div>

        </div>

        {/* Image */}
        <div className="justify-self-center lg:justify-self-end w-full max-w-sm aspect-[3/4] p-2 bg-[#121212] border border-[#D4AF37]/20 overflow-hidden">
          <img
            src={founderImage}
            alt="Muhammad Bilal Founder"
            className="w-full h-full object-cover filter brightness-90"
          />
        </div>

      </section>

      {/* Process */}
      <section className="space-y-12">

        <div className="text-center">
          <h2 className="text-2xl font-serif text-[#D4AF37]">
            Behind The Scenes Process
          </h2>

          <p className="text-xs font-mono text-[#FDFBF7]/40 tracking-widest uppercase mt-1">
            Meticulous Craft Steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {processTimeline.map((step) => (
            <div key={step.id} className="gold-border-card p-6 space-y-4 relative">

              <div className="text-2xl font-serif text-[#D4AF37]/20 font-bold absolute top-3 right-5">
                {step.id}
              </div>

              <h3 className="text-base font-serif text-[#D4AF37] pt-2">
                {step.title}
              </h3>

              <p className="text-xs text-[#FDFBF7]/60 font-light leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Footer Block */}
      <section className="gold-border-card p-8 md:p-12 text-center space-y-4">

        <h3 className="text-xl font-serif tracking-wider text-[#D4AF37]">
          Fashion Studio Atmosphere
        </h3>

        <p className="text-xs text-[#FDFBF7]/60 max-w-xl mx-auto font-light">
          Premium tailoring studio in Karachi providing personalized stitching experience for every client.
        </p>

        <span className="inline-block text-[10px] font-mono bg-[#1a150e] border border-[#D4AF37]/20 px-4 py-2 text-[#D4AF37] uppercase tracking-widest">
          📍 5L North Karachi Near Rajput Ground
        </span>

      </section>

    </div>
  );
}

export default About;