import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
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
          Ready to Protect & Distribute Your Content?
        </h2>
        <p className="text-lg md:text-xl text-green-50 mb-10 leading-relaxed max-w-2xl mx-auto">
          Get started today with a free consultation and custom quote
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-5 rounded-lg hover:bg-green-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Schedule Consultation
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-600 text-white px-8 py-5 rounded-lg hover:bg-brown-700 transition-all duration-300 font-semibold border-2 border-white/20 hover:border-white/40 flex items-center justify-center group"
          >
            <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

