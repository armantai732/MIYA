import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const articlesData = [
  {
    id: 1,
    title: 'The Importance of Quran in Our Daily Life',
    date: 'Nov 2, 2025',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop',
    link: '#article-1',
  },
  {
    id: 2,
    title: 'How to Find Peace in a Busy Life',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    link: '#article-2',
  },
  {
    id: 3,
    title: 'Benefits of Herbal Remedies',
    date: 'Oct 25, 2025',
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=800&auto=format&fit=crop',
    link: '#article-3',
  },
];

const LatestArticlesSection = () => {
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
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-12 h-[1px] bg-amber-700/50"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-amber-950 tracking-wide">
              Latest Articles &amp; Updates
            </h2>
            <span className="w-12 h-[1px] bg-amber-700/50"></span>
          </div>
          <p className="text-amber-900/70 text-sm sm:text-base font-light">
            Stay informed with our latest articles and spiritual insights
          </p>
        </div>

        {/* Articles Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100/80 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                
                {/* Title */}
                <h3 className="font-serif font-bold text-amber-950 text-lg sm:text-xl leading-snug mb-6 group-hover:text-amber-700 transition-colors">
                  {article.title}
                </h3>

                {/* Footer Meta (Date & Read More) */}
                <div className="flex items-center justify-between text-xs sm:text-sm pt-4 border-t border-amber-100/60">
                  {/* Date */}
                  <div className="flex items-center space-x-2 text-amber-800/60 font-medium">
                    <FaCalendarAlt className="text-amber-600/70" />
                    <span>{article.date}</span>
                  </div>

                  {/* Read More Link */}
                  <a
                    href={article.link}
                    className="inline-flex items-center space-x-1.5 font-medium text-amber-800 hover:text-amber-950 transition-colors"
                  >
                    <span>Read More</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestArticlesSection;