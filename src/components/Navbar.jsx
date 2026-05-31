import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A0A0A] border-b border-[#D4AF37]/10 sticky top-0 z-50 px-6 py-3 md:px-12 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram / Logo Wrapper */}
        <Link to="/" className="flex items-center group py-1">
          <div className="w-24 sm:w-28 md:w-32 overflow-hidden transition-all duration-300 transform group-hover:scale-[1.02]">
            <img 
              src="/logo/logo.png" 
              alt="Libas by Bilal Premium Luxury Logo" 
              className="w-full h-auto object-contain filter brightness-110 drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
            />
          </div>
        </Link>

        {/* Board Accurate Minimal Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-light">
          <Link to="/" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors duration-300">Our Story</Link>
          <Link to="/services" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors duration-300">Services</Link>
          <Link to="/gallery" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors duration-300">Gallery</Link>
          <Link to="/contact" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors duration-300">Contact</Link>
        </div>

        {/* Right Corner Gold Call To Action Button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="border border-[#D4AF37]/60 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] px-5 py-2 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-medium gold-text-glow"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#D4AF37] text-2xl p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Responsive Dropdown Board View */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#D4AF37]/10 mt-3 py-6 flex flex-col gap-4 text-center text-xs uppercase tracking-[0.2em] font-light animate-fadeIn">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-[#FDFBF7]/80 hover:text-[#D4AF37] py-2 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-[#FDFBF7]/80 hover:text-[#D4AF37] py-2 transition-colors">Our Story</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-[#FDFBF7]/80 hover:text-[#D4AF37] py-2 transition-colors">Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-[#FDFBF7]/80 hover:text-[#D4AF37] py-2 transition-colors">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[#FDFBF7]/80 hover:text-[#D4AF37] py-2 transition-colors">Contact</Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="mx-8 mt-2 border border-[#D4AF37] text-[#D4AF37] py-2.5 font-medium transition-all"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;