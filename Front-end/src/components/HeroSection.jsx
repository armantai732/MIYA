import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import background from '../assets/backgroundvideo2.mp4'

const HeroSection = () => {
  return (
    <section className="w-full bg-[#061d14]">
      <div className="relative mx-auto w-full max-w-[1800px] overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={background} type="video/mp4" />
          Your browser does not support video.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002619]/90 via-[#002619]/60 to-[#002619]/20" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[430px] items-center px-6 py-12 sm:min-h-[480px] sm:px-12 lg:min-h-[min(45vw,650px)] lg:px-20">

          <div className="w-full max-w-[540px] text-white">

            {/* Subtitle */}
            <div className="mb-5 flex items-center gap-3 text-xs tracking-[0.22em] text-[#d9ae58] sm:text-sm">
              <span className="h-[1px] w-8 bg-[#c99a43]" />
              <span>Seek&nbsp; • &nbsp;Learn&nbsp; • &nbsp;Heal</span>
              <span className="h-[1px] w-8 bg-[#c99a43]" />
            </div>

            {/* Heading */}
            <h1 className="mb-5 font-serif text-3xl font-medium leading-[1.15] text-[#fff9eb] sm:text-4xl lg:text-[48px]">
              A Journey of
              <br />
              Knowledge, Healing &
              <br />
              Spiritual Growth
            </h1>

            {/* Description */}
            <p className="mb-7 max-w-[440px] text-sm leading-6 text-[#f0e9d9] sm:text-base">
              Discover the light of Islamic teachings, the guidance
              of Sufism and the blessings of authentic Hikmat.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

              <a
                href="#explore"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#e8b65b] to-[#f5d38b] px-5 py-3 text-sm font-semibold text-[#38240b] shadow-lg transition-all duration-300 hover:brightness-110"
              >
                Explore Our Knowledge
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="#book"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#d6aa59]/70 bg-[#082b20]/60 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d6aa59]/15"
              >
                <FaCalendarAlt className="text-[#e6bd70]" />
                Book an Appointment
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;