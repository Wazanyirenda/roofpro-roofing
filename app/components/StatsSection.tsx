'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
const [counters, setCounters] = useState<{[key: string]: number}>({
    projects: 0,
    customers: 0,
    years: 0,
    warranty: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { 
      key: 'projects', 
      number: 2547, 
      label: 'Projects Completed', 
      suffix: '+',
      icon: 'ri-building-line',
      description: 'Successful roofing projects across Zambia'
    },
    { 
      key: 'customers', 
      number: 1892, 
      label: 'Happy Customers', 
      suffix: '+',
      icon: 'ri-user-heart-line',
      description: 'Satisfied homeowners who trust our work'
    },
    { 
      key: 'years', 
      number: 25, 
      label: 'Years Experience', 
      suffix: '+',
      icon: 'ri-time-line',
      description: 'Decades of roofing expertise and reliability'
    },
    { 
      key: 'warranty', 
      number: 5, 
      label: 'Year Warranty', 
      suffix: '',
      icon: 'ri-shield-check-line',
      description: 'Comprehensive warranty on all our work'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
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
      const duration = 2500;
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
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20geometric%20pattern%20with%20roof%20tiles%20and%20construction%20elements%20in%20subtle%20blue%20tones%2C%20minimalist%20background%20design%20for%20statistics%20section&width=1920&height=600&seq=stats-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Thousands of Homeowners
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            Our numbers speak for themselves. Here's why RoofPro is the preferred choice 
            for roofing services throughout Zambia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 transform group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  <i className={`${stat.icon} text-3xl text-white`}></i>
                </div>
                
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transform transition-transform duration-300">
                  {counters[stat.key]}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-sm opacity-80 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Ready to Join Our Satisfied Customers?</h3>
            <p className="text-base md:text-lg lg:text-xl opacity-90 mb-6">
              Experience the RoofPro difference with a free consultation and estimate for your roofing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform">
                Get Free Estimate
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}