import React, { useState } from 'react';
import { FaPlus, FaMinus, FaShieldAlt } from 'react-icons/fa';

const appointmentFaqData = [
  {
    id: 1,
    number: '1.',
    question: 'How can I book an appointment?',
    answer:
      'Fill in your name, mobile number, preferred service, consultation mode, date, and time slot in the Appointment Booking Form above, then click "Confirm Appointment".',
  },
  {
    id: 2,
    number: '2.',
    question: 'Can I take online consultation?',
    answer:
      'Yes, you can select "Online" under Preferred Consultation Mode to connect with our scholars via audio or video call from anywhere.',
  },
  {
    id: 3,
    number: '3.',
    question: 'What are the consultation charges?',
    answer:
      'Initial spiritual guidance and Istikhara consultations are offered with transparent, nominal fees depending on the selected service duration.',
  },
  {
    id: 4,
    number: '4.',
    question: 'Can I reschedule my appointment?',
    answer:
      'Yes, you can easily reschedule your appointment at least 4 hours prior to your booked time slot by contacting our support team via phone or email.',
  },
  {
    id: 5,
    number: '5.',
    question: 'How will I get confirmation?',
    answer:
      'Once you submit the booking form, you will receive an instant confirmation message on your registered mobile number and email address.',
  },
];

const AppointmentFAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#fcf8ed] py-14 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Islamic Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Golden Divider Lines */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-10 sm:mb-12 max-w-2xl mx-auto">
          <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#c99b32]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c99b32] shrink-0"></span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0d3b28] tracking-wide px-2 text-center whitespace-nowrap">
            Frequently Asked Questions
          </h2>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c99b32] shrink-0"></span>
          <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#c99b32]"></span>
        </div>

        {/* Main Content Grid: Left Scalloped Arch Image + Right Numbered FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          
          {/* Left Column: Golden Scalloped Islamic Arch Image Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              className="relative w-full max-w-xs sm:max-w-sm aspect-[4/4.2] p-1.5 bg-gradient-to-b from-[#ebd082] via-[#d4af37] to-[#9b741e] shadow-xl"
              style={{
                clipPath:
                  'polygon(0% 100%, 0% 35%, 10% 25%, 14% 16%, 28% 12%, 40% 5%, 50% 0%, 60% 5%, 72% 12%, 86% 16%, 90% 25%, 100% 35%, 100% 100%)',
              }}
            >
              <div
                className="w-full h-full bg-[#031e13] overflow-hidden relative"
                style={{
                  clipPath:
                    'polygon(0% 100%, 0% 35%, 10% 25%, 14% 16%, 28% 12%, 40% 5%, 50% 0%, 60% 5%, 72% 12%, 86% 16%, 90% 25%, 100% 35%, 100% 100%)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop"
                  alt="Holy Quran and Glowing Lantern"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031e13]/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Numbered Accordion Items */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            {appointmentFaqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white/90 backdrop-blur-sm border border-[#d4af37]/35 rounded-xl overflow-hidden shadow-xs transition-all duration-300 hover:border-[#d4af37]/70"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between space-x-4 focus:outline-none hover:bg-amber-50/50 transition-colors"
                  >
                    <div className="flex items-center space-x-2.5 text-xs sm:text-sm lg:text-base font-bold text-[#09261b]">
                      <span className="text-[#0d3b28]">{faq.number}</span>
                      <span>{faq.question}</span>
                    </div>
                    <div className="text-[#09261b] text-xs shrink-0 p-1">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  {/* Answer Drawer */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-amber-950/80 font-normal leading-relaxed border-t border-amber-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Privacy Note Box */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#e8f0e4]/90 border border-[#8fb384]/60 rounded-xl px-5 py-3 flex items-center justify-center space-x-2.5 text-center shadow-2xs">
            <FaShieldAlt className="text-[#09261b] text-sm sm:text-base shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[#09261b]">
              Your personal information is safe with us. We respect your privacy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppointmentFAQSection;