
'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    experience: 0,
    projects: 0,
    satisfaction: 0,
    emergency: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { key: 'experience', number: 25, label: 'Years Experience', suffix: '+' },
    { key: 'projects', number: 2500, label: 'Projects Completed', suffix: '+' },
    { key: 'satisfaction', number: 100, label: 'Licensed & Insured', suffix: '%' },
    { key: 'emergency', number: 24, label: 'Emergency Service', suffix: '/7' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(start)
        }));
      }, 16);
    });
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose RoofPro for Your Roofing Needs?
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              With over 25 years of experience in the roofing industry, RoofPro has built a reputation 
              for excellence, reliability, and outstanding customer service. We're not just contractors 
              – we're your neighbors, committed to protecting your most valuable investment.
            </p>

            <div className="space-y-6 mb-8">
              <div className={`flex items-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i className="ri-shield-check-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
                </div>
              </div>

              <div className={`flex items-start transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i className="ri-award-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Materials</h3>
                  <p className="text-gray-600">We use only premium roofing materials from trusted manufacturers with extended warranties.</p>
                </div>
              </div>

              <div className={`flex items-start transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i className="ri-customer-service-2-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h3>
                  <p className="text-gray-600">Our skilled team delivers exceptional workmanship with attention to every detail.</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap hover:scale-105 transform transition-transform duration-200">
              Get Your Free Quote
            </button>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9a1b1e719a3b?auto=format&fit=crop&q=80&w=600&h=700"
              alt="Zambian roofing team at work"
              className="rounded-xl shadow-lg object-cover object-top w-full h-96 hover:scale-105 transition-transform duration-500"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className={`bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-all duration-300 hover:scale-105 transform delay-${(index + 5) * 100}`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
