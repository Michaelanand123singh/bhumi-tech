import React, { useEffect, useRef } from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

const MissionVision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.mission-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 150);
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
            Mission & <span className="text-green-600">Vision</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="mission-card scroll-reveal bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-brown-100/50 premium-hover premium-glow group">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 icon-float">
              <Target className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-[#4a4a4a] text-base lg:text-lg leading-relaxed mb-6">
              To democratize access to professional-grade content distribution and protection technologies, enabling creators of all sizes to reach global audiences securely and profitably.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black text-base">Empower independent creators with enterprise-level tools</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black text-base">Protect intellectual property across all digital platforms</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black text-base">Maximize content value through strategic distribution</span>
              </div>
            </div>
          </div>
          <div className="mission-card scroll-reveal bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-brown-100/50 premium-hover premium-glow group">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 icon-float" style={{ animationDelay: '0.5s' }}>
              <Eye className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-[#4a4a4a] text-base lg:text-lg leading-relaxed mb-6">
              To become the leading technology partner for digital entertainment in emerging markets, setting new standards for content security and distribution excellence worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black text-base">Industry-recognized leader in content protection</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black text-base">Trusted partner for global content distribution</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-black text-base">Pioneer in AI-driven entertainment technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

