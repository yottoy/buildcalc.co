export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import StuccoForm from './StuccoForm';

const relatedCalculators = [
  {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    description: 'Estimate drywall sheets needed for walls and ceilings',
  },
  {
    name: 'Brick Calculator',
    slug: 'brick-calculator',
    description: 'Estimate number of bricks required for walls',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction project costs',
  },
];

const faqs = [
  {
    question: 'What is the difference between 2-coat and 3-coat stucco?',
    answer: 'Three-coat stucco (scratch, brown, finish) is traditional and more durable. Two-coat systems are faster and work well over solid substrates like concrete or CMU blocks.',
  },
  {
    question: 'How thick should stucco be?',
    answer: 'Three-coat stucco is typically 7/8" thick total. Two-coat systems are about 5/8" thick. Each coat is applied in layers with drying time between.',
  },
  {
    question: 'Do I need metal lath?',
    answer: 'Yes, metal lath (wire mesh) is required over wood sheathing to provide a base for the stucco to grip. It\'s not needed over concrete or masonry.',
  },
  {
    question: 'How long does stucco take to dry?',
    answer: 'Each coat needs 24-48 hours to cure before applying the next coat. Total installation takes 5-7 days for a three-coat system.',
  },
];

export default function StuccoCalculator() {
  return (
    <CalculatorLayout
      title="Stucco Calculator"
      description="Calculate stucco materials needed for exterior finishes"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <StuccoForm />

      <HowToUse
        steps={[
          'Calculate total wall area (length × height)',
          'Subtract area for windows and doors',
          'Choose between 2-coat or 3-coat system',
          'Click Calculate to get materials needed',
          'Order 10% extra for waste',
        ]}
        formula={{
          description: 'Stucco material calculation:',
          equation: 'Base Coat Bags = Area / 25 sq ft per bag\nFinish Coat Bags = Area / 50 sq ft per bag\n(Three-coat uses 2× base coat)',
        }}
        tips={[
          'Apply stucco in temperatures between 40°F and 90°F',
          'Keep fresh stucco moist for 48 hours after application',
          'Use corner beads on all outside corners',
          'Install weep screed at the bottom of walls',
          'Consider synthetic stucco (EIFS) for easier application',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
