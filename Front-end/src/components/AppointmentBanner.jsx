import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import AppointmentToday from '../assets/AppointmentToday.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Import global context

const AppointmentBanner = () => {
  const { t } = useLanguage(); // Get global translations

  return (
    <section className="relative w-full overflow-hidden bg-[#031e13] px-4 py-8 sm:px-6 sm:py-10 lg:px-12 border-y-2 border-[#d4af37]">

      {/* Background Image */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-left opacity-30"
        style={{
          backgroundImage: `url(${AppointmentToday})`
        }}
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#00351f]/40 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Center Text */}
        <div className="flex-1 text-center sm:ml-36 lg:ml-48">

          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-serif font-semibold text-amber-50 tracking-wide mb-2">
            {t.bannerHeading || "Book an Appointment Today"}
          </h2>

          <p className="text-emerald-100/80 text-xs sm:text-sm lg:text-base font-light">
            {t.bannerSubheading || "Get personal guidance and consultation from our team"}
          </p>

        </div>

        {/* Right Side Button */}
        <div className="shrink-0">

          <Link
            to={"/appointment"}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-amber-950 font-semibold text-sm sm:text-base px-7 py-3 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <FaCalendarAlt />
            <span>{t.bannerCta || "Book Now"}</span>
            <FaArrowRight className="text-xs" />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AppointmentBanner;