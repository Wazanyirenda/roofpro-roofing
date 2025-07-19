'use client';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-gray-900 w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20working%20on%20modern%20residential%20house%20roof%20installation%20with%20clean%20blue%20sky%20background%2C%20showing%20quality%20craftsmanship%20and%20attention%20to%20detail%20in%20roofing%20construction%20work&width=1920&height=1080&seq=hero-roofing&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 w-full">
        <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-bold mb-6 leading-tight">
              Professional Roofing
              <span className="block text-blue-400">Solutions You Trust</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl mb-8 leading-relaxed max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              Protecting your home with quality craftsmanship, premium materials, and 25+ years of roofing expertise in Zambia. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg lg:text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Get Free Estimate
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg lg:text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Call +260 971 234567
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}