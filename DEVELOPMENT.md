# BuildCalc Development Guide

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone repository
git clone https://github.com/yourusername/buildcalc.co.git
cd buildcalc.co

# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000 to view the site.

## Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint

# Testing
npm run type-check   # Run TypeScript type checking (add to package.json if needed)
```

## Project Structure

```
buildcalc.co/
├── app/                          # Next.js App Router
│   ├── [calculator]/             # Calculator pages
│   │   └── page.tsx              # Calculator component
│   ├── layout.tsx                # Root layout (header, footer, SEO)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # Robots.txt generation
│
├── components/                   # Reusable components
│   ├── CalculatorLayout.tsx      # Wrapper for calculator pages
│   ├── CalculatorForm.tsx        # Form components (inputs, buttons)
│   ├── FAQSection.tsx            # FAQ component with schema
│   └── HowToUse.tsx              # Instructions component
│
├── lib/                          # Utility functions
│   └── calculatorTemplates.ts    # Shared calculator data
│
├── docs/                         # Project documentation
│   ├── PROJECT_CONTEXT.md        # Project overview and goals
│   ├── CALCULATOR_PROMPT.md      # Template for new calculators
│   ├── HOMEPAGE_PROMPT.md        # Homepage specifications
│   └── SEO_OPTIMIZATION.md       # SEO guidelines
│
├── public/                       # Static assets
│   └── (images, icons, etc.)
│
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Adding a New Calculator

### 1. Create Calculator File

Create `app/[calculator-name]/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function MyCalculator() {
  const [input1, setInput1] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    // Your calculation logic
  };

  const reset = () => {
    // Reset form
  };

  return (
    <CalculatorLayout
      title="My Calculator"
      description="Calculate something useful"
      relatedCalculators={[
        { name: 'Related Calc', slug: 'related-calc', description: 'Description' },
      ]}
    >
      {/* Calculator UI */}
    </CalculatorLayout>
  );
}
```

### 2. Add to Sitemap

Update `app/sitemap.ts`:

```typescript
const calculators = [
  // ... existing calculators
  'my-calculator',
];
```

### 3. Add to Homepage

Update `app/page.tsx` to include the new calculator in the list.

### 4. Test

```bash
npm run dev
# Visit http://localhost:3000/my-calculator
# Test all inputs and edge cases
# Verify mobile responsiveness
```

## Component Reference

### CalculatorLayout

Wrapper component for all calculator pages.

```typescript
<CalculatorLayout
  title="Calculator Name"
  description="Brief description for SEO"
  relatedCalculators={[
    { name: 'Name', slug: 'slug', description: 'Description' }
  ]}
>
  {children}
</CalculatorLayout>
```

### Form Components

```typescript
// Input field
<InputField
  label="Length"
  name="length"
  value={length}
  onChange={setLength}
  unit="feet"
  placeholder="e.g., 20"
  min={0}
  max={1000}
/>

// Select field
<SelectField
  label="Type"
  name="type"
  value={type}
  onChange={setType}
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
/>

// Button
<CalculatorButton onClick={calculate}>
  Calculate
</CalculatorButton>

// Results
<ResultDisplay results={[
  { label: 'Result', value: '123', unit: 'units', primary: true },
]} />

// Error message
<ErrorMessage message="Error text" />
```

### FAQ Section

```typescript
<FAQSection faqs={[
  {
    question: 'Question?',
    answer: 'Answer text.',
  },
]} />
```

### How To Use

```typescript
<HowToUse
  steps={[
    'Step 1',
    'Step 2',
  ]}
  formula={{
    description: 'Formula explanation',
    equation: 'Formula = A × B',
  }}
  tips={[
    'Tip 1',
    'Tip 2',
  ]}
/>
```

## Styling Guidelines

### Tailwind CSS Classes

Use utility classes for styling:

```typescript
// Layout
<div className="max-w-4xl mx-auto px-4 py-12">

// Typography
<h1 className="text-4xl font-bold mb-4">
<p className="text-gray-600">

// Buttons
<button className="px-8 py-4 bg-foreground text-background hover:bg-gray-700">

// Forms
<input className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900">

// Grid
<div className="grid md:grid-cols-2 gap-8">
```

### Design Principles

1. **Minimalist** - Clean, functional design
2. **High Contrast** - Black text on white background
3. **Mobile-First** - Responsive breakpoints
4. **Accessible** - Semantic HTML, proper labels
5. **Fast** - Minimal JavaScript, optimized images

## SEO Best Practices

### Meta Tags

Each calculator should have unique meta tags:

```typescript
export const metadata: Metadata = {
  title: 'Calculator Name - Free Tool | BuildCalc 2025',
  description: 'Calculate X for Y. Free calculator with accurate formulas.',
};
```

### Schema Markup

Add schema markup for better SEO:

```typescript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Calculator Name",
  "applicationCategory": "UtilityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

### Internal Linking

- Link to related calculators
- Use descriptive anchor text
- Ensure all pages are within 2 clicks of homepage

## Testing

### Manual Testing Checklist

For each calculator:

- [ ] All inputs accept valid values
- [ ] Validation works for invalid inputs
- [ ] Calculations are accurate
- [ ] Results display correctly
- [ ] Reset button clears form
- [ ] Print button works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Schema markup validates
- [ ] Page loads < 2 seconds

### Browser Testing

Test in:
- Chrome (desktop & mobile)
- Safari (desktop & mobile)
- Firefox
- Edge

### Performance Testing

```bash
# Run Lighthouse audit
npm run build
npm start
# Open Chrome DevTools > Lighthouse
# Run audit for Performance, Accessibility, SEO
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Common Issues

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit

# Common fixes:
# - Add type annotations
# - Use 'any' sparingly
# - Check import paths
```

### Build Errors

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues

```bash
# Tailwind not working?
# - Check globals.css imports
# - Verify Tailwind config
# - Clear .next cache
```

## Code Style

### TypeScript

```typescript
// Use interfaces for props
interface CalculatorProps {
  title: string;
  value: number;
}

// Use type for unions
type Status = 'idle' | 'loading' | 'success' | 'error';

// Prefer const over let
const result = calculate(input);

// Use optional chaining
const value = data?.result?.value;
```

### React

```typescript
// Use functional components
export default function Component() {
  // ...
}

// Use hooks at top level
const [state, setState] = useState('');
const value = useMemo(() => calculate(), [deps]);

// Use descriptive names
const handleCalculate = () => { /* ... */ };
const isValid = value > 0;
```

### Naming Conventions

- Components: PascalCase (`CalculatorLayout`)
- Files: kebab-case (`calculator-layout.tsx`)
- Functions: camelCase (`calculateVolume`)
- Constants: UPPER_SNAKE_CASE (`MAX_VALUE`)

## Git Workflow

### Commit Messages

```bash
# Format: type(scope): description

git commit -m "feat(calculator): add insulation calculator"
git commit -m "fix(form): validate negative numbers"
git commit -m "docs(readme): update deployment guide"
git commit -m "style(layout): improve mobile spacing"
```

Types: feat, fix, docs, style, refactor, test, chore

### Branching

```bash
# Create feature branch
git checkout -b feature/new-calculator

# Make changes and commit
git add .
git commit -m "feat: add new calculator"

# Push to remote
git push origin feature/new-calculator

# Create pull request on GitHub
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Google Search Console](https://search.google.com/search-console)

## Getting Help

- Check existing documentation in `/docs`
- Search GitHub issues
- Email: contact@buildcalc.co

---

**Happy coding! Build great calculators that help contractors get their work done.**
