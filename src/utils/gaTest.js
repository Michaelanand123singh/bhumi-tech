/**
 * Google Analytics Test Utility
 * Use this to test if GA is working properly
 * Call testGA() in browser console to verify
 */

export const testGA = () => {
  console.log('=== Google Analytics Test ===');
  
  // Check if window exists
  if (typeof window === 'undefined') {
    console.error('❌ Window object not available');
    return false;
  }
  
  // Check dataLayer
  const hasDataLayer = !!window.dataLayer;
  console.log(`dataLayer: ${hasDataLayer ? '✅' : '❌'}`, window.dataLayer);
  
  // Check gtag function
  const hasGtag = !!(window.gtag && typeof window.gtag === 'function');
  console.log(`gtag function: ${hasGtag ? '✅' : '❌'}`, typeof window.gtag);
  
  // Check if script is loaded
  const script = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  const hasScript = !!script;
  console.log(`GA Script tag: ${hasScript ? '✅' : '❌'}`, script);
  
  // Check dataLayer contents
  if (hasDataLayer) {
    console.log('dataLayer contents:', window.dataLayer);
    console.log('dataLayer length:', window.dataLayer.length);
  }
  
  // Try to send a test event
  if (hasGtag) {
    try {
      window.gtag('event', 'test_event', {
        event_category: 'test',
        event_label: 'manual_test',
        value: 1
      });
      console.log('✅ Test event sent successfully');
    } catch (error) {
      console.error('❌ Error sending test event:', error);
    }
  }
  
  // Check network requests
  console.log('\n=== Network Check ===');
  console.log('Check Network tab in DevTools for requests to:');
  console.log('- www.googletagmanager.com/gtag/js');
  console.log('- www.google-analytics.com/g/collect');
  
  return hasDataLayer && hasGtag && hasScript;
};

// Make it available globally for easy testing
if (typeof window !== 'undefined') {
  window.testGA = testGA;
}

