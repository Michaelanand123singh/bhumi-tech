import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const sectionRef = useRef(null);

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Custom',
      description: 'Perfect for independent creators and small production houses',
      features: [
        'YouTube channel management',
        'Basic piracy monitoring',
        'Monthly performance reports',
        'Email support',
        '1-2 platform distribution',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'Ideal for established content creators and mid-size studios',
      features: [
        'Multi-platform distribution',
        'Advanced anti-piracy protection',
        '24/7 monitoring and alerts',
        'Priority support',
        'Dedicated account manager',
        'Weekly performance reports',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solution for major production houses and broadcasters',
      features: [
        'Global distribution network',
        'Military-grade content protection',
        'Real-time analytics dashboard',
        '24/7 dedicated support team',
        'Custom integrations',
        'Legal support coordination',
        'White-glove service',
      ],
      highlighted: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-card');
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-green-50/20 border-t border-brown-100/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hybrid Layout: Centered header with split pricing cards */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Flexible <span className="text-green-600 gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            Choose the package that fits your needs. All plans are customizable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`pricing-card scroll-reveal rounded-2xl p-8 transition-all duration-300 premium-glow ${
                tier.highlighted
                  ? 'bg-green-600 text-white shadow-2xl scale-105 border-4 border-green-400'
                  : 'bg-white text-black shadow-lg border border-brown-100/50 premium-hover'
              }`}
            >
              {tier.highlighted && (
                <div className="bg-green-700 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-black'}`}>
                {tier.name}
              </h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-green-600'}`}>
                  {tier.price}
                </span>
              </div>
              <p className={`mb-6 text-base ${tier.highlighted ? 'text-green-50' : 'text-[#4a4a4a]'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start text-base ${tier.highlighted ? 'text-green-50' : 'text-black'}`}
                  >
                    <CheckCircle
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? 'text-green-200' : 'text-green-600'
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 block text-center ${
                  tier.highlighted
                    ? 'bg-white text-green-600 hover:bg-green-50'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-[#4a4a4a] mb-4 text-lg">Need a custom solution for your organization?</p>
          <Link
            to="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg inline-block"
          >
            Contact for Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

