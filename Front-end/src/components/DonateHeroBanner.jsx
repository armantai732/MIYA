import React from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const DonateHeroBanner = () => {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-[#031e13] font-sans overflow-hidden border-y border-[#d4af37]/40">
      
      {/* Right Half Background Sunset Mosque Image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] h-full">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000&auto=format&fit=crop"
          alt="Illuminated Grand Mosque at Golden Sunset"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Warm Sunset Glow & Soft Left Blend */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #031e13 0%, rgba(3, 30, 19, 0.85) 18%, rgba(3, 30, 19, 0.2) 45%, transparent 100%)',
          }}
        ></div>
      </div>

      {/* Left Deep Green Panel with Pointed Islamic Arch Divider Edge (Desktop) */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[56%] bg-gradient-to-r from-[#02170e] via-[#042417] to-[#062d1d] z-10"
        style={{
          clipPath:
            'polygon(0% 0%, 82% 0%, 88% 22%, 94% 38%, 100% 50%, 94% 62%, 88% 78%, 82% 100%, 0% 100%)',
        }}
      >
        {/* Subtle Islamic Pattern Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop')`,
          }}
        ></div>
      </div>

      {/* Golden Outer Trim Line Following the Pointed Arch Curve (Desktop) */}
      <svg
        className="hidden lg:block absolute inset-y-0 left-0 w-[56.5%] h-full pointer-events-none z-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polyline
          points="81.5,0 87.5,22 93.5,38 99.2,50 93.5,62 87.5,78 81.5,100"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.45"
          strokeOpacity="0.85"
        />
        <polyline
          points="80.3,0 86.3,22 92.3,38 98,50 92.3,62 86.3,78 80.3,100"
          fill="none"
          stroke="#ebd082"
          strokeWidth="0.2"
          strokeOpacity="0.55"
        />
      </svg>

      {/* Mobile & Tablet Dark Green Overlay */}
      <div
        className="lg:hidden absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(3, 30, 19, 0.96) 0%, rgba(3, 30, 19, 0.88) 65%, rgba(3, 30, 19, 0.45) 100%)',
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-16 flex items-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left text-white">
          
          {/* Main Two-Tone Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold tracking-wide leading-tight mb-4 drop-shadow-sm">
            <span className="text-amber-50">Support Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f6e29c] via-[#ebd082] to-[#c99b32]">
              Mission
            </span>
          </h1>

          {/* Italic Description Subtitle */}
          <p className="text-emerald-100/90 font-serif italic text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mb-6">
            Your generosity helps spread Islamic knowledge, provide spiritual guidance and serve humanity.
          </p>

          {/* Ornate Golden Divider Line with 8-Point Star */}
          <div className="flex items-center space-x-3 w-full max-w-sm mb-7">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#ebd082] shrink-0"></span>
            <span className="flex-grow h-[1.5px] bg-gradient-to-r from-[#ebd082] via-[#d4af37] to-[#ebd082]"></span>
            <span className="text-[#ebd082] text-base leading-none">✺</span>
            <span className="w-14 h-[1px] bg-gradient-to-r from-[#ebd082] to-transparent"></span>
          </div>

          {/* Pill-Shaped Golden Bordered Breadcrumb */}
          <div className="inline-flex items-center space-x-2.5 bg-[#062b1c]/90 border border-[#d4af37]/70 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium shadow-md">
            <FaHome className="text-[#ebd082] text-xs sm:text-sm" />
            <a href="/" className="text-amber-50 hover:text-[#ebd082] transition-colors">
              Home
            </a>
            <FaChevronRight className="text-[10px] text-[#ebd082]/80" />
            <span className="text-[#ebd082] font-semibold">Donate</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default DonateHeroBanner;