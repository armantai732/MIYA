import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const stepsData = [
  {
    step: '1',
    title: 'Browse Courses',
    description: 'Explore our wide range of courses',
  },
  {
    step: '2',
    title: 'Register / Enroll',
    description: 'Create your account and enroll',
  },
  {
    step: '3',
    title: 'Start Learning',
    description: 'Begin your spiritual journey',
  },
];

const EnrollStepsSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Rounded Card Box */}
        <div className="bg-[#f7f2e1]/80 backdrop-blur-sm border border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Header with Golden Accent Lines & Diamonds */}
          <div className="text-center mb-10 flex flex-col items-center">
            <div className="flex items-center justify-center space-x-3 w-full max-w-lg">
              <span className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-[#d4af37]"></span>
              <span className="text-[#d4af37] text-xs">◆</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d3b28] tracking-wide px-2 whitespace-nowrap">
                Simple 3 Steps to Enroll
              </h2>
              <span className="text-[#d4af37] text-xs">◆</span>
              <span className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent via-[#d4af37]/80 to-[#d4af37]"></span>
            </div>
          </div>

          {/* 3 Steps Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
            {stepsData.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex items-center space-x-4 group justify-center md:justify-start">
                  
                  {/* Circular Dark Green Step Badge */}
                  <div className="w-14 h-14 rounded-full bg-[#09261b] text-amber-300 font-serif font-bold text-2xl flex items-center justify-center shrink-0 shadow-md border border-amber-300/30 transition-transform duration-300 group-hover:scale-105">
                    {item.step}
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0d3b28] leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-950/75 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Arrow (Visible on desktop between steps) */}
                  {index < stepsData.length - 1 && (
                    <div className="hidden lg:flex flex-grow justify-center pl-4 text-[#09261b]/60">
                      <FaArrowRight className="text-base" />
                    </div>
                  )}

                </div>
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EnrollStepsSection;