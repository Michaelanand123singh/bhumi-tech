import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/7a77e434a915ea9aa86950d332653b7d_t4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20 animate-pulse"></div>
      </div>

      {/* Minimal Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Digital Entertainment
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mt-4">
              Distribution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Technology-driven content distribution & protection
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105">
            Explore
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
    </div>
  );
}