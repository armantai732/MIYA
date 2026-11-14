import React from 'react';
import { FaHome, FaChevronRight, FaMosque } from 'react-icons/fa';

const ContactHeroBanner = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] bg-[#031e13] font-sans overflow-hidden border-y border-[#d4af37]/40">
      
      {/* Right Side Grand Mosque Sunset Background Image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 h-full">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000&auto=format&fit=crop"
          alt="Illuminated Grand Mosque at Sunset"
          className="w-full h-full object-cover object-center"
        />
        {/* Seamless Left-to-Right Dark Green Gradient Blend */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #031e13 0%, rgba(3, 30, 19, 0.9) 38%, rgba(3, 30, 19, 0.45) 68%, transparent 100%)',
          }}
        ></div>
      </div>

      {/* Left Islamic Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop')`,
        }}
      ></div>

     
      {/* Hanging Golden Lanterns (Left Side) */}
      <div className="absolute top-0 left-12 sm:left-24 lg:left-36 z-20 hidden sm:flex space-x-8 lg:space-x-12 pointer-events-none">
        
        {/* Lantern 1 (Higher) */}
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] h-20 sm:h-28 bg-gradient-to-b from-[#d4af37]/40 to-[#ebd082]"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-2.5 h-2 bg-[#d4af37] rounded-t-full"></div>
            <div className="w-8 h-14 sm:w-10 sm:h-16 rounded-xl border-2 border-[#ebd082] bg-gradient-to-b from-amber-300/50 via-amber-400/80 to-amber-500/50 shadow-[0_0_25px_rgba(235,208,130,0.85)] flex items-center justify-center">
              <div className="w-2.5 h-5 rounded-full bg-amber-100 blur-[1px]"></div>
            </div>
            <div className="w-3.5 h-2 bg-[#d4af37] rounded-b-full"></div>
          </div>
        </div>

        {/* Lantern 2 (Lower) */}
        <div className="flex flex-col items-center pt-8 sm:pt-14">
          <div className="w-[1.5px] h-20 sm:h-28 bg-gradient-to-b from-[#d4af37]/40 to-[#ebd082]"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-2.5 h-2 bg-[#d4af37] rounded-t-full"></div>
            <div className="w-8 h-14 sm:w-10 sm:h-16 rounded-xl border-2 border-[#ebd082] bg-gradient-to-b from-amber-300/50 via-amber-400/80 to-amber-500/50 shadow-[0_0_25px_rgba(235,208,130,0.85)] flex items-center justify-center">
              <div className="w-2.5 h-5 rounded-full bg-amber-100 blur-[1px]"></div>
            </div>
            <div className="w-3.5 h-2 bg-[#d4af37] rounded-b-full"></div>
          </div>
        </div>

      </div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-14 sm:py-16 flex flex-col items-center justify-center text-center min-h-[400px] sm:min-h-[460px] lg:min-h-[500px]">
        
        {/* Top Ornament with Mosque Icon */}
        <div className="flex items-center space-x-3 mb-2">
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]"></span>
          <div className="text-[#ebd082] text-sm">
            <FaMosque />
          </div>
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]"></span>
        </div>

        {/* Main Serif Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f6e29c] via-[#ebd082] to-[#c99b32] tracking-wide leading-tight drop-shadow-sm mb-3">
          Contact Us
        </h1>

        {/* Subtitle / Description */}
        <p className="text-emerald-100/90 font-serif italic text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-8">
          Get in touch with us for any query, guidance or support. We are here to help you.
        </p>

        {/* Pill-Shaped Golden Bordered Breadcrumb */}
        <div className="inline-flex items-center space-x-2.5 bg-[#062b1c]/90 border border-[#d4af37]/80 rounded-full px-5 py-2 text-xs sm:text-sm font-medium shadow-lg">
          <FaHome className="text-[#ebd082] text-xs sm:text-sm" />
          <a href="/" className="text-amber-50 hover:text-[#ebd082] transition-colors">
            Home
          </a>
          <FaChevronRight className="text-[10px] text-[#ebd082]/80" />
          <span className="text-[#ebd082] font-semibold">Contact Us</span>
        </div>

      </div>

    </section>
  );
};

export default ContactHeroBanner;