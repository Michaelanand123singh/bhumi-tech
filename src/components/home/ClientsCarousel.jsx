import React, { useEffect, useRef } from 'react';

const ClientsCarousel = () => {
  const sectionRef = useRef(null);
  const clients = [
    'Netflix',
    'Amazon Prime',
    'Disney+ Hotstar',
    'ZEE5',
    'SonyLIV',
    'MX Player',
    'YouTube',
    'Jio Cinema',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.client-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 75);
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Trusted <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Working with the world's leading entertainment platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card scroll-reveal bg-white rounded-xl p-6 lg:p-8 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 border border-brown-100/50 hover:border-green-200 hover:scale-105"
            >
              <span className="text-lg lg:text-xl font-semibold text-black text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

