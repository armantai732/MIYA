import React from 'react';
import { FaMosque, FaClock, FaVideo, FaArrowRight } from 'react-icons/fa';

const coursesData = [
  {
    id: 1,
    title: 'Quran & Tafseer',
    description: 'Understand the Holy Quran with proper guidance and explanation.',
    duration: '12+ Hours',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop',
    link: '#course-1',
  },
  {
    id: 2,
    title: 'Sunnah & Hadith',
    description: 'Learn the teachings and lifestyle of Prophet Muhammad (PBUH).',
    duration: '10+ Hours',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
    link: '#course-2',
  },
  {
    id: 3,
    title: 'Sufism & Tasawwuf',
    description: 'Discover the inner peace through spiritual wisdom.',
    duration: '8+ Hours',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1564769625405-d9e0655ef958?q=80&w=800&auto=format&fit=crop',
    link: '#course-3',
  },
  {
    id: 4,
    title: 'Islamic Lifestyle',
    description: 'Live a balanced and righteous life according to Islam.',
    duration: '6+ Hours',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    link: '#course-4',
  },
  {
    id: 5,
    title: 'Dua & Worship',
    description: 'Learn the importance and method of daily duas and worship.',
    duration: '8+ Hours',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    link: '#course-5',
  },
  {
    id: 6,
    title: 'Spiritual Wellness',
    description: 'Heal your heart and mind with Islamic teachings.',
    duration: '6+ Hours',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop',
    link: '#course-6',
  },
];

const SpiritualCourses = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Mosque Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-2 w-full max-w-lg">
            <span className="flex-grow h-[1.5px] bg-[#d4af37]/70"></span>
            <span className="text-[#d4af37] text-xs">◆</span>
            <FaMosque className="text-[#d4af37] text-base" />
            <span className="text-[#d4af37] text-xs">◆</span>
            <span className="flex-grow h-[1.5px] bg-[#d4af37]/70"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide mb-2">
            Our Spiritual Courses
          </h2>
          <p className="text-amber-950/70 text-sm sm:text-base font-light">
            Explore our carefully designed courses to deepen your Islamic knowledge
          </p>
        </div>

        {/* 6 Courses Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-sm border border-[#d4af37]/30 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Left Course Image Thumbnail */}
              <div className="relative w-full sm:w-36 h-36 shrink-0 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right Course Info Content */}
              <div className="flex flex-col flex-grow text-left w-full">
                
                <h3 className="font-serif font-bold text-amber-950 text-lg mb-1 group-hover:text-amber-800 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-xs text-amber-950/75 leading-relaxed mb-3">
                  {course.description}
                </p>

                {/* Duration & Mode Meta Info */}
                <div className="flex items-center space-x-3 text-[11px] text-amber-900/80 font-medium mb-3">
                  <div className="flex items-center space-x-1">
                    <FaClock className="text-[#d4af37]" />
                    <span>{course.duration}</span>
                  </div>
                  <span>|</span>
                  <div className="flex items-center space-x-1">
                    <FaVideo className="text-[#d4af37]" />
                    <span>{course.mode}</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <a
                  href={course.link}
                  className="inline-flex items-center justify-center space-x-1.5 bg-[#09261b] hover:bg-[#061c13] text-amber-100 font-medium text-xs px-4 py-2 rounded-xl transition-colors shadow-sm w-full"
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

export default SpiritualCourses;