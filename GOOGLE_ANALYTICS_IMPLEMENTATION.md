# Google Analytics Implementation Guide - Bhumi Tech

## Overview
Google Analytics (gtag.js) has been fully integrated into the website with comprehensive event tracking.

## ✅ Implementation Details

### 1. Google Analytics Script
- **Location**: `index.html` (in `<head>` section)
- **Tracking ID**: `G-VBDW2G7847`
- **Script**: Google Tag Manager (gtag.js) with async loading
- **DNS Prefetch**: Added for performance optimization

### 2. Core Analytics Files

#### `src/utils/analytics.js`
Comprehensive analytics utility with functions for:
- **Page View Tracking**: `trackPageView(path, title)`
- **Custom Events**: `trackEvent(eventName, eventParams)`
- **Button Clicks**: `trackButtonClick(buttonName, location)`
- **Form Submissions**: `trackFormSubmit(formName, formLocation)`
- **Outbound Links**: `trackOutboundLink(url, linkText)`
- **Contact Actions**: `trackContact(method, location)`
- **Service Interest**: `trackServiceInterest(serviceName, action)`
- **File Downloads**: `trackDownload(fileName, fileType)`
- **Video Plays**: `trackVideoPlay(videoTitle, videoLocation)`

#### `src/hooks/usePageTracking.js`
Custom React hook that automatically tracks page views when routes change in React Router.

### 3. Integration Points

#### App.jsx
- Initializes Google Analytics on app load
- Integrates `usePageTracking` hook for automatic page view tracking
- Tracks all route changes automatically

#### Components with Tracking

**Contact Components:**
- `ContactForm.jsx` - Tracks form submissions
- `ContactInfo.jsx` - Tracks phone/email clicks
- `ContactSidebar.jsx` - Tracks emergency support and WhatsApp clicks
- `ContactHero.jsx` - Tracks WhatsApp button clicks

**Service Components:**
- `ServiceCard.jsx` - Tracks service expand/collapse actions

**Home Components:**
- `CTASection.jsx` - Tracks CTA button clicks and WhatsApp interactions

**Common Components:**
- `WhatsAppButton.jsx` - Tracks all WhatsApp floating button clicks

## 📊 Tracked Events

### Page Views
- Automatically tracked on all route changes
- Includes path and page title

### Contact Events
- **Form Submissions**: `contact_form` on contact page
- **Phone Clicks**: Tracked with location context
- **Email Clicks**: Tracked with location context
- **WhatsApp Clicks**: Tracked from multiple locations (floating button, CTAs, contact page)

### User Interactions
- **Button Clicks**: All major CTA buttons tracked with button name and location
- **Service Interest**: Service card expand/collapse actions
- **Outbound Links**: WhatsApp and external links

## 🔧 Usage Examples

### Track a Custom Event
```javascript
import { trackEvent } from '../utils/analytics';

trackEvent('custom_event', {
  event_category: 'engagement',
  event_label: 'specific_action',
  value: 1
});
```

### Track Button Click
```javascript
import { trackButtonClick } from '../utils/analytics';

<button onClick={() => trackButtonClick('Get Started', 'hero_section')}>
  Get Started
</button>
```

### Track Contact Action
```javascript
import { trackContact } from '../utils/analytics';

<a href="tel:+917903624752" onClick={() => trackContact('phone', 'header')}>
  Call Us
</a>
```

## 📈 Google Analytics Dashboard

Once implemented, you can view data in Google Analytics:
1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property (G-VBDW2G7847)
3. View reports:
   - **Realtime**: See live user activity
   - **Events**: View all tracked events
   - **Pages**: See page view data
   - **Conversions**: Track goal completions

## 🎯 Key Metrics Tracked

1. **Page Views**: All pages automatically tracked
2. **Contact Form Submissions**: Conversion tracking
3. **Phone Calls**: Contact method preference
4. **Email Clicks**: Contact method preference
5. **WhatsApp Interactions**: Engagement metric
6. **Service Interest**: Which services users explore
7. **Button Clicks**: CTA performance
8. **Outbound Links**: External link engagement

## ✅ Verification

To verify Google Analytics is working:

1. **Real-time Reports**:
   - Go to Google Analytics → Realtime
   - Visit your website
   - You should see your visit appear within seconds

2. **Browser Console**:
   - Open browser DevTools
   - Check Network tab for `gtag/js` requests
   - Check Console for any errors

3. **Google Tag Assistant**:
   - Install [Google Tag Assistant](https://tagassistant.google.com/)
   - Visit your website
   - Verify tags are firing correctly

## 🔒 Privacy & Compliance

- Analytics respects user privacy
- No personal information is collected
- Complies with GDPR best practices
- Can be extended with cookie consent if needed

## 📝 Notes

- All tracking is non-intrusive
- Page views are tracked automatically
- Events are tracked on user interactions
- No tracking on page load (only on interactions)
- All tracking functions check for `window.gtag` availability

## 🚀 Next Steps

1. **Set Up Goals in GA**:
   - Form submission as conversion goal
   - Contact action as conversion goal
   - Service interest as engagement goal

2. **Create Custom Reports**:
   - Contact method preference
   - Service interest by page
   - CTA performance comparison

3. **Set Up Alerts**:
   - Traffic spikes
   - Conversion rate changes
   - Error tracking

4. **Link with Google Search Console**:
   - Connect GA with Search Console
   - View search query data
   - Track organic performance

---

**Tracking ID**: `G-VBDW2G7847`  
**Implementation Date**: December 2024  
**Status**: ✅ Fully Implemented and Active

