import React from 'react';
import { FaBookOpen, FaHands, FaLeaf, FaArrowRight } from 'react-icons/fa';
import image from '../assets/aboutmosque.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Import global context

const AboutSection = () => {
  const { t } = useLanguage(); // Pull translated strings globally

  return (
    <section className="relative w-full bg-[#fcf8ed] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] p-2">
              <div 
                className="w-full h-full bg-gradient-to-b from-[#d4af37] via-[#c59b27] to-[#8a6810] p-[3px] shadow-xl"
                style={{ clipPath: 'polygon(0% 100%, 0% 25%, 15% 12%, 35% 3%, 50% 0%, 65% 3%, 85% 12%, 100% 25%, 100% 100%)', borderRadius: '0 0 1rem 1rem' }}
              >
                <div 
                  className="w-full h-full bg-[#fcf8ed] overflow-hidden relative"
                  style={{ clipPath: 'polygon(0% 100%, 0% 25%, 15% 12%, 35% 3%, 50% 0%, 65% 3%, 85% 12%, 100% 25%, 100% 100%)', borderRadius: '0 0 0.9rem 0.9rem' }}
                >
                  <img src={image} alt="Islamic Dome and Guidance" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Text & Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="flex items-center space-x-3 text-amber-700 text-xs sm:text-sm font-medium tracking-wide mb-3">
              <span className="w-8 h-[1px] bg-amber-600/60"></span>
              <span>{t.aboutSubheading}</span>
              <span className="w-8 h-[1px] bg-amber-600/60"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-amber-950 leading-tight mb-5">
              {t.aboutTitle}
            </h2>

            <p className="text-amber-950/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              {t.aboutDesc}
            </p>

            <div>
              <Link to={"/about"} className="inline-flex items-center space-x-2 bg-[#0d3b28] hover:bg-[#07291b] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                <span>{t.aboutCta}</span>
                <FaArrowRight className="text-xs ml-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f5eecb] flex items-center justify-center text-[#0d3b28] text-xl shrink-0"><FaBookOpen /></div>
              <div>
                <h3 className="font-bold text-amber-950 text-base leading-snug">{t.card1Title}</h3>
                <p className="text-xs text-amber-800/70 font-medium">{t.card1Sub}</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f5eecb] flex items-center justify-center text-[#0d3b28] text-xl shrink-0"><FaHands /></div>
              <div>
                <h3 className="font-bold text-amber-950 text-base leading-snug">{t.card2Title}</h3>
                <p className="text-xs text-amber-800/70 font-medium">{t.card2Sub}</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f5eecb] flex items-center justify-center text-[#0d3b28] text-xl shrink-0"><FaLeaf /></div>
              <div>
                <h3 className="font-bold text-amber-950 text-base leading-snug">{t.card3Title}</h3>
                <p className="text-xs text-amber-800/70 font-medium">{t.card3Sub}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;