import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import backgroundImage from '../assets/background.png'

const coursesData = [
    {
        id: 1,
        title: 'Quranic Studies',
        description: 'Understand the Quran with proper guidance',
        image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop',
        link: '#quranic-studies',
    },
    {
        id: 2,
        title: 'Sufism & Tasawwuf',
        description: 'Explore the path of love and spirituality',
        image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
        link: '#sufism',
    },
    {
        id: 3,
        title: 'Dua & Worship',
        description: 'Learn the power of Dua',
        image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
        link: '#dua-worship',
    },
    {
        id: 4,
        title: 'Herbal Knowledge',
        description: 'Natural healing & wellness',
        image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=800&auto=format&fit=crop',
        link: '#herbal-knowledge',
    },
];

const SpiritualCoursesSection = () => {
    return (
        <section className="relative w-full bg-[#031e13] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">

            {/* Full Width Background Texture / Image Overlay */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    opacity: 1,
                }}

            ></div>

            {/* Golden Corner Geometric Frames */}
            <div className="absolute top-0 left-0 w-24 sm:w-36 h-24 sm:h-36 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-24 sm:w-36 h-24 sm:h-36 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-10"></div>

            <div className="max-w-7xl mx-auto relative z-20">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-3">
                        <span className="w-12 sm:w-20 h-[1.5px] bg-[#d4af37]/70"></span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-medium text-amber-50 tracking-wide">
                            Our Spiritual Courses
                        </h2>
                        <span className="w-12 sm:w-20 h-[1.5px] bg-[#d4af37]/70"></span>
                    </div>
                    <p className="text-emerald-100/80 text-sm sm:text-base font-light">
                        Enhance your knowledge and strengthen your faith
                    </p>
                </div>

                {/* Courses Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coursesData.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[#faf6e9] rounded-2xl overflow-hidden shadow-xl border border-amber-200/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
                        >
                            {/* Card Image */}
                            <div className="relative h-44 sm:h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex flex-col items-center text-center flex-grow justify-between">
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-amber-950 mb-1.5">
                                        {course.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-amber-900/70 font-normal leading-relaxed mb-6">
                                        {course.description}
                                    </p>
                                </div>

                                {/* Learn More Button */}
                                <a
                                    href={course.link}
                                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#ebd082] to-[#dfb85a] hover:brightness-105 text-amber-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
                                >
                                    <span>Learn More</span>
                                    <FaArrowRight className="text-[10px]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SpiritualCoursesSection;