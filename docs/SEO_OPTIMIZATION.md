# SEO Optimization Prompt for Claude Code

Apply these SEO optimizations to BuildCalc:

## Critical SEO Tactics (Implement First)

### 1. Author Information (HIGHEST IMPACT)

**Why:** Proven 8-10 position jump in 2 weeks

**Implementation:**
```html
<!-- Add to footer of every page -->
<div itemscope itemtype="https://schema.org/Person">
  <p>
    Calculator by <span itemprop="name">[Your Name]</span><br>
    <span itemprop="jobTitle">Construction Calculator Specialist</span><br>
    <a href="[LinkedIn URL]" itemprop="url">LinkedIn</a>
  </p>
</div>
```

**Person Schema (add to all pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Your Name]",
  "jobTitle": "Construction Calculator Specialist",
  "url": "https://buildcalc.co",
  "sameAs": ["[LinkedIn URL]"]
}
```

**Checklist:**
- [ ] Add author photo (100x100px minimum)
- [ ] Write 2-3 sentence bio
- [ ] Add to every calculator page
- [ ] Add to homepage
- [ ] Implement Person schema

### 2. Fresh Content Signals

**Why:** Google prioritizes recently updated content

**Implementation:**
- Add "Updated January 2025" to all titles
- Include current year in H1 or description
- Add "Last updated: [date]" at bottom of pages
- Update dateModified in schema monthly

**Example:**
```html
<title>Asphalt Calculator - Free Tool | BuildCalc 2025</title>
<p class="text-sm text-gray-600">Last updated: January 18, 2025</p>
```

**Schema:**
```json
{
  "datePublished": "2025-01-18",
  "dateModified": "2025-01-18"
}
```

**Refresh Schedule:**
- Homepage: Every 3 months
- Calculators: Every 6 months
- Blog posts: As needed

### 3. FAQ Sections with Schema

**Why:** Enables rich snippets, featured snippets

**Implementation:**
Add FAQ section to every calculator page with 3-5 questions:

```html
<section>
  <h2>Frequently Asked Questions</h2>
  
  <div>
    <h3>How do I calculate [material] needed?</h3>
    <p>Measure length, width, and depth. Enter into calculator. Formula: [specific]</p>
  </div>
  
  <div>
    <h3>How accurate is this calculator?</h3>
    <p>Uses industry formulas accurate within 5%. Order 5-10% extra for waste.</p>
  </div>
  
  <div>
    <h3>What units does the calculator support?</h3>
    <p>Supports feet, inches, yards, and metric measurements.</p>
  </div>
</section>
```

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate [material] needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Measure length, width, and depth..."
      }
    }
  ]
}
```

## Technical SEO

**Meta Tags (for each page):**
- Unique title tag (50-60 characters)
- Meta description (150-160 characters)
- Canonical URL
- Open Graph tags for social sharing

**Example for Asphalt Calculator:**
```html
<title>Asphalt Calculator - Free Tons & Cost Estimator | BuildCalc</title>
<meta name="description" content="Calculate asphalt needed for driveways and parking lots. Free calculator shows tons, cubic yards, and estimated cost. Used by contractors.">
<link rel="canonical" href="https://buildcalc.co/asphalt-calculator">
<meta property="og:title" content="Free Asphalt Calculator | BuildCalc">
<meta property="og:description" content="Calculate tons of asphalt needed for your project">
```

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://buildcalc.co/sitemap.xml
```

**sitemap.xml:**
Auto-generate with Next.js sitemap plugin
Include: Homepage, all calculator pages, blog posts

## Schema Markup

**Homepage (WebSite):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BuildCalc",
  "url": "https://buildcalc.co",
  "description": "Free construction and landscaping calculators for contractors and DIYers",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://buildcalc.co/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Calculator Pages (SoftwareApplication):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Asphalt Calculator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Calculate tons of asphalt needed for driveways and parking lots"
}
```

**BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://buildcalc.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Asphalt Calculator",
      "item": "https://buildcalc.co/asphalt-calculator"
    }
  ]
}
```

## On-Page SEO

**Heading Structure:**
- One H1 per page (calculator name)
- H2 for major sections (How to Use, Formula, etc.)
- H3 for subsections
- Logical hierarchy

**Content Requirements (per calculator page):**
- 300-500 words unique content
- Target keyword in H1, first paragraph, one H2
- Natural language, avoid keyword stuffing
- Answer user questions (how to use, formula, tips)

**Internal Linking:**
- Link from homepage to all calculators
- Cross-link related calculators
- Use descriptive anchor text ("asphalt calculator" not "click here")
- Footer links to important pages

**Image Optimization:**
- Alt text for all images/icons
- Descriptive filenames (asphalt-calculator-icon.svg)
- Use Next/Image for optimization
- WebP format where possible

**URL Structure:**
```
Good:
- /asphalt-calculator
- /sand-calculator
- /blog/how-to-calculate-asphalt

