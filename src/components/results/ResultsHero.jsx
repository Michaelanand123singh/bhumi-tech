import React, { useEffect, useRef } from 'react';

const ResultsHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const heroElement = heroRef.current;
    if (heroElement) observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  return (
    <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-green-50/40 via-white to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brown-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={heroRef} className="scroll-reveal text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
              📊 Proven Track Record
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
            Results That <span className="text-green-600 gradient-text">Speak Volumes</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
            Real success stories from content creators, production houses, and broadcasters who trust Bhumi Technology to protect and distribute their content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
