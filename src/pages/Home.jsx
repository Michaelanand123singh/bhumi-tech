import React from 'react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientsCarousel from '../components/home/ClientsCarousel';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientsCarousel />
      <CTASection />
    </div>
  );
};

export default Home;

