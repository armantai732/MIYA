import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // Import Provider

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import LatestArticlesSection from "./components/LatestArticlesSection";
import AppointmentBanner from "./components/AppointmentBanner";
import Footer from "./components/Footer";
import AboutHeroBanner from "./components/AboutHeroBanner";
import OurStorySection from "./components/OurStorySection";
import OurValuesSection from "./components/OurValuesSection";
import OurJourneySection from "./components/OurJourneySection";
import SpiritualGuideSection from "./components/SpiritualGuideSection";

// (Keep all your other page components imported as they were...)

const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
};

const Home = () => (
  <main>
    <HeroSection />
    <div id="about" className="scroll-mt-24"><AboutSection /></div>
    <div id="services" className="scroll-mt-24"><ServicesSection /></div>
    <div id="blogs" className="scroll-mt-24"><LatestArticlesSection /></div>
    <div id="appointment" className="scroll-mt-24"><AppointmentBanner /></div>
  </main>
);

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

const Services = () => {
  return (
    <main>
      <SpiritualServicesHero />
      <SpiritualServicesGrid />
      <HowItWorksAndFAQ />
    </main>
  )
}

const Appointment = () => {
  return (
    <main>
      <BookAppointmentBanner />
      <AppointmentBookingSection />
      <SimpleAppointmentSteps />
      <AppointmentFAQSection />
    </main>
  )
}


const Donate = () => {
  return (
    <main>
      <DonateHeroBanner />
      <DonatePurposeSection />
      <DonationFormSection />
      <DonateImpactSection />
      <DonateGratitudeBanner />
      <DonateFAQSection />
    </main>
  )
}


const Contact = () => {
  return (
    <main>
      <ContactHeroBanner />
      <ContactFormSection />
      <ContactFAQSection />
    </main>
  )
}

const Payment = () => {
  return (
    <main>
      <AppointmentPaymentHeaderBanner />
      <ContactFormSection />
      <ContactFAQSection />
    </main>
  )
}

// MAIN APP
function App() {
  return (
    <LanguageProvider> {/* Wrap everything here */}
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
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;