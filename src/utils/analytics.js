/**
 * Google Analytics Utility
 * Handles all Google Analytics tracking events and page views
 */

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-VBDW2G7847';

/**
 * Initialize Google Analytics
 * This is called once when the app loads
 */
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname + window.location.search,
    });
  }
};

/**
 * Track page view
 * Call this when navigating to a new page in React Router
 * @param {string} path - The path of the page
 * @param {string} title - The title of the page (optional)
 */
export const trackPageView = (path, title = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
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
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
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

// Make gtag available globally for direct access if needed
if (typeof window !== 'undefined') {
  window.gtag = window.gtag || function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };
}

