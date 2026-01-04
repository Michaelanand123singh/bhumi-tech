import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const JourneyTimeline = () => {
  const sectionRef = useRef(null);

  const timeline = [
    { year: '2018', title: 'Foundation', description: 'Started with YouTube content management for regional creators' },
    { year: '2020', title: 'Expansion', description: 'Extended services to OTT platforms and anti-piracy solutions' },
    { year: '2022', title: 'Innovation', description: 'Launched AI-powered piracy detection system' },
    { year: '2024', title: 'Growth', description: 'Crossed 500+ active content partners milestone' },
    { year: '2026', title: 'Leadership', description: "Became India's leading entertainment technology partner" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('revealed');
              }, index * 150);
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
            Our <span className="text-green-600">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a]">
            A decade of innovation and growth in digital entertainment
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-200 via-green-400 to-green-200"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item scroll-reveal flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`md:w-5/12 w-full ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-brown-100/50 premium-hover premium-glow group">
                    <div className="text-3xl font-bold text-green-600 mb-2 gradient-text">{item.year}</div>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-[#4a4a4a]">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center relative z-10">
                  <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center icon-pulse premium-glow">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;

