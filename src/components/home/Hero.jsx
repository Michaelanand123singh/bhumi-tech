import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Bhumi Tech</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Leading distribution and anti-piracy solutions for your business
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary">Get Started</Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

