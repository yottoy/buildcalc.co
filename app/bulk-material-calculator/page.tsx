export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import BulkMaterialForm from './BulkMaterialForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs and quantity for your project',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand needed for construction and landscaping',
  },
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate fill dirt or topsoil for landscaping projects',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone for driveways and base layers',
  },
];

const faqs = [
  {
    question: 'What materials can I calculate with this calculator?',
    answer: 'This calculator works for gravel, sand, topsoil, mulch, crushed stone, fill dirt, pea gravel, and other bulk landscaping or construction materials. Each material has a different density which affects the weight calculation.',
  },
  {
    question: 'How accurate is this calculator?',
    answer: 'The calculator uses industry-standard densities and is accurate within 5-10%. Actual weights may vary based on moisture content, particle size, and material composition. Dry sand weighs about 2,600 lbs/yd³ while wet sand can reach 3,000 lbs/yd³.',
  },
  {
    question: 'How much does a dump truck hold?',
    answer: 'A typical dump truck holds about 10-14 cubic yards or 10-14 tons. The calculator estimates truck loads based on 10 cubic yards per load. Full-size tri-axle trucks hold up to 14 yards. Always confirm load limits with your supplier.',
  },
  {
    question: 'Should I order extra material?',
    answer: 'Yes, always order 5-10% extra to account for settling, compaction, waste, and uneven surfaces. For compactable materials like gravel or crushed stone, order 15-20% extra since they reduce in volume after compaction.',
  },
  {
    question: 'What is the difference between cubic yards and tons?',
    answer: 'Cubic yards measure volume; tons measure weight. Most bulk materials are priced and delivered by the ton. The conversion depends on material density — one cubic yard of topsoil weighs about 1 ton, while gravel weighs about 1.35 tons per cubic yard.',
  },
  {
    question: 'How many cubic yards are in a ton?',
    answer: 'It depends on the material. One ton of topsoil is about 1 cubic yard. One ton of gravel is about 0.74 cubic yards. One ton of sand is about 0.77 cubic yards. One ton of mulch is about 2-3 cubic yards since it is much lighter.',
  },
  {
    question: 'How do I measure an irregular-shaped area?',
    answer: 'Break the area into simple rectangles and calculate each separately, then add them together. For curved areas, use the average width. For circular areas, use the formula: Area = π × radius². Add 10% for irregular shapes.',
  },
  {
    question: 'What is the cost of bulk materials per cubic yard?',
    answer: 'Prices vary widely by region and material. Rough averages: fill dirt $5-$15/yd³, topsoil $15-$50/yd³, gravel/crushed stone $30-$55/yd³, sand $20-$40/yd³, and mulch $25-$45/yd³. Delivery adds $50-$150 per load.',
  },
];

export default function BulkMaterialCalculator() {
  return (
    <CalculatorLayout
      title="Bulk Material Calculator"
      description="Calculate cubic yards for bulk construction and landscaping materials"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <BulkMaterialForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the desired depth in inches',
          'Select your material type from the dropdown',
          'Click Calculate to get cubic yards, tons, and truck loads needed',
          'Order 5-10% extra (15-20% for compactable materials)',
        ]}
        formula={{
          description: 'Volume calculation for bulk materials:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Material Density / 2000',
        }}
        tips={[
          'Measure the area carefully — small errors multiply across large areas',
          'Consider compaction — loose materials settle 10-20% after installation',
          'Order 5-10% extra for flat surfaces, 15-20% for compactable base materials',
          'Confirm material density with your supplier, as sources vary slightly',
          'Wet materials weigh 10-20% more than dry — factor this into delivery planning',
          'Schedule delivery when ground is dry to prevent rutting',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Bulk Material Ordering Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Material Density Reference</h3>
        <p className="text-gray-600 mb-4">
          The most common source of error in bulk material ordering is ignoring density differences between materials. Topsoil and mulch are light — a cubic yard of dry topsoil weighs about 1,800–2,000 lbs, and a cubic yard of bark mulch weighs only 400–800 lbs. Gravel and crushed stone are dense — a cubic yard of #57 gravel weighs about 2,700–2,900 lbs (roughly 1.35–1.45 tons). Sand falls in between at about 2,600–2,800 lbs per cubic yard when dry. Most suppliers sell by the ton, so knowing your material&apos;s density lets you convert between weight and volume accurately when comparing quotes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Compaction and Settling</h3>
        <p className="text-gray-600 mb-4">
          Compactable materials like gravel, crushed stone, and fill dirt will reduce in volume by 10–25% once compacted. If you need 4 inches of compacted gravel base under a patio, calculate the volume at 4 inches but order 15–20% extra to account for this reduction. For base layers under concrete or pavers, this step is critical — under-ordering compactable fill is one of the most common and costly mistakes in DIY projects. Mulch and topsoil also settle 15–20% over the first season as organic material decomposes and particles compact under rainfall. Use our <Link href="/dirt-calculator" className="text-gray-900 underline hover:no-underline">Dirt Calculator</Link> for topsoil-specific calculations.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Delivery Logistics and Truck Loads</h3>
        <p className="text-gray-600 mb-4">
          A standard dump truck holds 10–14 cubic yards (10–14 tons depending on material). Deliveries are typically priced per load plus a per-ton or per-yard material charge. To minimize delivery costs, consolidate orders to fill complete truck loads — partial loads often cost nearly as much as full loads. Check your access route: dump trucks are 8–10 feet wide and require a clear path at least 12 feet wide and 14 feet high. For large orders, consider a conveyor belt truck if materials need to be placed in a specific location or over obstacles.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Material</h3>
        <p className="text-gray-600 mb-4">
          The right bulk material depends entirely on your application. Use fill dirt for raising grade or filling large voids — it is inexpensive and compacts well. Use topsoil for lawn establishment, garden beds, or any area where plants will grow. For drainage, drainage stone (1.5-inch washed stone), pea gravel, or coarse sand outperform topsoil and fill. For load-bearing base layers under concrete, pavers, or driveways, use compactable crushed stone or road base gravel — see our <Link href="/crushed-stone-calculator" className="text-gray-900 underline hover:no-underline">Crushed Stone Calculator</Link> for those projects. For decorative paths or play areas, washed pea gravel or rounded river rock works best. See our <Link href="/gravel-cost-calculator" className="text-gray-900 underline hover:no-underline">Gravel Cost Calculator</Link> for pricing guidance.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
