import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    id: 1,
    question: 'Are these courses free?',
    answer: 'We offer both free introductory courses and premium specialized courses. Detailed pricing is available on each individual course page.',
  },
  {
    id: 2,
    question: 'Can I get a certificate?',
    answer: 'Yes, upon successful completion of any certified course and passing the final assessment, you will receive an authentic downloadable certificate.',
  },
  {
    id: 3,
    question: 'Is there a mobile app?',
    answer: 'Yes, our platform is fully mobile-responsive, and our dedicated mobile application allows you to access all course materials on the go.',
  },
  {
    id: 4,
    question: 'How can I contact for support?',
    answer: 'You can reach out to our dedicated support team via email at info@yourname.com or call us directly at +91 98765 43210.',
  },
];

const FAQSection = () => {
  // Toggle accordion state
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Golden Accent Dividers & Diamonds */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 w-full max-w-xl">
            <span className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-[#d4af37]"></span>
            <span className="text-[#d4af37] text-xs">◆</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide px-3 whitespace-nowrap">
              Frequently Asked Questions
            </h2>
            <span className="text-[#d4af37] text-xs">◆</span>
            <span className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent via-[#d4af37]/80 to-[#d4af37]"></span>
          </div>
        </div>

        {/* Main Grid: Left Mosque Image Banner + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Islamic Arch Mosque Image Banner */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[16/7] lg:aspect-[4/3] rounded-3xl p-1 bg-gradient-to-b from-[#d4af37] via-[#c59b27] to-[#8a6810] shadow-xl overflow-hidden">
              <div className="w-full h-full bg-[#031e13] rounded-[1.3rem] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
                  alt="Mosque with Lanterns"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031e13]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions List */}
          <div className="lg:col-span-8 flex flex-col space-y-3.5">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white/80 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between space-x-4 focus:outline-none hover:bg-amber-50/50 transition-colors"
                  >
                    <span className="font-serif font-bold text-amber-950 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <div className="text-amber-900 text-xs shrink-0 p-1">
                      {isOpen ? <FaMinus className="text-amber-700" /> : <FaPlus className="text-amber-900" />}
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed border-t border-amber-100/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;