import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactInfo = () => {
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 XXX XXX XXXX', 'Mon-Sat, 10 AM - 7 PM IST'],
      action: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['business@bhumitech.com', 'support@bhumitech.com'],
      action: 'mailto:business@bhumitech.com',
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Bhumi Technology Pvt. Ltd.', 'Gaya, Bihar, India (823001)'],
      action: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '10:00 AM - 7:00 PM IST'],
      action: null,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.contact-info-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-brown-100/30 relative z-20 -mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="contact-info-card scroll-reveal bg-gradient-to-br from-green-50/50 to-white rounded-2xl p-6 lg:p-8 border border-brown-100/50 hover:shadow-xl transition-all duration-300 premium-hover premium-glow group"
              >
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#4a4a4a] text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-flex items-center text-green-600 font-semibold text-sm mt-4 hover:text-green-700 transition-all duration-300 group/link"
                  >
                    Contact Now
                    <Send className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

