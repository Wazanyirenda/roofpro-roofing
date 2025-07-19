
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300 hover:scale-105 transform"
            style={{ fontFamily: '"Pacifico", serif' }}
          >
            RoofPro
          </Link>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-center text-xs md:text-sm text-gray-600">
              <i className="ri-phone-line text-blue-600 mr-2"></i>
              <span className="font-medium">+260 971 234567</span>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 transform"
            >
              Free Quote
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
          >
            <i className={`text-2xl transition-transform duration-300 ${
              isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 border-t border-gray-200 mt-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer py-2 hover:translate-x-2 transform"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer py-2 hover:translate-x-2 transform"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer py-2 hover:translate-x-2 transform"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer py-2 hover:translate-x-2 transform"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer py-2 hover:translate-x-2 transform"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <i className="ri-phone-line text-blue-600 mr-2"></i>
                <span className="font-medium">+260 971 234567</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer"
              >
                Get Free Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
