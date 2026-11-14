import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaChevronDown,
  FaPaperPlane,
  FaArrowRight,
  FaInfoCircle,
  FaClock,
  FaMapMarkerAlt,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '04:00 PM'];

const servicesList = [
  'Istikhara Guidance',
  'Ruqyah Support',
  'Spiritual Counseling',
  'Personal Guidance',
  'Online Consultation',
  'Islamic Lifestyle Guidance',
];

const AppointmentBookingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    service: '',
    consultationMode: 'In Person',
    date: '',
    timeSlot: '10:00 AM',
    message: '',
    agreeTerms: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Request Submitted for ${formData.fullName || 'Guest'}!`);
  };

  return (
    <section
      id="book-appointment"
      className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden"
    >
      {/* Background Subtle Islamic Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: APPOINTMENT BOOKING FORM ================= */}
          <div className="lg:col-span-8 relative pt-6">
            
            {/* Top Floating Ornate Header Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-md">
              <div className="bg-[#031e13] border-2 border-[#d4af37] rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center space-x-2.5 text-amber-50">
                <FaCalendarAlt className="text-[#ebd082] text-base shrink-0" />
                <h2 className="font-serif font-bold text-base sm:text-xl tracking-wide whitespace-nowrap">
                  Appointment Booking Form
                </h2>
              </div>
            </div>

            {/* Main Form Card Container */}
            <div className="bg-[#f7f2e1]/90 backdrop-blur-sm border-2 border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 lg:p-10 pt-10 sm:pt-12 shadow-md h-full flex flex-col justify-between">
              <div>
                <p className="text-center text-xs sm:text-sm text-amber-950/75 font-medium mb-7">
                  Fill in the details below to book your appointment
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Full Name & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full bg-white border border-[#d4af37]/40 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-amber-950 placeholder-amber-950/40 focus:outline-none focus:border-[#09261b] shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs">
                          <FaPhoneAlt />
                        </span>
                        <input
                          type="tel"
                          name="mobileNumber"
                          required
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="Enter mobile number"
                          className="w-full bg-white border border-[#d4af37]/40 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-amber-950 placeholder-amber-950/40 focus:outline-none focus:border-[#09261b] shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email Address & Select Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="w-full bg-white border border-[#d4af37]/40 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-amber-950 placeholder-amber-950/40 focus:outline-none focus:border-[#09261b] shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Select Service */}
                    <div>
                      <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                        Select Service <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs pointer-events-none">
                          <FaStar />
                        </span>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full appearance-none bg-white border border-[#d4af37]/40 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-amber-950 focus:outline-none focus:border-[#09261b] shadow-xs"
                        >
                          <option value="" disabled>
                            Choose a service
                          </option>
                          {servicesList.map((srv, idx) => (
                            <option key={idx} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                        <span className="absolute inset-y-0 right-3.5 flex items-center text-amber-950/60 text-xs pointer-events-none">
                          <FaChevronDown />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Preferred Consultation Mode */}
                  <div>
                    <label className="block text-xs font-bold text-[#09261b] mb-2">
                      Preferred Consultation Mode <span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center space-x-6">
                      {['In Person', 'Online'].map((mode) => {
                        const isSelected = formData.consultationMode === mode;
                        return (
                          <button
                            type="button"
                            key={mode}
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, consultationMode: mode }))
                            }
                            className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-amber-950 focus:outline-none"
                          >
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'border-[#09261b] bg-[#09261b]'
                                  : 'border-[#d4af37]/70 bg-white'
                              }`}
                            >
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                              )}
                            </span>
                            <span>{mode}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Select Date & Select Time Slot */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                    {/* Select Date */}
                    <div className="lg:col-span-5">
                      <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                        Select Date <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs pointer-events-none">
                          <FaCalendarAlt />
                        </span>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#d4af37]/40 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-amber-950 focus:outline-none focus:border-[#09261b] shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Select Time Slot */}
                    <div className="lg:col-span-7">
                      <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                        Select Time Slot <span className="text-red-600">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => {
                          const active = formData.timeSlot === slot;
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, timeSlot: slot }))
                              }
                              className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all ${
                                active
                                  ? 'bg-[#09261b] text-[#ebd082] border-[#09261b] shadow-xs'
                                  : 'bg-white text-amber-950 border-[#d4af37]/40 hover:bg-amber-50'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Your Message (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-[#09261b] mb-1.5">
                      Your Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full bg-white border border-[#d4af37]/40 rounded-2xl p-3.5 text-xs sm:text-sm text-amber-950 placeholder-amber-950/40 focus:outline-none focus:border-[#09261b] shadow-xs resize-none"
                    ></textarea>
                  </div>

                  {/* Row 6: Privacy Policy Checkbox */}
                  <div className="flex items-center space-x-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          agreeTerms: !prev.agreeTerms,
                        }))
                      }
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        formData.agreeTerms
                          ? 'bg-[#09261b] border-[#09261b] text-white'
                          : 'bg-white border-[#d4af37]/60'
                      }`}
                    >
                      {formData.agreeTerms && <FaCheck className="text-[9px]" />}
                    </button>
                    <span className="text-xs text-amber-950/80">
                      I agree to the{' '}
                      <a href="#privacy" className="text-[#09261b] underline font-medium">
                        privacy policy
                      </a>{' '}
                      and{' '}
                      <a href="#terms" className="text-[#09261b] underline font-medium">
                        terms &amp; conditions
                      </a>
                      .
                    </span>
                  </div>

                  {/* Row 7: Full Width Golden Confirm Appointment Button */}
                  <button
                    type="submit"
                    onClick={()=>navigate("/paymentpage")}
                    className="w-full bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#c99b32] hover:brightness-105 text-[#031e13] font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-md border border-amber-200/80 flex items-center justify-center space-x-2.5 transition-all duration-300 group"
                  >
                    <FaPaperPlane className="text-xs sm:text-sm" />
                    <span>Confirm Appointment</span>
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </form>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONSULTATION INFORMATION CARD ================= */}
          <div className="lg:col-span-4 lg:pt-6">
            <div className="bg-[#031e13] border-2 border-[#d4af37]/70 rounded-3xl p-6 sm:p-7 shadow-2xl text-white h-full flex flex-col justify-between relative overflow-hidden">
              
              {/* Subtle Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop')`,
                }}
              ></div>

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#ebd082] text-[#031e13] flex items-center justify-center shrink-0 shadow-sm">
                    <FaInfoCircle className="text-base" />
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-50">
                    Consultation Information
                  </h3>
                </div>

                {/* Top Divider */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="flex-grow h-[1px] bg-[#d4af37]/50"></span>
                  <span className="text-[#d4af37] text-[10px]">◆</span>
                  <span className="flex-grow h-[1px] bg-[#d4af37]/50"></span>
                </div>

                <p className="text-emerald-100/80 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  We are here to help you with spiritual guidance, Islamic knowledge and personal matters. Book your appointment and get the best advice.
                </p>

                {/* Bottom Divider */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className="flex-grow h-[1px] bg-[#d4af37]/50"></span>
                  <span className="text-[#d4af37] text-[10px]">◆</span>
                  <span className="flex-grow h-[1px] bg-[#d4af37]/50"></span>
                </div>

                {/* Contact Info Items List */}
                <div className="space-y-4 mb-6">
                  
                  {/* Working Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ebd082] text-[#031e13] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <FaClock className="text-sm" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-amber-100 text-xs sm:text-sm">
                        Our Working Hours
                      </h4>
                      <p className="text-emerald-100/85 text-xs">10:00 AM - 8:00 PM</p>
                      <p className="text-emerald-100/65 text-[11px]">(Every Day)</p>
                    </div>
                  </div>

                  {/* Contact Us */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ebd082] text-[#031e13] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <FaPhoneAlt className="text-xs" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-amber-100 text-xs sm:text-sm">
                        Contact Us
                      </h4>
                      <p className="text-emerald-100/85 text-xs">+91 98765 43210</p>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ebd082] text-[#031e13] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <FaEnvelope className="text-xs" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-amber-100 text-xs sm:text-sm">
                        Email Us
                      </h4>
                      <p className="text-emerald-100/85 text-xs">info@sufiguidance.com</p>
                    </div>
                  </div>

                  {/* Our Location */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ebd082] text-[#031e13] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-amber-100 text-xs sm:text-sm">
                        Our Location
                      </h4>
                      <p className="text-emerald-100/85 text-xs">
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Arch Framed Mosque Image */}
              <div className="relative z-10 w-full aspect-[16/10] rounded-2xl p-1 bg-gradient-to-b from-[#d4af37] to-[#8a6810] shadow-lg overflow-hidden">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
                    alt="Illuminated Grand Mosque"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentBookingSection;