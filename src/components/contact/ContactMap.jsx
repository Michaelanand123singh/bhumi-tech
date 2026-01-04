import React, { useEffect, useRef } from 'react';

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
        <div className="rounded-2xl border border-brown-100/50 shadow-xl premium-glow overflow-hidden relative w-full bg-white" style={{ minHeight: '500px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57957.672602773164!2d84.9407953140931!3d24.783310589059997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a440a1b3c1f%3A0xcef6b223bdbf34a6!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1767510625221!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ 
              border: 0, 
              display: 'block', 
              width: '100%', 
              height: '500px', 
              minHeight: '500px',
              position: 'relative',
              zIndex: 1
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] min-h-[500px] rounded-2xl"
            title="Bhumi Technology Location - Gaya, Bihar"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

