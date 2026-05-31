import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/10 text-[#FDFBF7]/60 text-xs font-light">
      {/* Upper Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center border-b border-[#D4AF37]/5">
        
        {/* Left Side: Brand Statement & Image Identity */}
        <div className="space-y-4 text-center md:text-left">
          <div className="w-20 mx-auto md:mx-0 opacity-80 filter brightness-90">
            <img src="/logo/logo.png" alt="Libas by Bilal Monogram Accent" className="w-full h-auto object-contain" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] leading-relaxed max-w-xs mx-auto md:mx-0">
            Premium custom ladies tailoring and master stitching services established in Karachi.
          </p>
        </div>

        {/* Center: Structured Quick Grid Matrix */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.25em]">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </div>
          <div className="w-12 h-[1px] bg-[#D4AF37]/20"></div>
          <span className="text-[10px] font-mono text-[#D4AF37]/50 tracking-widest">EST. 2026 // MASTER TAILORING</span>
        </div>

        {/* Right Side: Contact Gmail & Social Handles */}
        <div className="text-center md:text-right space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium font-mono">Contact & Follow</h4>
          <div className="block pt-1">
            <a href="mailto:bilalwarsi174@gmail.com" className="text-[11px] font-mono text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors break-all">
              bilalwarsi174@gmail.com &
              libasbybilal26@gmail.com
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-4 text-xs pt-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors font-mono tracking-wider text-[10px] uppercase">@instagram</a>
            <span className="text-[#D4AF37]/20">•</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors font-mono tracking-wider text-[10px] uppercase">@facebook</a>
          </div>
        </div>

      </div>

      {/* Absolute Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/30 font-mono gap-4">
        <div>
          © {new Date().getFullYear()} Libas by Bilal. All Rights Reserved.
        </div>
        <div className="flex items-center gap-2 text-[#D4AF37]/40">
          <span>Perfect Fitting & Stitching</span>
          <span className="text-[10px]">🪡</span>
          <span>Karachi, PK</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;