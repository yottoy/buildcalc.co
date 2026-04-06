export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import PaverForm from './PaverForm';

const relatedCalculators = [
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand needed for paver base',
  },
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for base layer',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate landscaping materials',
  },
];

const faqs = [
  {
    question: 'How many pavers do I need per square foot?',
    answer: 'It depends on paver size. 4"×8" pavers need about 4.5 per sq ft. 6"×6" need 4 per sq ft. 12"×12" need 1 per sq ft.',
  },
  {
    question: 'How much sand do I need under pavers?',
    answer: 'Use 1 inch of sand as a leveling bed over compacted gravel. Too much sand (over 1.5") causes pavers to shift.',
  },
  {
    question: 'Do I need a gravel base?',
    answer: 'Yes, install 4-6 inches of compacted gravel base for proper drainage and stability. This prevents settling and frost heave.',
  },
  {
    question: 'How much waste should I factor in?',
    answer: '10% waste is standard for straight patterns. Add 15-20% for diagonal or complex patterns with many cuts.',
  },
];

export default function PaverCalculator() {
  return (
    <CalculatorLayout
      title="Paver Calculator"
      description="Calculate number of pavers needed for patios and walkways"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <PaverForm />

      <HowToUse
        steps={[
          'Measure the length of your patio or walkway',
          'Measure the width of the area',
          'Select your paver size',
          'Choose a waste factor (10% is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Paver calculation formula:',
          equation: 'Area = Length × Width\nPavers = (Area / Paver Size) × (1 + Waste Factor)',
        }}
        tips={[
          'Excavate 7-8 inches deep for base layers',
          'Compact gravel base in 2-inch layers',
          'Use edge restraints to prevent paver spreading',
          'Sweep polymeric sand into joints for stability',
          'Seal pavers every 2-3 years for protection',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
