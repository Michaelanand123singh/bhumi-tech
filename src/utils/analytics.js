/**
 * Google Analytics Utility
 * Handles all Google Analytics tracking events and page views
 */

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-VBDW2G7847';

// Ensure dataLayer and gtag exist immediately
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function if not already defined (fallback)
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(arguments);
    };
  }
}

/**
 * Wait for gtag to be available
 * @returns {Promise} Promise that resolves when gtag is available
 */
const waitForGtag = () => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
      resolve();
    } else {
      // Check every 100ms for gtag
      const interval = setInterval(() => {
        if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
          clearInterval(interval);
          resolve();
        }
      }, 100);
      
      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(interval);
        resolve(); // Resolve anyway to not block the app
      }, 5000);
    }
  });
};

/**
 * Initialize Google Analytics
 * This is called once when the app loads
 */
export const initGA = async () => {
  if (typeof window === 'undefined') return;
  
  // Wait for gtag to be available
  await waitForGtag();
  
  if (window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
      });
      
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Google Analytics initialized successfully');
        console.log('Tracking ID:', GA_MEASUREMENT_ID);
        console.log('Page:', window.location.pathname);
      }
    } catch (error) {
      console.error('Error initializing Google Analytics:', error);
    }
  } else {
    console.warn('Google Analytics gtag function not available');
  }
};

/**
 * Track page view
 * Call this when navigating to a new page in React Router
 * @param {string} path - The path of the page
 * @param {string} title - The title of the page (optional)
 */
export const trackPageView = (path, title = '') => {
  if (typeof window === 'undefined') return;
  
  // Ensure gtag is available
  if (window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
        page_title: title || document.title,
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  } else {
    // If gtag not available, queue it in dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: title || document.title,
    });
  }
};

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;
  
  // Ensure gtag is available
  if (window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, eventParams);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  } else {
    // If gtag not available, queue it in dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};

/**
 * Track button clicks
 * @param {string} buttonName - Name/ID of the button
 * @param {string} location - Where the button is located
 */
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {string} formLocation - Where the form is located
 */
export const trackFormSubmit = (formName, formLocation = '') => {
  trackEvent('form_submit', {
    form_name: formName,
    form_location: formLocation,
  });
};

/**
 * Track outbound links
 * @param {string} url - The URL being clicked
 * @param {string} linkText - Text of the link
 */
export const trackOutboundLink = (url, linkText = '') => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText,
  });
};

/**
 * Track file downloads
 * @param {string} fileName - Name of the file
 * @param {string} fileType - Type of the file
 */
export const trackDownload = (fileName, fileType = '') => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

/**
 * Track video plays
 * @param {string} videoTitle - Title of the video
 * @param {string} videoLocation - Where the video is located
 */
export const trackVideoPlay = (videoTitle, videoLocation = '') => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_location: videoLocation,
  });
};

/**
 * Track contact actions
 * @param {string} method - Contact method (phone, email, whatsapp, form)
 * @param {string} location - Where the contact action occurred
 */
export const trackContact = (method, location = '') => {
  trackEvent('contact_action', {
    contact_method: method,
    contact_location: location,
  });
};

/**
 * Track service interest
 * @param {string} serviceName - Name of the service
 * @param {string} action - Action taken (view, click, expand)
 */
export const trackServiceInterest = (serviceName, action = 'view') => {
  trackEvent('service_interest', {
    service_name: serviceName,
    action: action,
  });
};

/**
 * Verify Google Analytics is working
 * Call this to check if GA is properly loaded
 */
export const verifyGA = () => {
  if (typeof window === 'undefined') {
    console.warn('GA Verification: window is undefined');
    return false;
  }
  
  const hasDataLayer = !!window.dataLayer;
  const hasGtag = !!(window.gtag && typeof window.gtag === 'function');
  const hasScript = !!document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  
  console.log('Google Analytics Status:', {
    dataLayer: hasDataLayer,
    gtag: hasGtag,
    script: hasScript,
    dataLayerLength: window.dataLayer?.length || 0,
  });
  
  return hasDataLayer && hasGtag && hasScript;
};

