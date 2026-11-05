import React from 'react';
import { FaMosque, FaBookOpen, FaHeart, FaHandshake } from 'react-icons/fa';

const valuesData = [
  {
    id: 1,
    title: 'Faith',
    description: 'Strengthening our connection with Allah.',
    icon: <FaMosque />,
  },
  {
    id: 2,
    title: 'Knowledge',
    description: 'Seeking and sharing beneficial knowledge.',
    icon: <FaBookOpen />,
  },
  {
    id: 3,
    title: 'Compassion',
    description: 'Caring for humanity with kindness.',
    icon: <FaHeart />,
  },
  {
    id: 4,
    title: 'Service',
    description: 'Serving others selflessly.',
    icon: <FaHandshake />,
  },
];

const OurValuesSection = () => {
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
        
        {/* Section Header with Golden Accent Divider & Mosque Icon */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#d4af37]"></span>
            <FaMosque className="text-[#d4af37] text-base" />
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#d4af37]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide">
            Our <span className="text-[#c29b38]">Values</span>
          </h2>
        </div>

        {/* Values 4-Column Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val) => (
            <div
              key={val.id}
              className="relative bg-white/80 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Ornate Scalloped / Starburst Islamic Icon Frame */}
              <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-[#09261b] shadow-md transition-transform duration-300 group-hover:rotate-45"
                  style={{
                    borderRadius: '35% 65% 65% 35% / 35% 35% 65% 65%',
                  }}
                ></div>
                <div className="relative z-10 text-amber-300 text-2xl">
                  {val.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl text-[#0d3b28] mb-2">
                {val.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed max-w-[200px]">
                {val.description}
              </p>

              {/* Corner Frame Accents */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-[#d4af37]/60 rounded-tl-lg pointer-events-none"></div>
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-[#d4af37]/60 rounded-tr-lg pointer-events-none"></div>
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-[#d4af37]/60 rounded-bl-lg pointer-events-none"></div>
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-[#d4af37]/60 rounded-br-lg pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValuesSection;