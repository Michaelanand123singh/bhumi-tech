import React, { useEffect, useRef } from 'react';
import { Eye, AlertTriangle, Satellite, Lock } from 'lucide-react';
import ServiceCard from './ServiceCard';

const AntiPiracyServices = ({ expandedService, setExpandedService }) => {
  const sectionRef = useRef(null);

  const antiPiracyServices = [
    {
      icon: Eye,
      title: '24/7 Piracy Monitoring',
      description:
        'Round-the-clock surveillance of digital channels to detect unauthorized content usage instantly.',
      features: [
        'Automated web crawling (1M+ sites monitored)',
        'Torrent network surveillance',
        'Social media platform scanning',
        'Streaming site detection',
        'Mobile app store monitoring',
        'Real-time alert system',
        'Dark web monitoring',
      ],
      benefits: ['99.2% detection rate', '< 15 min alert time', 'Comprehensive coverage'],
    },
    {
      icon: AlertTriangle,
      title: 'Copyright Strikes & Takedowns',
      description:
        'Swift and effective removal of pirated content through legal takedown procedures.',
      features: [
        'DMCA takedown notice filing',
        'Platform-specific copyright strikes',
        'Cease and desist letter dispatch',
        'ISP coordination for blocking',
        'International takedown coordination',
        'Legal documentation and evidence',
        'Follow-up and compliance tracking',
      ],
      benefits: ['Average 2-hour takedown', '95% success rate', 'Legal compliance guaranteed'],
    },
    {
      icon: Satellite,
      title: 'Live Telecast Protection',
      description: 'Specialized protection for live events, premieres, and broadcast content.',
      features: [
        'Pre-event risk assessment',
        'Live streaming surveillance',
        'Instant takedown of illegal streams',
        'Post-event monitoring',
        'PPV event protection',
        'Sports broadcast security',
        'Concert and show protection',
      ],
      benefits: ['Real-time protection', 'Minimal revenue loss', 'Dedicated support team'],
    },
    {
      icon: Lock,
      title: 'Leak Prevention & Response',
      description: 'Proactive measures to prevent content leaks and rapid response when they occur.',
      features: [
        'Pre-release content security audits',
        'Watermarking and forensic tracking',
        'Screener copy protection',
        'Rapid response to early leaks',
        'Source identification and investigation',
        'Legal action coordination',
        'Crisis management support',
      ],
      benefits: ['Prevent pre-release leaks', 'Fast leak response', 'Source traceability'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card-item');
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
    <section ref={sectionRef} className="py-24 bg-white border-t border-brown-100/30 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hybrid Layout: Split header with stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-green-50/50 to-brown-50/30 rounded-2xl p-8 shadow-xl border border-brown-100/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-brown-100/30">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.2%</div>
                  <div className="text-sm text-[#4a4a4a]">Detection Rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-brown-100/30">
                  <div className="text-3xl font-bold text-green-600 mb-2">&lt;15min</div>
                  <div className="text-sm text-[#4a4a4a]">Alert Time</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-brown-100/30">
                  <div className="text-3xl font-bold text-green-600 mb-2">2hrs</div>
                  <div className="text-sm text-[#4a4a4a]">Avg Takedown</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-brown-100/30">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-[#4a4a4a]">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4">
              <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                Content Protection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Anti-Piracy <span className="text-green-600 gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-6">
              Protect your investment with military-grade anti-piracy technology and 24/7 monitoring across millions of digital channels.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-[#4a4a4a]">Automated web crawling (1M+ sites)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-[#4a4a4a]">Real-time alert system</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-[#4a4a4a]">Legal compliance guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hybrid Layout: Grid of service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {antiPiracyServices.map((service, index) => (
            <div key={index} className="service-card-item scroll-reveal">
              <ServiceCard
                service={service}
                index={index + 10}
                isExpanded={expandedService === index + 10}
                onToggle={setExpandedService}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntiPiracyServices;

