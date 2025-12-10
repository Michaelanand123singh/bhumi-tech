import React from 'react';
import SectionTitle from '../common/SectionTitle';

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Mission & Vision" subtitle="Our Purpose" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-brown-100">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Mission</h3>
            <p className="text-[#4a4a4a]">Coming Soon</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-brown-100">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Vision</h3>
            <p className="text-[#4a4a4a]">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

