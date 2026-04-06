export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import SodForm from './SodForm';

const relatedCalculators = [
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate topsoil needed for sod',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate landscaping materials',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand for leveling',
  },
];

const faqs = [
  {
    question: 'How much does sod cost?',
    answer: 'Sod costs $0.30-$0.80 per square foot depending on grass type and location. Premium grasses like Zoysia cost more than standard fescue or bluegrass.',
  },
  {
    question: 'How big is a roll of sod?',
    answer: 'Standard sod rolls are 2 feet × 5 feet (10 square feet). Some suppliers sell 4×4 foot squares or larger rolls.',
  },
  {
    question: 'Do I need to add topsoil before sod?',
    answer: 'Yes, add 2-4 inches of quality topsoil to ensure good drainage and root growth. Grade the area to slope away from buildings.',
  },
  {
    question: 'How long does sod take to establish?',
    answer: 'Sod roots in 2-3 weeks with proper watering. Avoid heavy traffic for 3-4 weeks. Full establishment takes 6-8 weeks.',
  },
];

export default function SodCalculator() {
  return (
    <CalculatorLayout
      title="Sod Calculator"
      description="Estimate sod required for lawn installation"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <SodForm />

      <HowToUse
        steps={[
          'Measure the length of your lawn area in feet',
          'Measure the width of your lawn area in feet',
          'Get price per square foot from your supplier',
          'Click Calculate to get sod rolls, pallets, and cost',
          'Order 5% extra for waste and irregular shapes',
        ]}
        formula={{
          description: 'Sod calculation formula:',
          equation: 'Area = Length × Width\nSod Needed = Area × 1.05 (5% waste)\nRolls = Sod Needed / 10 sq ft per roll',
        }}
        tips={[
          'Install sod within 24 hours of delivery',
          'Water immediately after installation',
          'Water daily for the first 2 weeks',
          'Avoid walking on new sod for 3 weeks',
          'Mow when grass reaches 3-4 inches',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
