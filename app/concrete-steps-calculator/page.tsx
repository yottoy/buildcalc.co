export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import ConcreteStepsForm from './ConcreteStepsForm';

const relatedCalculators = [
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate total concrete costs based on project dimensions',
  },
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Calculate concrete needed for driveway projects',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand needed for construction and landscaping',
  },
];

const faqs = [
  {
    question: 'How do I calculate concrete needed for steps?',
    answer: 'Measure the width, depth (tread), and height (rise) of each step. The calculator accounts for the cumulative volume of all steps in the staircase structure.',
  },
  {
    question: 'How accurate is this calculator?',
    answer: 'This calculator uses industry-standard formulas and is accurate within 5%. Always order 5-10% extra concrete to account for waste and spillage.',
  },
  {
    question: 'What is the standard step size?',
    answer: 'Standard outdoor steps are typically 36-48 inches wide, 11-14 inches deep (tread), and 6-8 inches high (rise).',
  },
  {
    question: 'Should I use bags or ready-mix concrete?',
    answer: 'For small projects (less than 1 cubic yard), bagged concrete is convenient. For larger projects, ready-mix concrete delivered by truck is more cost-effective.',
  },
];

export default function ConcreteStepsCalculator() {
  return (
    <CalculatorLayout
      title="Concrete Steps Calculator"
      description="Calculate exactly how much concrete you need for your steps and stairs project"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <ConcreteStepsForm />

      <HowToUse
        steps={[
          'Measure the width of your steps in feet',
          'Measure the depth (tread) of each step in feet',
          'Measure the height (rise) of each step in feet',
          'Count the total number of steps',
          'Enter all measurements into the calculator',
          'Click Calculate to get the concrete needed',
        ]}
        formula={{
          description: 'The calculator sums the volume of each step in the staircase:',
          equation: 'Total Volume = Σ(Width × Depth × (Height × Step Number)) / 27 cubic yards',
        }}
        tips={[
          'Always order 5-10% extra concrete to account for waste',
          'Standard step rise is 6-8 inches (0.5-0.67 feet)',
          'Standard step tread is 11-14 inches (0.92-1.17 feet)',
          'Consider adding a base or landing pad to your calculation',
          'Check local building codes for required step dimensions',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
