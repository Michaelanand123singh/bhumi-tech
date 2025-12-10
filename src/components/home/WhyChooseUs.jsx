import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WhyChooseUs = () => {
  const features = [
    { title: 'Expert Team', description: 'Experienced professionals dedicated to your success' },
    { title: 'Proven Results', description: 'Track record of delivering exceptional results' },
    { title: 'Innovative Solutions', description: 'Cutting-edge technology and methodologies' },
    { title: '24/7 Support', description: 'Round-the-clock support for all your needs' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="Why Choose Us" subtitle="Our Advantages" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

