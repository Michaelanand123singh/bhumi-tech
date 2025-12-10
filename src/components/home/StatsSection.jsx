import React, { useEffect } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

const StatCard = ({ end, suffix, label }) => {
  const [count, setHasStarted] = useCountUp(end);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, [setHasStarted, label]);

  return (
    <div
      id={`stat-${label}`}
      className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-sm md:text-base font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard end={500} suffix="+" label="Content Partners" />
          <StatCard end={10} suffix="M+" label="Piracy Threats Blocked" />
          <StatCard end={50} suffix="+" label="Platform Integrations" />
          <StatCard end={99.8} suffix="%" label="Uptime Guarantee" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

