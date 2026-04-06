export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import BrickForm from './BrickForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Stucco Calculator',
    slug: 'stucco-calculator',
    description: 'Calculate stucco materials for walls',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand for mortar mix',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction costs',
  },
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate concrete costs for foundations',
  },
];

const faqs = [
  {
    question: 'How many bricks do I need per square foot?',
    answer: 'Standard bricks (8"×4") require about 7 bricks per square foot with mortar joints. Modular bricks need 7.5 per sq ft. King-size bricks only need 5.5 per sq ft.',
  },
  {
    question: 'How much mortar do I need?',
    answer: 'One 80lb bag of mortar mix covers approximately 35 square feet of brick wall with standard 3/8" joints. For a 100 sq ft wall, plan on 3 bags of mortar.',
  },
  {
    question: 'Should I order extra bricks?',
    answer: 'Yes, order 10-15% extra for waste, cuts, and breakage. For complex patterns or diagonal layouts, order 15-20% extra. Always buy extra from the same lot for color matching.',
  },
  {
    question: 'How many bricks come on a pallet?',
    answer: 'A standard pallet holds 400-500 bricks depending on brick size and manufacturer. For standard bricks at 7 per sq ft, one pallet covers roughly 60-70 sq ft.',
  },
  {
    question: 'What is the best brick for exterior walls?',
    answer: 'Use Grade SW (Severe Weathering) bricks for areas with freeze-thaw cycles. Grade MW works in moderate climates. Face brick provides a decorative finish. Always match the grade to your climate.',
  },
  {
    question: 'What is the standard mortar joint thickness?',
    answer: 'Standard mortar joints are 3/8 inch thick. Thicker joints (1/2 inch) are used for less precise work. Thinner joints (1/4 inch) are used for decorative or specialty installations.',
  },
  {
    question: 'How do I calculate bricks for a wall with openings?',
    answer: 'Calculate total wall area first, then subtract the area of each window and door opening. The calculator shows wall area — measure each opening separately and deduct from the total.',
  },
  {
    question: 'How long does brick installation take?',
    answer: 'A skilled mason lays 300-500 bricks per day. For a 200 sq ft wall (about 1,400 bricks), expect 3-5 days including prep, setting, and cleanup.',
  },
];

export default function BrickCalculator() {
  return (
    <CalculatorLayout
      title="Brick Calculator"
      description="Estimate number of bricks required for walls and construction projects"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <BrickForm />

      <HowToUse
        steps={[
          'Measure the length of your wall in feet',
          'Measure the height of your wall in feet',
          'Select your brick size from the dropdown',
          'Choose a waste factor (10% standard, 15% for complex patterns)',
          'Click Calculate to get bricks, mortar, and pallets needed',
        ]}
        formula={{
          description: 'Brick calculation formula:',
          equation: 'Area = Length × Height\nBricks = Area × Bricks per Sq Ft × (1 + Waste Factor)\nMortar Bags = Area / 35',
        }}
        tips={[
          'Subtract area for windows and doors from total wall area',
          'Keep bricks dry and covered before installation',
          'Use consistent mortar joint thickness (3/8") throughout',
          'Build brick walls on concrete footings below frost line',
          'Install weep holes every 24 inches in the first course above grade',
          'Order all bricks from the same batch to ensure color consistency',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Brick Calculator Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Brick Sizes and Coverage</h3>
        <p className="text-gray-600 mb-4">
          The number of bricks you need depends primarily on the brick size. Standard bricks (8"×3.75"×2.25") cover about 7 bricks per square foot when laid in a running bond pattern with 3/8" mortar joints. Modular bricks (7.625"×3.625"×2.25") are slightly smaller and need about 7.5 per square foot. Larger king-size bricks (9.625"×2.875"×2.625") cover 5.5 per square foot. Always use the actual measured size of your specific brick to get the most accurate count.
        </p>
        <p className="text-gray-600 mb-4">
          Beyond the wall itself, factor in a 10% waste allowance for standard rectangular walls. Cut bricks around doors, windows, and corners create significant waste — bump this to 15% for walls with multiple openings or complex patterns like herringbone or diagonal layouts. It is always better to over-order slightly, since matching bricks from a different production batch can result in noticeable color variation.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Mortar and Footing Requirements</h3>
        <p className="text-gray-600 mb-4">
          Mortar is essential for binding bricks together and providing a weather-resistant seal. One 80-pound bag of Type S mortar mix (the most common for structural walls) covers approximately 35 square feet at 3/8" joint thickness. For a standard residential wall, budget about 1 bag of mortar for every 35 square feet. Additionally, brick walls require a solid concrete footing — typically 12–16 inches wide and 8–12 inches deep, extending below the frost line. Use our <Link href="/concrete-cost-calculator" className="text-gray-900 underline hover:no-underline">Concrete Cost Calculator</Link> to estimate the footing material.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Brick for Your Project</h3>
        <p className="text-gray-600 mb-4">
          Bricks are graded by their resistance to weathering. Grade SW (Severe Weathering) is required in climates with repeated freeze-thaw cycles — use this for exterior applications throughout most of the US. Grade MW (Moderate Weathering) works in mild coastal and southern climates. Face brick is manufactured to provide a clean, decorative appearance for visible surfaces, while common brick is used for structural applications where appearance is secondary. For retaining walls and garden projects, use solid brick rather than hollow — it provides better compressive strength and moisture resistance.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Estimating Project Costs</h3>
        <p className="text-gray-600 mb-4">
          Standard face bricks cost $0.50–$1.50 each, depending on style, region, and supplier. Add mortar ($8–$12 per bag), metal ties for veneer walls, and corner beads. Labor runs $10–$20 per square foot for professional installation. For a complete project estimate including labor, delivery, and scaffolding, use our <Link href="/construction-cost-calculator" className="text-gray-900 underline hover:no-underline">Construction Cost Calculator</Link> alongside these brick quantities.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
