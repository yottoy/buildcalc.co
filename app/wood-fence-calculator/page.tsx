import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import WoodFenceForm from './WoodFenceForm';

const relatedCalculators = [
  {
    name: 'Chain Link Fence Calculator',
    slug: 'chain-link-fence-calculator',
    description: 'Estimate chain link fencing materials and posts needed',
  },
  {
    name: 'Fence Post Calculator',
    slug: 'fence-post-calculator',
    description: 'Calculate number of fence posts required for your project',
  },
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate concrete costs for fence post installation',
  },
];

const faqs = [
  {
    question: 'How far apart should fence posts be?',
    answer: 'Standard fence post spacing is 8 feet on center. For taller fences (over 6 feet) or high-wind areas, use 6-foot spacing for added strength.',
  },
  {
    question: 'What size posts should I use?',
    answer: 'Use 4x4 posts for fences up to 6 feet tall. For taller fences, use 6x6 posts. Corner and gate posts should be one size larger.',
  },
  {
    question: 'How deep should fence posts be buried?',
    answer: 'Bury posts at least 1/3 of their height, or minimum 2 feet deep. In cold climates, dig below the frost line (typically 3-4 feet).',
  },
  {
    question: 'What type of wood is best for fences?',
    answer: 'Cedar and redwood are naturally rot-resistant. Pressure-treated pine is more affordable and works well. All will last 15-20+ years with proper maintenance.',
  },
];

export default function WoodFenceCalculator() {
  return (
    <CalculatorLayout
      title="Wood Fence Calculator"
      description="Estimate wood fencing materials and posts required"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <WoodFenceForm />

      <HowToUse
        steps={[
          'Measure the total length of fence needed in feet',
          'Decide on fence height (typically 4-6 feet for privacy)',
          'Choose post spacing (8 feet is standard)',
          'Select board width based on your design',
          'Click Calculate to get materials list',
        ]}
        formula={{
          description: 'Wood fence material calculation:',
          equation: 'Posts = (Length / Spacing) + 1\nBoards = (Length × 12 / Board Width) × Height\nRails = (Length / 8) × 2',
        }}
        tips={[
          'Add 10% extra materials for waste and mistakes',
          'Check local building codes for height restrictions',
          'Mark underground utilities before digging post holes',
          'Use pressure-treated or rot-resistant wood',
          'Apply wood sealer or stain for longer life',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
