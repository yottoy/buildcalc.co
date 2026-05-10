export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import SandForm from './SandForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for projects',
  },
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate fill dirt or topsoil needed',
  },
  {
    name: 'Paver Calculator',
    slug: 'paver-calculator',
    description: 'Calculate pavers needed with sand base',
  },
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate concrete costs for your project',
  },
];

const faqs = [
  {
    question: 'What type of sand should I use?',
    answer: 'Masonry sand (also called paver sand) for leveling beds under pavers and for mortar mix — fine grain, uniform texture. Concrete sand (coarser, angular) for concrete mix and backfill. Play sand for sandboxes — washed and screened for safety. Fill sand for backfilling trenches and grading. Each type has specific grain sizes optimized for its purpose.',
  },
  {
    question: 'How much does sand weigh per cubic yard?',
    answer: 'Dry sand weighs approximately 2,600-2,800 lbs (1.3-1.4 tons) per cubic yard. Wet sand can weigh 3,000-3,400 lbs per cubic yard due to water content. When ordering bulk sand, suppliers typically quote by the ton. One cubic yard of sand equals roughly 1.3-1.5 tons depending on moisture level and grain size.',
  },
  {
    question: 'How deep should sand be for pavers?',
    answer: 'Use exactly 1 inch of masonry sand as a leveling bed for pavers. Too much sand (over 1.5 inches) creates an unstable base that allows pavers to shift and settle unevenly. The sand layer sits on top of 4-6 inches of compacted gravel base — the gravel provides structural support while the sand creates a smooth, level surface for the pavers.',
  },
  {
    question: 'How much does sand cost?',
    answer: 'Bulk sand costs $25-$50 per ton or $30-$60 per cubic yard depending on type and location. Masonry sand is $30-$45/ton, concrete sand $25-$40/ton, and play sand $40-$60/ton. Bagged sand from stores costs $4-$6 per 50-lb bag (about $160-$240/ton) — only practical for very small projects.',
  },
  {
    question: 'Should I buy bulk or bagged sand?',
    answer: 'For projects needing more than 1 cubic yard (about 1.4 tons), bulk delivery is significantly cheaper — $30-$60/yd³ vs $160-$240/ton for bags. Bulk delivery requires accessible space for the truck to dump. For projects under half a ton, bagged sand offers convenience and easier handling despite the higher cost.',
  },
  {
    question: 'How much sand do I need for a paver patio?',
    answer: 'For the 1-inch leveling bed, you need approximately 1 cubic yard of masonry sand per 300 square feet of patio area. A 10×10 patio (100 sq ft) needs about 0.33 cubic yards or roughly 0.5 tons. Also budget sand for filling joints between pavers — about 50 lbs of polymeric sand per 100 sq ft.',
  },
  {
    question: 'Can I use sand as a base for concrete?',
    answer: 'Sand alone is not a suitable base for concrete slabs. Concrete requires a compacted gravel base (4-6 inches of crushed stone) for proper drainage and structural support. However, sand IS a key ingredient in concrete mix — concrete is typically 40-45% sand by volume, mixed with cement, gravel aggregate, and water.',
  },
  {
    question: 'How do I calculate sand for a sandbox?',
    answer: 'Measure the length and width of the sandbox frame, then use 6-12 inches depth of play sand. A standard 6×6 foot sandbox with 12 inches of sand needs about 1.3 cubic yards (roughly 1.8 tons). Always use washed, screened play sand that meets ASTM safety standards — not construction or masonry sand.',
  },
];

export default function SandCalculator() {
  return (
    <CalculatorLayout
      title="Sand Calculator"
      description="Calculate sand needed for construction and landscaping"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <SandForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches',
          'Select the type of sand for your project',
          'Click Calculate to get the amount needed',
        ]}
        formula={{
          description: 'Sand volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Sand Density / 2000',
        }}
        tips={[
          'Compact sand base before installing pavers',
          'Order 5-10% extra for waste and settling',
          'Wet sand is easier to compact and level',
          'Use landscape fabric under sand to prevent weed growth',
          'Store bagged sand in a dry location',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Sand Calculator Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Types of Sand and Their Uses</h3>
        <p className="text-gray-600 mb-4">
          Not all sand is the same — choosing the right type is critical for project success. <strong>Masonry sand</strong> (also called paver sand or brick sand) has fine, uniform grains that compact smoothly, making it ideal for leveling beds under pavers and as a mortar ingredient. <strong>Concrete sand</strong> has coarser, angular particles that bond well with cement and provide structural strength in concrete mix. <strong>Fill sand</strong> is unprocessed and used for backfilling trenches, raising grades, and filling voids — it compacts well but contains inconsistent grain sizes. <strong>Play sand</strong> is washed, screened, and tested for safety, designed specifically for children&#39;s sandboxes and recreational areas.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">How to Calculate Sand Quantity</h3>
        <p className="text-gray-600 mb-4">
          Sand is sold by the cubic yard or ton. To calculate how much you need, measure the length and width of your area in feet, then determine the depth in inches. The formula is: (Length × Width × Depth in inches / 12) / 27 = cubic yards. One cubic yard of sand covers approximately 324 square feet at 1 inch deep, 162 square feet at 2 inches deep, or 108 square feet at 3 inches deep. Since dry sand weighs about 2,700 lbs per cubic yard, multiply your cubic yards by 1.35 to estimate tons. Always order 5-10% extra for waste, uneven subgrade, and compaction.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Sand for Paver Installation</h3>
        <p className="text-gray-600 mb-4">
          Paver installation requires sand in two stages. First, a 1-inch leveling bed of masonry sand is spread and screeded over the compacted <Link href="/gravel-cost-calculator" className="text-gray-900 underline hover:no-underline">gravel base</Link> to create a perfectly flat surface for laying pavers. Use screed rails (1-inch pipes) and a straight board to achieve a consistent, level surface. After pavers are laid, sweep polymeric sand into the joints — this sand contains a binding agent that hardens when wet, locking pavers in place and preventing weed growth. Plan your full paver project with our <Link href="/paver-calculator" className="text-gray-900 underline hover:no-underline">Paver Calculator</Link>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Sand in Concrete Mix</h3>
        <p className="text-gray-600 mb-4">
          Sand is a fundamental ingredient in concrete, making up roughly 40-45% of the mix by volume. Standard concrete mix ratios are 1 part cement, 2 parts sand, and 3 parts gravel aggregate by volume. For one cubic yard of concrete, you need approximately 0.44 cubic yards (about 0.6 tons) of concrete sand. The angular grain shape of concrete sand is essential — it interlocks with cement paste and aggregate to create structural strength. Never substitute masonry sand or play sand in concrete mix, as their rounded grains reduce strength by 20-30%. For complete concrete project costing, use our <Link href="/concrete-cost-calculator" className="text-gray-900 underline hover:no-underline">Concrete Cost Calculator</Link>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Cost Comparison: Bulk vs. Bagged Sand</h3>
        <p className="text-gray-600 mb-4">
          Bulk sand delivered by dump truck costs $30-$60 per cubic yard including delivery for loads of 3+ yards. Most suppliers have a minimum delivery of 1-3 yards. Bagged sand from home improvement stores runs $4-$6 per 50-lb bag — a cubic yard of sand weighs about 2,700 lbs, so you would need 54 bags at roughly $250-$325 total, making bagged sand 4-5 times more expensive per yard. The break-even point is usually around 0.5-1 cubic yards — below that, bags are more practical despite the premium. For projects over 1 cubic yard, bulk delivery saves 60-75% on material costs.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
