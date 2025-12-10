import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/bhumi-logo.png"
                alt="Bhumi Tech Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600">Leading distribution and anti-piracy solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link></li>
              <li><Link to="/results" className="text-gray-600 hover:text-gray-900 transition-colors">Results</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Distribution</li>
              <li>Anti-Piracy</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-600">Email: info@bhumitech.com</p>
            <p className="text-gray-600">Phone: +91 XXX XXX XXXX</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Bhumi Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

