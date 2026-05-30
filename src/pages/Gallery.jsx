import { useState } from 'react';

// Bridal
import bridal1 from '../assets/images/bridal/bridal1.png';
import bridal2 from '../assets/images/bridal/bridal2.png';
import bridal3 from '../assets/images/bridal/bridal3.png';
import bridal4 from '../assets/images/bridal/bridal4.png';


// Party Wear
import party1 from '../assets/images/partywear/party1.png';
import party2 from '../assets/images/partywear/party2.png';
import party3 from '../assets/images/partywear/party3.png';
import party4 from '../assets/images/partywear/party4.png';


// Maxi
import maxi1 from '../assets/images/maxi/maxi1.png';
import maxi2 from '../assets/images/maxi/maxi2.png';
import maxi3 from '../assets/images/maxi/maxi3.png';
import maxi4 from '../assets/images/maxi/maxi4.png';
import maxi5 from '../assets/images/maxi/maxi5.png';

// Casual Wear
import casual1 from '../assets/images/casual/casual1.png';
import casual2 from '../assets/images/casual/casual2.png';
import casual3 from '../assets/images/casual/casual3.png';
import casual4 from '../assets/images/casual/casual4.png';
import casual5 from '../assets/images/casual/casual5.png';

function Gallery() {
  const [tag, setTag] = useState('All');

  const items = [
    // Bridal
    { title: 'Bridal Design 1', category: 'Bridal', img: bridal1 },
    { title: 'Bridal Design 2', category: 'Bridal', img: bridal2 },
    { title: 'Bridal Design 3', category: 'Bridal', img: bridal3 },
    { title: 'Bridal Design 4', category: 'Bridal', img: bridal4 },
   

    // Party Wear
    { title: 'Party Wear 1', category: 'Party Wear', img: party1 },
    { title: 'Party Wear 2', category: 'Party Wear', img: party2 },
    { title: 'Party Wear 3', category: 'Party Wear', img: party3 },
    { title: 'Party Wear 4', category: 'Party Wear', img: party4 },
   

    // Maxi
    { title: 'Maxi Design 1', category: 'Maxi', img: maxi1 },
    { title: 'Maxi Design 2', category: 'Maxi', img: maxi2 },
    { title: 'Maxi Design 3', category: 'Maxi', img: maxi3 },
    { title: 'Maxi Design 4', category: 'Maxi', img: maxi4 },
    { title: 'Maxi Design 5', category: 'Maxi', img: maxi5 },

    // Casual Wear
    { title: 'Casual Wear 1', category: 'Casual Wear', img: casual1 },
    { title: 'Casual Wear 2', category: 'Casual Wear', img: casual2 },
    { title: 'Casual Wear 3', category: 'Casual Wear', img: casual3 },
    { title: 'Casual Wear 4', category: 'Casual Wear', img: casual4 },
    { title: 'Casual Wear 5', category: 'Casual Wear', img: casual5 },
  ];

  const filtered =
    tag === 'All'
      ? items
      : items.filter((item) => item.category === tag);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] block font-mono">
          Our Work
        </span>

        <h1 className="text-4xl md:text-5xl font-serif">
          Tailoring Portfolio
        </h1>

        <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 border-b border-[#D4AF37]/10 pb-6">
        {['All', 'Bridal', 'Party Wear', 'Maxi', 'Casual Wear'].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setTag(cat)}
              className={`text-xs uppercase tracking-widest px-5 py-2 font-mono transition-all ${
                tag === cat
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-[#FDFBF7]/60 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40'
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="gold-border-card p-2 group overflow-hidden flex flex-col justify-between aspect-[3/4] relative"
          >
            <div className="w-full h-full overflow-hidden relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0A0A]/90 border border-[#D4AF37]/10 backdrop-blur-sm space-y-1">
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase block tracking-wider">
                {item.category}
              </span>

              <h4 className="text-sm font-serif text-[#FDFBF7] tracking-wide">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;