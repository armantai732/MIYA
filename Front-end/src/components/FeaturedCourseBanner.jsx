import React from 'react';
import { FaClock, FaChartBar, FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';

const FeaturedCourseBanner = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-10 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Main Container Card with Arch Corner Border */}
      <div className="relative max-w-7xl mx-auto bg-[#031e13] rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden text-white">
        
        {/* Background Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: `url('')`
          }}
        ></div>

        {/* Ornate Golden Corner Geometric Overlay (Right Side) */}
        <div className="absolute top-0 right-0 w-32 sm:w-44 h-32 sm:h-44 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-10 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 sm:w-44 h-32 sm:h-44 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-10 rounded-br-3xl"></div>

        {/* Top-Left Floating "Most Popular" Tag */}
        <div className="absolute top-4 left-4 z-30 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] text-amber-950 font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 border border-amber-200">
          <FaStar className="text-amber-950 text-xs" />
          <span>Most Popular</span>
        </div>

        {/* Main Banner Flex Grid */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          
          {/* Left Column: Image Area */}
          <div className="lg:col-span-4 flex justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-xs aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4af37]/50 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop"
                alt="Holy Quran and Lantern"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center Column: Course Info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            <span className="text-[#ebd082] text-xs sm:text-sm font-medium tracking-wide mb-1">
              Featured Course
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-amber-50 mb-3 tracking-wide">
              Complete Quranic Guidance
            </h2>

            <p className="text-emerald-100/80 text-xs sm:text-sm font-light leading-relaxed mb-5 max-w-md">
              A comprehensive course to understand the Quran with translation, tafseer and practical lessons.
            </p>

            {/* Meta Stats Divider Line */}
            <div className="w-full max-w-md h-[1px] bg-[#d4af37]/30 mb-4"></div>

            {/* Duration & Skill Level */}
            <div className="flex items-center space-x-5 text-xs sm:text-sm text-amber-200/90 font-medium mb-6">
              <div className="flex items-center space-x-1.5">
                <FaClock className="text-[#ebd082]" />
                <span>30+ Hours</span>
              </div>
              <span>|</span>
              <div className="flex items-center space-x-1.5">
                <FaChartBar className="text-[#ebd082]" />
                <span>All Levels</span>
              </div>
            </div>

            {/* Enroll Now Golden Button */}
            <a
              href="#enroll"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-amber-950 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all duration-300"
            >
              <span>Enroll Now</span>
              <FaArrowRight className="text-xs" />
            </a>

          </div>

          {/* Right Column: Features Checklist with Vertical Divider */}
          <div className="lg:col-span-3 flex items-center lg:border-l lg:border-[#d4af37]/30 lg:pl-8 pt-4 lg:pt-0">
            <div className="flex flex-col space-y-3.5 text-xs sm:text-sm text-amber-100/90 font-medium w-full">
              
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#ebd082] text-base shrink-0" />
                <span>Expert Guidance</span>
              </div>

              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#ebd082] text-base shrink-0" />
                <span>Easy Learning</span>
              </div>

              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#ebd082] text-base shrink-0" />
                <span>Lifetime Access</span>
              </div>

              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#ebd082] text-base shrink-0" />
                <span>Certificate Provided</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedCourseBanner;