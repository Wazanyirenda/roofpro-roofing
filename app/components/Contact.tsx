
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Roofing Quote
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            Ready to protect your home with quality roofing? Contact us today for a free estimate 
            and consultation. We're here to help with all your roofing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <i className="ri-phone-line text-xl text-blue-600 group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <i className="ri-mail-line text-xl text-blue-600 group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@roofpro.com</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <i className="ri-map-pin-line text-xl text-blue-600 group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Service Area</h4>
                    <p className="text-gray-600">Greater Boston & Central MA</p>
                    <p className="text-sm text-gray-500">Within 50 miles of Boston</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <i className="ri-time-line text-xl text-blue-600 group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 7AM-6PM</p>
                    <p className="text-gray-600">Sat: 8AM-4PM</p>
                    <p className="text-sm text-gray-500">Emergency service 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-2">Emergency Service Available</h4>
                <p className="mb-4 opacity-90">
                  Storm damage? Severe leak? We offer 24/7 emergency roofing services to protect your home.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap hover:scale-105 transform transition-transform duration-200">
                  Call Emergency Service
                </button>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form id="contact-form" onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-pulse">
                  Thank you! We'll contact you within 24 hours with your free quote.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm hover:border-blue-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm hover:border-blue-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm hover:border-blue-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm hover:border-blue-300 pr-8 appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">New Roof Installation</option>
                    <option value="repair">Roof Repair</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="gutters">Gutter Services</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm hover:border-blue-300 resize-none"
                  placeholder="Describe your roofing project or any specific concerns..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Sending Request...
                  </span>
                ) : (
                  'Get My Free Quote'
                )}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                By submitting this form, you agree to be contacted about your roofing project. 
                We respect your privacy and won't share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
