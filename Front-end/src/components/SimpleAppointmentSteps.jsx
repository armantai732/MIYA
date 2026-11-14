
import React from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaRegCheckCircle,
  FaAngleDoubleRight,
  FaChevronDown,
} from "react-icons/fa";

const appointmentSteps = [
  {
    step: "1",
    title: "Choose Service",
    description: "Select the service you need",
    icon: <FaRegCalendarAlt />,
  },
  {
    step: "2",
    title: "Select Time",
    description: "Pick your preferred time slot",
    icon: <FaRegClock />,
  },
  {
    step: "3",
    title: "Confirm Booking",
    description: "Get confirmation instantly",
    icon: <FaRegCheckCircle />,
  },
];

const SimpleAppointmentSteps = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fcf8ed] px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16 font-sans">

      <div className="mx-auto max-w-7xl">

        {/* MAIN BANNER */}
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#d4af37]/70 px-5 py-9 shadow-xl sm:px-8 sm:py-12 lg:px-14 lg:py-14"
          style={{
            background:
              "linear-gradient(135deg, #031e13 0%, #073523 50%, #031e13 100%)",
          }}
        >

          {/* BACKGROUND DECORATION */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#d4af37]/10" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full border border-[#d4af37]/10" />

          <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />

          <div className="relative z-10">

            {/* SECTION HEADING */}
            <div className="mx-auto mb-9 flex max-w-3xl items-center justify-center gap-3 sm:mb-12 sm:gap-5">

              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d4af37]" />

              <div className="text-center">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#ebd082] sm:text-[10px]">
                  Easy Booking Process
                </p>

                <h2 className="font-serif text-xl font-bold leading-snug text-[#fff8e7] sm:text-2xl md:text-3xl lg:text-4xl">
                  Simple Steps to Book
                  <span className="block text-[#ebd082]">
                    Your Appointment
                  </span>
                </h2>
              </div>

              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d4af37]" />

            </div>

            {/* STEPS */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-3">

              {appointmentSteps.map((item, index) => (
                <React.Fragment key={item.step}>

                  {/* STEP CARD */}
                  <div className="group flex min-w-0 items-center gap-4 rounded-xl border border-[#d4af37]/30 bg-white/[0.045] px-4 py-4 transition-all duration-300 hover:border-[#ebd082]/70 hover:bg-white/[0.09] sm:px-5 sm:py-5">

                    {/* NUMBER */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#fff0bd] bg-gradient-to-b from-[#f3da8b] to-[#c7992e] font-serif text-lg font-bold text-[#031e13] shadow-md sm:h-12 sm:w-12 sm:text-xl">
                      {item.step}
                    </div>

                    {/* ICON */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 text-xl text-[#ebd082] sm:h-12 sm:w-12 sm:text-2xl">
                      {item.icon}
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm font-bold text-[#fff8e7] sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-emerald-100/70 sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* DESKTOP ARROW */}
                  {index < appointmentSteps.length - 1 && (
                    <div className="hidden items-center justify-center text-[#ebd082] lg:flex">
                      <FaAngleDoubleRight className="text-xl" />
                    </div>
                  )}

                  {/* MOBILE ARROW */}
                  {index < appointmentSteps.length - 1 && (
                    <div className="flex justify-center text-[#ebd082]/70 sm:hidden">
                      <FaChevronDown className="text-sm" />
                    </div>
                  )}

                </React.Fragment>
              ))}

            </div>

            {/* BOTTOM DECORATION */}
            <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="h-2 w-2 rotate-45 border border-[#ebd082] bg-[#d4af37]" />
              <span className="h-px w-12 bg-[#d4af37]/40" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SimpleAppointmentSteps;
