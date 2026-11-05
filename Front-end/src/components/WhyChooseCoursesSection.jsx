import React from 'react';
import { FaBookOpen, FaUserGraduate, FaLaptop, FaAward } from 'react-icons/fa';

const featuresData = [
  {
    id: 1,
    title: 'Authentic Knowledge',
    description: 'Based on Quran & Sunnah',
    icon: <FaBookOpen />,
  },
  {
    id: 2,
    title: 'Expert Instructors',
    description: 'Learn from qualified scholars',
    icon: <FaUserGraduate />,
  },
  {
    id: 3,
    title: 'Flexible Learning',
    description: 'Anytime, Anywhere',
    icon: <FaLaptop />,
  },
  {
    id: 4,
    title: 'Lifetime Access',
    description: 'Learn at your own pace',
    icon: <FaAward />,
  },
];

const WhyChooseCoursesSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Golden Accent Dividers */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 w-full max-w-xl">
            <span className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-[#d4af37]"></span>
            <span className="text-[#d4af37] text-xs">◆</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide px-3 whitespace-nowrap">
              Why Choose Our Courses?
            </h2>
            <span className="text-[#d4af37] text-xs">◆</span>
            <span className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent via-[#d4af37]/80 to-[#d4af37]"></span>
          </div>
        </div>

        {/* 4 Feature Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#d4af37]/30">
          {featuresData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center px-4 group"
            >
              
              {/* Circular Dark Green Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-[#09261b] text-amber-300 flex items-center justify-center text-2xl mb-4 shadow-md border border-amber-300/30 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-lg text-[#0d3b28] mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-amber-950/75 font-normal leading-relaxed max-w-[200px]">
                {item.description}
              </p>

              {/* Bottom Dot Accent */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseCoursesSection;