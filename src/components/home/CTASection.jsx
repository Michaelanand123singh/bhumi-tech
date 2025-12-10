import React from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to learn how we can help your business grow
        </p>
        <Link to="/contact">
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

