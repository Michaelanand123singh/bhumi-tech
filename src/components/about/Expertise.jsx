import React, { useEffect, useRef } from 'react';
import { Globe2, Shield, Scale, TrendingUp, Zap, Lightbulb } from 'lucide-react';

const Expertise = () => {
  const sectionRef = useRef(null);

  const expertise = [
    {
      icon: Globe2,
      title: 'Digital Distribution Mastery',
      description:
        'Decade-long partnerships with YouTube, major OTT platforms, TV networks, and satellite broadcasters across 50+ countries.',
    },
    {
      icon: Shield,
      title: 'Anti-Piracy Intelligence',
      description:
        'Proprietary monitoring systems tracking millions of URLs, torrents, and live streams daily with AI-powered detection.',
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description:
        'Expert knowledge of international copyright laws, DMCA procedures, and content licensing across multiple jurisdictions.',
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description:
        'Deep understanding of Indian and international digital entertainment landscapes with real-time trend analysis.',
    },
    {
      icon: Zap,
      title: 'Technology Innovation',
      description:
        'Continuous investment in AI, automation, and analytics tools to stay ahead of evolving piracy threats.',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Consulting',
      description:
        'Customized content strategies that maximize reach, engagement, and revenue across all distribution channels.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.expertise-card');
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
            Our <span className="text-green-600">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
            Deep domain knowledge combined with cutting-edge technology to deliver unmatched results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="expertise-card scroll-reveal bg-gradient-to-br from-white to-green-50/30 rounded-2xl p-8 shadow-lg border border-brown-100/50 premium-hover premium-glow group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 icon-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

