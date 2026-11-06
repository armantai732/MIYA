import React from 'react';
import { FaBookOpen, FaEye, FaMosque } from 'react-icons/fa';

const OurStorySection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Mosque Image + Our Story Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Side Image with Gold Arch Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl aspect-[16/9] p-2">
              <div className="w-full h-full rounded-3xl border-2 border-[#d4af37]/60 p-1.5 shadow-xl bg-[#fcf8ed] relative">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.openai.com/static-rsc-4/mWTREwBJY13889xiZVx9M8Ha4mJwcZ-u0Fb5yv1XneuJuF-TbAMo_Qth29S8E2GFiGYOQe2w2b5Nppc2boeOO-nwN-xlXZO9_Mh0mH-19Q-IRW7ids4E6o-n2NrjgZxR7iPh-Hy7Z4mOhAbdsO69FEFLgh44YNTJqg0dvFUAKqygA5v-Tco25L8gRCfBT12D?purpose=fullsize"
                    alt="Sheikh Zayed Mosque"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Gold Frame Corner Accents */}
                {/* <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] rounded-tl-xl pointer-events-none"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] rounded-tr-xl pointer-events-none"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] rounded-bl-xl pointer-events-none"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] rounded-br-xl pointer-events-none"></div> */}
              </div>
            </div>
          </div>

          {/* Right Side Story Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Heading Accent */}
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-10 h-[1.5px] bg-[#d4af37]"></span>
              <FaMosque className="text-[#d4af37] text-sm" />
              <span className="w-10 h-[1.5px] bg-[#d4af37]"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0d3b28] mb-6">
              Our <span className="text-[#c29b38]">Story</span>
            </h2>

            <p className="text-amber-950/80 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Our journey is rooted in the timeless teachings of Islam and the profound wisdom of Sufism. We are dedicated to spreading true knowledge, promoting spiritual well-being, and guiding individuals towards a peaceful and purposeful life.
            </p>

            <p className="text-amber-950/80 text-sm sm:text-base leading-relaxed font-normal">
              Through authentic Islamic teachings, spiritual guidance, and compassionate service, we strive to build a community that lives with faith, kindness and selflessness. Our mission is not just to share knowledge, but to inspire positive change in hearts and society.
            </p>

          </div>

        </div>

        {/* Bottom Section: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Our Mission Card */}
          <div className="relative bg-white/70 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 flex items-start space-x-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#09261b] text-amber-300 flex items-center justify-center text-2xl shrink-0 shadow-md">
              <FaBookOpen />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-[#0d3b28] mb-2">
                Our <span className="text-[#c29b38]">Mission</span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed">
                To spread authentic Islamic knowledge, provide spiritual guidance, and serve humanity with compassion and sincerity.
              </p>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="relative bg-white/70 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 flex items-start space-x-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#09261b] text-amber-300 flex items-center justify-center text-2xl shrink-0 shadow-md">
              <FaEye />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-[#0d3b28] mb-2">
                Our <span className="text-[#c29b38]">Vision</span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed">
                To build a peaceful, knowledgeable and compassionate society rooted in faith, where every individual finds spiritual peace.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStorySection;