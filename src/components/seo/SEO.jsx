import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.bhumitechnology.com'; // Update with your actual domain
  const fullUrl = `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/bhumi-logo.png`;
  const defaultTitle = 'Bhumi Tech - Digital Entertainment Distribution & Protection';
  const defaultDescription = 'Leading digital entertainment distribution and anti-piracy solutions. Protect and distribute your content with cutting-edge technology.';

  const pageTitle = title ? `${title} | Bhumi Tech` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image || defaultImage;
  const pageUrl = url || fullUrl;
  const pageKeywords = keywords || 'digital distribution, anti-piracy, content protection, entertainment distribution, OTT distribution, digital rights management, Bhumi Technology';

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', pageKeywords);
    updateMetaTag('author', 'Bhumi Technology Pvt. Ltd.');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:url', pageUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Bhumi Tech', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // Add structured data
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('#structured-data');
      existingScripts.forEach(script => script.remove());

      // Handle both single objects and arrays
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      dataArray.forEach((data, index) => {
        const scriptTag = document.createElement('script');
        scriptTag.id = `structured-data-${index}`;
        scriptTag.type = 'application/ld+json';
        scriptTag.textContent = JSON.stringify(data);
        document.head.appendChild(scriptTag);
      });
    }
  }, [pageTitle, pageDescription, pageImage, pageUrl, pageKeywords, type, structuredData]);

  return null;
};

export default SEO;

