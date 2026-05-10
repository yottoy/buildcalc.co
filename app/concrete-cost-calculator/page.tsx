export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import ConcreteCostForm from './ConcreteCostForm';

const relatedCalculators = [
  {
    name: 'Concrete Steps Calculator',
    slug: 'concrete-steps-calculator',
    description: 'Estimate concrete required for steps and stairs',
  },
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Calculate concrete needed for driveway projects',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction project material costs',
  },
];

const faqs = [
  {
    question: 'How much does concrete cost per cubic yard?',
    answer: 'Concrete typically costs between $125-$175 per cubic yard for ready-mix delivery. Prices vary by location, concrete strength, and delivery distance. The calculator uses $150 as a default.',
  },
  {
    question: 'Should I use ready-mix or bagged concrete?',
    answer: 'For projects over 1 cubic yard, ready-mix concrete is more cost-effective and convenient. For smaller projects, bagged concrete works well but costs more per cubic yard.',
  },
  {
    question: 'Are there additional costs beyond the concrete?',
    answer: 'Yes, consider costs for delivery fees, labor, reinforcement (rebar/wire mesh), forms, finishing tools, and sealer. These can add 30-50% to the total project cost.',
  },
  {
    question: 'How accurate is this cost estimate?',
    answer: 'This calculator provides material cost estimates. Actual costs vary by location, supplier, concrete mix design, and current market conditions. Always get quotes from local suppliers.',
  },
];

export default function ConcreteCostCalculator() {
  return (
    <CalculatorLayout
      title="Concrete Cost Calculator"
      description="Estimate total concrete costs based on project dimensions"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <ConcreteCostForm />

      <HowToUse
        steps={[
          'Measure the length of your concrete area in feet',
          'Measure the width of your concrete area in feet',
          'Determine the depth/thickness in inches (typically 4-6 inches for slabs)',
          'Enter the price per cubic yard from your local supplier',
          'Click Calculate to get cost estimates',
        ]}
        formula={{
          description: 'Cost calculation for concrete projects:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nTotal Cost = Volume × Price per Cubic Yard',
        }}
        tips={[
          'Get quotes from multiple concrete suppliers for best pricing',
          'Ask about delivery fees and minimum order requirements',
          'Consider concrete strength requirements (3000 PSI for most residential)',
          'Factor in 5-10% extra concrete for waste',
          'Ready-mix concrete has a limited working time (90-120 minutes)',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
