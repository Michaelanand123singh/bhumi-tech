import React, { useState } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceTabs from '../components/services/ServiceTabs';
import DistributionServices from '../components/services/DistributionServices';
import AntiPiracyServices from '../components/services/AntiPiracyServices';
import HowWeWork from '../components/services/HowWeWork';
import ServiceFeatures from '../components/services/ServiceFeatures';
import PricingSection from '../components/services/PricingSection';

const Services = () => {
  const [activeTab, setActiveTab] = useState('distribution');
  const [expandedService, setExpandedService] = useState(null);

  const handleToggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      
      {/* Service Tabs Section - Always Visible */}
      <section className="py-16 bg-white border-t border-brown-100/30 relative z-30 -mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </section>

      {/* Services Content Section */}
      <div className="relative z-20">
        {activeTab === 'distribution' && (
          <DistributionServices
            expandedService={expandedService}
            setExpandedService={handleToggleService}
          />
        )}
        {activeTab === 'antipiracy' && (
          <AntiPiracyServices
            expandedService={expandedService}
            setExpandedService={handleToggleService}
          />
        )}
      </div>

      <HowWeWork />
      <ServiceFeatures />
      <PricingSection />
    </div>
  );
};

export default Services;

