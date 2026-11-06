import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTimes,
  FaBars,
  FaCalendarAlt,
  FaMosque,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Spiritual Knowledge", path: "/knowledge" },
  // { name: "Courses", path: "/courses" },
  // { name: "Herbal Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Appointment", path: "/appointment" },
  // { name: "Blog & Updates", path: "/blogs" },
  { name: "Donate", path: "/donate" },
  { name: "Contact", path: "/contact" },
  // { name: "Mureed Card", path: "/mureed-card" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  // SCROLL DIRECTION BASED NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Page Top
      if (currentScrollY <= 100) {
        setShowNavbar(true);
      }
      // Scroll Up
      else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      }
      // Scroll Down
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
        setIsMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBookNow = () => {
    setIsMenuOpen(false);
    navigate("/#appointment");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 w-full font-sans">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#031e13] text-[#fff8e7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">

          <div className="flex min-w-0 items-center gap-2">
            <FaMosque className="shrink-0 text-sm text-[#ebd082]" />

            <p className="truncate text-[10px] font-medium tracking-wide text-emerald-50/90 sm:text-xs">
              May Allah fill our lives with peace, guidance and barakah. Ameen!
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hidden shrink-0 items-center gap-4 text-sm sm:flex">
            <a
              href="#youtube"
              aria-label="YouTube"
              className="text-emerald-100/80 transition-colors hover:text-[#ebd082]"
            >
              <FaYoutube />
            </a>

            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-emerald-100/80 transition-colors hover:text-[#ebd082]"
            >
              <FaFacebookF />
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-emerald-100/80 transition-colors hover:text-[#ebd082]"
            >
              <FaInstagram />
            </a>

            <a
              href="#whatsapp"
              aria-label="WhatsApp"
              className="text-emerald-100/80 transition-colors hover:text-[#ebd082]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - SCROLL UP SHOW / SCROLL DOWN HIDE */}
      <div
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
        style={{
          top: "0px",
        }}
      >
        <nav className="border-b border-[#d4af37]/35 bg-[#fcf8ed] shadow-[0_5px_20px_rgba(3,30,19,0.06)]">

          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-3"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#031e13] shadow-md transition-transform duration-300 group-hover:rotate-3 sm:h-14 sm:w-14">
                <FaMosque className="text-2xl text-[#ebd082] sm:text-3xl" />
                <span className="absolute -bottom-1 h-2 w-2 rounded-full bg-[#d4af37]" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight tracking-wide text-[#704b13] sm:text-2xl">
                  YOUR NAME
                </span>

                <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#0d5034] sm:text-[10px] sm:tracking-[0.16em]">
                  Spiritual Guidance & Hikmat
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden xl:flex xl:items-center xl:gap-3 2xl:gap-5">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `group relative whitespace-nowrap py-3 text-[11px] font-semibold tracking-wide transition-colors duration-300 2xl:text-xs ${
                      isActive
                        ? "text-[#a4771e]"
                        : "text-[#263d2e] hover:text-[#a4771e]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      <span
                        className={`absolute bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[#b78a36] via-[#f4d58b] to-[#b78a36] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

            </div>

            {/* DESKTOP BOOK BUTTON */}
            <button
              onClick={handleBookNow}
              className="hidden shrink-0 items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#ebd082] to-[#d4af37] px-4 py-3 text-xs font-bold text-[#352609] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg 2xl:flex"
            >
              <FaCalendarAlt />
              Book Now
              <FaChevronRight className="text-[9px]" />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/50 bg-[#031e13] text-xl text-[#ebd082] shadow-sm transition-all hover:bg-[#0d3b28] xl:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* MOBILE MENU */}
          <div
            className={`overflow-hidden border-t border-[#d4af37]/25 bg-[#fcf8ed] transition-all duration-300 xl:hidden ${
              isMenuOpen
                ? "max-h-[85vh] opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }`}
          >
            <div className="max-h-[85vh] space-y-1 overflow-y-auto px-4 py-4 sm:px-6">

              {/* MOBILE MENU HEADING */}
              <div className="mb-3 flex items-center gap-2 border-b border-[#d4af37]/30 pb-3">
                <FaMosque className="text-lg text-[#a4771e]" />

                <span className="font-serif text-sm font-bold text-[#0d3b28]">
                  Explore Our Website
                </span>
              </div>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-l-[3px] border-[#d4af37] bg-[#d4af37]/10 text-[#966d1b]"
                        : "border-l-[3px] border-transparent text-[#263d2e] hover:bg-[#d4af37]/10 hover:text-[#966d1b]"
                    }`
                  }
                >
                  {link.name}

                  <FaChevronRight className="text-[10px] opacity-50" />
                </NavLink>
              ))}

              {/* MOBILE BOOK BUTTON */}
              <button
                onClick={handleBookNow}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ebd082] to-[#d4af37] py-3.5 text-sm font-bold text-[#352609] shadow-md transition-all hover:brightness-105"
              >
                <FaCalendarAlt />
                Book an Appointment
                <FaArrowRight />
              </button>

              {/* MOBILE SOCIAL LINKS */}
              <div className="flex items-center justify-center gap-6 border-t border-[#d4af37]/30 pt-5 text-lg text-[#0d3b28]">
                <a href="#youtube" aria-label="YouTube">
                  <FaYoutube />
                </a>

                <a href="#facebook" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#instagram" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="#whatsapp" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>

            </div>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;