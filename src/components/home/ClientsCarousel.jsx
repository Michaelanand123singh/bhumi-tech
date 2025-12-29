import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientLogo = ({ logoUrls, companyName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const handleError = () => {
    if (currentIndex < logoUrls.length - 1) {
      // Try next fallback URL
      setCurrentIndex(currentIndex + 1);
    } else {
      // All URLs failed, show text
      setImageError(true);
    }
  };
  
  if (imageError) {
    return (
      <span className="text-lg font-bold text-gray-400 group-hover:text-green-600 transition-colors duration-300">
        {companyName}
      </span>
    );
  }
  
  return (
    <img
      src={logoUrls[currentIndex]}
      alt={companyName}
      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
      onError={handleError}
      key={currentIndex}
    />
  );
};

const ClientsCarousel = () => {
  // Using simple-icons CDN which is reliable and works well
  const getSimpleIcon = (iconName) => {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`;
  };

  const clients = [
    {
      name: 'Netflix',
      logos: [
        getSimpleIcon('netflix'),
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        'https://logo.clearbit.com/netflix.com'
      ]
    },
    {
      name: 'Amazon Prime',
      logos: [
        getSimpleIcon('primevideo'),
        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
        'https://logo.clearbit.com/primevideo.com'
      ]
    },
    {
      name: 'Disney+ Hotstar',
      logos: [
        getSimpleIcon('disneyplus'),
        'https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_Hotstar_logo.svg',
        'https://logo.clearbit.com/hotstar.com'
      ]
    },
    {
      name: 'ZEE5',
      logos: [
        getSimpleIcon('zee5'),
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/ZEE5_logo.svg',
        'https://logo.clearbit.com/zee5.com'
      ]
    },
    {
      name: 'SonyLIV',
      logos: [
        getSimpleIcon('sonyliv'),
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/SonyLIV_logo.svg',
        'https://logo.clearbit.com/sonyliv.com'
      ]
    },
    {
      name: 'MX Player',
      logos: [
        getSimpleIcon('mxplayer'),
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/MX_Player_logo.svg',
        'https://logo.clearbit.com/mxplayer.in'
      ]
    },
    {
      name: 'YouTube',
      logos: [
        getSimpleIcon('youtube'),
        'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_logo_%282017%29.svg',
        'https://logo.clearbit.com/youtube.com'
      ]
    },
    {
      name: 'Jio Cinema',
      logos: [
        getSimpleIcon('jiocinema'),
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/JioCinema_logo.svg',
        'https://logo.clearbit.com/jiocinema.com'
      ]
    },
  ];

  // Duplicating the list to ensure smooth infinite scroll
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Trusted <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Powering content delivery for the world's leading entertainment platforms
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex">
          <motion.div
            className="flex gap-8 py-4 px-4"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-green-200 transition-all duration-300 group cursor-default p-4"
              >
                <ClientLogo 
                  logoUrls={client.logos} 
                  companyName={client.name}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

