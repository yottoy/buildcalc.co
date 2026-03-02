import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import AsphaltForm from './AsphaltForm';

const relatedCalculators = [
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Calculate concrete needed for driveway projects',
  },
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for base layers',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone for driveway base',
  },
];

const faqs = [
  {
    question: 'How much does asphalt cost per ton?',
    answer: 'Asphalt typically costs $85-$150 per ton installed. Prices vary by location, oil prices, and project size. Material-only costs are $40-$80 per ton.',
  },
  {
    question: 'How thick should asphalt be?',
    answer: 'Residential driveways need 2-3 inches of asphalt. Commercial parking lots need 3-4 inches. Always install over a 4-6 inch gravel base.',
  },
  {
    question: 'How long does asphalt last?',
    answer: 'Properly installed and maintained asphalt lasts 15-20 years for residential driveways, 10-15 years for high-traffic areas. Seal coating every 2-3 years extends life.',
  },
  {
    question: 'Can I install asphalt myself?',
    answer: 'DIY asphalt installation is not recommended. It requires specialized equipment (paver, roller) and must be installed hot (300°F). Hire a professional contractor.',
  },
];

export default function AsphaltCalculator() {
  return (
    <CalculatorLayout
      title="Asphalt Calculator"
      description="Calculate tons of asphalt needed for driveways and parking lots"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <AsphaltForm />

      <HowToUse
        steps={[
          'Measure the length of your driveway or parking area',
          'Measure the width of the area',
          'Determine the asphalt depth (2-3 inches for driveways)',
          'Enter the price per ton from your contractor',
          'Click Calculate to get tons and cost',
        ]}
        formula={{
          description: 'Asphalt calculation formula:',
          equation: 'Volume (cubic feet) = Length × Width × (Depth/12)\nWeight (tons) = Volume × 145 lbs/ft³ / 2000',
        }}
        tips={[
          'Install a 4-6 inch gravel base before asphalt',
          'Ensure proper drainage with 1-2% slope',
          'Asphalt must be installed in warm weather (above 50°F)',
          'Avoid driving on new asphalt for 24-48 hours',
          'Seal coat every 2-3 years for longevity',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
