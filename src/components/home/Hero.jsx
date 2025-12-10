import React from 'react';
import { Play, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Powering Digital Entertainment{' '}
              <span className="text-green-600">Across Borders</span>
            </h1>
            <p className="text-xl text-[#4a4a4a] mb-8 leading-relaxed">
              Premier content distribution and anti-piracy solutions for the modern entertainment industry. Protect, distribute, and maximize your content's value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-green-50 transition-all font-semibold border-2 border-brown-600 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-brown-50 rounded-2xl p-8 shadow-2xl border border-brown-100">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-black">Content Distribution</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    50+ Platform Integrations
                  </div>
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Global Reach Enabled
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-black">Content Protection</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 Piracy Monitoring
                  </div>
                  <div className="flex items-center text-sm text-[#4a4a4a]">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instant Takedown Actions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

