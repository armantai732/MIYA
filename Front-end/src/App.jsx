
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpiritualCoursesSection from "./components/SpiritualCoursesSection";
import ServicesSection from "./components/ServicesSection";
import HerbalProductsSection from "./components/HerbalProductsSection";
import LatestArticlesSection from "./components/LatestArticlesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AppointmentBanner from "./components/AppointmentBanner";
import Footer from "./components/Footer";

import AboutHeroBanner from "./components/AboutHeroBanner";
import OurStorySection from "./components/OurStorySection";
import OurValuesSection from "./components/OurValuesSection";
import OurJourneySection from "./components/OurJourneySection";
import SpiritualGuideSection from "./components/SpiritualGuideSection";

import SpiritualKnowledgeHero from "./components/SpiritualKnowledgeHero";
import KnowledgeCategoriesSection from "./components/KnowledgeCategoriesSection";
import FeaturedKnowledgeSection from "./components/FeaturedKnowledgeSection";
import LatestArticlesInsights from "./components/LatestArticlesInsights";

import LearnReflectGrowBanner from "./components/LearnReflectGrowBanner";
import SpiritualCourses from "./components/SpiritualCourses";
import FeaturedCourseBanner from "./components/FeaturedCourseBanner";
import WhyChooseCoursesSection from "./components/WhyChooseCoursesSection";
import EnrollStepsSection from "./components/EnrollStepsSection";
import FAQSection from "./components/FAQSection";

import HerbalProductsHero from "./components/HerbalProductsHero.jsx";
import HerbalProductsListingPage from "./components/HerbalProductsListingPage.jsx";
import HerbalTrustBanner from "./components/HerbalTrustBanner.jsx";
import WhyChooseHerbalWithFAQ from "./components/WhyChooseHerbalWithFAQ.jsx";

// SCROLL TO TOP / HASH SECTION
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
};

// HOME PAGE
const Home = () => {
  return (
    <main>
      <HeroSection />

      <div id="about" className="scroll-mt-24">
        <AboutSection />
      </div>

      <div id="courses" className="scroll-mt-24">
        <SpiritualCoursesSection />
      </div>

      <div id="services" className="scroll-mt-24">
        <ServicesSection />
      </div>

      <div id="products" className="scroll-mt-24">
        <HerbalProductsSection />
      </div>

      <div id="blogs" className="scroll-mt-24">
        <LatestArticlesSection />
      </div>

      <TestimonialsSection />

      <div id="appointment" className="scroll-mt-24">
        <AppointmentBanner />
      </div>
    </main>
  );
};

// ABOUT PAGE
const About = () => {
  return (
    <main>
      <AboutHeroBanner />
      <OurStorySection />
      <OurValuesSection />
      <OurJourneySection />
      <SpiritualGuideSection />
    </main>
  );
};

// KNOWLEDGE PAGE
const Knowledge = () => {
  return (
    <main>
      <SpiritualKnowledgeHero />
      <KnowledgeCategoriesSection />
      <FeaturedKnowledgeSection />
      <LatestArticlesInsights />
    </main>
  );
};

// COURSES PAGE
const Courses = () => {
  return (
    <main>
      <LearnReflectGrowBanner />
      <SpiritualCourses />
      <FeaturedCourseBanner />
      <WhyChooseCoursesSection />
      <EnrollStepsSection />
      <FAQSection />
    </main>
  );
};

// PRODUCTS PAGE
const Products = () => {
  return (
    <main>
      <HerbalProductsHero />
      <HerbalProductsListingPage />
      <HerbalTrustBanner />
      <WhyChooseHerbalWithFAQ />
    </main>
  );
};

// MAIN APP
function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />

      <Header />

      <div className="min-h-screen bg-[#fcf8ed]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
