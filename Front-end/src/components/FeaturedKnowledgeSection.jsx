import React from 'react';
import { FaMosque, FaArrowRight, FaQuoteLeft, FaBookOpen } from 'react-icons/fa';

const FeaturedKnowledgeSection = () => {
    return (
        <section className="relative w-full bg-[#031e13] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">

            {/* Background Subtle Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
                style={{
                    backgroundImage: `url('')`
                }}
            ></div>

            {/* Ornate Golden Corner Geometric Frames */}
            <div className="absolute top-0 left-0 w-24 sm:w-36 h-24 sm:h-36 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-10"></div>
            <div className="absolute bottom-0 right-0 w-24 sm:w-36 h-24 sm:h-36 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-10"></div>

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Islamic Arch Image Frame */}
                    <div className="flex justify-center lg:col-span-4 lg:justify-start">
                        <div className="group relative w-full max-w-[350px]">

                            {/* Outer Golden Frame */}
                            <div className="absolute -inset-2 rounded-[180px_180px_25px_25px] border border-[#d4af37]/70" />

                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-[170px_170px_22px_22px] border-[5px] border-[#b8932b] bg-[#06291a] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop"
                                        alt="Holy Quran and Islamic books"
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Image Bottom Overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#031e13] via-[#031e13]/60 to-transparent px-6 pb-8 pt-24">
                                    <p className="font-serif text-xl font-bold text-amber-50">
                                        Knowledge is Light
                                    </p>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ebd082]">
                                        Learn • Reflect • Practice
                                    </p>
                                </div>
                            </div>

                            {/* Floating Book Badge */}
                            <div className="absolute -right-3 top-12 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full border-[3px] border-[#031e13] bg-gradient-to-br from-[#ebd082] to-[#c59b27] shadow-xl sm:-right-5">
                                <FaBookOpen className="mb-1 text-xl text-[#031e13]" />
                                <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#031e13]">
                                    Knowledge
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Featured Knowledge Content */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left text-white">

                        {/* Top Badge Accent */}
                        <div className="flex items-center space-x-2 text-[#ebd082] text-xs sm:text-sm font-medium mb-2">
                            <FaMosque className="text-sm" />
                            <span className="tracking-wide">Featured Knowledge</span>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-amber-50 mb-4 tracking-wide">
                            The Light of Guidance
                        </h2>

                        {/* Subtitle / Description */}
                        <p className="text-emerald-100/80 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-md">
                            Islam is a complete way of life, bringing peace to the heart, guidance to the mind and blessings to the soul.
                        </p>

                        {/* Read More Golden Button */}
                        <a
                            href="#read-more"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-amber-950 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all duration-300"
                        >
                            <span>Read More</span>
                            <FaArrowRight className="text-xs" />
                        </a>

                    </div>

                    {/* Right Column: Quran Verse Quote Box */}
                    <div className="lg:col-span-3 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm bg-[#06291a]/80 backdrop-blur-sm border border-[#d4af37]/50 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-lg">

                            {/* Gold Quote Icon */}
                            <FaQuoteLeft className="text-[#ebd082] text-2xl mb-3 opacity-90" />

                            {/* Verse Text */}
                            <p className="text-amber-100/90 font-serif italic text-sm sm:text-base leading-relaxed mb-4">
                                "Indeed, in the remembrance of Allah do hearts find peace."
                            </p>

                            {/* Surah Reference */}
                            <span className="text-[#ebd082] text-xs sm:text-sm font-medium tracking-wide">
                                — Surah Ar-Ra'd (13:28)
                            </span>

                            {/* Bottom Decorative Divider Accent */}
                            <div className="flex items-center justify-center space-x-2 mt-4 w-full max-w-[120px]">
                                <span className="flex-grow h-[1px] bg-[#d4af37]/60"></span>
                                <span className="text-[#d4af37] text-[10px]">❖</span>
                                <span className="flex-grow h-[1px] bg-[#d4af37]/60"></span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedKnowledgeSection;