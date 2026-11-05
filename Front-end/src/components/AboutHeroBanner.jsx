
import React from 'react';
import { FaHome, FaChevronRight, FaMosque } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutBack from '../assets/aboutus.png';

const AboutHeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#031e13] font-sans">

      {/* Full Width About Banner */}
      <div
        className="relative w-full h-[250px] sm:h-[270px] lg:h-[286px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutBack})`,
        }}
      >

        {/* Subtle Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full items-center">

          <div className="w-full max-w-2xl pl-6 sm:pl-12 md:pl-16 lg:pl-[8%] pr-4 text-white">

            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/70 bg-[#062417]/85 px-3 py-1.5 text-[11px] sm:text-sm text-amber-100 backdrop-blur-sm shadow-md mb-4 sm:mb-5">

              <FaHome className="text-amber-300" />

              <Link
                to="/"
                className="transition-colors hover:text-amber-300"
              >
                Home
              </Link>

              <FaChevronRight className="text-[10px] text-amber-300/80" />

              <span className="font-medium text-amber-200">
                About Us
              </span>

            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[68px] leading-none font-medium tracking-wide text-[#fffaf0] drop-shadow-lg mb-3">
              About Us
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg font-medium leading-relaxed text-white/95 drop-shadow-md mb-5">
              A Path of Knowledge, Compassion &amp; Spiritual Growth
            </p>

            {/* Golden Decorative Line */}
            <div className="flex items-center gap-3 w-full max-w-[270px]">

              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30"></span>

              <FaMosque className="shrink-0 text-[#d4af37] text-sm" />

              <span className="h-[1px] flex-1 bg-gradient-to-l from-[#d4af37] to-[#d4af37]/30"></span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHeroBanner;
