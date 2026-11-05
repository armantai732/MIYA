import React from 'react';
import { FaLeaf, FaShieldAlt, FaMortarPestle, FaHandshake } from 'react-icons/fa';

const trustItems = [
  {
    id: 1,
    title: '100% Natural & Pure',
    icon: <FaLeaf />,
  },
  {
    id: 2,
    title: 'Trusted Quality & Purity',
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: 'Traditional Hikmat',
    icon: <FaMortarPestle />,
  },
  {
    id: 4,
    title: 'Your Health Our Priority',
    icon: <FaHandshake />,
  },
];

const HerbalTrustBanner = () => {
  return (
    <section className="relative w-full bg-[#031e13] py-10 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden border-y border-[#d4af37]/40">
      
      {/* Background Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop')`
        }}
      ></div>

      {/* Optional Side Decorative Corners / Patterns */}
      <div className="absolute top-0 left-0 w-20 h-full border-r border-[#d4af37]/20 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 right-0 w-20 h-full border-l border-[#d4af37]/20 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 4 Columns Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          {trustItems.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center justify-center space-x-4 px-4 relative ${
                index < trustItems.length - 1 ? 'lg:border-r lg:border-[#d4af37]/40' : ''
              }`}
            >
              {/* Golden Icon */}
              <div className="text-[#ebd082] text-3xl sm:text-4xl shrink-0">
                {item.icon}
              </div>

              {/* Title Text */}
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-amber-50 text-sm sm:text-base leading-snug">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HerbalTrustBanner;