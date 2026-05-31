import { Link } from 'react-router-dom';
import casual5 from '../assets/images/casual/casual5.png';
import bridal3 from '../assets/images/bridal/bridal3.png';
import party4 from '../assets/images/partywear/party4.png';

function Home() {
  const featuredServices = [
    { title: 'Bridal Stitching', desc: 'Flawless luxury tailoring and finishing for your big day.', code: 'ST-01' },
    { title: 'Party Dress Tailoring', desc: 'Premium custom cuts, perfect fitting & modern silhouettes.', code: 'ST-02' },
    { title: 'Maxi & Gowns', desc: 'Elite couture floor-length stitching and flawless drops.', code: 'ST-03' },
    { title: 'Custom Casuals', desc: 'Sophisticated daily wear tailoring, kurtis, and trousers.', code: 'ST-04' },
    { title: 'Lace & Trims Designing', desc: 'Artisanal lace, piping, and borders integration on your fabric.', code: 'ST-05' },
    { title: 'Urgent Orders', desc: 'Emergency tailoring and premium stitching delivered within 48 hours.', code: 'ST-06' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 text-center overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558645487-f73a5a5e3734?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20 filter brightness-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="text-xs md:text-sm tracking-[0.5em] text-[#D4AF37] uppercase font-bold block gold-text-glow">
            Premium Ladies Tailoring
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-wide leading-tight">
            Stitched with <span className="text-[#D4AF37] italic font-normal">Perfection</span>
          </h1>
          <p className="text-xs md:text-sm tracking-[0.2em] text-[#FDFBF7]/60 uppercase max-w-xl mx-auto">
            Expert Custom Stitching, Flawless Fitting, & Master Tailoring Services.
          </p>
          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="gold-gradient-btn text-black font-bold text-xs uppercase tracking-widest px-8 py-4 transition-transform hover:scale-105 duration-300">
              Book Appointment
            </Link>
            <Link to="/services" className="border border-[#D4AF37]/40 text-[#D4AF37] text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#D4AF37]/10 transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs tracking-widest text-[#D4AF37] uppercase font-mono">Our Tailoring Specialties</span>
          <h2 className="text-3xl md:text-4xl font-serif">Stitching Services</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, idx) => (
            <div key={idx} className="gold-border-card p-8 space-y-4 relative group">
              <span className="text-[10px] font-mono text-[#D4AF37]/30 absolute top-4 right-6">{service.code}</span>
              <h3 className="text-xl font-serif text-[#D4AF37] tracking-wide">{service.title}</h3>
              <p className="text-xs text-[#FDFBF7]/60 font-light leading-relaxed">{service.desc}</p>
              <div className="pt-2">
                <Link to="/services" className="text-[11px] uppercase tracking-widest font-mono text-[#D4AF37] hover:underline">
                  View Pricing & Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section (Visual Layout Block) */}
     <section className="max-w-7xl mx-auto px-6 space-y-12">
  <div className="text-center">
    <h2 className="text-3xl font-serif tracking-wider">
      The Art of Fitting
    </h2>
    <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-mono mt-1">
      Signature Stitching & Tailoring Process
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="gold-border-card p-2 aspect-[3/4] overflow-hidden md:-translate-y-4">
      <img
        src={casual5}
        alt="Stitching Details"
        className="w-full h-full object-cover filter brightness-90"
      />
    </div>

    <div className="gold-border-card p-2 aspect-[3/4] overflow-hidden">
      <img
        src={bridal3}
        alt="Master Tailor Cutting"
        className="w-full h-full object-cover filter brightness-75 grayscale-[20%]"
      />
    </div>

    <div className="gold-border-card p-2 aspect-[3/4] overflow-hidden">
      <img
        src={party4}
        alt="Finished Stitched Dress"
        className="w-full h-full object-cover filter brightness-75 grayscale-[20%]"
      />
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;