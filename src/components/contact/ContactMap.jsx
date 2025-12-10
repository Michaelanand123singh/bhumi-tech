import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const ContactMap = () => {
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-green-50/30 to-white rounded-2xl h-96 flex items-center justify-center border border-brown-100/50 shadow-lg premium-glow scroll-reveal">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <p className="text-black text-lg font-semibold mb-2">Google Maps Integration</p>
            <p className="text-[#4a4a4a] text-sm">Embed your office location map here</p>
            <p className="text-[#4a4a4a] text-sm mt-2">Bhumi Technology Pvt. Ltd., Amritsar, Punjab, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

