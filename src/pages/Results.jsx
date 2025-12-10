import React from 'react';
import ResultsHero from '../components/results/ResultsHero';
import MetricsDashboard from '../components/results/MetricsDashboard';
import CaseStudies from '../components/results/CaseStudies';
import Testimonials from '../components/results/Testimonials';
import ClientLogos from '../components/results/ClientLogos';


const Results = () => {
  return (
    <div className="min-h-screen bg-white">
      <ResultsHero />
      <MetricsDashboard />
      <CaseStudies />
      <Testimonials />
      <ClientLogos />
    </div>
  );
};

export default Results;

