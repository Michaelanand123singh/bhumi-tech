import React, { useEffect, useRef } from 'react';
import { Clock, BarChart3, Users, Zap, Award, TrendingUp } from 'lucide-react';

const ServiceFeatures = () => {
  const sectionRef = useRef(null);

  const features = [
    { icon: Clock, title: 'Rapid Response', desc: 'Average 2-hour takedown time for piracy incidents' },
    { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Live dashboards with comprehensive performance metrics' },
    { icon: Users, title: 'Dedicated Support', desc: 'Personal account managers for all clients' },
    { icon: Zap, title: 'Fast Implementation', desc: 'Get started within 48 hours of onboarding' },
    { icon: Award, title: 'Proven Track Record', desc: '500+ satisfied clients and counting' },
    { icon: TrendingUp, title: 'Revenue Growth', desc: 'Average 150% increase in content monetization' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
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
        {/* Hybrid Layout: Split header with featured highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="scroll-reveal">
            <div className="inline-block mb-4">
              <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                Key Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Why Our <span className="text-green-600 gradient-text">Services Stand Out</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-6">
              Industry-leading features that set us apart from competitors
            </p>
            <div className="bg-gradient-to-br from-green-50/50 to-brown-50/30 rounded-xl p-6 border border-brown-100/50">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">500+</div>
                  <div className="text-sm text-[#4a4a4a]">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-reveal delay-200 hidden lg:block">
            <div className="bg-gradient-to-br from-green-50/50 to-brown-50/30 rounded-2xl p-8 shadow-xl border border-brown-100/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#4a4a4a]">Response Time</span>
                  <span className="font-bold text-green-600">2 hours</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4a4a4a]">Success Rate</span>
                  <span className="font-bold text-green-600">95%</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4a4a4a]">Client Satisfaction</span>
                  <span className="font-bold text-green-600">98%</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hybrid Layout: Grid of feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card scroll-reveal bg-gradient-to-br from-green-50/30 to-white rounded-2xl p-6 border border-brown-100/50 hover:border-green-200 premium-hover premium-glow group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:bg-green-50 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-7 h-7 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-[#4a4a4a] text-base">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;

