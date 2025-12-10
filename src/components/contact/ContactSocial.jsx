import React, { useEffect, useRef } from 'react';
import { Globe, MessageCircle, Mail } from 'lucide-react';

const ContactSocial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const icons = entry.target.querySelectorAll('.social-icon');
            icons.forEach((icon, index) => {
              setTimeout(() => {
                icon.classList.add('revealed');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-brown-100/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          Connect <span className="text-green-600 gradient-text">With Us</span>
        </h2>
        <p className="text-lg md:text-xl text-[#4a4a4a] mb-10 max-w-2xl mx-auto">
          Follow us on social media for industry insights and updates
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="social-icon scroll-reveal w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 border border-brown-100/50 premium-hover premium-glow group"
          >
            <Globe className="w-6 h-6 text-black group-hover:text-green-600 transition-colors duration-300" />
          </a>
          <a
            href="#"
            className="social-icon scroll-reveal w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 border border-brown-100/50 premium-hover premium-glow group"
          >
            <MessageCircle className="w-6 h-6 text-black group-hover:text-green-600 transition-colors duration-300" />
          </a>
          <a
            href="#"
            className="social-icon scroll-reveal w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 border border-brown-100/50 premium-hover premium-glow group"
          >
            <Mail className="w-6 h-6 text-black group-hover:text-green-600 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;

