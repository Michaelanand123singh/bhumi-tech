import React, { useEffect, useRef } from 'react';
import { Award, TrendingUp, Globe, Users, CheckCircle, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const benefits = [
    { icon: Award, title: '10+ Years Experience', desc: 'Industry expertise in digital entertainment' },
    { icon: TrendingUp, title: 'Technology-Driven', desc: 'AI-powered monitoring & analytics' },
    { icon: Globe, title: 'Global Reach', desc: 'Indian & international markets' },
    { icon: Users, title: '24/7 Support', desc: 'Round-the-clock protection' },
    { icon: CheckCircle, title: 'Proven Results', desc: 'Trusted by leading creators' },
    { icon: Shield, title: '100% Compliance', desc: 'Full legal & copyright compliance' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card');
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
            Why Choose <span className="text-green-600">Bhumi Technology</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            Industry-leading expertise backed by cutting-edge technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="benefit-card scroll-reveal text-center p-8 rounded-xl hover:bg-green-50/50 transition-all duration-300 group border border-transparent hover:border-green-100"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

