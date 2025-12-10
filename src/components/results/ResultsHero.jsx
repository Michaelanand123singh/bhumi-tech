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
    <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-green-50/40 via-white to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brown-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05),transparent_45%)]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={heroRef} className="scroll-reveal text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/80 shadow-sm backdrop-blur border border-green-100">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-green-700">Proven Track Record</span>
            <span className="text-xs text-slate-500">Enterprise-grade delivery</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
            Results That <span className="text-green-600 gradient-text">Speak Volumes</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
            Real success stories from content creators, production houses, and broadcasters who trust Bhumi Technology to protect and distribute their content.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#metrics"
              className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-transform duration-300 hover:-translate-y-0.5"
            >
              View performance metrics
            </a>
            <a
              href="#stories"
              className="px-6 py-3 rounded-full bg-white text-green-700 font-semibold border border-green-200 hover:border-green-300 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore success stories
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="px-5 py-3 rounded-full bg-white shadow-lg border border-green-100 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <div className="text-left">
                <div className="text-sm text-[#4a4a4a]">Avg. takedown time</div>
                <div className="text-xl font-semibold text-black">&lt; 2 hours</div>
              </div>
            </div>
            <div className="px-5 py-3 rounded-full bg-white shadow-lg border border-emerald-100 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <div className="text-sm text-[#4a4a4a]">Revenue protected</div>
                <div className="text-xl font-semibold text-black">₹50 Cr+ yearly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
