import React from 'react';
import SectionTitle from '../common/SectionTitle';

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Services" subtitle="What We Offer" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Distribution</h3>
            <p className="text-gray-600">Comprehensive distribution solutions for your products.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Anti-Piracy</h3>
            <p className="text-gray-600">Protect your intellectual property with our anti-piracy services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Consulting</h3>
            <p className="text-gray-600">Expert consulting services to grow your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

