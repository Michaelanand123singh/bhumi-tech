import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Users, Target } from 'lucide-react';

const CoreValues = () => {
  const sectionRef = useRef(null);

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and ethical standards in all our partnerships.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly evolving our technology to stay ahead of industry challenges.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships based on mutual success and trust.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering exceptional results through meticulous attention to detail.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.value-card');
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-green-50/20 border-t border-brown-100/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Our Core <span className="text-green-600">Values</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
            The principles that guide every decision and partnership we make
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="value-card scroll-reveal text-center group premium-glow"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 shadow-lg icon-float premium-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                  <IconComponent className="w-10 h-10 text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-base">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

