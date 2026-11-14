import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';

const AppointmentPaymentHeaderBanner = () => {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] bg-[#031e13] font-sans overflow-hidden border-b-2 border-[#d4af37]/60">
      
      {/* Left Side Incense Burner / Bukhoor Image & Warm Glow */}
      <div className="absolute inset-y-0 left-0 w-1/2 sm:w-2/5 lg:w-1/3 h-full pointer-events-none z-10">
        <img
          src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop"
          alt="Traditional Incense Burner with Smoke"
          className="w-full h-full object-cover object-center opacity-65 mix-blend-luminosity"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,30,19,0.3) 0%, rgba(3,30,19,0.85) 70%, #031e13 100%)',
          }}
        ></div>
      </div>

      {/* Right Side Green Dome Mosque Image & Glow */}
      <div className="absolute inset-y-0 right-0 w-1/2 sm:w-3/5 lg:w-2/5 h-full pointer-events-none z-10">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
          alt="Green Dome Mosque at Sunset"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(270deg, rgba(3,30,19,0.4) 0%, rgba(3,30,19,0.9) 70%, #031e13 100%)',
          }}
        ></div>
      </div>

      {/* Center Ornate Golden Islamic Arch Border Overlay (Desktop) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4">
        <div className="w-full max-w-4xl h-[85%] border-t-2 border-x-2 border-[#d4af37]/75 rounded-t-[120px] sm:rounded-t-[180px] bg-gradient-to-b from-[#062b1c]/80 via-[#031e13]/40 to-transparent flex flex-col items-center justify-start pt-8 sm:pt-10 px-4 shadow-2xl">
        </div>
      </div>

      {/* Main Header Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 py-12 sm:py-16 flex flex-col items-center text-center">
        
        {/* Top Calendar Check Icon Badge */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-[#ebd082] via-[#dfb85a] to-[#c99b32] text-[#031e13] flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-2 border-amber-200 mb-4 transform hover:scale-105 transition-transform duration-300">
          <FaRegCalendarCheck />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f6e29c] via-[#ebd082] to-[#c99b32] tracking-wide mb-2 drop-shadow-md">
          Appointment Payment
        </h1>

        {/* Subtitle */}
        <p className="text-emerald-100/90 font-serif italic text-xs sm:text-sm lg:text-base tracking-wide max-w-md mb-6">
          Complete your payment to confirm your appointment
        </p>

        {/* Ornate Golden Divider with Center Motif */}
        <div className="flex items-center justify-center space-x-3 w-full max-w-sm">
          <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#ebd082]"></span>
          <div className="flex items-center space-x-1 text-[#ebd082] text-xs">
            <span>◆</span>
            <span className="text-sm font-bold">❖</span>
            <span>◆</span>
          </div>
          <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#ebd082]"></span>
        </div>

      </div>

    </section>
  );
};

export default AppointmentPaymentHeaderBanner;