// SEO data for each page
export const seoData = {
  home: {
    title: 'Digital Entertainment Distribution & Protection',
    description: 'Bhumi Tech provides cutting-edge digital entertainment distribution and anti-piracy solutions. Protect and distribute your content with advanced technology and expert support.',
    keywords: 'digital distribution, anti-piracy, content protection, entertainment distribution, OTT platforms, digital rights management, content security, Bhumi Technology',
    image: '/bhumi-logo.png',
  },
  about: {
    title: 'About Us - Digital Distribution Experts',
    description: 'Learn about Bhumi Technology, a leading provider of digital entertainment distribution and anti-piracy solutions. Our mission is to protect and maximize the value of your content.',
    keywords: 'about Bhumi Tech, digital distribution company, anti-piracy experts, content protection specialists, entertainment technology company',
    image: '/bhumi-logo.png',
  },
  services: {
    title: 'Services - Distribution & Anti-Piracy Solutions',
    description: 'Comprehensive digital distribution and anti-piracy services. From OTT platform distribution to advanced content protection, we provide end-to-end solutions for entertainment businesses.',
    keywords: 'distribution services, anti-piracy services, OTT distribution, content protection services, digital rights management, content security solutions',
    image: '/bhumi-logo.png',
  },
  results: {
    title: 'Results & Case Studies - Success Stories',
    description: 'Explore our success stories and case studies. See how Bhumi Tech has helped entertainment companies protect and distribute their content effectively.',
    keywords: 'case studies, success stories, client results, distribution results, anti-piracy results, Bhumi Tech results',
    image: '/bhumi-logo.png',
  },
  contact: {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Bhumi Technology for digital distribution and anti-piracy solutions. Located in Gaya, Bihar, India. Email: info@bhumitechnology.com | Phone: +91 79036 24752',
    keywords: 'contact Bhumi Tech, digital distribution contact, anti-piracy support, Bhumi Technology contact, Gaya Bihar',
    image: '/bhumi-logo.png',
  },
};

// Structured Data Schemas
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bhumi Technology Pvt. Ltd.',
  alternateName: 'Bhumi Tech',
  url: 'https://www.bhumitechnology.com',
  logo: 'https://www.bhumitechnology.com/bhumi-logo.png',
  description: 'Leading provider of digital entertainment distribution and anti-piracy solutions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Gaya',
    addressRegion: 'Bihar',
    postalCode: '823001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-79036-24752',
    contactType: 'Customer Service',
    email: 'info@bhumitechnology.com',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    // Add social media links when available
  ],
});

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bhumitechnology.com',
  name: 'Bhumi Technology Pvt. Ltd.',
  image: 'https://www.bhumitechnology.com/bhumi-logo.png',
  description: 'Digital entertainment distribution and anti-piracy solutions provider.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Gaya',
    addressRegion: 'Bihar',
    postalCode: '823001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '24.7833',
    longitude: '84.9833',
  },
  telephone: '+91-79036-24752',
  email: 'info@bhumitechnology.com',
  url: 'https://www.bhumitechnology.com',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '10:00',
    closes: '19:00',
  },
});

export const getServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Entertainment Distribution and Anti-Piracy Services',
  provider: {
    '@type': 'Organization',
    name: 'Bhumi Technology Pvt. Ltd.',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Distribution Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Content Distribution',
          description: 'Comprehensive distribution solutions for digital entertainment content across OTT platforms.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Anti-Piracy Protection',
          description: 'Advanced anti-piracy solutions to protect your intellectual property and digital content.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consulting Services',
          description: 'Expert consulting services for digital distribution and content protection strategies.',
        },
      },
    ],
  },
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bhumi Tech',
  url: 'https://www.bhumitechnology.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.bhumitechnology.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

