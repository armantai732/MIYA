import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const contactFaqs = [
  {
    id: 1,
    question: 'How can I take online courses?',
    answer:
      'You can browse our available courses on the platform, enroll directly, and access all learning materials and video lectures online from anywhere in the world.',
  },
  {
    id: 2,
    question: 'Do you provide spiritual guidance?',
    answer:
      'Yes, we offer one-on-one spiritual counseling, Istikhara guidance, and consultations with qualified scholars to help you navigate life challenges.',
  },
  {
    id: 3,
    question: 'Are your products authentic?',
    answer:
      'All our herbal remedies, spiritual books, and traditional products are 100% genuine, natural, and prepared strictly in accordance with Islamic principles.',
  },
  {
    id: 4,
    question: 'How can I book an appointment?',
    answer:
      'You can easily book an appointment by visiting our Spiritual Services or Appointment page, filling out the required form details, and selecting your preferred time slot.',
  },
];

const ContactFAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

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
        
        {/* Section Header with Golden Divider Lines */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center space-x-3 sm:space-x-5 max-w-2xl mx-auto mb-2">
            {/* Left Golden Line */}
            <div className="flex-grow flex flex-col space-y-1">
              <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#c99b32]"></span>
              <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#09261b] tracking-wide px-2 whitespace-nowrap">
              Frequently Asked Questions
            </h2>

            {/* Right Golden Line */}
            <div className="flex-grow flex flex-col space-y-1">
              <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#c99b32]"></span>
              <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-amber-950/75 font-medium">
            Find quick answers to common questions.
          </p>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {contactFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xs transition-all duration-300 hover:border-[#d4af37]"
              >
                {/* Question Header Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between space-x-4 focus:outline-none hover:bg-amber-100/50 transition-colors"
                >
                  <span className="font-serif font-bold text-amber-950 text-xs sm:text-sm lg:text-base">
                    {faq.question}
                  </span>
                  
                  {/* Circular Golden Plus/Minus Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d4af37]/70 bg-amber-50/60 text-[#09261b] flex items-center justify-center text-xs shrink-0 shadow-2xs">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                {/* Answer Drawer */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed border-t border-amber-200/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQSection;