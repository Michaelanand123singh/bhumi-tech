import React from 'react';
import { Globe, Shield } from 'lucide-react';

const ServiceTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <button
        onClick={() => setActiveTab('distribution')}
        className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
          activeTab === 'distribution'
            ? 'bg-green-600 text-white shadow-lg scale-105'
            : 'bg-white text-black border-2 border-brown-200 hover:border-green-300 hover:bg-green-50'
        }`}
      >
        <Globe className={`w-5 h-5 mr-2 transition-transform duration-300 ${activeTab === 'distribution' ? 'group-hover:rotate-12' : ''}`} />
        Content Distribution
      </button>
      <button
        onClick={() => setActiveTab('antipiracy')}
        className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
          activeTab === 'antipiracy'
            ? 'bg-green-600 text-white shadow-lg scale-105'
            : 'bg-white text-black border-2 border-brown-200 hover:border-green-300 hover:bg-green-50'
        }`}
      >
        <Shield className={`w-5 h-5 mr-2 transition-transform duration-300 ${activeTab === 'antipiracy' ? 'group-hover:rotate-12' : ''}`} />
        Content Protection
      </button>
    </div>
  );
};

export default ServiceTabs;

