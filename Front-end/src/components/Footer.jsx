import React from 'react';
import { 
  FaYoutube, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaTimes, 
  FaMosque, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaHeart 
} from 'react-icons/fa';
import background from '../assets/background1.png'


const Footer = () => {
  return (
    <footer className="relative w-full bg-[#031e13] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden border-t border-[#d4af37]/30">
      
      {/* Background Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Column 1: Brand & Bio (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-amber-300 text-3xl">
                <FaMosque />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-amber-100 tracking-wide">
                  YOUR NAME
                </span>
                <span className="text-[10px] text-amber-300/80 tracking-wider font-medium">
                  Spiritual Guidance &amp; Hikmat
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-emerald-100/70 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Spreading peace, knowledge and healing for a better tomorrow.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-2 text-amber-200">
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-900/60 border border-amber-300/30 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-colors text-sm">
                <FaYoutube />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-900/60 border border-amber-300/30 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-colors text-sm">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-900/60 border border-amber-300/30 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-colors text-sm">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-900/60 border border-amber-300/30 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-colors text-sm">
                <FaWhatsapp />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-900/60 border border-amber-300/30 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-colors text-sm">
                <FaTimes />
              </a>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-serif font-bold text-amber-100 text-base mb-2 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80 font-light">
              <li><a href="#home" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Home</span></a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› About Us</span></a></li>
              {/* <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Spiritual Courses</span></a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Herbal Products</span></a></li> */}
              <li><a href="#services" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Services</span></a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-serif font-bold text-amber-100 text-base mb-2 tracking-wide">
              Useful Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80 font-light">
              <li><a href="#book" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Book an Appointment</span></a></li>
              {/* <li><a href="#blog" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Blog &amp; Updates</span></a></li> */}
              <li><a href="#donate" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Donate</span></a></li>
              {/* <li><a href="#card" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Mureed Card</span></a></li> */}
              {/* <li><a href="#contact" className="hover:text-amber-300 transition-colors flex items-center space-x-2"><span>› Contact Us</span></a></li> */}
            </ul>
          </div>

          {/* Column 4: Contact Us & Newsletter */}
          <div className="flex flex-col space-y-3 lg:col-span-1">
            <h3 className="font-serif font-bold text-amber-100 text-base mb-2 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/80 font-light mb-2">
              {/* <li className="flex items-center space-x-2.5">
                <FaPhoneAlt className="text-amber-300 shrink-0 text-xs" />
                <span>+91 98765 43210</span>
              </li> */}
              <li className="flex items-center space-x-2.5">
                <FaEnvelope className="text-amber-300 shrink-0 text-xs" />
                <span>info@yourname.com</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FaMapMarkerAlt className="text-amber-300 shrink-0 text-xs mt-1" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-medium text-amber-100 mb-2">Subscribe to our Newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-white/90 text-amber-950 text-xs px-3 py-2.5 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:rounded-l-lg outline-none w-full"
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-200 to-amber-400 hover:brightness-105 text-amber-950 font-semibold text-xs px-4 py-2.5 rounded-r-lg sm:rounded-l-none rounded-l-lg sm:rounded-r-lg transition-all shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-100/60 font-light space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div>
            © 2026 Your Name. All Rights Reserved.
          </div>

          {/* Middle Meta / Faith */}
          <div className="flex items-center space-x-3 text-amber-300/80">
            <span>Faith</span>
            <span>•</span>
            <span>Knowledge</span>
            <span>•</span>
            <span>Healing</span>
          </div>

          {/* Designed With Love */}
          <div className="flex items-center space-x-1">
            <span>Designed with</span>
            <FaHeart className="text-red-500 text-[10px]" />
            <span>for Humanity</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;