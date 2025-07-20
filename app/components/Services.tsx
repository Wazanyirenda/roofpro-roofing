
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Roof Installation',
      description: 'Complete new roof installation using premium materials with comprehensive warranties and expert craftsmanship.',
      features: ['Premium Materials', 'Expert Installation', '25-Year Warranty']
    },
    {
      icon: 'ri-tools-line',
      title: 'Roof Repair',
      description: 'Quick and reliable roof repairs for leaks, missing shingles, storm damage, and general wear and tear.',
      features: ['Same-Day Service', 'All Repair Types', 'Quality Guarantee']
    },
    {
      icon: 'ri-refresh-line',
      title: 'Roof Replacement',
      description: 'Full roof replacement services when repairs aren\'t enough, with insurance claim assistance and financing options.',
      features: ['Insurance Help', 'Financing Available', 'Complete Replacement']
    },
    {
      icon: 'ri-search-line',
      title: 'Roof Inspection',
      description: 'Thorough roof inspections to identify potential issues before they become costly problems.',
      features: ['Detailed Reports', 'Photo Documentation', 'Maintenance Plans']
    },
    {
      icon: 'ri-drop-line',
      title: 'Gutter Services',
      description: 'Complete gutter installation, repair, and cleaning services to protect your home\'s foundation.',
      features: ['Installation & Repair', 'Cleaning Service', 'Gutter Guards']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Service',
      description: '24/7 emergency roofing services for storm damage, severe leaks, and urgent roofing issues.',
      features: ['24/7 Availability', 'Rapid Response', 'Emergency Repairs']
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            From installations to emergency repairs, we provide comprehensive roofing solutions 
            for residential and commercial properties throughout Zambia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group hover:scale-105 transform ${
                isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <i className={`${service.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap group-hover:translate-x-2 transform transition-transform duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-10'}`}>
          <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 max-w-3xl md:max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us today for a free estimate and discover why homeowners trust RoofPro for all their roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap hover:scale-105 transform transition-transform duration-200">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap hover:scale-105 transform transition-transform duration-200">
                Call +260 971 234567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
