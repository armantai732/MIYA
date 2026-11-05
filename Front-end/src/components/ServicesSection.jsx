import React from 'react';
import { FaHandsHelping, FaShieldAlt, FaLeaf, FaUserShield, FaVideo, FaArrowRight } from 'react-icons/fa';
import serviceImage from '../assets/services.png'

const servicesData = [
  {
    id: 1,
    title: 'Istikhara Consultation',
    description: 'Get guidance for important decisions',
    icon: <FaHandsHelping />,
  },
  {
    id: 2,
    title: 'Ruqyah Service',
    description: 'Protection from negative energies',
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: 'Spiritual Healing',
    description: 'Find peace & recovery',
    icon: <FaLeaf />,
  },
  {
    id: 4,
    title: 'Personalized Guidance',
    description: 'One-to-one support',
    icon: <FaUserShield />,
  },
  {
    id: 5,
    title: 'Online Consultation',
    description: 'Get help from anywhere',
    icon: <FaVideo />,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Subtle Mosque Skyline/Texture Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url(${serviceImage})`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-12 h-[1px] bg-amber-700/50"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-amber-950 tracking-wide">
              Our Services
            </h2>
            <span className="w-12 h-[1px] bg-amber-700/50"></span>
          </div>
          <p className="text-amber-900/70 text-sm sm:text-base font-light">
            Professional and trusted services for your spiritual and personal well-being
          </p>
        </div>

        {/* Services Grid (5 Cards Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Dark Green Circular Icon */}
              <div className="w-14 h-14 rounded-full bg-[#09261b] text-amber-200 flex items-center justify-center text-2xl mb-5 shadow-sm">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif font-bold text-amber-950 text-base sm:text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-900/70 font-normal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Services Button Center */}
        <div className="flex justify-center">
          <a
            href="#all-services"
            className="inline-flex items-center space-x-2 bg-[#09261b] hover:bg-[#061c13] text-white font-medium px-7 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>View All Services</span>
            <FaArrowRight className="text-xs" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;