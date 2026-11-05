import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const articlesData = [
  {
    id: 1,
    title: 'The Importance of Quran in Our Daily Life',
    date: 'Nov 01, 2025',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop',
    link: '#article-1',
  },
  {
    id: 2,
    title: 'Benefits of Salah in Life',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    link: '#article-2',
  },
  {
    id: 3,
    title: 'Power of Dua',
    date: 'Oct 25, 2025',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
    link: '#article-3',
  },
  {
    id: 4,
    title: 'Spiritual Peace Tips',
    date: 'Oct 22, 2025',
    image: 'https://images.unsplash.com/photo-1564769625405-d9e0655ef958?q=80&w=800&auto=format&fit=crop',
    link: '#article-4',
  },
];

const LatestArticlesInsights = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Golden Dividers */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-2 w-full max-w-lg">
            <span className="flex-grow h-[1.5px] bg-[#d4af37]/70"></span>
            <span className="text-[#d4af37] text-xs">◆</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide px-2">
              Latest Articles &amp; Insights
            </h2>
            <span className="text-[#d4af37] text-xs">◆</span>
            <span className="flex-grow h-[1.5px] bg-[#d4af37]/70"></span>
          </div>

          <p className="text-amber-950/70 text-sm sm:text-base font-light">
            Read our latest articles for spiritual growth and guidance
          </p>
        </div>

        {/* 4-Column Articles Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-[#d4af37]/30 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Image & Floating Date Badge Container */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Green Date Badge */}
                <div className="absolute top-3 left-3 bg-[#09261b] text-amber-200 text-xs font-medium px-3 py-1 rounded-full shadow-md flex items-center space-x-1.5 border border-amber-300/30">
                  <FaCalendarAlt className="text-[10px]" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                
                {/* Title */}
                <h3 className="font-serif font-bold text-amber-950 text-base sm:text-lg leading-snug mb-6 group-hover:text-amber-800 transition-colors">
                  {article.title}
                </h3>

                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center space-x-1.5 font-semibold text-xs sm:text-sm text-amber-900 hover:text-amber-950 transition-colors pt-3 border-t border-amber-100"
                >
                  <span>Read More</span>
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

export default LatestArticlesInsights;