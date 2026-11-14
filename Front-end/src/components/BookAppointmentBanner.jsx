import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaMosque } from 'react-icons/fa';

const BookAppointmentBanner = () => {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-[#031e13] font-sans overflow-hidden border-y border-[#d4af37]/40">
      
      {/* Right-to-Center Background Grand Mosque Sunset Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000&auto=format&fit=crop"
          alt="Illuminated Grand Mosque at Dusk"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        
        {/* Seamless Deep Green Gradient Blend (Left Solid to Right Transparent) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              'linear-gradient(to right, #031e13 0%, #031e13 42%, rgba(3, 30, 19, 0.88) 56%, rgba(3, 30, 19, 0.35) 75%, transparent 100%)',
          }}
        ></div>
      </div>

      {/* Left Decorative Scalloped Islamic Arch & Hanging Lantern Accent */}
      <div className="absolute top-0 left-0 h-full w-28 sm:w-44 lg:w-56 pointer-events-none z-20 hidden sm:flex flex-col items-center">
        {/* Ornate Golden Arch Border */}
        <div
          className="absolute inset-0 border-r-2 border-[#d4af37]/70"
          style={{
            background:
              'radial-gradient(circle at left center, rgba(212, 175, 55, 0.18) 0%, rgba(3, 30, 19, 0.96) 75%)',
            clipPath:
              'polygon(0% 0%, 100% 0%, 82% 18%, 95% 35%, 80% 50%, 95% 65%, 82% 82%, 100% 100%, 0% 100%)',
          }}
        ></div>

        {/* Hanging Golden Lantern Graphic */}
        <div className="relative z-30 flex flex-col items-center">
          {/* Lantern Chain */}
          <div className="w-[1.5px] h-16 lg:h-24 bg-gradient-to-b from-[#d4af37]/40 to-[#ebd082]"></div>
          {/* Lantern Glow Body */}
          <div className="relative flex flex-col items-center">
            <div className="w-3 h-2 bg-[#d4af37] rounded-t-full"></div>
            <div className="w-9 h-14 lg:w-11 lg:h-16 rounded-xl border-2 border-[#ebd082] bg-gradient-to-b from-amber-300/40 via-amber-400/70 to-amber-500/40 shadow-[0_0_30px_rgba(235,208,130,0.85)] flex items-center justify-center">
              <div className="w-3 h-6 rounded-full bg-amber-100 blur-[1px]"></div>
            </div>
            <div className="w-4 h-2.5 bg-[#d4af37] rounded-b-full"></div>
          </div>
        </div>
      </div>

      {/* Right Edge Decorative Golden Arch Trim */}
      <div
        className="absolute top-0 right-0 h-full w-16 lg:w-28 pointer-events-none z-20 hidden md:block border-l-2 border-[#d4af37]/50"
        style={{
          background:
            'linear-gradient(to left, rgba(3, 30, 19, 0.85), rgba(212, 175, 55, 0.12))',
          clipPath:
            'polygon(100% 0%, 0% 0%, 25% 20%, 5% 50%, 25% 80%, 0% 100%, 100% 100%)',
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-16 lg:px-28 py-14 sm:py-16 flex items-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
        <div className="w-full lg:w-3/5 flex flex-col items-center text-center text-white sm:pl-16 lg:pl-12">
          
          {/* Main Golden Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f6e29c] via-[#ebd082] to-[#c99b32] tracking-wide leading-tight drop-shadow-sm mb-2">
            Book an Appointment
          </h2>

          {/* Italic Subtitle */}
          <p className="text-lg sm:text-2xl font-serif italic text-amber-100/95 tracking-wide mb-5">
            Personal <span className="font-semibold not-italic text-[#ebd082]">Guidance</span> &amp; Consultation
          </p>

          {/* Ornate Divider with Mosque Icon */}
          <div className="flex items-center justify-center space-x-3 w-full max-w-sm mb-5">
            <span className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#ebd082]"></span>
            <span className="text-[#ebd082] text-[10px]">◆</span>
            <div className="p-1.5 rounded-full border border-[#d4af37]/60 bg-[#072e1d]/80 text-[#ebd082]">
              <FaMosque className="text-xs sm:text-sm" />
            </div>
            <span className="text-[#ebd082] text-[10px]">◆</span>
            <span className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#ebd082]"></span>
          </div>

          {/* Description Paragraph */}
          <p className="text-emerald-100/85 text-xs sm:text-sm lg:text-base font-light leading-relaxed max-w-md mb-8">
            Get spiritual guidance, ask your questions and receive valuable advice from our trusted platform.
          </p>

          {/* Golden Pill CTA Button */}
          <a
            href="#book-appointment"
            className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-[#f3da8b] via-[#dfb85a] to-[#c7992e] hover:brightness-110 text-[#031e13] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_6px_25px_rgba(212,175,55,0.35)] border border-amber-200/80 transition-all duration-300 group"
          >
            <FaCalendarAlt className="text-[#031e13] text-sm" />
            <span>Book Your Appointment</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>
      </div>

    </section>
  );
};

export default BookAppointmentBanner;