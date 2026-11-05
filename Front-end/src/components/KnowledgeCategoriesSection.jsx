
import React from "react";
import {
  FaBookOpen,
  FaMosque,
  FaPrayingHands,
  FaBalanceScale,
  FaHandsHelping,
  FaHeart,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const categoriesData = [
  {
    id: 1,
    title: "Quran & Tafseer",
    description:
      "Understand the Divine Book with authentic explanation and deeper insight.",
    icon: <FaBookOpen />,
    link: "#quran",
    number: "01",
  },
  {
    id: 2,
    title: "Sunnah & Hadith",
    description:
      "Explore the teachings and traditions of Prophet Muhammad ﷺ.",
    icon: <FaMosque />,
    link: "#sunnah",
    number: "02",
  },
  {
    id: 3,
    title: "Sufism & Tasawwuf",
    description:
      "Discover the journey of spiritual growth and inner peace.",
    icon: <FaPrayingHands />,
    link: "#sufism",
    number: "03",
  },
  {
    id: 4,
    title: "Islamic Ethics",
    description:
      "Learn values of honesty, kindness and righteous living.",
    icon: <FaBalanceScale />,
    link: "#ethics",
    number: "04",
  },
  {
    id: 5,
    title: "Dua & Zikr",
    description:
      "Strengthen your connection with Allah through remembrance.",
    icon: <FaHandsHelping />,
    link: "#dua",
    number: "05",
  },
  {
    id: 6,
    title: "Spiritual Wellness",
    description:
      "Explore guidance for a peaceful, balanced and mindful life.",
    icon: <FaHeart />,
    link: "#wellness",
    number: "06",
  },
];

const KnowledgeCategoriesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fcf8ed] py-16 font-sans sm:py-20 lg:py-24">

      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-900/10 blur-[100px]" />

      {/* Decorative Corner Lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 border-l border-t border-[#d4af37]/40 sm:h-36 sm:w-36" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 border-b border-r border-[#d4af37]/40 sm:h-36 sm:w-36" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          {/* Top Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-5 py-2">
            <FaStar className="text-[10px] text-[#b18a2d]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#8a6810] sm:text-xs">
              Explore & Discover
            </span>
            <FaStar className="text-[10px] text-[#b18a2d]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#0d3b28] sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="block text-[#b18a2d]">
              Knowledge Categories
            </span>
          </h2>

          {/* Golden Divider */}
          <div className="mx-auto mt-5 flex max-w-xs items-center gap-3">
            <span className="h-px flex-1 bg-[#d4af37]/70" />
            <FaMosque className="text-sm text-[#b18a2d]" />
            <span className="text-xs text-[#d4af37]">❖</span>
            <span className="h-px flex-1 bg-[#d4af37]/70" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-amber-950/70 sm:text-base">
            Discover meaningful Islamic teachings, spiritual wisdom and
            timeless guidance through our carefully organized knowledge
            categories.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">

          {categoriesData.map((cat) => (
            <div
              key={cat.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#d4af37]/35 bg-white/80 p-6 shadow-[0_8px_30px_rgba(3,30,19,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/80 hover:bg-white hover:shadow-[0_20px_45px_rgba(3,30,19,0.12)] sm:p-7"
            >

              {/* Top Decorative Background */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#d4af37]/10 transition-transform duration-500 group-hover:scale-150" />

              {/* Card Number */}
              <div className="absolute right-6 top-6 font-serif text-sm font-bold tracking-widest text-[#b18a2d]/50">
                {cat.number}
              </div>

              {/* Icon */}
              <div className="relative mb-6 flex h-[76px] w-[76px] items-center justify-center">

                <div className="absolute inset-0 rotate-45 rounded-[19px] border border-[#d4af37]/50 bg-[#031e13] shadow-lg transition-transform duration-500 group-hover:rotate-[60deg] group-hover:scale-105" />

                <div className="relative z-10 text-2xl text-[#ebd082] transition-transform duration-500 group-hover:scale-110">
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col">

                <h3 className="font-serif text-xl font-bold text-[#0d3b28] transition-colors duration-300 group-hover:text-[#a47b1c] sm:text-2xl">
                  {cat.title}
                </h3>

                <div className="my-3 flex w-20 items-center gap-2">
                  <span className="h-[2px] flex-1 bg-[#d4af37]/70 transition-all duration-300 group-hover:w-full" />
                  <span className="text-[9px] text-[#b18a2d]">◆</span>
                </div>

                <p className="mb-7 flex-1 text-sm leading-7 text-amber-950/70">
                  {cat.description}
                </p>

                {/* Learn More */}
                <a
                  href={cat.link}
                  className="group/link inline-flex w-full items-center justify-between rounded-xl border border-[#0d3b28]/15 bg-[#031e13] px-5 py-3.5 text-sm font-semibold text-amber-50 shadow-sm transition-all duration-300 hover:border-[#d4af37] hover:bg-[#0d3b28]"
                >
                  <span>Explore Category</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#ebd082] transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#d4af37] group-hover/link:text-[#031e13]">
                    <FaArrowRight className="text-[10px]" />
                  </span>
                </a>
              </div>

              {/* Golden Corner Accents */}
              <div className="pointer-events-none absolute left-2 top-2 h-5 w-5 rounded-tl-lg border-l border-t border-[#d4af37]/50" />
              <div className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 rounded-br-lg border-b border-r border-[#d4af37]/50" />

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="font-serif text-sm italic text-[#0d3b28]/70 sm:text-base">
            "Seek knowledge from the cradle to the grave."
          </p>
          <div className="mx-auto mt-3 h-[2px] w-16 rounded-full bg-[#d4af37]/70" />
        </div>

      </div>
    </section>
  );
};

export default KnowledgeCategoriesSection;
