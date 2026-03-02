import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import InsulationForm from './InsulationForm';

const relatedCalculators = [
  {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    description: 'Estimate drywall sheets needed',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction costs',
  },
  {
    name: 'Material Cost Estimator',
    slug: 'material-cost-estimator',
    description: 'Estimate total material costs for construction projects',
  },
];

const faqs = [
  {
    question: 'What R-value do I need?',
    answer: 'Walls: R-13 to R-21. Attics: R-30 to R-60. Floors: R-13 to R-30. Higher R-values provide better insulation. Check local building codes.',
  },
  {
    question: 'What type of insulation is best?',
    answer: 'Batt insulation is DIY-friendly and cost-effective. Blown insulation fills gaps better. Spray foam provides best R-value and air sealing but costs more.',
  },
  {
    question: 'Can I install insulation myself?',
    answer: 'Yes, batt insulation is DIY-friendly. Blown insulation requires rental equipment. Spray foam should be professionally installed.',
  },
];

export default function InsulationCalculator() {
  return (
    <CalculatorLayout
      title="Insulation Calculator"
      description="Estimate insulation materials needed for walls and attics"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <InsulationForm />

      <HowToUse
        steps={[
          'Measure the length of the area to insulate',
          'Measure the width of the area',
          'Select your insulation type',
          'Choose the appropriate R-value',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Insulation calculation:',
          equation: 'Area = Length × Width\nMaterials = Area / Coverage per Unit',
        }}
        tips={[
          'Wear protective gear (mask, gloves, long sleeves)',
          'Fill all gaps but do not compress insulation',
          'Seal air leaks before insulating',
          'Ensure proper ventilation in attics',
          'Check for moisture issues before insulating',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
