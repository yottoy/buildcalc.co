import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import LandscapingForm from './LandscapingForm';

const relatedCalculators = [
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate topsoil needed',
  },
  {
    name: 'Sod Calculator',
    slug: 'sod-calculator',
    description: 'Calculate sod needed',
  },
  {
    name: 'Bulk Material Calculator',
    slug: 'bulk-material-calculator',
    description: 'Calculate cubic yards for bulk materials',
  },
];

const faqs = [
  {
    question: 'How deep should mulch be?',
    answer: 'Apply 2-3 inches of mulch for flower beds and around trees. Too much mulch can suffocate plant roots and create pest problems. Keep mulch 3 inches away from plant stems and tree trunks.',
  },
  {
    question: 'How often should I replace mulch?',
    answer: 'Refresh mulch annually. Organic mulch decomposes and needs replacement every 1-2 years. Add 1-2 inches each spring to maintain depth and appearance.',
  },
  {
    question: 'What type of mulch is best for landscaping?',
    answer: 'Hardwood mulch lasts longest (2-3 years). Pine bark is lighter and better for slopes. Cedar resists insects. Rubber mulch never decomposes but does not enrich soil. Choose based on your needs.',
  },
  {
    question: 'How much topsoil do I need for a lawn?',
    answer: 'New lawns need 4-6 inches of quality topsoil. Topdressing existing lawns needs 1/4 to 1/2 inch. For gardens and flower beds, use 6-8 inches of topsoil mixed with compost.',
  },
  {
    question: 'Can I install landscaping materials myself?',
    answer: 'Yes, most landscaping materials are DIY-friendly. Topsoil and mulch require spreading and raking. Decorative rock needs landscape fabric underneath. Rent equipment for large projects.',
  },
];

export default function LandscapingCalculator() {
  return (
    <CalculatorLayout
      title="Landscaping Calculator"
      description="Calculate materials for landscaping and garden projects"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <LandscapingForm />

      <HowToUse
        steps={[
          'Measure area length and width in feet',
          'Determine depth needed in inches',
          'Select material type (mulch, topsoil, compost, or rock)',
          'Click Calculate to get cubic yards and tons',
        ]}
        formula={{
          description: 'Volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27',
        }}
        tips={[
          'Use landscape fabric under mulch and rock',
          'Edge beds for clean lines and to contain materials',
          'Water plants after mulching',
          'Keep mulch away from plant stems',
          'Order 10% extra for irregular shapes',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
