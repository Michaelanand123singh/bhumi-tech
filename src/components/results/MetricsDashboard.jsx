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
          if (cardRef.current) cardRef.current.classList.add('revealed');
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
      className="metric-card scroll-reveal rounded-2xl p-8 bg-white/90 backdrop-blur border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-sm relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 to-emerald-400/20 rounded-xl animate-pulse-slow" />
          <Icon className="w-7 h-7 text-emerald-600 relative z-10 group-hover:text-emerald-700 transition-all duration-300" />
        </div>
        <TrendingUp className="w-6 h-6 text-emerald-500/80 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2 tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-slate-600 font-medium text-base">{label}</div>
    </div>
  );
};

const PremiumCard = ({ icon: Icon, value, label, description, gradientFrom, gradientTo }) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white group-hover:rotate-6 transition-transform duration-500" />
        </div>
        <div>
          <div className="text-4xl font-semibold text-slate-900">{value}</div>
          <div className="text-slate-600 font-medium">{label}</div>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed">{description}</p>
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
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 bg-transparent relative overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.05),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.05),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[length:140px_140px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Enterprise-grade performance
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Our <span className="text-emerald-600 gradient-text">Impact</span> in Numbers
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Measurable outcomes from active defenses and distribution pipelines
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <MetricCard end={10} suffix="M+" label="Piracy Links Removed" icon={Shield} />
          <MetricCard end={50} suffix=" Cr+" prefix="₹" label="Revenue Protected Annually" icon={DollarSign} />
          <MetricCard end={500} suffix="+" label="Active Content Partners" icon={Users} />
          <MetricCard end={2} suffix=" Hrs" prefix="<" label="Average Takedown Time" icon={Clock} />
        </div>

        {/* Premium Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8">
          <PremiumCard
            icon={BarChart3}
            value="99.2%"
            label="Piracy Detection Rate"
            description="Industry-leading accuracy in identifying and tracking piracy threats across all platforms."
            gradientFrom="from-emerald-500"
            gradientTo="to-emerald-600"
          />
          <PremiumCard
            icon={Award}
            value="50+"
            label="Distribution Platforms"
            description="Connected to all major OTT, TV, and digital platforms for seamless content distribution."
            gradientFrom="from-indigo-500"
            gradientTo="to-indigo-600"
          />
        </div>

        {/* Live Monitoring Banner */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl px-6 py-5 shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-ping" />
            <div className="text-slate-800 font-semibold">Live monitoring across 200+ platforms</div>
          </div>
          <div className="text-sm text-slate-600">
            SLA-backed response with global coverage
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
