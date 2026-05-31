import React, { useState, useEffect } from 'react';

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 👈 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center opacity-100 transition-opacity duration-500">
      
      <div className="text-center space-y-6 max-w-xs px-4">
        
        {/* Logo */}
        <div className="w-32 h-32 mx-auto overflow-hidden animate-pulse">
          <img 
            src="/logo/loding.jfif" 
            alt="Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <p className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em]">
            Stitching Perfection
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-[#FDFBF7]/40 -translate-x-full animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Preloader; 