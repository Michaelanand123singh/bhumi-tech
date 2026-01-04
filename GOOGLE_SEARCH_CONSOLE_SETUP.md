# Google Search Console Setup Guide - Bhumi Tech

## Step-by-Step Instructions

### Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account (use your business email if possible)
3. If you don't have an account, create one at [accounts.google.com](https://accounts.google.com)

### Step 2: Add Your Property (Website)

1. Click **"Add Property"** button
2. Select **"URL prefix"** (recommended for most websites)
3. Enter your website URL: `https://www.bhumitechnology.com` (or your actual domain)
4. Click **"Continue"**

### Step 3: Verify Website Ownership

You have several verification options. Choose the easiest one:

#### Option A: HTML File Upload (Easiest)
1. Download the HTML verification file Google provides
2. Upload it to your website's root directory (`public/` folder)
3. Make sure it's accessible at: `https://www.bhumitechnology.com/google[random].html`
4. Click **"Verify"** in Search Console

#### Option B: HTML Tag (Alternative)
1. Copy the HTML meta tag Google provides
2. Add it to your `index.html` file in the `<head>` section
3. Deploy the updated site
4. Click **"Verify"** in Search Console

#### Option C: Domain Name Provider (For Full Domain)
1. If you own the domain, you can verify via your domain registrar
2. Follow Google's instructions for your specific provider

### Step 4: Submit Your Sitemap

Once verified:

1. In Google Search Console, go to **"Sitemaps"** in the left sidebar
2. Under **"Add a new sitemap"**, enter: `sitemap.xml`
3. Click **"Submit"**
4. Google will start crawling your sitemap

**Note:** Your sitemap is located at: `https://www.bhumitechnology.com/sitemap.xml`

### Step 5: Request Indexing (Optional but Recommended)

1. Go to **"URL Inspection"** tool (top search bar)
2. Enter your homepage URL: `https://www.bhumitechnology.com/`
3. Click **"Test Live URL"**
4. If the page is not indexed, click **"Request Indexing"**
5. Repeat for other important pages:
   - `/about`
   - `/services`
   - `/contact`
   - `/results`

### Step 6: Monitor Your Website

After submission, monitor these sections:

#### Performance Tab
- Track search queries
- Monitor click-through rates (CTR)
- See average position in search results
- View impressions and clicks

#### Coverage Tab
- Check indexed pages
- Fix any errors or warnings
- Monitor sitemap status

#### Enhancements Tab
- Check structured data (Organization, LocalBusiness, etc.)
- Verify mobile usability
- Monitor Core Web Vitals

### Step 7: Additional Optimizations

#### Submit to Other Search Engines

**Bing Webmaster Tools:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with Microsoft account
3. Add your site and verify ownership
4. Submit sitemap: `https://www.bhumitechnology.com/sitemap.xml`

**Yandex Webmaster:**
1. Go to [Yandex Webmaster](https://webmaster.yandex.com)
2. Add your site (if targeting Russian/European markets)

### Important Notes

1. **Domain Update Required**: Before submitting, make sure you've updated all domain references from `https://www.bhumitechnology.com` to your actual domain in:
   - `src/components/seo/SEO.jsx`
   - `src/data/seoData.js`
   - `public/sitemap.xml`
   - `public/robots.txt`

2. **Verification Time**: It may take a few hours to a few days for Google to:
   - Verify your site
   - Index your pages
   - Show data in Search Console

3. **Regular Monitoring**: Check Search Console weekly for:
   - New indexing issues
   - Search performance
   - Mobile usability problems
   - Security issues

### Troubleshooting

**If verification fails:**
- Make sure the verification file/tag is accessible
- Check that your site is live and accessible
- Ensure no firewall is blocking Google's crawler
- Try a different verification method

**If sitemap shows errors:**
- Verify sitemap is accessible at `/sitemap.xml`
- Check XML syntax is valid
- Ensure all URLs in sitemap are accessible
- Wait 24-48 hours for Google to process

**If pages aren't indexing:**
- Check robots.txt isn't blocking pages
- Ensure pages have unique, quality content
- Verify no "noindex" meta tags
- Request indexing manually for important pages

### Quick Checklist

- [ ] Created Google Search Console account
- [ ] Added property (website URL)
- [ ] Verified website ownership
- [ ] Submitted sitemap.xml
- [ ] Requested indexing for main pages
- [ ] Set up email notifications for issues
- [ ] Submitted to Bing Webmaster Tools (optional)
- [ ] Updated domain URLs in codebase
- [ ] Monitored initial indexing status

### Expected Timeline

- **Verification**: Immediate to 24 hours
- **Sitemap Processing**: 1-3 days
- **Initial Indexing**: 1-7 days
- **Full Indexing**: 1-4 weeks
- **Search Results Appearance**: 1-4 weeks

### Next Steps After Setup

1. **Monitor Performance**: Check Search Console weekly
2. **Fix Issues**: Address any errors or warnings promptly
3. **Optimize Content**: Based on search query data
4. **Update Sitemap**: When adding new pages
5. **Track Progress**: Monitor rankings and traffic over time

---

**Need Help?** 
- Google Search Console Help: https://support.google.com/webmasters
- Google Search Central: https://developers.google.com/search

