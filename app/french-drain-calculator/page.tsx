import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import FrenchDrainForm from './FrenchDrainForm';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs based on project requirements',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone needed for driveways and base layers',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate materials for landscaping and garden projects',
  },
];

const faqs = [
  {
    question: 'What is a French drain?',
    answer: 'A French drain is a trench filled with gravel and a perforated pipe that redirects water away from an area. It\'s used to prevent water accumulation and protect foundations.',
  },
  {
    question: 'How deep should a French drain be?',
    answer: 'French drains are typically 18-24 inches deep and 12-18 inches wide. The depth depends on the water table and drainage needs.',
  },
  {
    question: 'What type of gravel should I use?',
    answer: 'Use 3/4" to 1" crushed stone or pea gravel. Avoid sand or fine gravel as they can clog the system. Crushed stone provides better drainage.',
  },
  {
    question: 'Do I need landscape fabric?',
    answer: 'Yes, landscape fabric prevents soil from clogging the gravel and pipe. Wrap it around the gravel, not just line the trench.',
  },
];

export default function FrenchDrainCalculator() {
  return (
    <CalculatorLayout
      title="French Drain Calculator"
      description="Estimate materials needed for drainage systems"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <FrenchDrainForm />

      <HowToUse
        steps={[
          'Measure the length of the drainage trench needed',
          'Determine the width of the trench (typically 12-18 inches)',
          'Decide on the depth (typically 18-24 inches)',
          'Select the perforated pipe size (4 inch is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'French drain material calculation:',
          equation: 'Gravel Volume (cubic yards) = (Length × Width × Depth/12) / 27\nPipe Length = Trench Length\nFabric = (Length + 4) × (Width + 2) square feet',
        }}
        tips={[
          'Slope the trench at least 1% (1 inch per 8 feet) for proper drainage',
          'Use perforated pipe with holes facing down',
          'Wrap landscape fabric around gravel, not just line the trench',
          'Add a cleanout access point for maintenance',
          'Direct the drain outlet away from buildings',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
