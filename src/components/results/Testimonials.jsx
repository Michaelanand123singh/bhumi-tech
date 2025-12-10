import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Film Producer',
      company: 'Leading Production House, Chennai',
      image: 'RK',
      rating: 5,
      text: "Bhumi Technology's anti-piracy services saved our film. Their rapid response during release weekend was exceptional—most piracy links were down before they could gain traction. The ROI was immediate and substantial.",
    },
    {
      name: 'Priya Sharma',
      position: 'Music Label Director',
      company: 'Major Music Label, Mumbai',
      image: 'PS',
      rating: 5,
      text: "We've recovered lakhs in lost YouTube revenue thanks to their Content ID expertise. The ROI was visible within the first month. Their team understands the music industry inside out.",
    },
    {
      name: 'Arjun Mehta',
      position: 'OTT Platform Content Head',
      company: 'Leading Streaming Platform',
      image: 'AM',
      rating: 5,
      text: 'Professional, responsive, and results-driven. They understand the entertainment business inside out and deliver on their promises. A true technology partner, not just a service provider.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
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

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-brown-100/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            What Our <span className="text-green-600 gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            Hear directly from industry leaders who've experienced the Bhumi Technology difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card scroll-reveal bg-gradient-to-br from-green-50/30 to-white rounded-2xl p-8 shadow-lg border border-brown-100/50 hover:shadow-xl transition-all duration-300 premium-hover premium-glow"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-black leading-relaxed mb-6 italic text-base">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-[#4a4a4a]">{testimonial.position}</div>
                  <div className="text-xs text-[#4a4a4a]">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

