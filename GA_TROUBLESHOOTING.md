# Google Analytics Troubleshooting Guide

## Quick Test

Open your browser console and run:
```javascript
testGA()
```

This will show you the status of Google Analytics.

## Common Issues & Solutions

### Issue 1: Script Not Loading
**Symptoms**: No requests to googletagmanager.com in Network tab

**Solutions**:
1. Check if you're blocking scripts (ad blockers, privacy extensions)
2. Check browser console for errors
3. Verify internet connection
4. Check if the script tag is in index.html

### Issue 2: gtag Function Not Available
**Symptoms**: Console shows "gtag function not available"

**Solutions**:
1. The script loads asynchronously - wait a few seconds
2. Check Network tab - script should load from googletagmanager.com
3. Hard refresh the page (Ctrl+F5)
4. Check browser console for script loading errors

### Issue 3: Events Not Showing in GA
**Symptoms**: Script loads but no data in Google Analytics

**Solutions**:
1. **Wait 24-48 hours** - Real-time reports show immediately, but standard reports have delay
2. Check Real-time reports in GA (shows data within seconds)
3. Verify tracking ID is correct: `G-VBDW2G7847`
4. Check if you're in the correct GA property
5. Ensure cookies are enabled

### Issue 4: Page Views Not Tracking
**Symptoms**: Only initial page view tracked, route changes not tracked

**Solutions**:
1. Check if `usePageTracking` hook is working
2. Verify React Router is functioning
3. Check browser console for errors
4. Ensure App.jsx has the hook integrated

## Verification Steps

### Step 1: Check Script Loading
1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "gtag" or "googletagmanager"
4. Refresh page
5. You should see requests to:
   - `www.googletagmanager.com/gtag/js?id=G-VBDW2G7847`
   - `www.google-analytics.com/g/collect`

### Step 2: Check Console
1. Open browser console
2. Look for:
   - ✅ "Google Analytics initialized successfully" (in dev mode)
   - Any error messages
   - Check if `window.gtag` exists: type `window.gtag` in console

### Step 3: Check dataLayer
1. In browser console, type: `window.dataLayer`
2. You should see an array with GA configuration
3. As you interact with the site, items should be added

### Step 4: Test Event
1. In browser console, run:
```javascript
window.gtag('event', 'test', { test_param: 'test_value' });
```
2. Check Network tab for request to google-analytics.com
3. Check Real-time reports in GA (may take a few seconds)

### Step 5: Check Real-time Reports
1. Go to Google Analytics
2. Navigate to Reports → Realtime
3. Visit your website
4. You should see your visit appear within 10-30 seconds

## Debug Mode

The implementation includes debug logging in development mode:
- Console logs when GA initializes
- Shows tracking ID and current page
- Logs errors if any occur

## Manual Testing

### Test Page View Tracking
1. Navigate between pages (Home, About, Services, etc.)
2. Check browser console for page view logs
3. Check Network tab for GA requests on each navigation

### Test Event Tracking
1. Click any button (CTA, WhatsApp, etc.)
2. Submit the contact form
3. Check Network tab for event requests
4. Check Real-time Events in GA

### Test Contact Tracking
1. Click phone number
2. Click email
3. Click WhatsApp button
4. All should send events to GA

## Still Not Working?

1. **Clear browser cache** and hard refresh
2. **Disable ad blockers** temporarily
3. **Try incognito/private mode**
4. **Check browser extensions** that might block tracking
5. **Verify tracking ID** in index.html matches your GA property
6. **Check GA property settings** - ensure data collection is enabled
7. **Wait 24-48 hours** for standard reports (Real-time works immediately)

## Expected Behavior

✅ **Working correctly when:**
- Console shows "Google Analytics initialized successfully" (dev mode)
- Network tab shows requests to googletagmanager.com
- Network tab shows requests to google-analytics.com/g/collect
- Real-time reports in GA show your visits
- `window.gtag` exists and is a function
- `window.dataLayer` exists and has items

❌ **Not working when:**
- No requests in Network tab
- Console shows errors
- `window.gtag` is undefined
- No data in Real-time reports after 1-2 minutes

## Contact Support

If still not working after trying all solutions:
1. Check browser console for specific error messages
2. Check Network tab for failed requests
3. Verify your GA property is active
4. Ensure tracking ID is correct

