
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const testimonials = [
    {
      name: 'Sarah Mwansa',
      location: 'Lusaka, Zambia',
      rating: 5,
      text: 'RoofPro exceeded our expectations! They replaced our entire roof after storm damage and the quality is outstanding. The team was professional, clean, and finished ahead of schedule. Highly recommend!',
      service: 'Roof Replacement'
    },
    {
      name: 'Michael Banda',
      location: 'Ndola, Zambia',
      rating: 5,
      text: 'Emergency roof repair during a major storm - they came out the same day and fixed our leak perfectly. Fair pricing and excellent communication throughout the process. Will definitely use them again.',
      service: 'Emergency Repair'
    },
    {
      name: 'Lisa Chanda',
      location: 'Kitwe, Zambia',
      rating: 5,
      text: 'From initial inspection to final cleanup, RoofPro was fantastic. They helped us navigate the insurance claim and delivered a beautiful new roof. The craftsmanship is top-notch and the warranty gives us peace of mind.',
      service: 'Insurance Claim'
    },
    {
      name: 'David Lungu',
      location: 'Livingstone, Zambia',
      rating: 5,
      text: 'Professional service from start to finish. The crew was respectful of our property, worked efficiently, and the new roof looks amazing. Great communication and fair pricing. Couldn\'t be happier!',
      service: 'Roof Installation'
    }
  ];

  const nextTestimonial = () => {
    setAutoPlay(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setAutoPlay(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setAutoPlay(false);
    setCurrentTestimonial(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            Don't just take our word for it. Here's what homeowners throughout Zambia 
            say about their experience with RoofPro.
          </p>
        </div>

        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-2xl animate-pulse" style={{animationDelay: `${i * 100}ms`}}></i>
              ))}
            </div>

            <div className="relative overflow-hidden">
              <blockquote className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 text-center mb-8 leading-relaxed transition-all duration-500 transform">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>

            <div className="text-center">
              <div className="font-bold text-xl text-gray-900 mb-1">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600 mb-2">
                {testimonials[currentTestimonial].location}
              </div>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {testimonials[currentTestimonial].service}
              </div>
            </div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 transform"
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 transform ${
                      currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 transform"
              >
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <i className="ri-thumb-up-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">98% Satisfaction Rate</h3>
              <p className="text-gray-600">Nearly all our customers rate our service as excellent</p>
            </div>

            <div className="text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <i className="ri-award-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">A+ BBB Rating</h3>
              <p className="text-gray-600">Accredited business with Better Business Bureau</p>
            </div>

            <div className="text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <i className="ri-star-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Reviews</h3>
              <p className="text-gray-600">Consistently rated 5 stars across all platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
