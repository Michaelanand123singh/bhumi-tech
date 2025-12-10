import React, { useEffect, useRef } from 'react';
import { Shield, DollarSign, Users, Clock, TrendingUp, BarChart3, Award } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';

const MetricCard = ({ end, suffix, prefix = '', label, icon: Icon }) => {
  const [count, setHasStarted] = useCountUp(end);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (cardRef.current) {
            cardRef.current.classList.add('revealed');
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [setHasStarted]);

  return (
    <div
      ref={cardRef}
      id={`metric-${label}`}
      className="metric-card scroll-reveal bg-white rounded-2xl p-8 shadow-lg border border-brown-100/50 hover:shadow-xl transition-all duration-300 premium-hover premium-glow group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-all duration-300" />
        </div>
        <TrendingUp className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-black mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[#4a4a4a] font-medium text-base">{label}</div>
    </div>
  );
};

const MetricsDashboard = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.metric-card');
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Our <span className="text-green-600 gradient-text">Impact</span> in Numbers
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a]">
            Measurable results across our portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <MetricCard end={10} suffix="M+" label="Piracy Links Removed" icon={Shield} />
          <MetricCard end={50} suffix=" Cr+" prefix="₹" label="Revenue Protected Annually" icon={DollarSign} />
          <MetricCard end={500} suffix="+" label="Active Content Partners" icon={Users} />
          <MetricCard end={2} suffix=" Hrs" prefix="<" label="Average Takedown Time" icon={Clock} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8">
          <div className="bg-gradient-to-br from-green-50/50 to-white rounded-2xl p-8 shadow-lg border border-brown-100/50 premium-hover premium-glow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold text-black">99.2%</div>
                <div className="text-[#4a4a4a] font-medium">Piracy Detection Rate</div>
              </div>
            </div>
            <p className="text-[#4a4a4a] leading-relaxed">
              Industry-leading accuracy in identifying and tracking piracy threats across all platforms.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50/50 to-white rounded-2xl p-8 shadow-lg border border-brown-100/50 premium-hover premium-glow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold text-black">50+</div>
                <div className="text-[#4a4a4a] font-medium">Distribution Platforms</div>
              </div>
            </div>
            <p className="text-[#4a4a4a] leading-relaxed">
              Connected to all major OTT, TV, and digital platforms for seamless content distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
