import React from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Award } from 'lucide-react';
import { trackServiceInterest } from '../../utils/analytics';

const ServiceCard = ({ service, index, isExpanded, onToggle }) => {
  const IconComponent = service.icon;

  const handleToggle = () => {
    onToggle(index);
    trackServiceInterest(service.title, isExpanded ? 'collapse' : 'expand');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-brown-100/50 overflow-hidden premium-hover premium-glow group">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
            <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300" />
          </div>
          <button
            onClick={handleToggle}
            className="text-green-600 hover:text-green-700 transition-colors p-2 hover:bg-green-50 rounded-lg"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? (
              <ChevronDown className="w-6 h-6" />
            ) : (
              <ChevronRight className="w-6 h-6" />
            )}
          </button>
        </div>

        <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
        <p className="text-[#4a4a4a] mb-6 leading-relaxed text-base">{service.description}</p>

        {isExpanded && (
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h4 className="font-semibold text-black mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-black">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h4 className="font-semibold text-black mb-2">Benefits</h4>
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-green-700">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

