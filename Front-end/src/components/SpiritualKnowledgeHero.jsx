
import React from 'react';
import {
  FaHome,
  FaChevronRight,
  FaMosque,
  FaArrowRight,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import hero from '../assets/SpiritualKnowledge.png';

const SpiritualKnowledgeHero = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-4 sm:py-6 font-sans overflow-hidden">

      {/* Full Width Hero Banner */}
      <div
        className="relative w-full overflow-hidden border-y border-[#a88238]/50 shadow-xl"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031e13]/95 via-[#031e13]/80 to-[#031e13]/20"></div>

        {/* Banner Content */}
        <div className="relative z-10 flex min-h-[380px] sm:min-h-[430px] lg:min-h-[480px] items-center px-6 sm:px-12 lg:px-[8%]">

          <div className="w-full max-w-3xl py-12">

            {/* Top Decorative Divider */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
              <FaMosque className="text-[#d4af37] text-lg" />
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-[#fffaf0] mb-5 tracking-wide leading-tight drop-shadow-lg">
              Spiritual Knowledge
            </h1>

            {/* Subtitle */}
            <p className="text-emerald-50/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-8">
              Learn, Reflect and Grow with the Timeless Wisdom of Islam and the Teachings of Sufism.
            </p>

            {/* Explore Button */}
            <a
              href="#explore"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-[#2b210b] font-semibold px-6 sm:px-7 py-3.5 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              <span>Explore Knowledge</span>

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Bottom Gold Decoration */}
            <div className="flex items-center gap-3 mt-8 max-w-sm">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#d4af37] to-transparent"></span>
              <FaMosque className="text-[#d4af37] text-sm" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-[#d4af37] to-transparent"></span>
            </div>

          </div>

        </div>

        {/* Decorative Golden Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none"></div>

      </div>

      {/* Bottom Breadcrumb */}
      <div className="w-full px-5 sm:px-10 lg:px-[8%] mt-5 flex items-center gap-2 text-xs sm:text-sm text-amber-950 font-medium">

        <FaHome className="text-amber-800" />

        <Link
          to="/"
          className="hover:text-amber-700 hover:underline transition-colors"
        >
          Home
        </Link>

        <FaChevronRight className="text-[10px] text-amber-800/60" />

        <span className="text-amber-900 font-semibold">
          Spiritual Knowledge
        </span>

      </div>

    </section>
  );
};

export default SpiritualKnowledgeHero;
