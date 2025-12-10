import React, { useEffect, useRef } from 'react';
import { Play, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const heroElement = heroRef.current;
    const cardsElement = cardsRef.current;

    if (heroElement) observer.observe(heroElement);
    if (cardsElement) observer.observe(cardsElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
      if (cardsElement) observer.unobserve(cardsElement);
    };
  }, []);

  return (
    <section className="pt-24 pb-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={heroRef} className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
              Powering Digital Entertainment{' '}
              <span className="text-green-600">Across Borders</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4a4a4a] mb-10 leading-relaxed max-w-xl">
              Premier content distribution and anti-piracy solutions for the modern entertainment industry. Protect, distribute, and maximize your content's value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 font-semibold border-2 border-brown-600 hover:border-brown-700 flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>
          </div>
          <div ref={cardsRef} className="scroll-reveal">
            <div className="bg-gradient-to-br from-green-50/50 to-brown-50/30 rounded-2xl p-8 shadow-xl border border-brown-100/50">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-4 border border-brown-100/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Globe className="w-6 h-6 text-green-600 animate-float" />
                  </div>
                  <span className="font-semibold text-black text-lg">Content Distribution</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>50+ Platform Integrations</span>
                  </div>
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Global Reach Enabled</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-brown-100/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600 animate-float" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <span className="font-semibold text-black text-lg">Content Protection</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>24/7 Piracy Monitoring</span>
                  </div>
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Instant Takedown Actions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


