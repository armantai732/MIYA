import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from 'react-icons/fa';
import background from '../assets/background1.png'

const testimonialsData = [
    {
        id: 1,
        quote: "This platform has brought peace and positivity in my life. The guidance is truly valuable. May Allah bless this effort.",
        name: "Ayesha Khan",
        location: "Ahmedabad",
    },
    {
        id: 2,
        quote: "The spiritual courses and Hikmat guidance completely transformed my routine and mindset. Highly recommended!",
        name: "Mohammad Tariq",
        location: "Mumbai",
    },
    {
        id: 3,
        quote: "Authentic knowledge and genuine support. The consultations helped me navigate difficult decisions with confidence.",
        name: "Fatima Sheikh",
        location: "Delhi",
    },
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="relative w-full bg-[#031e13] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">

            {/* Background Subtle Texture Overlay */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
                style={{
                    backgroundImage: `url(${background})`,
                    opacity: 1,
                }}
            ></div>

            {/* Golden Corner Geometric Arch Overlays */}
            {/* <div className="absolute top-0 left-0 w-24 sm:w-36 h-24 sm:h-36 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-10"></div> */}
            {/* <div className="absolute bottom-0 right-0 w-24 sm:w-36 h-24 sm:h-36 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-10"></div> */}

            <div className="max-w-5xl mx-auto relative z-20 text-center text-white">

                {/* Section Header */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-4xl font-serif font-medium text-amber-50 tracking-wide mb-2">
                        What Our Followers Say
                    </h2>
                    <p className="text-emerald-100/80 text-sm sm:text-base font-light">
                        Real stories, real transformation
                    </p>
                </div>

                {/* Testimonial Content Wrapper */}
                <div className="relative flex items-center justify-center px-4 sm:px-12 py-6">

                    {/* Left Golden Quote Mark */}
                    <div className="hidden sm:block text-amber-400/80 text-4xl lg:text-5xl mr-6 select-none">
                        <FaQuoteLeft />
                    </div>

                    {/* Center Main Card Content */}
                    <div className="flex flex-col sm:flex-row items-center max-w-2xl text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">

                        {/* User Avatar Circle */}
                        <div className="shrink-0 text-gray-300 text-6xl sm:text-7xl">
                            <FaUserCircle className="bg-white rounded-full text-gray-400" />
                        </div>

                        {/* Quote and Author Details */}
                        <div className="flex flex-col">
                            <p className="text-amber-100/90 text-sm sm:text-base font-light leading-relaxed italic mb-3">
                                "{testimonialsData[currentIndex].quote}"
                            </p>
                            <span className="text-amber-300 text-xs sm:text-sm font-medium">
                                — {testimonialsData[currentIndex].name}, {testimonialsData[currentIndex].location}
                            </span>
                        </div>

                    </div>

                    {/* Right Golden Quote Mark */}
                    <div className="hidden sm:block text-amber-400/80 text-4xl lg:text-5xl ml-6 select-none">
                        <FaQuoteRight />
                    </div>

                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex items-center justify-center space-x-2.5 mt-8">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? 'bg-amber-300 scale-125'
                                    : 'bg-emerald-900/80 border border-amber-300/40 hover:bg-amber-300/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;