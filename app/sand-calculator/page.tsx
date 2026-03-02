import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import SandForm from './SandForm';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for projects',
  },
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate fill dirt or topsoil needed',
  },
  {
    name: 'Paver Calculator',
    slug: 'paver-calculator',
    description: 'Calculate pavers needed with sand base',
  },
];

const faqs = [
  {
    question: 'What type of sand should I use?',
    answer: 'Masonry sand for paver base and mortar. Concrete sand for concrete mix. Play sand for sandboxes. Beach sand for landscaping. Each has different grain sizes and uses.',
  },
  {
    question: 'How much does sand weigh?',
    answer: 'Sand weighs 2,600-2,800 lbs per cubic yard depending on type and moisture. Wet sand weighs more than dry sand.',
  },
  {
    question: 'How deep should sand be for pavers?',
    answer: 'Use 1 inch of sand for paver base. Too much sand (over 1.5 inches) causes pavers to shift. Install over 4-6 inches of compacted gravel.',
  },
  {
    question: 'Should I buy bulk or bagged sand?',
    answer: 'For projects over 1 cubic yard, bulk sand delivered by truck is more cost-effective. For small projects, bagged sand is convenient.',
  },
];

export default function SandCalculator() {
  return (
    <CalculatorLayout
      title="Sand Calculator"
      description="Calculate sand needed for construction and landscaping"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <SandForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches',
          'Select the type of sand for your project',
          'Click Calculate to get the amount needed',
        ]}
        formula={{
          description: 'Sand volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Sand Density / 2000',
        }}
        tips={[
          'Compact sand base before installing pavers',
          'Order 5-10% extra for waste and settling',
          'Wet sand is easier to compact and level',
          'Use landscape fabric under sand to prevent weed growth',
          'Store bagged sand in a dry location',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
