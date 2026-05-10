export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import CrushedStoneForm from './CrushedStoneForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs and quantities for your project',
  },
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Estimate concrete for driveway projects',
  },
  {
    name: 'French Drain Calculator',
    slug: 'french-drain-calculator',
    description: 'Estimate materials for drainage systems',
  },
  {
    name: 'Paver Calculator',
    slug: 'paver-calculator',
    description: 'Calculate pavers and base materials for patios',
  },
];

const faqs = [
  {
    question: 'What is crushed stone used for?',
    answer: 'Crushed stone is used for driveways, road base, concrete aggregate, drainage systems, French drains, paver base, retaining wall backfill, and decorative landscaping. Its angular edges interlock and compact better than round gravel, making it ideal for structural base layers.',
  },
  {
    question: 'How deep should crushed stone be?',
    answer: 'Recommended depths by application: driveways 4–6 inches, paver/patio base 4–6 inches, road base 6–8 inches, French drains 4–6 inches, decorative pathways 2–3 inches. Always compact in 2-inch lifts for structural applications.',
  },
  {
    question: 'What size crushed stone should I use?',
    answer: '#57 stone (3/4-inch) is the most common for driveways, paver base, and general construction. #411 (crusher run with fines) compacts best and is ideal for road base and driveway base. #8 stone (3/8-inch) is used as paver setting beds. #2 stone (1.5–2 inch) is used for drainage applications and French drains.',
  },
  {
    question: 'Is crushed stone better than pea gravel?',
    answer: 'For structural applications (driveways, base layers, French drains), crushed stone is superior — its angular edges interlock and compact, while round pea gravel shifts underfoot. For decorative paths, play areas, and dog runs, round pea gravel is more comfortable and visually appealing.',
  },
  {
    question: 'How do I compact crushed stone?',
    answer: 'Use a plate compactor for areas under 1,000 sq ft. For larger areas, use a vibratory roller. Work in 2-inch lifts: spread 2 inches, make 3–4 compactor passes, then add the next lift. Lightly spraying water during compaction improves density. Properly compacted base prevents shifting and settling.',
  },
  {
    question: 'How much does crushed stone cost?',
    answer: 'Crushed stone costs $30–$55 per cubic yard or $25–$45 per ton, depending on stone type and region. Delivery adds $50–$150 per truck load. Buying by the full truck load (10–14 yards) is more economical than small orders. #57 gravel and crusher run are typically the most affordable options.',
  },
  {
    question: 'Do I need landscape fabric under crushed stone?',
    answer: 'For decorative applications (paths, beds), geotextile landscape fabric under crushed stone prevents weed growth and mixing with native soil. For structural base layers under concrete or pavers, skip the fabric — it can trap water and reduce drainage. For French drains, use filter fabric around the stone to prevent soil intrusion.',
  },
  {
    question: 'How much extra crushed stone should I order?',
    answer: 'Order 10–15% extra for compaction loss and waste. Crushed stone compacts 10–25% depending on gradation — #411 crusher run compacts more than clean #57 stone. For irregular areas with curves or obstacles, add an additional 5–10%.',
  },
];

export default function CrushedStoneCalculator() {
  return (
    <CalculatorLayout
      title="Crushed Stone Calculator"
      description="Calculate crushed stone needed for driveways and base layers"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <CrushedStoneForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches (4–6 inches typical for driveways)',
          'Click Calculate to get cubic yards and tons needed',
          'Order 10–15% extra for compaction loss and waste',
          'Confirm material type (#57, #411, etc.) with your supplier',
        ]}
        formula={{
          description: 'Crushed stone volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × 1.35 tons/yd³ (approx for #57 stone)',
        }}
        tips={[
          'Compact in 2-inch lifts for maximum density and stability',
          'Use geotextile fabric underneath in soft or clay soil to prevent mixing',
          'Grade the base for proper drainage before applying stone — slope 2% minimum',
          'Order 10–15% extra to account for compaction and waste',
          'Use angular crushed stone (not round gravel) for driveways and structural bases',
          'Wet the stone slightly during compaction for optimal density',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Crushed Stone Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Stone Size Guide: #57, #411, and More</h3>
        <p className="text-gray-600 mb-4">
          Crushed stone is sold in standardized sizes designated by number. The most common are: <strong>#57 stone</strong> (nominal 3/4-inch diameter) — the go-to choice for driveways, paver base, and drainage; <strong>#411 crusher run</strong> — a blend of crushed stone and stone dust that compacts into a dense, stable base, ideal for road base and driveways that need a firm surface; <strong>#8 stone</strong> (3/8-inch) — used as a setting bed for pavers and flagstone; <strong>#2 stone</strong> (1.5–2 inch) — large open-graded stone ideal for French drains and storm drainage where water flow is critical; and <strong>#10 stone dust</strong> — fine crushed stone used as a leveling layer under pavers. Matching the stone size to the application dramatically affects performance.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Driveway Base Construction</h3>
        <p className="text-gray-600 mb-4">
          A proper crushed stone driveway base is 4–6 inches of compacted material — the most common failure point in DIY driveway projects is an insufficient or uncompacted base. Begin by excavating 6–8 inches below final grade, then install geotextile fabric over native soil to prevent the stone from mixing in. Apply #411 crusher run or #57 stone in 2-inch lifts, compacting each layer before adding the next. For a crushed stone surface driveway, apply a 2–3 inch cap of #57 stone over the compacted base. For concrete or asphalt driveways, see our <Link href="/concrete-driveway-calculator" className="text-gray-900 underline hover:no-underline">Concrete Driveway Calculator</Link> for the concrete layer on top.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Paver and Patio Base</h3>
        <p className="text-gray-600 mb-4">
          Pavers and natural stone patios require a rigid, well-draining base to prevent settling and shifting. The standard patio base is 4–6 inches of compacted #57 crushed stone followed by 1 inch of leveling sand. The crushed stone base must be fully compacted before the sand layer is applied — any movement in the base will cause paver joints to crack and the surface to become uneven. For a 200 sq ft patio with a 4-inch compacted base, plan for about 3–4 cubic yards of crushed stone before compaction. Use our <Link href="/paver-calculator" className="text-gray-900 underline hover:no-underline">Paver Calculator</Link> to estimate the full material list for patio projects.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Drainage Applications</h3>
        <p className="text-gray-600 mb-4">
          Crushed stone is also the primary material in French drains, dry creek beds, and swales. For drainage systems, use #2 or #57 washed (clean) stone — do not use crusher run or stone with fines, as the dust fills the voids and blocks water flow. Wrap the stone in filter fabric to prevent soil migration into the drainage layer. See our <Link href="/french-drain-calculator" className="text-gray-900 underline hover:no-underline">French Drain Calculator</Link> for complete drainage system material estimates. For cost estimates including material pricing, see our <Link href="/gravel-cost-calculator" className="text-gray-900 underline hover:no-underline">Gravel Cost Calculator</Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
