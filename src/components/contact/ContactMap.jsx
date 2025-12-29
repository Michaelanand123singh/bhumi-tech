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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Our <span className="text-green-600 gradient-text">Location</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Visit us at our headquarters or reach out through any of our contact channels
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50/50 to-white rounded-2xl h-[500px] flex items-center justify-center border border-brown-100/50 shadow-xl premium-glow scroll-reveal overflow-hidden relative">
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h18v-2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2V6h-2V4h2V2h-2V0h2v20H20v.5z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <p className="text-black text-xl font-bold mb-3">Google Maps Integration</p>
            <p className="text-[#4a4a4a] mb-2">Embed your office location map here</p>
            <p className="text-green-600 font-semibold text-lg">
              Bhumi Technology
            </p>
            <p className="text-[#4a4a4a]">Gaya, Bihar, India (823001)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

