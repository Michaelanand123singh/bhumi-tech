import React, { useEffect, useRef } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const HowWeWork = () => {
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Audit',
      description: 'We begin with a comprehensive analysis of your content and distribution goals.',
      points: [
        'Understand your content portfolio',
        'Assess current distribution channels',
        'Identify vulnerabilities and risks',
        'Recommend tailored solutions',
      ],
    },
    {
      number: '02',
      title: 'Strategy & Setup',
      description: 'Develop a customized roadmap and implement necessary systems.',
      points: [
        'Create distribution strategy',
        'Set up monitoring systems',
        'Establish baseline metrics',
        'Configure platform integrations',
      ],
    },
    {
      number: '03',
      title: 'Execution & Monitoring',
      description: 'Launch campaigns and activate continuous protection measures.',
      points: [
        'Deploy distribution campaigns',
        'Activate 24/7 surveillance',
        'Monitor performance metrics',
        'Regular status updates',
      ],
    },
    {
      number: '04',
      title: 'Optimization & Reporting',
      description: 'Continuous improvement based on data-driven insights.',
      points: [
        'Analyze performance data',
        'Adjust strategies as needed',
        'Monthly detailed reports',
        'Quarterly business reviews',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.process-step');
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-green-50/20 border-t border-brown-100/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hybrid Layout: Centered header with split process */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            How We <span className="text-green-600 gradient-text">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            A proven 4-step process to ensure your content's success and security
          </p>
        </div>

        {/* Hybrid Layout: Timeline-style process with connecting line */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="process-step scroll-reveal bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brown-100/50 premium-hover premium-glow relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl font-bold text-green-100">{step.number}</div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-[#4a4a4a] mb-4 text-sm leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-black">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

