import React from 'react';
import { FaSeedling, FaBookOpen, FaUsers, FaHeart, FaStar } from 'react-icons/fa';

const journeyData = [
  {
    id: 1,
    title: 'Early Days',
    description: 'A humble beginning with a big purpose.',
    icon: <FaSeedling />,
  },
  {
    id: 2,
    title: 'Knowledge Spread',
    description: 'Sharing Islamic teachings with the community.',
    icon: <FaBookOpen />,
  },
  {
    id: 3,
    title: 'Growing Community',
    description: 'Connecting with seekers across regions.',
    icon: <FaUsers />,
  },
  {
    id: 4,
    title: 'Expanding Services',
    description: 'Guidance, courses and spiritual support.',
    icon: <FaHeart />,
  },
  {
    id: 5,
    title: 'A Brighter Future',
    description: 'Continuing our mission for generations.',
    icon: <FaStar />,
  },
];

const OurJourneySection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-20 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Mosque Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-2 w-full max-w-md">
            <span className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent to-[#d4af37]"></span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide px-2">
              Our <span className="text-[#c29b38]">Journey</span>
            </h2>
            <span className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent to-[#d4af37]"></span>
          </div>
        </div>

        {/* Desktop & Tablet Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Gold Line (Visible on md and above) */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-[2px] bg-[#d4af37]/65 z-0"></div>

          {/* Timeline Grid (5 Steps) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {journeyData.map((item, index) => (
              <div 
                key={item.id} 
                className="flex flex-col items-center text-center group"
              >
                
                {/* Milestone Node Badge */}
                <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
                  {/* Scalloped Green Background Shape */}
                  <div 
                    className="absolute inset-0 bg-[#09261b] shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{
                      borderRadius: '35% 65% 65% 35% / 35% 35% 65% 65%',
                    }}
                  ></div>
                  <div className="relative z-10 text-amber-300 text-xl">
                    {item.icon}
                  </div>
                </div>

                {/* Content Details */}
                <h3 className="font-serif font-bold text-lg text-[#0d3b28] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-950/75 font-normal leading-relaxed max-w-[210px]">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurJourneySection;