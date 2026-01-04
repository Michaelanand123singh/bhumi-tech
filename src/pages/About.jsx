import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import Expertise from '../components/about/Expertise';
import Differentiators from '../components/about/Differentiators';
import JourneyTimeline from '../components/about/JourneyTimeline';
import CoreValues from '../components/about/CoreValues';
import SEO from '../components/seo/SEO';
import { seoData, getOrganizationSchema } from '../data/seoData';

const About = () => {
  return (
    <>
      <SEO 
        {...seoData.about}
        structuredData={getOrganizationSchema()}
      />
      <div className="min-h-screen bg-white">
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <Expertise />
        <Differentiators />
        <JourneyTimeline />
        <CoreValues />
      </div>
    </>
  );
};

export default About;

