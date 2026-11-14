
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight, FaMosque } from "react-icons/fa";
import hero from '../assets/serviceshero.png'

const SpiritualServicesHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#031e13] font-sans">

      {/* FULL WIDTH BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Grand mosque at sunset"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* GREEN BLENDING OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031e13] via-[#031e13]/95 via-[38%] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[300px] w-full items-center px-6 py-12 sm:min-h-[350px] sm:px-12 md:px-16 lg:min-h-[490px] lg:px-24 xl:px-32">

        <div className="w-full max-w-[600px] text-white">

          {/* TOP LABEL */}
          <div className="mb-1 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d4af37] sm:w-14" />

            <span className="font-serif text-sm font-semibold tracking-[0.16em] text-[#ebd082] sm:text-xl">
              OUR SPIRITUAL
            </span>

            <span className="h-[2px] w-10 bg-[#d4af37] sm:w-14" />
          </div>

          {/* TITLE */}
          <h1 className="mb-3 font-serif text-5xl font-bold leading-none tracking-tight text-[#fffdf5] drop-shadow-lg sm:text-6xl md:text-7xl lg:text-[82px]">
            Services
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-md text-sm leading-relaxed text-emerald-50/90 sm:text-base md:text-lg">
            Compassionate spiritual support and guidance
            for a peaceful and blessed life.
          </p>

          {/* GOLDEN DIVIDER */}
          <div className="my-7 flex max-w-[400px] items-center gap-2">
            <span className="h-[1px] flex-1 bg-[#d4af37]/80" />
            <FaMosque className="text-lg text-[#ebd082]" />
            <span className="h-[1px] flex-1 bg-[#d4af37]/80" />
          </div>

          {/* BREADCRUMB */}
          <div className="flex items-center gap-3 text-xs font-medium sm:text-sm">
            <Link
              to="/"
              className="flex items-center gap-2 text-amber-50 transition hover:text-[#ebd082]"
            >
              <FaHome className="text-[#d4af37]" />
              Home
            </Link>

            <FaChevronRight className="text-[10px] text-[#d4af37]" />

            <span className="font-semibold text-[#ebd082]">
              Services
            </span>
          </div>

        </div>
      </div>

      {/* GOLDEN BORDER */}
      <div className="pointer-events-none absolute inset-0 border-y border-[#d4af37]/40" />

    </section>
  );
};

export default SpiritualServicesHero;