Bad:
- /calc?id=123
- /calculator/asphalt/index.html
```

## Performance Optimization

**Core Web Vitals targets:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Next.js optimizations:**
- Use `next/image` for all images
- Enable font optimization
- Use dynamic imports for heavy components
- Static generation for all calculator pages

**Code splitting:**
```typescript
// Lazy load calculator components
const CalculatorForm = dynamic(() => import('./CalculatorForm'), {
  loading: () => <p>Loading calculator...</p>
})
```

**Bundle size:**
- Keep JavaScript < 100kb initial load
- Remove unused Tailwind classes (production build)
- Minimize third-party scripts

## Mobile Optimization

**Responsive design:**
- Mobile-first approach
- Touch-friendly (44px minimum tap targets)
- No horizontal scrolling
- Readable text without zooming (16px base)

**Mobile-specific meta:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="mobile-web-app-capable" content="yes">
```

## Local SEO (Optional)

**If targeting specific locations:**
```json
{
  "@type": "Organization",
  "name": "BuildCalc",
  "url": "https://buildcalc.co",
  "logo": "https://buildcalc.co/logo.png"
}
```

## Analytics & Tracking

**Google Search Console:**
- Submit sitemap
- Monitor indexing
- Track search queries
- Fix crawl errors

**GA4 Events to track:**
- Calculator usage (which calculator, inputs used)
- Affiliate link clicks
- Time on calculator pages
- Print button clicks

**Implementation:**
```typescript
// Track calculator usage
gtag('event', 'calculator_use', {
  calculator_name: 'asphalt',
  length: length,
  width: width
})
```

## Content Strategy for SEO

**Supporting blog posts:**
1. "How to Calculate Asphalt for a Driveway" → link to asphalt calculator
2. "Asphalt vs Concrete Driveway Cost Comparison" → link to both calculators
3. "Common Mistakes When Ordering Asphalt" → link to calculator

**Content structure:**
- Answer specific questions
- Include calculator embed or link
- Use tables for comparisons
- Add images/diagrams
- 800-1,500 words per post

**Keyword targeting:**
- Primary: Calculator keyword (e.g., "asphalt calculator")
- Secondary: How-to questions ("how much asphalt do i need")
- Long-tail: Specific projects ("asphalt calculator for driveway")

## Technical Implementation

**Next.js config optimizations:**
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
}
```

**Tailwind purge config:**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
```

## Checklist for Each Calculator Page

- [ ] Unique title tag with target keyword
- [ ] Meta description under 160 characters
- [ ] H1 with calculator name
- [ ] 300+ words of unique content
- [ ] Schema markup (SoftwareApplication)
- [ ] Internal links to 3-4 related calculators
- [ ] Alt text for all images
- [ ] Mobile-responsive
- [ ] Fast load time (< 2s)
- [ ] Clean URL structure
- [ ] Canonical tag present
- [ ] No broken links
- [ ] Print functionality tested

## Post-Launch SEO Tasks

**Week 1:**
- Submit to Google Search Console
- Submit sitemap
- Verify mobile-friendliness
- Check for crawl errors

**Week 2:**
- Create calculator directory submissions
- Initial backlink outreach
- Monitor indexing status

**Ongoing:**
- Add new calculators monthly
- Create supporting blog content
- Build backlinks (contractor blogs, forums)
- Monitor rankings with Google Search Console
- Update content based on search queries

## Tools to Use

**Free:**
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Mobile-Friendly Test

**Paid (optional):**
- Ubersuggest ($29/month) - Rank tracking
- Ahrefs/SEMrush - Deep analysis (can cancel after research)

---

## Claude Code Usage

**To apply SEO optimizations:**

```
Optimize all pages for SEO using the specifications in SEO_OPTIMIZATION.md. 
Focus on:
1. Meta tags for all pages
2. Schema markup implementation
3. Performance optimizations
4. Mobile responsiveness
```

Claude Code will:
- Add meta tags to layout/page files
- Implement schema markup
- Optimize images
- Configure Next.js for SEO
- Generate sitemap
- Set up Google Analytics
