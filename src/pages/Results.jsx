import React from 'react';
import ResultsHero from '../components/results/ResultsHero';
import MetricsDashboard from '../components/results/MetricsDashboard';
import CaseStudies from '../components/results/CaseStudies';
import Testimonials from '../components/results/Testimonials';
import ClientLogos from '../components/results/ClientLogos';
import ResultsCTA from '../components/results/ResultsCTA';
import SEO from '../components/seo/SEO';
import { seoData } from '../data/seoData';


const Results = () => {
  return (
    <>
      <SEO {...seoData.results} />
      <div className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 bg-emerald-200/40 blur-3xl rounded-full" />
        <div className="absolute right-[-10%] top-1/4 h-80 w-80 bg-indigo-200/35 blur-3xl rounded-full" />
        <div className="absolute left-10 bottom-[-12%] h-96 w-96 bg-teal-200/30 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.07),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[length:120px_120px] opacity-40" />
      </div>

      <div className="relative space-y-20 md:space-y-28">
        <ResultsHero />

        <section className="max-w-6xl mx-auto px-6 w-full">
          <div className="bg-white/85 backdrop-blur-xl border border-slate-200/70 rounded-3xl shadow-2xl shadow-emerald-500/10 p-8 md:p-12">
            <MetricsDashboard />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 w-full">
          <CaseStudies />
        </section>

        <section className="max-w-6xl mx-auto px-6 w-full">
          <Testimonials />
        </section>

        <section className="max-w-6xl mx-auto px-6 w-full">
          <ClientLogos />
        </section>

        <section className="max-w-6xl mx-auto px-6 w-full pb-20">
          <ResultsCTA />
        </section>
      </div>
      </div>
    </>
  );
};

export default Results;

