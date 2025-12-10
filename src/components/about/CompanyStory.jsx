import React, { useEffect, useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { TrendingUp, Users, Globe, Clock } from 'lucide-react';

const StatBox = ({ end, suffix, label, icon: Icon, delay = 0 }) => {
  const [count, setHasStarted] = useCountUp(end);
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHasStarted(true);
            if (boxElement) {
              boxElement.classList.add('revealed');
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (boxElement) observer.observe(boxElement);

    return () => {
      if (boxElement) observer.unobserve(boxElement);
    };
  }, [setHasStarted, delay]);

  return (
    <div
      ref={boxRef}
      className="scroll-reveal bg-white rounded-xl p-6 text-center shadow-md border border-brown-100/30 premium-hover premium-glow group"
    >
      {Icon && (
        <div className="flex justify-center mb-3">
          <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-600 transition-all duration-300">
            <Icon className="w-5 h-5 text-green-600 group-hover:text-white transition-all duration-300" />
          </div>
        </div>
      )}
      <div className="text-4xl font-bold text-green-600 mb-2">{count}{suffix}</div>
      <div className="text-[#4a4a4a] text-sm font-medium">{label}</div>
    </div>
  );
};

const CompanyStory = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sectionElement = sectionRef.current;
    const statsElement = statsRef.current;

    if (sectionElement) observer.observe(sectionElement);
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (statsElement) observer.unobserve(statsElement);
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={sectionRef} className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight">
              Our <span className="text-green-600 gradient-text">Story</span>
            </h2>
            <div className="space-y-6 text-[#4a4a4a] text-base md:text-lg leading-relaxed">
              <p className="animate-fade-in-up">
                Bhumi Technology was founded with a singular mission: to bridge the gap between content creation and secure, profitable distribution in the digital age.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                As the entertainment industry evolved from traditional broadcast to digital-first platforms, we recognized two critical challenges: getting content to global audiences efficiently, and protecting it from rampant piracy.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Today, we stand as a trusted technology partner for filmmakers, production houses, music labels, and content creators across India and international markets. Our expertise spans the entire content lifecycle—from strategic distribution planning and multi-platform delivery to advanced anti-piracy measures and copyright enforcement.
              </p>
              <p className="font-semibold text-black animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                We don't just provide services; we build long-term partnerships that help our clients maximize their content's value while safeguarding their creative investments.
              </p>
            </div>
          </div>
          <div ref={statsRef} className="scroll-reveal">
            <div className="bg-gradient-to-br from-green-50/50 to-brown-50/30 rounded-2xl p-8 shadow-xl border border-brown-100/50 premium-glow">
              <div className="grid grid-cols-2 gap-6">
                <StatBox end={10} suffix="+" label="Years Experience" icon={TrendingUp} delay={0} />
                <StatBox end={500} suffix="+" label="Content Partners" icon={Users} delay={100} />
                <StatBox end={50} suffix="+" label="Platform Integrations" icon={Globe} delay={200} />
                <StatBox end={24} suffix="/7" label="Active Monitoring" icon={Clock} delay={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;

