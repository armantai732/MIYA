import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUser,
  FaTag,
  FaPaperPlane,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name || 'Guest'}! Your message has been sent successfully.`);
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT INFO & SOCIALS ================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Top Golden Header Divider ("Get in Touch") */}
            <div className="flex items-center space-x-3 mb-3 w-full">
              <span className="w-10 sm:w-16 h-[1.5px] bg-[#d4af37]"></span>
              <span className="text-[#c99b32] text-xs sm:text-sm font-semibold tracking-widest uppercase font-serif">
                Get in Touch
              </span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-[#d4af37]"></span>
            </div>

            {/* Main Serif Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#09261b] leading-tight mb-4">
              Feel Free to Contact Us
            </h2>

            {/* Description */}
            <p className="text-amber-950/80 text-xs sm:text-sm font-normal leading-relaxed mb-8">
              Whether you have a question about our courses, services, or need spiritual guidance, feel free to reach out to us. Our team is always here to assist you.
            </p>

            {/* Contact Info Cards List */}
            <div className="space-y-4 w-full mb-8">
              
              {/* Location */}
              <div className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-4 flex items-center space-x-4 shadow-2xs transition-all hover:border-[#d4af37]">
                <div className="w-10 h-10 rounded-full bg-[#09261b] text-[#ebd082] flex items-center justify-center shrink-0 shadow-xs">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#09261b] text-xs sm:text-sm">
                    Our Location
                  </h4>
                  <p className="text-amber-950/75 text-xs">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Call Us */}
              {/* <div className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-4 flex items-center space-x-4 shadow-2xs transition-all hover:border-[#d4af37]">
                <div className="w-10 h-10 rounded-full bg-[#09261b] text-[#ebd082] flex items-center justify-center shrink-0 shadow-xs">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#09261b] text-xs sm:text-sm">
                    Call Us
                  </h4>
                  <p className="text-amber-950/75 text-xs">+91 98765 43210</p>
                </div>
              </div> */}

              {/* Email Us */}
              <div className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-4 flex items-center space-x-4 shadow-2xs transition-all hover:border-[#d4af37]">
                <div className="w-10 h-10 rounded-full bg-[#09261b] text-[#ebd082] flex items-center justify-center shrink-0 shadow-xs">
                  <FaEnvelope className="text-xs" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#09261b] text-xs sm:text-sm">
                    Email Us
                  </h4>
                  <p className="text-amber-950/75 text-xs">info@yourname.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-4 flex items-center space-x-4 shadow-2xs transition-all hover:border-[#d4af37]">
                <div className="w-10 h-10 rounded-full bg-[#09261b] text-[#ebd082] flex items-center justify-center shrink-0 shadow-xs">
                  <FaClock className="text-sm" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#09261b] text-xs sm:text-sm">
                    Office Hours
                  </h4>
                  <p className="text-amber-950/75 text-xs">
                    Mon – Sat: 9:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Follow Us Section */}
            <div className="w-full flex flex-col items-start">
              <div className="flex items-center space-x-3 mb-4 w-full max-w-xs">
                <span className="text-[#09261b] text-xs font-serif font-bold tracking-wider uppercase whitespace-nowrap">
                  Follow Us
                </span>
                <span className="flex-grow h-[1px] bg-[#d4af37]/70"></span>
              </div>

              {/* Social Media Circular Icons */}
              <div className="flex items-center space-x-3">
                {[
                  { icon: <FaYoutube />, link: '#youtube' },
                  { icon: <FaFacebookF />, link: '#facebook' },
                  { icon: <FaInstagram />, link: '#instagram' },
                  { icon: <FaTwitter />, link: '#twitter' },
                  { icon: <FaWhatsapp />, link: '#whatsapp' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-9 h-9 rounded-full bg-[#09261b] hover:bg-[#061c13] text-[#ebd082] flex items-center justify-center text-sm shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: SEND A MESSAGE FORM ================= */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-3xl border-2 border-[#d4af37]/80 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 text-white"
              style={{
                background: 'linear-gradient(135deg, #02180f 0%, #05291a 55%, #031e13 100%)',
              }}
            >
              {/* Subtle Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
                style={{
                  backgroundImage: `url('')`,
                }}
              ></div>

              {/* Corner Arabesque Borders */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none"></div>

              <div className="relative z-10">
                
                {/* Form Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 text-[#ebd082] mb-1">
                    <FaEnvelope className="text-lg" />
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-amber-50">
                      Send a Message
                    </h3>
                  </div>
                  <p className="text-emerald-100/75 text-xs sm:text-sm font-light">
                    Fill out the form below and we will get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Your Name & Your Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs pointer-events-none">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name *"
                          className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/50 rounded-xl pl-9 pr-3.5 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Your Email */}
                    <div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs pointer-events-none">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email *"
                          className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/50 rounded-xl pl-9 pr-3.5 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Your Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Phone */}
                    <div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs pointer-events-none">
                          <FaPhoneAlt />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone *"
                          className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/50 rounded-xl pl-9 pr-3.5 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#09261b]/70 text-xs pointer-events-none">
                          <FaTag />
                        </span>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/50 rounded-xl pl-9 pr-3.5 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Your Message */}
                  <div>
                    <div className="relative">
                      <span className="absolute top-3.5 left-3.5 text-[#09261b]/70 text-xs pointer-events-none">
                        <FaEnvelope />
                      </span>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message *"
                        className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/50 rounded-2xl pl-9 pr-3.5 pt-3 pb-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-xs resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#c99b32] hover:brightness-105 text-[#031e13] font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg border border-amber-200/80 flex items-center justify-center space-x-2.5 transition-all duration-300"
                  >
                    <FaPaperPlane className="text-xs sm:text-sm" />
                    <span>Send Message</span>
                  </button>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;