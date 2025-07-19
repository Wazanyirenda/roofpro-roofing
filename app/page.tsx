
'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <StatsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
