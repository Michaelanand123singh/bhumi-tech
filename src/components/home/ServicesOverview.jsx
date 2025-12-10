import React from 'react';
import { Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Globe,
      title: 'Global Content Distribution',
      description:
        'Deliver your content seamlessly across YouTube, OTT platforms, TV, and satellite networks with comprehensive digital rights management.',
      features: ['YouTube & MCN Services', 'OTT Platform Partnerships', 'TV & Satellite Distribution'],
    },
    {
      icon: Shield,
      title: 'Advanced Content Protection',
      description:
        'Safeguard your intellectual property with 24/7 piracy monitoring, instant takedowns, and live telecast security.',
      features: ['24/7 Piracy Monitoring', 'DMCA Takedowns', 'Live Event Protection'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for content creators, production houses, and broadcasters
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="text-red-600 font-semibold flex items-center hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

