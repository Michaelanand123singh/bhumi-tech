import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1d1812] text-white py-8 w-full">
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
            <p className="text-gray-300">Leading distribution and anti-piracy solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/results" className="text-gray-300 hover:text-green-400 transition-colors">Results</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Distribution</li>
              <li>Anti-Piracy</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <p className="text-gray-300">Email: info@bhumitechnology.com</p>
            <p className="text-gray-300">Phone: +91 79036 24752</p>
            <p className="text-gray-300">Gaya, Bihar, India (823001)</p>
          </div>
        </div>
        <div className="border-t border-[#5d4a3d] mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Bhumi Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;