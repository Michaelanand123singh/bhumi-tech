import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Protect & Distribute Your Content?
        </h2>
        <p className="text-xl text-red-50 mb-8">
          Get started today with a free consultation and custom quote
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold shadow-lg flex items-center justify-center"
          >
            <Phone className="mr-2 w-5 h-5" />
            Schedule Consultation
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-800 text-white px-8 py-4 rounded-lg hover:bg-red-900 transition-all font-semibold border-2 border-white/20 flex items-center justify-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

