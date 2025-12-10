import React, { useEffect, useRef, useState } from 'react';

const AboutHero = () => {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Background images for auto-scroll effect
  const backgroundImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for text animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const heroElement = heroRef.current;
    if (heroElement) observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Auto-scrolling Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            ref={index === currentImageIndex ? backgroundRef : null}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundPosition: `${scrollY * 0.5}px center`, // Parallax effect
              backgroundSize: '120%', // Allows for smooth scrolling
              animation: index === currentImageIndex ? 'panBackground 20s linear infinite' : 'none',
            }}
          >
            {/* Professional Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-brown-900/30"></div>
            
            {/* Pattern Overlay for Texture */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Decorative Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brown-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Premium Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div ref={heroRef} className="scroll-reveal text-center max-w-4xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-block mb-8 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
              <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                About Bhumi Technology
              </span>
            </div>
          </div>

          {/* Premium Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            <span className="block mb-2 drop-shadow-2xl">Empowering Creators,</span>
            <span className="gradient-text-white drop-shadow-2xl">Protecting Innovation</span>
          </h1>

          {/* Premium Description */}
          <div className="relative">
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-light">
              We bridge the gap between content creation and secure, profitable distribution in the digital age, helping creators maximize their content's value while safeguarding their creative investments.
            </p>
            {/* Decorative line */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default AboutHero;

