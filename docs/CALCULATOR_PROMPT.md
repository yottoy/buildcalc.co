# Calculator Prompt Template for Claude Code

Use this template for building each calculator. Replace [CALCULATOR_NAME] with specific calculator (e.g., "asphalt", "sand", "dirt").

---

## Prompt for Claude Code:

Create a [CALCULATOR_NAME] calculator page with the following specifications:

### URL Structure
- Route: `/[calculator-name]-calculator`
- Example: `/asphalt-calculator`, `/sand-calculator`

### Page Layout

**Header:**
- H1: "[Calculator Name] Calculator" (large, bold)
- SEO description below (smaller text): "Calculate how much [material] you need for your project"

**Calculator Interface:**
- Input form with relevant fields (dimensions, depth, etc.)
- Units selector (feet/inches or metric)
- "Calculate" button
- Clear results section

**Results Display:**
- Primary result in large, bold text
- Secondary calculations (if applicable)
- Show units clearly
- "Reset" button to clear form

**Educational Content:**
- "How to Use" section
- Formula explanation
- Tips for accurate measurements
- Common project examples

**Related Calculators:**
- 3-4 related calculator links
- Brief description for each

**Phase 2 Addition:**
- Affiliate links will be added later after traffic validates

### Calculator-Specific Requirements

#### Asphalt Calculator
**Inputs:**
- Length (feet)
- Width (feet)
- Depth (inches)
- Asphalt density (default: 145 lbs/cubic foot)

**Outputs:**
- Tons of asphalt needed
- Cubic yards
- Estimated cost (optional, based on $/ton input)

**Formula:**
- Volume (cubic feet) = Length × Width × (Depth/12)
- Volume (cubic yards) = Volume (cubic feet) / 27
- Weight (tons) = (Volume in cubic feet × Density) / 2000

**Related:** concrete calculator, gravel calculator, driveway calculator

---

#### Sand Calculator
**Inputs:**
- Length (feet)
- Width (feet)
- Depth (inches)
- Sand type (masonry/play/concrete - affects density)

**Outputs:**
- Cubic yards of sand
- Tons (based on sand type)
- Number of bags (if using bagged sand)

**Formula:**
- Volume (cubic yards) = (Length × Width × Depth/12) / 27
- Weight varies by type:
  - Masonry sand: ~2,700 lbs/cubic yard
  - Play sand: ~2,600 lbs/cubic yard
  - Concrete sand: ~2,800 lbs/cubic yard

**Related:** gravel calculator, topsoil calculator, dirt calculator

---

#### Dirt Calculator
**Inputs:**
- Length (feet)
- Width (feet)
- Depth (inches)
- Dirt type (topsoil/fill dirt - affects density)

**Outputs:**
- Cubic yards needed
- Tons (approximate)
- Number of dump truck loads (optional)

**Formula:**
- Volume (cubic yards) = (Length × Width × Depth/12) / 27
- Weight = Volume × ~2,000 lbs per cubic yard (varies by moisture)

**Related:** topsoil calculator, sand calculator, gravel calculator

---

#### Drywall Calculator
**Inputs:**
- Number of walls
- Wall dimensions (height, width for each)
- Sheet size (4×8, 4×10, 4×12)
- Waste factor (default: 10%)

**Outputs:**
- Number of drywall sheets
- Square footage of drywall
- Estimated screws needed
- Joint compound needed (gallons)

**Formula:**
- Total area = Sum of (wall height × wall width)
- Sheets needed = (Total area / sheet size) × (1 + waste factor)
- Round up to whole number

**Related:** paint calculator, insulation calculator, flooring calculator

---

#### Concrete Cost Calculator
**Inputs:**
- Length (feet)
- Width (feet)
- Depth (inches)
- Cost per cubic yard (user input, default: $150)

**Outputs:**
- Cubic yards of concrete
- Total cost
- Number of 80lb bags (if using bagged concrete)
- Cost per square foot

