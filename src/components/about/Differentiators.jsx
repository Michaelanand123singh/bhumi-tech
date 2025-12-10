import React, { useEffect, useRef } from 'react';
import { Clock, Award, TrendingUp, Users, Headphones, Briefcase } from 'lucide-react';

const Differentiators = () => {
  const sectionRef = useRef(null);

  const differentiators = [
    {
      icon: Clock,
      title: 'Industry-First Response Times',
      description: 'Average takedown time of under 2 hours for piracy incidents',
    },
    {
      icon: Award,
      title: 'White-Glove Service',
      description: 'Dedicated account management for high-value content releases',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards with comprehensive analytics and insights',
    },
    {
      icon: Users,
      title: 'Customized Solutions',
      description: 'Tailored strategies for diverse content types and markets',
    },
    {
      icon: Headphones,
      title: 'Multilingual Support',
      description: 'Expert teams speaking 10+ languages for global operations',
    },
    {
      icon: Briefcase,
      title: 'Enterprise-Grade Security',
      description: 'ISO-certified processes and data protection standards',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.differentiator-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 100);
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
            What Sets Us <span className="text-green-600">Apart</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
            We go beyond standard services to deliver exceptional value and results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="differentiator-card scroll-reveal bg-white rounded-xl p-6 lg:p-8 shadow-md border border-brown-100/50 premium-hover premium-glow group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 icon-pulse" style={{ animationDelay: `${index * 0.3}s` }}>
                    <IconComponent className="w-6 h-6 text-green-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

