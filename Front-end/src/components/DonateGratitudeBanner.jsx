import React from 'react';

const DonateGratitudeBanner = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-10 sm:py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Dark Green Golden-Bordered Rounded Banner */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl border-2 border-[#d4af37]/80 shadow-xl overflow-hidden min-h-[150px] sm:min-h-[175px] flex items-center"
          style={{
            background: 'linear-gradient(90deg, #031e13 0%, #05291a 55%, #0a3322 100%)',
          }}
        >
          {/* Right Side Blended Mosque Reflection Image */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2 h-full pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1400&auto=format&fit=crop"
              alt="Grand Mosque Reflection"
              className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity"
            />
            {/* Seamless Left-to-Right Dark Green Fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, #031e13 0%, rgba(3, 30, 19, 0.85) 35%, rgba(5, 41, 26, 0.35) 75%, rgba(3, 30, 19, 0.7) 100%)',
              }}
            ></div>
          </div>

          {/* Left Ornate Golden Arabesque Edge Panel */}
          <div
            className="hidden sm:block absolute inset-y-0 left-0 w-16 lg:w-20 border-r border-[#d4af37]/60 pointer-events-none z-10"
            style={{
              background:
                'radial-gradient(circle at left center, rgba(235, 208, 130, 0.28) 0%, rgba(3, 30, 19, 0.95) 85%)',
              clipPath:
                'polygon(0% 0%, 100% 0%, 65% 22%, 95% 50%, 65% 78%, 100% 100%, 0% 100%)',
            }}
          ></div>

          {/* Right Ornate Golden Arabesque Edge Panel */}
          <div
            className="hidden sm:block absolute inset-y-0 right-0 w-16 lg:w-20 border-l border-[#d4af37]/60 pointer-events-none z-10"
            style={{
              background:
                'radial-gradient(circle at right center, rgba(235, 208, 130, 0.28) 0%, rgba(3, 30, 19, 0.95) 85%)',
              clipPath:
                'polygon(100% 0%, 0% 0%, 35% 22%, 5% 50%, 35% 78%, 0% 100%, 100% 100%)',
            }}
          ></div>

          {/* Inner Content Layout */}
          <div className="relative z-20 w-full px-6 sm:px-20 lg:px-24 py-7 sm:py-8 flex flex-col md:flex-row items-center justify-start text-center md:text-left gap-5 md:gap-8">
            
            {/* Left Arabic Calligraphy ("جَزَاكَ اللَّهُ خَيْرًا") */}
            <div className="shrink-0 flex items-center justify-center">
              <span
                dir="rtl"
                lang="ar"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f6e29c] via-[#ebd082] to-[#c99b32] leading-normal tracking-normal drop-shadow-sm select-none"
              >
                جَزَاكَ اللَّهُ خَيْرًا
              </span>
            </div>

            {/* Golden Vertical Divider Line (Desktop) */}
            <div className="hidden md:block w-[1.5px] h-16 bg-gradient-to-b from-transparent via-[#ebd082]/80 to-transparent shrink-0"></div>

            {/* Horizontal Divider (Mobile) */}
            <div className="md:hidden w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ebd082]/80 to-transparent"></div>

            {/* Gratitude Heading & Dua Message */}
            <div className="flex flex-col justify-center max-w-xl">
              <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-[1.65rem] text-[#ebd082] tracking-wide mb-1.5">
                A Message of Gratitude
              </h3>
              <p className="text-amber-50/90 text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed">
                May Allah accept your donation and reward you with countless blessings
                <br className="hidden sm:inline" /> in this world and the Hereafter. Ameen.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DonateGratitudeBanner;