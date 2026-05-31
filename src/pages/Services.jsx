import { Link } from 'react-router-dom';

function Services() {
  const corporateServices = [
    { title: 'Simple Suit', line: 'Regular Shalwar Kameez & Kurtis', rates: 'From 1,000 PKR', spec: ['Standard Custom Stitching', 'Perfect Everyday Fitting', 'Clean Hemming & Overlock'] },
    { title: 'Casual Outfits', line: 'Designer Shalwar Kameez & Kurtis', rates: 'From 1,500 PKR', spec: ['Modern Minimalist Cuts', 'Daily Wear Stitching', 'Quick Turnaround Time'] },
    { title: 'Luxury Wear Tailoring', line: 'Anarkalis, Pishwas & Frocks', rates: 'From 2,500 PKR', spec: ['Perfect Panels & Flares', 'Premium Seam Stitching', '2-Week Standard Delivery'] },
    { title: 'Bridal Stitching', line: 'Lehengas, Shararas & Maxis', rates: 'From 10,000 PKR', spec: ['Fitting Trials Included', 'Dori & Lining Attachment', 'Fine Overlock & Edge Finishing'] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] block font-mono">Tailoring Pricing Matrix</span>
        <h1 className="text-4xl md:text-5xl font-serif">Stitching Services by Libas by Bilal</h1>
        <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-2"></div>
      </div>

      {/* Grid structure changed to 4 columns for large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {corporateServices.map((tier, idx) => (
          <div key={idx} className="gold-border-card p-6 flex flex-col justify-between text-center relative space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center mx-auto text-xl bg-[#121212] group-hover:border-[#D4AF37] transition-all">🪡</div>
              <div>
                <h3 className="text-xl font-serif tracking-wide text-[#FDFBF7] min-h-[56px] flex items-center justify-center">{tier.title}</h3>
                <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mt-1 min-h-[32px]">{tier.line}</p>
              </div>
              <p className="text-base font-mono text-[#FDFBF7]/90 font-bold border-y border-[#D4AF37]/10 py-2 bg-[#0d0d0d]">{tier.rates}</p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/60 font-light pt-2 text-left sm:text-center">
                {tier.spec.map((item, i) => (
                  <li key={i} className="flex items-start sm:items-center justify-start sm:justify-center gap-2">
                    <span className="text-[#D4AF37] shrink-0">✦</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4">
              <Link to="/contact" className="w-full block bg-transparent border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest font-mono py-3 font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                Book Slot
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Urgent Banner Block */}
      <div className="gold-border-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#121212] to-[#0A0A0A]">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#D4AF37] block">Emergency Processing</span>
          <h3 className="text-2xl font-serif">Urgent Stitching & Master Tailoring</h3>
          <p className="text-xs text-[#FDFBF7]/60 leading-relaxed font-light">
            Saddar ya kisi bhi market se kapra aap layen, flawless fitting hum denge. Urgent 48-hours delivery option ke sath perfect stitching aur overlock ki mukammal zimmewari hamari hai.
          </p>
        </div>
        <div className="text-center md:text-right">
          <span className="inline-block text-xs font-mono text-[#D4AF37] border-2 border-dashed border-[#D4AF37]/40 px-6 py-4 bg-[#0A0A0A] font-bold uppercase tracking-widest">
            ⚡ 48-Hour Urgent Stitching Guard
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;