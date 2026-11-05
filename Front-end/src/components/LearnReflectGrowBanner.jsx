
import React from 'react';
import { FaArrowRight, FaChevronRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import courseshero from '../assets/courseshero.png';

const LearnReflectGrowBanner = () => {
    return (
        <section className="relative w-full bg-[#fcf8ed] font-sans overflow-hidden">

            {/* Main Banner with Background Image */}
            <div
                className="relative w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex items-center justify-center overflow-hidden border-y border-[#d4af37]/40"
                style={{
                    backgroundImage: `url(${courseshero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#031e13]/55"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#031e13]/75 via-[#031e13]/35 to-[#031e13]/75"></div>
                {/* Banner Content */}
                <div className="relative z-20 w-full max-w-5xl mx-auto px-5 py-14 sm:py-16 text-center flex flex-col items-center">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#fffaf0] mb-4 tracking-wide drop-shadow-lg">
                        Learn, Reflect &amp; Grow
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light max-w-lg mb-7 leading-relaxed drop-shadow-md">
                        Enhance your knowledge, strengthen your faith and find peace in your life.
                    </p>

                    {/* Golden Divider */}
                    <div className="flex items-center justify-center gap-3 mb-8 w-full max-w-xs">
                        <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]"></span>
                        <span className="text-[#d4af37] text-sm">◆</span>
                        <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]"></span>
                    </div>

                    {/* Explore Courses Button */}
                    <a
                        href="#explore-courses"
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-amber-950 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-xl transition-all duration-300"
                    >
                        <span>Explore Courses</span>
                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                </div>
            </div>

            {/* Breadcrumb Outside Banner */}
            <div className="w-full bg-[#fcf8ed] py-4 px-5 sm:px-10 lg:px-[8%] flex items-center gap-2 text-xs sm:text-sm text-amber-950 font-medium border-b border-[#d4af37]/20">

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

export default LearnReflectGrowBanner;