**Formula:**
- Volume (cubic yards) = (Length × Width × Depth/12) / 27
- Cost = Volume × Price per cubic yard

**Related:** concrete calculator, concrete slab calculator, driveway calculator

---

### Design Requirements

**Form Styling (using rams.ai components):**
- Clean, functional input fields
- Clear labels above inputs
- Minimal borders, high contrast
- Large, prominent "Calculate" button
- Error handling with clear messaging

**Page Layout (using impeccable.style):**
- Strong grid structure
- Generous margins and padding
- Brutalist aesthetic
- High contrast typography
- Mobile-responsive breakpoints

**Results Styling:**
- Highlighted box for main result (black border, white background)
- Large, bold numbers
- Clear unit labels
- Monospace font for numbers (better readability)

**Mobile Optimization:**
- Full-width inputs on mobile
- Stacked layout for small screens
- Large touch targets (44px minimum)

### SEO Optimization

**Meta Tags:**
```html
<title>[Material] Calculator - Free & Accurate | BuildCalc 2025</title>
<meta name="description" content="Calculate exactly how much [material] you need. Free [material] calculator with instant results. Updated January 2025.">
<meta name="author" content="[Your Name]">
```

**Schema Markup (SoftwareApplication):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[Material] Calculator",
  "applicationCategory": "UtilityApplication",
  "datePublished": "2025-01-18",
  "dateModified": "2025-01-18",
  "author": {
    "@type": "Person",
    "name": "[Your Name]",
    "jobTitle": "Construction Calculator Specialist"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

**FAQPage Schema (Add FAQ section):**
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
        "text": "Measure length, width, and depth of your project. Enter dimensions into calculator. Formula: [specific formula]"
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is this calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uses industry-standard formulas accurate within 5%. Always order 5-10% extra for waste."
      }
    },
    {
      "@type": "Question",
      "name": "What units are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Supports feet, inches, yards, and metric measurements."
      }
    }
  ]
}
```

**Content Structure:**
- H1: "[Material] Calculator" (main keyword)
- Description: One-line SEO optimized description (smaller text)
- H2: "How to Use This Calculator"
- H2: "Frequently Asked Questions" (3-5 FAQs with answers)
- H2: "Understanding [Material] Calculations"
- H3 subheadings for related topics
- 400-600 words of unique content
- Author attribution at bottom

**Author Section (Bottom of page):**
```
Calculator by [Your Name] | Construction Calculator Specialist
Last updated: January 2025
```

**Fresh Content Signals:**
- Include current year (2025) in title and content
- "Updated January 2025" timestamp
- Refresh every 6 months

### Code Structure

```typescript
// app/[calculator-name]-calculator/page.tsx

'use client'
import { useState } from 'react'

export default function CalculatorPage() {
  const [inputs, setInputs] = useState({})
  const [results, setResults] = useState(null)
  
  const calculate = () => {
    // Calculation logic
  }
  
  return (
    <div>
      {/* Calculator UI */}
    </div>
  )
}
```

### Validation

**Input validation:**
- Only positive numbers
- Reasonable ranges (e.g., depth 1-24 inches)
- Clear error messages

**Example:**
```typescript
if (depth <= 0 || depth > 24) {
  setError("Depth must be between 1 and 24 inches")
  return
}
```

### Testing Checklist

- [ ] Calculations are accurate
- [ ] Works on mobile
- [ ] All inputs validated
- [ ] Results display correctly
- [ ] Related calculators link properly
- [ ] SEO meta tags present
- [ ] Schema markup valid
- [ ] Print functionality works
- [ ] No console errors

---

## Usage in Claude Code

**To build a specific calculator, paste:**

```
Build the [asphalt/sand/dirt/drywall/concrete cost] calculator 
using the specifications in CALCULATOR_PROMPT.md
```

Claude Code will:
1. Create the route file
2. Implement the calculation logic
3. Build the UI with Tailwind
4. Add SEO optimization
5. Create reusable components

Then test by running `npm run dev` and navigating to the calculator URL.
