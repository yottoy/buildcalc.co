# Homepage Prompt for Claude Code

Create the homepage for BuildCalc with these specifications:

## Layout

**Minimal Header:**
- H1: "Free Construction Material Calculators"
- Subtitle: "Calculate asphalt, concrete, gravel, sand, and more for your projects."

**Calculator List (Alphabetical):**
- Simple list format
- Each entry: **Calculator Name** (large) + description (smaller text for SEO)
- Link entire entry to calculator page

**Format:**
```
**Asphalt Calculator**
Calculate tons of asphalt needed for driveways and parking lots

**Brick Calculator**
Estimate number of bricks required for walls and construction projects

[...all 23 calculators]
```

**Footer:**
- About, Contact, Privacy Policy, Terms
- Copyright notice

## Design Requirements

## Design References

**impeccable.style:**
- Visit: https://impeccable.style
- Brutalist design system
- Use their typography scale
- Apply their spacing system
- Follow their layout principles

**rams.ai:**
- Visit: https://rams.ai
- Minimalist component library
- Use for form inputs, buttons
- Apply for consistent spacing
- Reference Dieter Rams' 10 principles

**Color Palette:**
- Primary: Black (#000000)
- Background: White (#FFFFFF)
- Accent: Dark Gray (#333333) for secondary elements
- No gradients, no shadows (except subtle form shadows)

**No Icons, No Search, No Categories:**
- Users will Google specific calculator keywords and land on calculator pages
- Homepage is for internal linking (SEO) and fallback traffic only
- Alphabetical list is fastest to scan

## Design Requirements

**Style:**
- Clean, professional, trustworthy
- Primary color: Construction orange (#FF6B35) or blue (#2C5F8D)
- Generous whitespace
- Large, readable fonts (contractors often view on phones)
- Construction-themed but not cheesy

**Mobile-First:**
- Fully responsive
- Touch-friendly buttons (min 44px height)
- Fast loading (< 2 seconds)

**Accessibility:**
- Semantic HTML
- Proper heading hierarchy (H1 for title)
- Alt text for icons
- Good color contrast

## SEO Requirements

**Meta Tags:**
```html
<title>BuildCalc - Free Construction Material Calculators | 2025</title>
<meta name="description" content="Calculate asphalt, concrete, gravel, sand, and more. Free construction calculators with accurate formulas. Updated January 2025.">
<meta name="author" content="[Your Name]">
```

**Author Information (Critical for Rankings):**
Add visible author section at bottom of homepage:
```
Created by [Your Name]
Construction calculator specialist | [LinkedIn URL]
Brief bio: "Professional tools for contractors and DIYers"
```

**Person Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Your Name]",
  "jobTitle": "Construction Calculator Specialist",
  "url": "https://buildcalc.co"
}
```

**WebSite Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BuildCalc",
  "description": "Free construction and landscaping calculators",
  "url": "https://buildcalc.co",
  "datePublished": "2025-01-18",
  "dateModified": "2025-01-18"
}
```

**Fresh Content Indicators:**
- Add "Updated January 2025" to title/description
- Include current year in H1 or subheading
- Refresh homepage copy every 3 months with new stats

**Internal Linking:**
- Every calculator linked from homepage
- Every calculator within 2 clicks of homepage
- Use descriptive anchor text ("asphalt calculator" not "click here")

**Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BuildCalc",
  "description": "Free construction and landscaping calculators",
  "url": "https://buildcalc.co"
}
```

**Internal Linking:**
- Each calculator card links to its dedicated page
- Breadcrumb navigation (optional for homepage)

## Content

**Header text:**
```
Free Construction Material Calculators

Calculate asphalt, concrete, gravel, sand, and more for your projects.
```

**Calculator List (All 23 Alphabetically):**

**Asphalt Calculator**
Calculate tons of asphalt needed for driveways and parking lots

**Brick Calculator**
Estimate number of bricks required for walls and construction projects

**Bulk Material Calculator**
Calculate cubic yards for bulk construction and landscaping materials

**Chain Link Fence Calculator**
Estimate chain link fencing materials and posts needed

**Concrete Block Calculator**
Calculate number of concrete blocks required for construction

**Concrete Cost Calculator**
Estimate total concrete costs based on project dimensions

**Concrete Driveway Calculator**
Calculate concrete needed for driveway projects

**Concrete Steps Calculator**
Estimate concrete required for steps and stairs

**Construction Cost Calculator**
Estimate total construction project material costs

**Crushed Stone Calculator**
Calculate crushed stone needed for driveways and base layers

**Dirt Calculator**
Calculate fill dirt or topsoil needed for landscaping

**Drywall Calculator**
Estimate drywall sheets needed for walls and ceilings

**Fence Post Calculator**
Calculate number of fence posts required for your project

**French Drain Calculator**
Estimate materials needed for drainage systems

**Gravel Cost Calculator**
Calculate gravel costs based on project requirements

**Insulation Calculator**
Estimate insulation materials needed for walls and attics

**Landscaping Calculator**
Calculate materials for landscaping and garden projects

**Material Cost Estimator**
Estimate total material costs for construction projects

**Paver Calculator**
Calculate number of pavers needed for patios and walkways

**Pea Gravel Calculator**
Estimate pea gravel required for landscaping

**Sand Calculator**
Calculate sand needed for construction and landscaping

**Sod Calculator**
Estimate sod required for lawn installation

**Stucco Calculator**
Calculate stucco materials needed for exterior finishes

**Wood Fence Calculator**
Estimate wood fencing materials and posts required

## Technical Implementation

**Framework:** Next.js with App Router
**Styling:** 
- Tailwind CSS (base utility classes)
- impeccable.style (design system)
- rams.ai (UI components)

**Installation:**
```bash
npm install impeccable.style @rams/ui
```

**Import in layout.tsx:**
```typescript
import 'impeccable.style/dist/impeccable.css'
import '@rams/ui/dist/rams.css'
```

**Structure:**
```
app/
  page.tsx (Homepage - simple list with impeccable.style)
  layout.tsx (Root layout with rams.ai components)
.gitignore
README.md
```

## Call to Action

Primary CTA: Links to calculator pages
No monetization in Phase 1 - focus on SEO and user experience

## Analytics

Include Google Analytics 4 script in layout
Track: Page views, calculator clicks, time on site

## Example Homepage Flow

1. User lands on buildcalc.co
2. Sees H1: "Free Construction Material Calculators"
3. Scans alphabetical list
4. Clicks "Asphalt Calculator"
5. Lands on calculator page

Simple, fast, focused.
