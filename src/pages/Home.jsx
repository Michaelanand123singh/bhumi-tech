import React from 'react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientsCarousel from '../components/home/ClientsCarousel';
import SEO from '../components/seo/SEO';
import { seoData, getOrganizationSchema, getWebSiteSchema } from '../data/seoData';

const Home = () => {
  // Combine multiple schemas into an array for structured data
  const structuredData = [
    getOrganizationSchema(),
    getWebSiteSchema(),
  ];

  return (
    <>
      <SEO 
        {...seoData.home}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white">
        <Hero />
        <StatsSection />
        <ServicesOverview />
        <WhyChooseUs />
        <ClientsCarousel />
      </div>
    </>
  );
};

export default Home;

