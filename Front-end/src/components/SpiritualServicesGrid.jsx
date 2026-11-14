import React from 'react';
import { 
  FaHandsHelping, 
  FaBookOpen, 
  FaComments, 
  FaCompass, 
  FaVideo, 
  FaMosque, 
  FaArrowRight 
} from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Istikhara Guidance',
    description: "Get Allah's guidance for important decisions in life.",
    icon: <FaHandsHelping />,
    link: '#istikhara',
  },
  {
    id: 2,
    title: 'Ruqyah Support',
    description: 'Spiritual healing through Quran and Sunnah.',
    icon: <FaBookOpen />,
    link: '#ruqyah',
  },
  {
    id: 3,
    title: 'Spiritual Counseling',
    description: "Find peace and solutions to life's challenges.",
    icon: <FaComments />,
    link: '#counseling',
  },
  {
    id: 4,
    title: 'Personal Guidance',
    description: 'Receive personalized spiritual guidance.',
    icon: <FaCompass />,
    link: '#personal-guidance',
  },
  {
    id: 5,
    title: 'Online Consultation',
    description: 'Get expert advice from anywhere in the world.',
    icon: <FaVideo />,
    link: '#consultation',
  },
  {
    id: 6,
    title: 'Islamic Lifestyle Guidance',
    description: 'Live a righteous and blessed life in accordance with Islam.',
    icon: <FaMosque />,
    link: '#lifestyle',
  },
];

const SpiritualServicesGrid = () => {
  return (
    <section className="relative w-full bg-[#fcf8ed] py-14 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url('')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 6 Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#f7f2e1]/90 backdrop-blur-sm rounded-2xl p-5 border border-[#d4af37]/40 shadow-sm flex items-start space-x-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Left Arch Icon Badge */}
              <div 
                className="w-16 h-20 shrink-0 bg-[#09261b] shadow-md flex items-center justify-center text-[#ebd082] text-2xl border border-[#d4af37]/40 transition-transform duration-300 group-hover:scale-105"
                style={{
                  clipPath: 'polygon(0% 100%, 0% 25%, 20% 12%, 50% 0%, 80% 12%, 100% 25%, 100% 100%)',
                  borderRadius: '0 0 1rem 1rem'
                }}
              >
                {service.icon}
              </div>

              {/* Right Content Details */}
              <div className="flex flex-col flex-grow justify-between h-full pt-1">
                <div>
                  <h3 className="font-serif font-bold text-amber-950 text-base sm:text-lg mb-1 leading-tight group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-amber-950/75 leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Dark Green Learn More Button */}
                <div>
                  <a
                    href={service.link}
                    className="inline-flex items-center space-x-1.5 bg-[#09261b] hover:bg-[#061c13] text-amber-100 font-medium text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpiritualServicesGrid;