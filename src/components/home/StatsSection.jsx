import React, { useEffect, useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { TrendingUp, Shield, Globe, CheckCircle } from 'lucide-react';

const StatCard = ({ end, suffix, label, icon: Icon, delay = 0 }) => {
  const [count, setHasStarted] = useCountUp(end);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHasStarted(true);
            if (cardRef.current) {
              cardRef.current.classList.add('revealed');
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [setHasStarted, delay]);

  return (
    <div
      ref={cardRef}
      className="scroll-reveal text-center p-8 bg-white rounded-xl shadow-sm border border-brown-100/50 hover:shadow-lg hover:border-green-200 transition-all duration-300"
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-green-50 rounded-lg">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3">
        {count}{suffix}
      </div>
      <div className="text-[#4a4a4a] text-sm md:text-base font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white border-t border-brown-100/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCard end={500} suffix="+" label="Content Partners" icon={Globe} delay={0} />
          <StatCard end={10} suffix="M+" label="Piracy Threats Blocked" icon={Shield} delay={100} />
          <StatCard end={50} suffix="+" label="Platform Integrations" icon={TrendingUp} delay={200} />
          <StatCard end={99.8} suffix="%" label="Uptime Guarantee" icon={CheckCircle} delay={300} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

