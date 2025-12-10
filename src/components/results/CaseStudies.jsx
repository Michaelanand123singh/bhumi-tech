import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Target, Zap, ChevronDown, ChevronUp, CheckCircle, Award } from 'lucide-react';

const CaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState(null);
  const sectionRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Major Film Release Protection',
      category: 'Anti-Piracy',
      icon: Shield,
      challenge:
        'A leading South Indian production house was preparing to release a high-budget film across 2,000+ screens. Previous releases had suffered from camcorder piracy and same-day torrent leaks, costing an estimated ₹15-20 crore in lost revenue.',
      solution: [
        'Pre-release dark web monitoring (2 weeks before release)',
        'Live theater surveillance during opening weekend',
        '24/7 torrent network tracking',
        'Rapid DMCA takedown team on standby',
        'Coordinated strikes across 50+ piracy platforms',
      ],
      results: [
        { metric: 'Zero major leaks', desc: 'during opening weekend' },
        { metric: '847 piracy attempts', desc: 'detected and neutralized within 3 hours' },
        { metric: '23% increase', desc: 'in first week box office vs. previous release' },
        { metric: '₹18 crore', desc: 'total estimated revenue protection' },
      ],
      color: 'green',
    },
    {
      id: 2,
      title: 'YouTube Channel Monetization Recovery',
      category: 'Content Distribution',
      icon: TrendingUp,
      challenge:
        'A popular music label with 5M+ subscribers was losing revenue to content re-uploaders and had claimed only 30% of potential ad revenue.',
      solution: [
        'Complete Content ID audit and optimization',
        'Systematic claiming of 12,000+ unauthorized uploads',
        'Channel optimization for better CPM',
        'Multi-territory monetization expansion',
      ],
      results: [
        { metric: '250% revenue increase', desc: 'from ₹8 lakhs to ₹28 lakhs monthly' },
        { metric: '10,500 videos', desc: 'claimed or removed' },
        { metric: '40% growth', desc: 'in subscriber acquisition rate' },
        { metric: '45 new countries', desc: 'monetization expansion' },
      ],
      color: 'green',
    },
    {
      id: 3,
      title: 'OTT Platform Distribution Success',
      category: 'Distribution',
      icon: Target,
      challenge:
        "An independent web series creator couldn't secure distribution deals with major OTT platforms and had no expertise in platform negotiations.",
      solution: [
        'Content quality and formatting assessment',
        'Strategic positioning and pitch creation',
        'Direct negotiations with 8 OTT platforms',
        'Multi-platform release strategy',
      ],
      results: [
        { metric: '3 major platforms', desc: 'ZEE5, MX Player, Amazon MiniTV' },
        { metric: '₹45 lakh advance', desc: 'against rights' },
        { metric: '2.5M views', desc: 'in first month' },
        { metric: 'Season 2 commissioned', desc: 'within 90 days' },
      ],
      color: 'green',
    },
    {
      id: 4,
      title: 'Live Sports Broadcast Protection',
      category: 'Anti-Piracy',
      icon: Zap,
      challenge:
        'A regional sports broadcaster was losing viewership to illegal live streaming sites during premium cricket matches.',
      solution: [
        'Pre-match identification of 200+ known piracy sites',
        'Real-time monitoring during live telecasts',
        'Coordinated takedowns with ISPs and platforms',
        'Geo-blocking coordination',
      ],
      results: [
        { metric: '94% streams', desc: 'shut down within 15 minutes' },
        { metric: '28% viewer increase', desc: 'migration back to official platforms' },
        { metric: '₹3.2 crore', desc: 'advertising revenue protected' },
        { metric: 'Full season', desc: 'ongoing partnership secured' },
      ],
      color: 'green',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.case-study-card');
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
    <section ref={sectionRef} className="py-24 bg-white border-t border-brown-100/30 relative overflow-hidden" id="stories">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.04),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100 mb-4">
            <Zap className="w-4 h-4" />
            Real-world wins
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Success <span className="text-green-600 gradient-text">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
            Deep dive into how we've helped our clients achieve exceptional results
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            const isExpanded = expandedCase === study.id;

            return (
              <div
                key={study.id}
                className="case-study-card scroll-reveal bg-white rounded-2xl shadow-lg border border-emerald-100/70 overflow-hidden premium-hover premium-glow"
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedCase(isExpanded ? null : study.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                            {study.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">{study.title}</h3>
                        <p className="text-[#4a4a4a] leading-relaxed">{study.challenge}</p>
                      </div>
                    </div>
                    <button className="ml-4 p-2 hover:bg-green-50 rounded-lg transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-green-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-green-600" />
                      )}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-8 pt-8 border-t border-brown-100/30 space-y-8 animate-fade-in-up">
                      {/* Solution */}
                      <div>
                        <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                          <Target className="w-5 h-5 text-green-600 mr-2" />
                          Our Solution
                        </h4>
                        <ul className="space-y-3">
                          {study.solution.map((item, idx) => (
                            <li key={idx} className="flex items-start text-black">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-xl font-bold text-black mb-6 flex items-center">
                          <Award className="w-5 h-5 text-green-600 mr-2" />
                          Results Achieved
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="bg-green-50 rounded-xl p-5 border border-green-100 premium-hover"
                            >
                              <div className="text-2xl font-bold text-green-700 mb-1">
                                {result.metric}
                              </div>
                              <div className="text-black font-medium">{result.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

