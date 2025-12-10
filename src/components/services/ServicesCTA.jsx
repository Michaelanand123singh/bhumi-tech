import React, { useEffect, useRef } from 'react';
import { Globe, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-green-600 to-green-700 scroll-reveal">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-green-50 mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how our services can help protect and grow your content business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-5 rounded-lg hover:bg-green-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            <Globe className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Schedule Free Consultation
          </Link>
          <button className="bg-green-800 text-white px-8 py-5 rounded-lg hover:bg-green-900 transition-all duration-300 font-semibold border-2 border-white/20 hover:border-white/40 flex items-center justify-center group">
            <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Download Service Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;

