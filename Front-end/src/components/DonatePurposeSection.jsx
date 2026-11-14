import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const purposePoints = [
  'Share valuable Islamic knowledge and teachings',
  'Provide spiritual guidance and counselling',
  'Support the needy and build a better society',
];

const DonatePurposeSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-14 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Islamic Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: SCALLOPED ISLAMIC ARCH IMAGE ================= */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Outer Golden Arch Frame */}
            <div
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/4.2] p-1.5 bg-gradient-to-b from-[#ebd082] via-[#d4af37] to-[#9b741e] shadow-xl"
              style={{
                clipPath:
                  'polygon(0% 100%, 0% 42%, 8% 36%, 11% 24%, 22% 16%, 36% 8%, 50% 0%, 64% 8%, 78% 16%, 89% 24%, 92% 36%, 100% 42%, 100% 100%)',
              }}
            >
              {/* Inner Deep Green Trim */}
              <div
                className="w-full h-full p-2 bg-[#031e13]"
                style={{
                  clipPath:
                    'polygon(0% 100%, 0% 42%, 8% 36%, 11% 24%, 22% 16%, 36% 8%, 50% 0%, 64% 8%, 78% 16%, 89% 24%, 92% 36%, 100% 42%, 100% 100%)',
                }}
              >
                {/* Thin Inner Gold Line + Image Container */}
                <div
                  className="w-full h-full p-[2px] bg-[#d4af37]/80 overflow-hidden"
                  style={{
                    clipPath:
                      'polygon(0% 100%, 0% 42%, 8% 36%, 11% 24%, 22% 16%, 36% 8%, 50% 0%, 64% 8%, 78% 16%, 89% 24%, 92% 36%, 100% 42%, 100% 100%)',
                  }}
                >
                  <div
                    className="w-full h-full bg-[#031e13] overflow-hidden relative"
                    style={{
                      clipPath:
                        'polygon(0% 100%, 0% 42%, 8% 36%, 11% 24%, 22% 16%, 36% 8%, 50% 0%, 64% 8%, 78% 16%, 89% 24%, 92% 36%, 100% 42%, 100% 100%)',
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=900&auto=format&fit=crop"
                      alt="Holy Quran on Rehal with Glowing Lantern"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031e13]/45 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: OUR PURPOSE CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Golden Header Divider ("OUR PURPOSE") */}
            <div className="flex items-center justify-center sm:justify-start space-x-3 w-full max-w-md mb-3">
              <span className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#c99b32] shrink-0"></span>
              <span className="text-[#c99b32] text-xs sm:text-sm font-bold tracking-widest uppercase">
                OUR PURPOSE
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#c99b32] shrink-0"></span>
              <span className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
            </div>

            {/* Main Serif Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-[#09261b] leading-tight mb-4">
              Your Support Makes a Difference
            </h2>

            {/* Description Paragraph */}
            <p className="text-amber-950/80 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-2xl">
              We are committed to spreading authentic Islamic knowledge, offering spiritual guidance and helping those in need. Your donations enable us to:
            </p>

            {/* 3 Dark Green Checkmark Bullets */}
            <ul className="space-y-3 mb-8 w-full">
              {purposePoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-xs sm:text-sm lg:text-base font-medium text-[#09261b]"
                >
                  <FaCheckCircle className="text-[#09261b] text-base sm:text-lg shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Ornate Quote Plaque */}
            <div className="w-full max-w-2xl">
              <div
                className="relative bg-[#e4e8d8]/90 border border-[#b8c4a6] px-6 sm:px-10 py-4 sm:py-5 shadow-xs flex items-center justify-center text-center"
                style={{
                  clipPath:
                    'polygon(2.5% 0%, 97.5% 0%, 100% 25%, 100% 75%, 97.5% 100%, 2.5% 100%, 0% 75%, 0% 25%)',
                }}
              >
                {/* Left Ornate Flourish */}
                <div className="hidden sm:flex items-center space-x-2 text-[#8c7026] mr-4 shrink-0">
                  <span className="text-lg">❧</span>
                  <span className="w-10 h-[1px] bg-[#b5943b]/70"></span>
                </div>

                {/* Quote Text */}
                <p className="font-serif italic font-bold text-[#09261b] text-xs sm:text-sm lg:text-base leading-snug">
                  “Charity does not decrease wealth,
                  <br />
                  but it increases blessings.”
                </p>

                {/* Right Ornate Flourish */}
                <div className="hidden sm:flex items-center space-x-2 text-[#8c7026] ml-4 shrink-0">
                  <span className="w-10 h-[1px] bg-[#b5943b]/70"></span>
                  <span className="text-lg transform scale-x-[-1]">❧</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DonatePurposeSection;