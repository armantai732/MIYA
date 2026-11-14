import React, { useState } from 'react';
import { FaPlus, FaMinus, FaRegCircle } from 'react-icons/fa';

const donateFaqsLeft = [
  {
    id: 1,
    question: 'How can I donate?',
    answer:
      'You can easily donate online by choosing a preset amount or entering your custom contribution, filling in your details, and paying securely via UPI, Net Banking, or Wallets.',
  },
  {
    id: 2,
    question: 'Is my donation secure?',
    answer:
      'Yes, all online transactions and donations are processed through secure, encrypted payment gateways to ensure your financial data is fully protected.',
  },
  {
    id: 3,
    question: 'Can I donate monthly?',
    answer:
      'Yes! You can select the "Monthly" toggle option above the donation form to set up recurring contributions and support our mission continuously.',
  },
];

const donateFaqsRight = [
  {
    id: 4,
    question: 'Will I get a receipt?',
    answer:
      'Yes, an official donation receipt/acknowledgment is instantly generated and sent to your registered email address upon successful transaction.',
  },
  {
    id: 5,
    question: 'How will my donation be used?',
    answer:
      'Your contributions directly fund the spread of authentic Islamic knowledge, spiritual counseling services, and community welfare initiatives.',
  },
  {
    id: 6,
    question: 'Can I donate in other ways?',
    answer:
      'Yes, apart from online payments, you can reach out to our team directly via phone or email for direct bank transfers and offline contributions.',
  },
];

const DonateFAQSection = () => {
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
        <div className="flex items-center justify-center space-x-3 sm:space-x-5 max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Left Golden Line */}
          <div className="flex-grow flex flex-col space-y-1">
            <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
            <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#09261b] tracking-wide px-2 whitespace-nowrap">
            Frequently Asked Questions
          </h2>

          {/* Right Golden Line */}
          <div className="flex-grow flex flex-col space-y-1">
            <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
            <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
          </div>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Left Column FAQs */}
          <div className="flex flex-col space-y-3.5">
            {donateFaqsLeft.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-xl overflow-hidden shadow-2xs transition-all duration-300 hover:border-[#d4af37]"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-5 py-3.5 flex items-center justify-between space-x-3 focus:outline-none hover:bg-amber-100/40 transition-colors"
                  >
                    <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#09261b]">
                      <FaRegCircle className="text-[#09261b] text-xs shrink-0 opacity-70" />
                      <span>{faq.question}</span>
                    </div>
                    <div className="text-[#09261b] text-xs shrink-0 p-1">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed border-t border-amber-200/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column FAQs */}
          <div className="flex flex-col space-y-3.5">
            {donateFaqsRight.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-xl overflow-hidden shadow-2xs transition-all duration-300 hover:border-[#d4af37]"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-5 py-3.5 flex items-center justify-between space-x-3 focus:outline-none hover:bg-amber-100/40 transition-colors"
                  >
                    <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#09261b]">
                      <FaRegCircle className="text-[#09261b] text-xs shrink-0 opacity-70" />
                      <span>{faq.question}</span>
                    </div>
                    <div className="text-[#09261b] text-xs shrink-0 p-1">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed border-t border-amber-200/60">
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

export default DonateFAQSection;