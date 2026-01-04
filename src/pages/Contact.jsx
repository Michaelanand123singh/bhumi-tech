import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactSidebar from '../components/contact/ContactSidebar';
import ContactMap from '../components/contact/ContactMap';
import ContactSocial from '../components/contact/ContactSocial';
import SEO from '../components/seo/SEO';
import { seoData, getLocalBusinessSchema } from '../data/seoData';

const Contact = () => {
  return (
    <>
      <SEO 
        {...seoData.contact}
        structuredData={getLocalBusinessSchema()}
      />
      <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      
      {/* Main Contact Section */}
      <section className="py-24 bg-white border-t border-brown-100/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactSocial />
      </div>
    </>
  );
};

export default Contact;

