import React, { useState } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceTabs from '../components/services/ServiceTabs';
import DistributionServices from '../components/services/DistributionServices';
import AntiPiracyServices from '../components/services/AntiPiracyServices';
import HowWeWork from '../components/services/HowWeWork';
import ServiceFeatures from '../components/services/ServiceFeatures';
import SEO from '../components/seo/SEO';
import { seoData, getServiceSchema } from '../data/seoData';

const Services = () => {
  const [activeTab, setActiveTab] = useState('distribution');
  const [expandedService, setExpandedService] = useState(null);

  const handleToggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <>
      <SEO 
        {...seoData.services}
        structuredData={getServiceSchema()}
      />
      <div className="min-h-screen bg-white">
        <ServicesHero />
        
        {/* Service Tabs Section - Always Visible */}
        <section className="py-16 bg-white border-t border-brown-100/30 relative z-30 -mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Additional Service Information */}
        <HowWeWork />
        <ServiceFeatures />
      </div>
    </>
  );
};

export default Services;

