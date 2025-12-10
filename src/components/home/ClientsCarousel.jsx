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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Trusted <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-xl text-[#4a4a4a]">Working with the world's leading entertainment platforms</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-brown-200"
            >
              <span className="text-xl font-bold text-black">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

