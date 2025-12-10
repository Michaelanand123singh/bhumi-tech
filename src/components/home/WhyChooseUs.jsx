import React from 'react';
import { Award, TrendingUp, Globe, Users, CheckCircle, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    { icon: Award, title: '10+ Years Experience', desc: 'Industry expertise in digital entertainment' },
    { icon: TrendingUp, title: 'Technology-Driven', desc: 'AI-powered monitoring & analytics' },
    { icon: Globe, title: 'Global Reach', desc: 'Indian & international markets' },
    { icon: Users, title: '24/7 Support', desc: 'Round-the-clock protection' },
    { icon: CheckCircle, title: 'Proven Results', desc: 'Trusted by leading creators' },
    { icon: Shield, title: '100% Compliance', desc: 'Full legal & copyright compliance' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose <span className="text-green-600">Bhumi Technology</span>
          </h2>
          <p className="text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Industry-leading expertise backed by cutting-edge technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-[#4a4a4a]">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

