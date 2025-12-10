import React, { useEffect, useRef } from 'react';

const ClientLogos = () => {
  const sectionRef = useRef(null);

  const clients = [
    { name: 'Netflix', category: 'OTT Platform' },
    { name: 'Amazon Prime Video', category: 'OTT Platform' },
    { name: 'Disney+ Hotstar', category: 'OTT Platform' },
    { name: 'ZEE5', category: 'OTT Platform' },
    { name: 'SonyLIV', category: 'OTT Platform' },
    { name: 'MX Player', category: 'OTT Platform' },
    { name: 'YouTube', category: 'Video Platform' },
    { name: 'Jio Cinema', category: 'OTT Platform' },
    { name: 'Major Film Studios', category: 'Production' },
    { name: 'Music Labels', category: 'Music Industry' },
    { name: 'TV Networks', category: 'Broadcasting' },
    { name: 'Sports Broadcasters', category: 'Live Sports' },
  ];

  const contentTypes = [
    'Film Production Houses',
    'Independent Filmmakers',
    'Music Labels',
    'Web Series Creators',
    'Documentary Producers',
    'Sports Broadcasters',
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
              }, index * 50);
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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Our <span className="text-green-600 gradient-text">Clients</span> & Partners
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            Trusted by industry leaders across entertainment, media, and broadcasting
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card scroll-reveal bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-brown-100/50 text-center premium-hover premium-glow group"
            >
              <div className="text-lg font-bold text-black mb-2 group-hover:text-green-600 transition-colors duration-300">
                {client.name}
              </div>
              <div className="text-sm text-[#4a4a4a]">{client.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-50/50 to-white rounded-2xl p-8 shadow-lg border border-brown-100/50 text-center premium-glow">
          <h3 className="text-2xl font-bold text-black mb-6">Content Creators We Protect</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contentTypes.map((type, idx) => (
              <span
                key={idx}
                className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
