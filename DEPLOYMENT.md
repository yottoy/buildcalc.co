# BuildCalc Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)
- Domain name (buildcalc.co)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BuildCalc with 23 calculators"
   git branch -M main
   git remote add origin https://github.com/yourusername/buildcalc.co.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel project settings, go to "Domains"
   - Add custom domain: `buildcalc.co`
   - Update DNS records at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Wait for DNS propagation (5-60 minutes)

4. **Verify Deployment**
   - Visit https://buildcalc.co
   - Test several calculators
   - Check mobile responsiveness
   - Verify sitemap: https://buildcalc.co/sitemap.xml
   - Verify robots.txt: https://buildcalc.co/robots.txt

## Alternative: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Domain**
   - In Netlify site settings, go to "Domain management"
   - Add custom domain: `buildcalc.co`
   - Follow DNS instructions provided

## Post-Deployment Checklist

### SEO Setup

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `buildcalc.co`
   - Verify ownership (DNS or HTML tag)
   - Submit sitemap: `https://buildcalc.co/sitemap.xml`

2. **Google Analytics (Optional)**
   - Create GA4 property
   - Add tracking code to `app/layout.tsx`:
     ```typescript
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       `
     }} />
     ```

3. **Schema Markup Validation**
   - Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Verify SoftwareApplication schema
   - Verify FAQPage schema

### Performance Optimization

1. **Lighthouse Audit**
   - Run Lighthouse in Chrome DevTools
   - Target scores:
     - Performance: 90+
     - Accessibility: 95+
     - Best Practices: 95+
     - SEO: 100

2. **Core Web Vitals**
   - Monitor in Google Search Console
   - Target metrics:
     - LCP: < 2.5s
     - FID: < 100ms
     - CLS: < 0.1

### Security

1. **SSL Certificate**
   - Vercel/Netlify provide free SSL automatically
   - Verify HTTPS is working

2. **Security Headers**
   - Add to `next.config.ts`:
     ```typescript
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             {
               key: 'X-Frame-Options',
               value: 'DENY',
             },
             {
               key: 'X-Content-Type-Options',
               value: 'nosniff',
             },
           ],
         },
       ];
     },
     ```

## Monitoring

### Analytics to Track

1. **Traffic Metrics**
   - Page views per calculator
   - Bounce rate
   - Average session duration
   - Mobile vs desktop traffic

2. **SEO Metrics**
   - Keyword rankings (Google Search Console)
   - Click-through rate (CTR)
   - Impressions
   - Average position

3. **User Behavior**
   - Most popular calculators
   - Conversion to affiliate links (Phase 2)
   - Print button usage

### Monthly Tasks

1. **Update Content**
   - Refresh "Last updated" dates
   - Update dateModified in schema markup
   - Add new calculators based on keyword research

2. **Review Analytics**
   - Check Google Search Console for new keywords
   - Identify underperforming calculators
   - Monitor Core Web Vitals

3. **Backlink Building**
   - Submit to calculator directories
   - Reach out to contractor blogs
   - Engage in relevant forums (r/DIY, r/HomeImprovement)

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

**Error: TypeScript errors**
```bash
# Run type check
npm run lint
# Fix errors before deploying
```

### Deployment Issues

**Vercel deployment fails**
- Check build logs in Vercel dashboard
- Verify Node.js version (18+)
- Check environment variables

**Domain not resolving**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use [DNS Checker](https://dnschecker.org) to verify

### Performance Issues

**Slow page loads**
- Check Lighthouse report
- Optimize images
- Reduce JavaScript bundle size
- Enable compression

**High bounce rate**
- Improve mobile experience
- Add more content to calculator pages
- Improve page load speed

## Scaling

### Phase 2 (Month 3+)

1. **Add Affiliate Links**
   - Sign up for Home Depot affiliate program
   - Sign up for Lowe's affiliate program
   - Add product recommendations to calculators

2. **Blog Content**
   - Create `app/blog/` directory
   - Write 10-15 supporting blog posts
   - Link from blog to calculators

3. **Email Capture**
   - Add email signup form
   - Offer "Save calculations" feature
   - Send weekly construction tips

### Phase 3 (Month 6+)

1. **Additional Features**
   - User accounts
   - Save calculations
   - Share calculations via link
   - Mobile app (PWA)

2. **Monetization**
   - Display ads (Google AdSense)
   - Premium calculators
   - API for developers

## Support

For deployment issues or questions:
- Email: contact@buildcalc.co
- Documentation: See README.md
- Next.js Docs: https://nextjs.org/docs

## Success Metrics

### Month 1
- ✅ Site deployed and live
- ✅ All 23 calculators working
- ✅ Indexed in Google Search Console
- Target: 100+ visitors

### Month 3
- Target: 1,000+ monthly visits
- Ranking in top 50 for 10+ keywords
- 20+ backlinks

### Month 6
- Target: 3,000+ monthly visits
- Ranking in top 20 for 10+ keywords
- 50+ backlinks

### Month 12
- Target: 10,000+ monthly visits
- Ranking in top 10 for 5-8 keywords
- Phase 2 monetization active
- $300-500/month revenue

---

**Ready to deploy? Run `npm run build` to verify everything works, then push to GitHub and deploy to Vercel!**
