import React from 'react';
import SectionTitle from '../common/SectionTitle';

const ClientsCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Clients" subtitle="Trusted By" />
        <div className="flex justify-center items-center">
          <p className="text-gray-600">Client logos will be displayed here</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

