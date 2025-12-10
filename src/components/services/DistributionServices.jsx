import React, { useEffect, useRef } from 'react';
import { Youtube, Play, Tv, FileCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const DistributionServices = ({ expandedService, setExpandedService }) => {
  const sectionRef = useRef(null);

  const distributionServices = [
    {
      icon: Youtube,
      title: 'YouTube Content Management',
      description:
        'Maximize your YouTube revenue with professional channel management and monetization optimization.',
      features: [
        'Channel optimization and branding',
        'Multi-channel network (MCN) services',
        'Content ID management and claims',
        'Analytics and performance reporting',
        'Revenue maximization strategies',
        'Copyright protection and monitoring',
      ],
      benefits: ['Increase revenue by up to 300%', '24/7 content protection', 'Expert monetization guidance'],
    },
    {
      icon: Play,
      title: 'OTT Platform Distribution',
      description:
        "Get your content on the world's leading streaming platforms with seamless distribution management.",
      features: [
        'Netflix, Amazon Prime, Disney+ Hotstar partnerships',
        'Content encoding and formatting',
        'Metadata optimization and localization',
        'Release scheduling and coordination',
        'Performance tracking across platforms',
        'Revenue collection and reporting',
      ],
      benefits: ['50+ platform partnerships', 'Global audience reach', 'Single-point distribution management'],
    },
    {
      icon: Tv,
      title: 'TV & Satellite Distribution',
      description:
        'Reach traditional broadcast audiences through our extensive TV and satellite network partnerships.',
      features: [
        'Traditional broadcast channel partnerships',
        'Satellite uplink and distribution',
        'Regional and national TV placement',
        'Syndication deals and negotiations',
        'Ratings and viewership analysis',
        'Content scheduling optimization',
      ],
      benefits: ['Pan-India coverage', 'Premium channel placements', 'Transparent revenue sharing'],
    },
    {
      icon: FileCheck,
      title: 'Digital Rights & Licensing',
      description:
        'Comprehensive rights management to maximize the value of your intellectual property.',
      features: [
        'Copyright registration and management',
        'Territorial licensing agreements',
        'Sublicensing and content syndication',
        'Rights valuation and negotiation',
        'Contract management and renewals',
        'Legal compliance and documentation',
      ],
      benefits: ['Maximize content value', 'Legal protection', 'Transparent licensing deals'],
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
    <section ref={sectionRef} className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hybrid Layout: Header with split content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                Content Distribution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Distribution <span className="text-green-600 gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-6">
              Expand your reach and maximize revenue with our multi-platform distribution network spanning YouTube, OTT platforms, TV, and satellite networks.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-100">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-[#4a4a4a]">Platform Partners</div>
              </div>
              <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-100">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-[#4a4a4a]">Content Partners</div>
              </div>
              <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-100">
                <div className="text-2xl font-bold text-green-600">Global</div>
                <div className="text-sm text-[#4a4a4a]">Reach</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-green-50/50 to-brown-50/30 rounded-2xl p-8 shadow-xl border border-brown-100/50">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">YouTube & OTT</div>
                    <div className="text-sm text-[#4a4a4a]">Multi-platform distribution</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">TV & Satellite</div>
                    <div className="text-sm text-[#4a4a4a]">Traditional broadcast</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Rights Management</div>
                    <div className="text-sm text-[#4a4a4a]">Digital licensing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hybrid Layout: Grid of service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {distributionServices.map((service, index) => (
            <div key={index} className="service-card-item scroll-reveal">
              <ServiceCard
                service={service}
                index={index}
                isExpanded={expandedService === index}
                onToggle={setExpandedService}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributionServices;

