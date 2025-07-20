'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6" style={{fontFamily: "Lobster, serif"}}>
              RoofPro Zambia
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              Your trusted roofing partner with 25+ years of experience protecting homes 
              throughout Zambia with quality craftsmanship and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-google-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Roof Installation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Roof Repair
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Roof Inspection
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Gutter Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-phone-line text-blue-400"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Call Us</p>
                  <a href="tel:+260971234567" className="text-white font-semibold cursor-pointer">
                    +260 971 234567
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email Us</p>
                  <a href="mailto:info@roofpro.zm" className="text-white font-semibold cursor-pointer">
                    info@roofpro.zm
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-map-pin-line text-blue-400"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Service Area</p>
                  <p className="text-white">Zambia & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-600 rounded-lg">
              <p className="text-sm font-semibold mb-2">24/7 Emergency Service</p>
              <p className="text-xs text-blue-100">
                Storm damage? Roof leak? We're here to help anytime, day or night.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 RoofPro Zambia. All rights reserved. Licensed & Insured Roofing Contractors.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>License #MA-123456</span>
              <span>Fully Insured</span>
              <span>BBB A+ Rated</span>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-400 text-sm">
            Made by <a href="https://wazama.vercel.app" className="text-blue-300 hover:text-blue-100 transition-colors" target="_blank" rel="noopener noreferrer">Wazama</a>
          </div>
        </div>
      </div>
    </footer>
  );
}