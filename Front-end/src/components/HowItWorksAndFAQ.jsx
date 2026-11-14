
import React, { useState } from "react";
import {
  FaHeadphones,
  FaComments,
  FaDove,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaMosque,
} from "react-icons/fa";

const stepsData = [
  {
    step: "01",
    title: "Book Appointment",
    description: "Choose your preferred service and book a meeting with us.",
    icon: <FaHeadphones />,
  },
  {
    step: "02",
    title: "Get Guidance",
    description: "Receive personal spiritual guidance and support from our team.",
    icon: <FaComments />,
  },
  {
    step: "03",
    title: "Live Peacefully",
    description: "Follow the guidance and move forward with peace and positivity.",
    icon: <FaDove />,
  },
];

const faqData = [
  {
    id: 1,
    question: "What is Istikhara and how does it work?",
    answer:
      "Istikhara is a prayer of guidance sought from Allah when faced with an important decision in life. Our scholars can guide you through the Sunnah method of seeking Allah's guidance.",
  },
  {
    id: 2,
    question: "Do you provide online consultation?",
    answer:
      "Yes, we offer one-on-one virtual consultations via audio or video calls, making our services accessible to people from different locations.",
  },
  {
    id: 3,
    question: "Are your products halal and authentic?",
    answer:
      "Our herbal products and literature are selected with care. Please contact our team for specific product ingredients and details.",
  },
  {
    id: 4,
    question: "How can I donate for this noble cause?",
    answer:
      "You can contact our team to learn about available donation methods and receive the relevant payment details.",
  },
];

const SectionHeading = ({ children }) => (
  <div className="mb-10 flex w-full items-center justify-center gap-3 sm:gap-5">
    <span className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-[#c49a3a]" />

    <FaMosque className="shrink-0 text-sm text-[#b28a32]" />

    <h2 className="whitespace-nowrap font-serif text-xl font-bold tracking-wide text-[#0d3b28] sm:text-3xl lg:text-4xl">
      {children}
    </h2>

    <FaMosque className="shrink-0 text-sm text-[#b28a32]" />

    <span className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-[#c49a3a]" />
  </div>
);

const HowItWorksAndFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fcf8ed] px-4 py-16 sm:px-6 lg:px-12 lg:py-20">

      {/* SUBTLE BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#0d3b28]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-20">

        {/* ================= HOW IT WORKS ================= */}
        <div>

          <SectionHeading>How It Works</SectionHeading>

          <p className="mx-auto -mt-5 mb-12 max-w-xl text-center text-sm leading-relaxed text-amber-950/65 sm:text-base">
            A simple and thoughtful process to help you receive the guidance
            and support you need.
          </p>

          {/* STEPS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">

            {stepsData.map((item, index) => (
              <div key={item.step} className="relative">

                {/* CARD */}
                <div className="group relative flex h-full min-h-[235px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-[#f7f2e1] px-6 py-9 text-center shadow-[0_5px_20px_rgba(3,30,19,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b28a32]/70 hover:shadow-[0_15px_30px_rgba(3,30,19,0.10)]">

                  {/* TOP GOLD LINE */}
                  <div className="absolute left-1/2 top-0 h-[3px] w-16 -translate-x-1/2 rounded-b-full bg-[#c49a3a] transition-all duration-300 group-hover:w-28" />

                  {/* STEP NUMBER */}
                  <div className="absolute right-4 top-4 font-serif text-3xl font-bold text-[#d4af37]/20">
                    {item.step}
                  </div>

                  {/* ICON */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#09261b] text-2xl text-[#ebd082] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 font-serif text-xl font-bold text-[#0d3b28]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="max-w-xs text-sm leading-7 text-amber-950/70">
                    {item.description}
                  </p>

                  {/* BOTTOM DECORATION */}
                  <div className="mt-5 h-px w-12 bg-[#d4af37]/60 transition-all duration-300 group-hover:w-20" />

                </div>

                {/* ARROW BETWEEN CARDS */}
                {index !== stepsData.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#fcf8ed] text-xs text-[#a4771e] shadow-sm md:flex">
                    <FaArrowRight />
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div>

          <SectionHeading>Frequently Asked Questions</SectionHeading>

          <p className="mx-auto -mt-5 mb-12 max-w-xl text-center text-sm leading-relaxed text-amber-950/65 sm:text-base">
            Find answers to common questions about our spiritual services,
            consultations and guidance.
          </p>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:col-span-4">

              <div className="relative w-full max-w-[310px]">

                {/* GOLDEN FRAME */}
                <div className="rounded-t-[160px] rounded-b-[24px] bg-gradient-to-b from-[#ebd082] via-[#b78b31] to-[#80601c] p-[5px] shadow-[0_15px_35px_rgba(3,30,19,0.18)]">

                  <div className="overflow-hidden rounded-t-[155px] rounded-b-[20px] border-[5px] border-[#fcf8ed]">

                    <img
                      src="https://images.unsplash.com/photo-1564769625405-d9e0655ef958?q=80&w=900&auto=format&fit=crop"
                      alt="Beautiful mosque architecture"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                  </div>
                </div>

                {/* IMAGE BADGE */}
                <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#d4af37]/60 bg-[#09261b] px-5 py-3 text-sm font-semibold text-[#ebd082] shadow-lg">
                  <FaMosque />
                  Spiritual Guidance
                </div>

              </div>
            </div>

            {/* RIGHT FAQ ACCORDION */}
            <div className="flex flex-col gap-4 lg:col-span-8">

              {faqData.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#c49a3a]/70 bg-[#f7f2e1] shadow-md"
                        : "border-[#d4af37]/30 bg-[#f7f2e1]/70 shadow-sm hover:border-[#c49a3a]/60"
                    }`}
                  >

                    {/* QUESTION BUTTON */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >

                      <div className="flex items-center gap-4">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#09261b] font-serif text-xs font-bold text-[#ebd082]">
                          {String(faq.id).padStart(2, "0")}
                        </span>

                        <span className="font-serif text-sm font-bold text-[#3c2c12] sm:text-base">
                          {faq.question}
                        </span>

                      </div>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#09261b] text-[#ebd082]"
                            : "bg-[#e9dfc4] text-[#795a1d]"
                        }`}
                      >
                        {isOpen ? (
                          <FaMinus className="text-xs" />
                        ) : (
                          <FaPlus className="text-xs" />
                        )}
                      </span>

                    </button>

                    {/* ANSWER */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#d4af37]/25 px-5 pb-5 pt-4 sm:px-6">
                          <p className="pl-12 text-sm leading-7 text-amber-950/75">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksAndFAQ;
