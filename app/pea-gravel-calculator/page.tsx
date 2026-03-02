import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import PeaGravelForm from './PeaGravelForm';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand needed',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone for base layers',
  },
];

const faqs = [
  {
    question: 'What is pea gravel used for?',
    answer: 'Pea gravel is ideal for walkways, patios, playgrounds, driveways, landscaping, drainage, and around pools. Its smooth, rounded stones are comfortable to walk on and gentle on bare feet.',
  },
  {
    question: 'How deep should pea gravel be?',
    answer: 'Use 2-3 inches for walkways and patios. For playgrounds, use 9-12 inches for proper cushioning and safety. Driveways need 4-6 inches over compacted base.',
  },
  {
    question: 'What size is pea gravel?',
    answer: 'Pea gravel stones are typically 1/4 to 3/8 inch in diameter, about the size of a pea. This small, uniform size makes it comfortable to walk on and easy to spread.',
  },
  {
    question: 'Do I need landscape fabric under pea gravel?',
    answer: 'Yes, always install landscape fabric or weed barrier under pea gravel. This prevents weeds from growing through and keeps gravel from sinking into soil.',
  },
  {
    question: 'How much does pea gravel cost?',
    answer: 'Pea gravel costs $30-$60 per ton or $35-$55 per cubic yard depending on location and supplier. Bulk delivery is more economical than bags for projects over 1 cubic yard.',
  },
];

export default function PeaGravelCalculator() {
  return (
    <CalculatorLayout
      title="Pea Gravel Calculator"
      description="Estimate pea gravel required for landscaping"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <PeaGravelForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches (2-3 inches typical)',
          'Click Calculate to get cubic yards and tons',
        ]}
        formula={{
          description: 'Pea gravel volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × 2600 lbs/yd³ / 2000',
        }}
        tips={[
          'Use landscape fabric underneath to prevent weeds',
          'Compact base before adding gravel',
          'Add edging to contain pea gravel',
          'Order 10% extra for settling',
          'Rinse pea gravel before use to remove dust',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
