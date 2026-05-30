import React, { useState, useEffect } from 'react';

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Jab poori website aur images load ho jayein, tab bhi hum 30 seconds wait karenge
    const handleLoad = () => {
      // 30000ms = 30 Seconds ka delay taake preloader zyada der rukay
      setTimeout(() => setLoading(false), 10000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center transition-all duration-500">
      <div className="text-center space-y-6 max-w-xs px-4">
        {/* Logo Image with Pulse Animation */}
        <div className="w-32 h-32 mx-auto overflow-hidden animate-pulse">
          <img 
            src="src/assets/images/loding.jfif" 
            alt="Libas by Bilal Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          />
        </div>
        
        {/* Text Loader */}
        <div className="space-y-2">
          <p className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em]">
            Stitching Perfection
          </p>
          
          {/* Gold loading bar with smooth infinite slide effect */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-[#FDFBF7]/40 -translate-x-full animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;