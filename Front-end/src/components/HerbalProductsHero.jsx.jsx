
import React from 'react';
import {
  FaHome,
  FaChevronRight,
  FaArrowRight,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import HerbalProductsHeropng from '../assets/HerbalProductsHero.png';

const HerbalProductsHero = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] font-sans overflow-hidden">

      {/* Full Width Hero Banner */}
      <div
        className="relative w-full min-h-[350px] sm:min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden border-y border-[#d4af37]/40"
        style={{
          backgroundImage: `url(${HerbalProductsHeropng})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#031e13]/40"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031e13]/90 via-[#031e13]/60 to-[#031e13]/10"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-[8%] py-12 sm:py-16">

          <div className="max-w-3xl flex flex-col items-start text-white">

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#fffaf0] mb-4 tracking-wide leading-tight drop-shadow-lg">
              Natural Herbal Care &amp;
              <br className="hidden sm:block" />

              <span className="text-[#ebd082]">
                Traditional Hikmat
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-emerald-50 text-sm sm:text-base lg:text-lg font-light tracking-wider mb-6 flex flex-wrap items-center gap-2">
              <span>Pure</span>
              <span className="text-[#d4af37]">•</span>
              <span>Natural</span>
              <span className="text-[#d4af37]">•</span>
              <span>Trusted</span>
            </p>

            {/* Golden Divider */}
            <div className="flex items-center gap-3 mb-8 w-full max-w-xs">
              <span className="flex-grow h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent"></span>

              <span className="text-[#d4af37] text-sm">❖</span>

              <span className="flex-grow h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent"></span>
            </div>

            {/* Explore Products Button */}
            <a
              href="#products"
              className="group inline-flex items-center gap-3 border border-[#d4af37] bg-[#031e13]/50 hover:bg-[#d4af37] text-[#ebd082] hover:text-[#031e13] font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              <span>Explore Products</span>

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>

      </div>

      {/* Breadcrumb Outside Banner */}
      <div className="w-full bg-[#fcf8ed] py-4 px-5 sm:px-10 lg:px-[8%] flex items-center gap-2 text-xs sm:text-sm text-amber-950 font-medium border-b border-[#d4af37]/20">

        <FaHome className="text-amber-800 shrink-0" />

        <Link
          to="/"
          className="hover:text-amber-700 hover:underline transition-colors"
        >
          Home
        </Link>

        <FaChevronRight className="text-[10px] text-amber-800/60 shrink-0" />

        <span className="text-amber-900 font-semibold">
          Herbal Products
        </span>

      </div>

    </section>
  );
};

export default HerbalProductsHero;
