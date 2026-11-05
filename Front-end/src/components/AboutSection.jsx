import React from 'react';
import { FaBookOpen, FaHands, FaLeaf, FaArrowRight } from 'react-icons/fa';
import image from '../assets/aboutmosque.png'

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Pattern or Corner Motif Accent */}
      {/* <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-amber-800">
          <path d="M0 0C50 0 100 50 100 100H0V0Z" fill="currentColor" />
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Islamic Arch (Mehrab) Image Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] p-2">
              
              {/* Outer Golden Border with Curved Mehrab Arch Clip Path */}
              <div 
                className="w-full h-full bg-gradient-to-b from-[#d4af37] via-[#c59b27] to-[#8a6810] p-[3px] shadow-xl"
                style={{
                  clipPath: 'polygon(0% 100%, 0% 25%, 15% 12%, 35% 3%, 50% 0%, 65% 3%, 85% 12%, 100% 25%, 100% 100%)',
                  borderRadius: '0 0 1rem 1rem'
                }}
              >
                {/* Inner Content Container */}
                <div 
                  className="w-full h-full bg-[#fcf8ed] overflow-hidden relative"
                  style={{
                    clipPath: 'polygon(0% 100%, 0% 25%, 15% 12%, 35% 3%, 50% 0%, 65% 3%, 85% 12%, 100% 25%, 100% 100%)',
                    borderRadius: '0 0 0.9rem 0.9rem'
                  }}
                >
                  <img
                    src={image}
                    alt="Islamic Dome and Guidance"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Middle Column: Text & Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Top Subheading */}
            <div className="flex items-center space-x-3 text-amber-700 text-xs sm:text-sm font-medium tracking-wide mb-3">
              <span className="w-8 h-[1px] bg-amber-600/60"></span>
              <span>Welcome to Our Website</span>
              <span className="w-8 h-[1px] bg-amber-600/60"></span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-amber-950 leading-tight mb-5">
              Guidance for a Better Life
            </h2>

            {/* Description Paragraph */}
            <p className="text-amber-950/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              We are dedicated to spreading the message of peace, love and spiritual well-being through Islamic knowledge, Sufi wisdom and traditional Hikmat. Our mission is to help you find peace in your heart, solve life's challenges and move towards Allah.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#about"
                className="inline-flex items-center space-x-2 bg-[#0d3b28] hover:bg-[#07291b] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Know More About Us</span>
                <FaArrowRight className="text-xs ml-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f5eecb] flex items-center justify-center text-[#0d3b28] text-xl shrink-0">
                <FaBookOpen />
              </div>
              <div>
                <h3 className="font-bold text-amber-950 text-base leading-snug">Islamic Knowledge</h3>
                <p className="text-xs text-amber-800/70 font-medium">Learn with wisdom</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f5eecb] flex items-center justify-center text-[#0d3b28] text-xl shrink-0">
                <FaHands />
              </div>
              <div>
                <h3 className="font-bold text-amber-950 text-base leading-snug">Spiritual Guidance</h3>
                <p className="text-xs text-amber-800/70 font-medium">Find inner peace</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f5eecb] flex items-center justify-center text-[#0d3b28] text-xl shrink-0">
                <FaLeaf />
              </div>
              <div>
                <h3 className="font-bold text-amber-950 text-base leading-snug">Hikmat &amp; Healing</h3>
                <p className="text-xs text-amber-800/70 font-medium">Live a healthy life</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;