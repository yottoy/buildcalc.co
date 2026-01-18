# BuildCalc - Free Construction Material Calculators

BuildCalc is a specialized calculator website serving contractors, DIYers, and homeowners with construction and landscaping material calculators.

**Live Site:** [buildcalc.co](https://buildcalc.co)

## Features

- 🧮 **23 Construction Calculators** - Covering asphalt, concrete, gravel, sand, drywall, fencing, and more
- 📱 **Mobile-First Design** - Optimized for contractors using phones on job sites
- ⚡ **Fast & Simple** - Sub-2 second page loads, clean interface
- 🔍 **SEO Optimized** - Targeting low-KD construction calculator keywords
- 🎯 **Accurate Formulas** - Industry-standard calculations
- 🖨️ **Print-Friendly** - Print results for job sites

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Hosting:** Vercel (recommended)
- **Analytics:** Google Analytics 4 (optional)

## Calculators

### Ultra Low KD (0-10)
1. Concrete Steps Calculator
2. Bulk Material Calculator
3. Concrete Cost Calculator
4. Construction Cost Calculator
5. French Drain Calculator

### Very Low KD (11-19)
6. Wood Fence Calculator
7. Stucco Calculator
8. Concrete Driveway Calculator
9. Material Cost Estimator
10. Landscaping Calculator
11. Paver Calculator
12. Asphalt Calculator ⭐
13. Insulation Calculator
14. Sand Calculator
15. Gravel Cost Calculator
16. Brick Calculator
17. Dirt Calculator
18. Drywall Calculator
19. Sod Calculator
20. Pea Gravel Calculator
21. Crushed Stone Calculator
22. Chain Link Fence Calculator
23. Fence Post Calculator

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/buildcalc.co.git
cd buildcalc.co

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
buildcalc.co/
├── app/                          # Next.js App Router
│   ├── [calculator-name]/        # Individual calculator pages
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt
├── components/                   # Reusable components
│   ├── CalculatorLayout.tsx      # Calculator page wrapper
│   ├── CalculatorForm.tsx        # Form components
│   ├── FAQSection.tsx            # FAQ component
│   └── HowToUse.tsx              # Instructions component
├── docs/                         # Project documentation
│   ├── PROJECT_CONTEXT.md        # Project overview
│   ├── CALCULATOR_PROMPT.md      # Calculator template
│   ├── HOMEPAGE_PROMPT.md        # Homepage specs
│   └── SEO_OPTIMIZATION.md       # SEO guidelines
└── public/                       # Static assets
```

## SEO Strategy

### On-Page SEO
- ✅ Unique meta titles/descriptions per calculator
- ✅ Schema markup (SoftwareApplication, FAQPage)
- ✅ Internal linking structure
- ✅ Author information on all pages
- ✅ Fresh content indicators (Updated 2025)
- ✅ Mobile-responsive design

### Technical SEO
- ✅ Server-side rendering (Next.js)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Fast page loads (< 2s)
- ✅ Clean URL structure

### Target Keywords
- Primary: asphalt calculator, sand calculator, dirt calculator, drywall calculator
- Secondary: paver calculator, brick calculator, insulation calculator
- Long-tail: "how much asphalt do i need", "concrete calculator for driveway"

## Development Guidelines

### Adding a New Calculator

1. Create new directory: `app/[calculator-name]/page.tsx`
2. Use the calculator template from `docs/CALCULATOR_PROMPT.md`
3. Implement calculation logic
4. Add FAQ section with 3-5 questions
5. Include "How to Use" section
6. Add related calculators
7. Update sitemap.ts
8. Test on mobile

### Code Style

- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Keep components simple and reusable
- Mobile-first responsive design
- Semantic HTML for accessibility

## Performance

- **Target Metrics:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

- **Optimizations:**
  - Static generation for all pages
  - Image optimization with next/image
  - Minimal JavaScript bundle
  - No external dependencies for calculators

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure domain (buildcalc.co)
4. Deploy

### Environment Variables

No environment variables required for basic functionality.

Optional for analytics:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Roadmap

### Phase 1 (Current)
- ✅ Build all 23 calculators
- ✅ SEO optimization
- ✅ Mobile-responsive design
- ✅ Deploy to production

### Phase 2 (Month 3+)
- [ ] Add affiliate links (Home Depot, Lowe's)
- [ ] Blog content for long-tail keywords
- [ ] Email capture (optional)
- [ ] Advanced calculator features

### Phase 3 (Month 6+)
- [ ] Additional calculators based on keyword research
- [ ] Comparison pages
- [ ] User accounts (save calculations)
- [ ] API for developers

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Email:** contact@buildcalc.co
- **Website:** [buildcalc.co](https://buildcalc.co)

## Acknowledgments

- Design inspired by [impeccable.style](https://impeccable.style) and [rams.ai](https://rams.ai)
- Built with [Next.js](https://nextjs.org)
- Hosted on [Vercel](https://vercel.com)

---

**Built for contractors, by developers who care about construction.**
