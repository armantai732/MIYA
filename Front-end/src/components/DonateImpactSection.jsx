import React from 'react';
import { FaBookOpen, FaRegHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';

const impactCards = [
  {
    id: 1,
    title: 'Spread Knowledge',
    description: 'Help us share authentic Islamic teachings',
    icon: <FaBookOpen />,
    hasBottomFlourish: false,
  },
  {
    id: 2,
    title: 'Support the Needy',
    description: 'Bring hope and relief to deserving people',
    icon: <FaRegHeart />,
    hasBottomFlourish: false,
  },
  {
    id: 3,
    title: 'Build Community',
    description: 'Strengthen the bond of brotherhood',
    icon: <FaUsers />,
    hasBottomFlourish: false,
  },
  {
    id: 4,
    title: 'Earn Blessings',
    description: 'Be a reason for goodness',
    icon: <FaHandsHelping />,
    hasBottomFlourish: true,
  },
];

const DonateImpactSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-14 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Islamic Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Double Golden Lines */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-5 max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Left Double Golden Lines */}
          <div className="flex-grow flex flex-col space-y-1">
            <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
            <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#09261b] tracking-wide px-2 whitespace-nowrap">
            Your Impact
          </h2>

          {/* Right Double Golden Lines */}
          <div className="flex-grow flex flex-col space-y-1">
            <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
            <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
          </div>
        </div>

        {/* 4 Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {impactCards.map((card) => (
            <div
              key={card.id}
              className="relative bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl px-5 py-7 sm:py-8 text-center flex flex-col items-center justify-center shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#d4af37] group"
            >
              {/* Dark Green Icon */}
              <div className="text-[#09261b] text-3xl sm:text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-serif font-bold text-[#09261b] text-base sm:text-lg mb-2">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed max-w-[200px]">
                {card.description}
              </p>

              {/* Optional Golden Bottom Flourish (4th Card Accent) */}
              {card.hasBottomFlourish && (
                <div className="flex items-center justify-center space-x-1.5 w-28 mt-3">
                  <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[#c99b32]/80"></span>
                  <span className="text-[#c99b32] text-[10px]">❖</span>
                  <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-[#c99b32]/80"></span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DonateImpactSection;