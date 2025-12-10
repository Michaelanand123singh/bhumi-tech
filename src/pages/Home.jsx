import React from 'react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientsCarousel from '../components/home/ClientsCarousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientsCarousel />
    </div>
  );
};

export default Home;

