import React, { useEffect, useRef } from 'react';
import { Zap, Shield, Headphones, CheckCircle, Phone, MessageCircle, Clock } from 'lucide-react';
import { trackContact, trackButtonClick, trackOutboundLink } from '../../utils/analytics';

const ContactSidebar = () => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.sidebar-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sidebarElement = sidebarRef.current;
    if (sidebarElement) observer.observe(sidebarElement);

    return () => {
      if (sidebarElement) observer.unobserve(sidebarElement);
    };
  }, []);
  const features = [
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Get quotes within 24 hours',
    },
    {
      icon: Shield,
      title: 'Confidential',
      description: 'Your data is 100% secure',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Dedicated account managers',
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free consultation, no pressure',
    },
  ];

  const emergencySupport = {
    title: 'Urgent Piracy Issue?',
    description:
      "If you're experiencing active content piracy right now, contact our rapid response team immediately.",
    phone: '+91 79036 24752',
    available: '24/7 Emergency Support',
  };

  return (
    <div ref={sidebarRef} className="space-y-8">
      {/* Why Contact Us */}
      <div className="sidebar-card scroll-reveal bg-white rounded-2xl p-8 shadow-lg border border-brown-100/50 premium-hover premium-glow">
        <h3 className="text-2xl font-bold text-black mb-6">Why Reach Out?</h3>
        <div className="space-y-5">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4 group/feature">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/feature:bg-green-600 transition-all duration-300 group-hover/feature:scale-110">
                  <IconComponent className="w-6 h-6 text-green-600 group-hover/feature:text-white transition-all duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency Support */}
      <div className="sidebar-card scroll-reveal bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 premium-glow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-black">{emergencySupport.title}</h3>
        </div>
        <p className="text-black mb-5 leading-relaxed">{emergencySupport.description}</p>
        <a
          href="tel:+917903624752"
          onClick={() => {
            trackButtonClick('Call Emergency Line', 'contact_sidebar');
            trackContact('phone', 'emergency_support');
          }}
          className="block w-full bg-red-600 text-white py-3.5 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold text-center mb-3 shadow-lg hover:shadow-xl group"
        >
          <Phone className="inline w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Call Emergency Line
        </a>
        <p className="text-sm text-[#4a4a4a] text-center font-medium">{emergencySupport.available}</p>
      </div>

      {/* WhatsApp Quick Contact */}
      <div className="sidebar-card scroll-reveal bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl p-8 border border-green-200 premium-glow">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Quick Support via WhatsApp</h3>
          <p className="text-[#4a4a4a] mb-6 leading-relaxed">Get instant responses to your queries</p>
          <a
            href="https://wa.me/917903624752"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackButtonClick('Chat on WhatsApp', 'contact_sidebar');
              trackContact('whatsapp', 'contact_sidebar');
              trackOutboundLink('https://wa.me/917903624752', 'Chat on WhatsApp');
            }}
            className="inline-flex items-center bg-green-600 text-white px-8 py-3.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group"
          >
            <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Office Hours */}
      <div className="sidebar-card scroll-reveal bg-gradient-to-br from-brown-900 to-brown-800 text-white rounded-2xl p-8 premium-glow">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-2 text-green-400" />
          Office Hours
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-brown-700">
            <span className="text-gray-300">Monday - Friday</span>
            <span className="font-semibold">10:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-brown-700">
            <span className="text-gray-300">Saturday</span>
            <span className="font-semibold">10:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Sunday</span>
            <span className="font-semibold text-red-400">Closed</span>
          </div>
          <div className="mt-5 pt-4 border-t border-brown-700">
            <p className="text-sm text-green-400 font-semibold flex items-center justify-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              24/7 Emergency Support for Active Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;

