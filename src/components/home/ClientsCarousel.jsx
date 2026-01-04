import React from 'react';

const ClientsCarousel = () => {
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

  // Duplicating the list to ensure smooth infinite scroll
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Trusted <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Powering content delivery for the world's leading entertainment platforms
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-8 py-4 px-4 animate-scroll"
            style={{
              animation: 'scroll 20s linear infinite',
            }}
          >
            {marqueeClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-green-200 transition-all duration-300 group cursor-default"
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-green-600 transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

