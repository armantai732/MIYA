import React from 'react';
import { FaCheckCircle, FaQuoteLeft, FaUserTie } from 'react-icons/fa';

const SpiritualGuideSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Mosque Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-[#f7f2e1]/70 backdrop-blur-sm border border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Image Arch Frame with Bottom Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
                
                {/* Islamic Arch Border Wrapper */}
                <div 
                  className="w-full aspect-[4/5] bg-gradient-to-b from-[#d4af37] via-[#c59b27] to-[#8a6810] p-[3px] shadow-lg"
                  style={{
                    clipPath: 'polygon(0% 100%, 0% 25%, 15% 12%, 35% 3%, 50% 0%, 65% 3%, 85% 12%, 100% 25%, 100% 100%)',
                    borderRadius: '0 0 1.5rem 1.5rem'
                  }}
                >
                  <div 
                    className="w-full h-full bg-gradient-to-b from-[#082e1d] to-[#031910] overflow-hidden flex items-end justify-center relative"
                    style={{
                      clipPath: 'polygon(0% 100%, 0% 25%, 15% 12%, 35% 3%, 50% 0%, 65% 3%, 85% 12%, 100% 25%, 100% 100%)',
                      borderRadius: '0 0 1.4rem 1.4rem'
                    }}
                  >
                    {/* Placeholder Illustration / Guide Image */}
                    <FaUserTie className="w-full h-4/5 text-[#e5d4a1]/90 object-cover" />
                  </div>
                </div>

                {/* Green Bottom Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 bg-[#09261b] border border-[#d4af37]/60 text-amber-100 text-xs sm:text-sm font-medium py-2 rounded-full text-center shadow-md whitespace-nowrap">
                  Spiritual Guide &amp; Founder
                </div>

              </div>
            </div>

            {/* Middle Column: Title, Bio & Credentials */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left pt-4 lg:pt-0">
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0d3b28] mb-4">
                Our <span className="text-[#c29b38]">Spiritual Guide</span>
              </h2>

              <p className="text-amber-950/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                A dedicated scholar and spiritual guide, committed to the teachings of Islam and the principles of Sufism. With years of experience in Islamic knowledge, spiritual counseling and community service, he continues to inspire thousands towards a righteous and peaceful life.
              </p>

              {/* Credentials Section */}
              <div className="pt-2">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="font-serif font-bold text-base text-[#0d3b28]">Credentials</h3>
                  <span className="w-16 h-[1px] bg-[#d4af37]/60"></span>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-xs sm:text-sm text-amber-950 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <FaCheckCircle className="text-[#09261b] text-sm shrink-0" />
                    <span>Islamic Scholar</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <FaCheckCircle className="text-[#09261b] text-sm shrink-0" />
                    <span>Spiritual Guide</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <FaCheckCircle className="text-[#09261b] text-sm shrink-0" />
                    <span>Community Leader</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <FaCheckCircle className="text-[#09261b] text-sm shrink-0" />
                    <span>Peace Advocate</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Quote Card */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="bg-white/80 backdrop-blur-sm border border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm w-full max-w-sm relative">
                
                {/* Gold Quote Mark */}
                <FaQuoteLeft className="text-[#c29b38] text-3xl mb-3 opacity-80" />

                <p className="text-amber-950/90 text-sm sm:text-base font-serif italic leading-relaxed mb-4">
                  "True knowledge brings peace, and compassion builds a better world."
                </p>

                <span className="text-amber-900 text-xs sm:text-sm font-semibold">
                  — Your Name
                </span>

              </div>
            </div>

          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#d4af37]/60 rounded-tl-xl pointer-events-none"></div>
          <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#d4af37]/60 rounded-tr-xl pointer-events-none"></div>
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#d4af37]/60 rounded-bl-xl pointer-events-none"></div>
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#d4af37]/60 rounded-br-xl pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
};

export default SpiritualGuideSection;