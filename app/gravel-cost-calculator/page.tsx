import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import GravelCostForm from './GravelCostForm';

const relatedCalculators = [
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone needed',
  },
  {
    name: 'Pea Gravel Calculator',
    slug: 'pea-gravel-calculator',
    description: 'Calculate pea gravel needed',
  },
  {
    name: 'Asphalt Calculator',
    slug: 'asphalt-calculator',
    description: 'Calculate asphalt for driveways',
  },
];

const faqs = [
  {
    question: 'How much does gravel cost?',
    answer: 'Gravel costs $30-$60 per ton depending on type and location. Crushed stone is typically $35-$50/ton. Decorative river rock costs $50-$80/ton.',
  },
  {
    question: 'What type of gravel should I use?',
    answer: 'Crushed stone for driveways and bases. Pea gravel for walkways and landscaping. River rock for decorative areas. Limestone for drainage.',
  },
  {
    question: 'How deep should gravel be?',
    answer: 'Driveways: 4-6 inches. Walkways: 2-3 inches. Drainage: 4-6 inches. Always compact in layers.',
  },
];

export default function GravelCostCalculator() {
  return (
    <CalculatorLayout
      title="Gravel Cost Calculator"
      description="Calculate gravel costs based on project requirements"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <GravelCostForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches',
          'Select your gravel type',
          'Enter price per ton from your supplier',
          'Click Calculate to get cost estimate',
        ]}
        formula={{
          description: 'Gravel cost calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Density / 2000\nCost = Tons × Price per Ton',
        }}
        tips={[
          'Compact gravel in 2-inch layers',
          'Use landscape fabric under gravel',
          'Add 10% extra for settling',
          'Get quotes from multiple suppliers',
          'Consider delivery fees for small orders',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
