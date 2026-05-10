export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import DirtForm from './DirtForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand for leveling, drainage, and construction',
  },
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel quantities and costs for projects',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate landscaping materials needed',
  },
  {
    name: 'Sod Calculator',
    slug: 'sod-calculator',
    description: 'Estimate sod rolls and cost for lawn installation',
  },
];

const faqs = [
  {
    question: 'What is the difference between topsoil and fill dirt?',
    answer: 'Topsoil is nutrient-rich surface soil (typically the top 12 inches) used for lawns, gardens, and planting. Fill dirt is subsoil — low in organics and nutrients — used for raising grade, filling holes, or building stable foundations. Topsoil costs $15–$50 per cubic yard vs. $5–$15 for fill dirt.',
  },
  {
    question: 'How much does dirt weigh?',
    answer: 'Dry fill dirt weighs approximately 2,000–2,200 lbs per cubic yard. Wet or compacted soil can weigh 2,500+ lbs per cubic yard. Topsoil with high organic content is lighter at 1,700–2,000 lbs per cubic yard.',
  },
  {
    question: 'How much dirt do I need for raised beds?',
    answer: 'For a 4×8 foot raised bed that is 12 inches deep, you need about 1.2 cubic yards of topsoil or garden soil mix. A 4×4 foot raised bed at 12 inches deep requires 0.6 cubic yards. Always use quality topsoil mixed with compost — not fill dirt — for best plant growth.',
  },
  {
    question: 'Should I compact fill dirt?',
    answer: 'Yes, compact fill dirt in 6-inch layers using a plate compactor or roller. Never add more than 6–8 inches of loose fill before compacting. Proper compaction prevents future settling, which can crack driveways, sidewalks, or building foundations placed on top.',
  },
  {
    question: 'How deep should topsoil be for grass?',
    answer: 'Lawns need at least 4–6 inches of quality topsoil for grass to root properly. For new lawn seeding or sodding, 6 inches is ideal. Less than 4 inches results in stressed grass during dry periods and poor root development.',
  },
  {
    question: 'How much does dirt delivery cost?',
    answer: 'Fill dirt may be free or low-cost ($0–$5 per yard) if sourced from local excavation projects — check Craigslist or local excavators for free fill. Topsoil costs $15–$50 per cubic yard delivered. A full dump truck load (10–14 yards) typically includes a flat delivery fee of $50–$150.',
  },
  {
    question: 'How do I calculate how much fill I need to raise my yard?',
    answer: 'Measure the area in square feet and determine how many inches of fill you need to add. Use the formula: Volume (cubic yards) = (Area in sq ft × Depth in inches) / 324. For example, a 1,000 sq ft yard raised 3 inches needs 1,000 × 3 / 324 = 9.26 cubic yards.',
  },
  {
    question: 'Can I use topsoil as fill dirt?',
    answer: 'Technically yes, but it is wasteful and expensive. Topsoil is high in organic matter which decomposes and causes settling over time — making it a poor choice for structural fill. Use inorganic fill dirt for bulk filling, then cap with 6 inches of quality topsoil for planting areas.',
  },
];

export default function DirtCalculator() {
  return (
    <CalculatorLayout
      title="Dirt Calculator"
      description="Calculate fill dirt or topsoil needed for landscaping"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <DirtForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches',
          'Select the type of dirt — topsoil for planting, fill dirt for grading',
          'Click Calculate to get cubic yards, tons, and truck loads',
          'Order 10–15% extra to account for settling and compaction',
        ]}
        formula={{
          description: 'Dirt volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nShortcut: Area (sq ft) × Depth (in) / 324 = cubic yards',
        }}
        tips={[
          'Order 10–15% extra to account for settling — fill dirt can compress 10–20%',
          'Compact fill dirt in 6-inch layers for stability',
          'Remove grass and vegetation before adding dirt to prevent future voids',
          'Topsoil should be at least 4–6 inches deep for lawns, 8–12 inches for gardens',
          'Test soil pH before planting — most plants prefer a pH of 6.0–7.0',
          'Grade the area to slope away from buildings at a 2% grade (1/4 inch per foot)',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Dirt and Topsoil Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Topsoil vs. Fill Dirt: Choosing the Right Material</h3>
        <p className="text-gray-600 mb-4">
          The most important decision is matching dirt type to the application. Topsoil is the biologically active upper layer of soil, rich in organic matter, microorganisms, and nutrients. It is essential for any area where plants will grow — lawns, gardens, raised beds, or landscaping. Fill dirt is subsoil stripped of organic content, which makes it structurally stable but nutritionally barren. Use fill dirt for raising grade, filling low spots, building berms, or providing a stable base under structures. A common approach is to use inexpensive fill dirt for bulk volume, then top with 6 inches of quality topsoil for planted surfaces.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Raised Bed and Garden Calculations</h3>
        <p className="text-gray-600 mb-4">
          Raised beds should be filled with a mix of topsoil, compost, and other amendments — not raw fill dirt. A standard 4×8 foot raised bed at 12 inches deep needs about 1.2 cubic yards. For best results, use a mix of 60% topsoil, 30% compost, and 10% coarse sand or perlite for drainage. A single cubic yard fills roughly a 4×6 foot bed to 12 inches. For larger gardens, buying topsoil by the truck load (10–14 yards per delivery) is far more economical than bagged options, which cost 3–5× more per cubic yard. Pair your topsoil order with our <Link href="/landscaping-calculator" className="text-gray-900 underline hover:no-underline">Landscaping Calculator</Link> for mulch and other materials.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Grading and Drainage Best Practices</h3>
        <p className="text-gray-600 mb-4">
          When using fill dirt to re-grade a yard, always slope the final grade away from your home&apos;s foundation at a minimum 2% grade (about 1/4 inch per linear foot). Poor drainage is the leading cause of basement water intrusion and foundation settling. Add fill in lifts no deeper than 6–8 inches and compact each layer before adding more. After grading, allow the soil to settle for 2–4 weeks before seeding or sodding. If laying sod, see our <Link href="/sod-calculator" className="text-gray-900 underline hover:no-underline">Sod Calculator</Link> to plan grass installation on top of the prepared area.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Cost and Sourcing Tips</h3>
        <p className="text-gray-600 mb-4">
          Fill dirt prices vary enormously by region and availability. In active construction areas, fill dirt is often free or very cheap — excavation contractors and homebuilders regularly give away excavated material. Check online listings, local contractors, or the dirt-matching platforms for free fill. Quality topsoil from a landscape supply company runs $15–$50 per cubic yard depending on quality (screened vs. unscreened, amended vs. plain). Premium blended garden soil mixes cost $40–$80 per yard. Delivery fees add $50–$150 per truck load, so ordering full loads (10–14 yards) minimizes the per-yard delivery cost significantly.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
