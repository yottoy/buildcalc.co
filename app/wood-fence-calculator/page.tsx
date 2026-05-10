export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import WoodFenceForm from './WoodFenceForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Chain Link Fence Calculator',
    slug: 'chain-link-fence-calculator',
    description: 'Estimate chain link fencing materials and posts needed',
  },
  {
    name: 'Fence Post Calculator',
    slug: 'fence-post-calculator',
    description: 'Calculate number of fence posts required',
  },
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate concrete for setting fence posts',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction project costs',
  },
];

const faqs = [
  {
    question: 'How far apart should fence posts be?',
    answer: 'Standard fence post spacing is 8 feet on center for most residential wood fences. For taller fences (over 6 feet) or high-wind areas, reduce to 6-foot spacing. Gate posts should be set as close together as possible while allowing the gate to swing freely. Never exceed 8-foot spacing — wider gaps cause rails to sag and boards to bow.',
  },
  {
    question: 'What size posts should I use?',
    answer: 'Use 4x4 posts for fences up to 6 feet tall in standard conditions. Use 6x6 posts for fences over 6 feet tall, heavy gates, end posts, corner posts, and areas with high winds. Gate posts should always be one size larger than line posts due to the stress of a swinging gate. Post length should be fence height plus burial depth plus 2 inches above the top rail.',
  },
  {
    question: 'How deep should fence posts be buried?',
    answer: 'Bury posts at least 1/3 of the total fence height, with a 2-foot minimum. For a 6-foot fence, bury 2 feet; for an 8-foot fence, bury 2.5-3 feet. In cold climates, post holes must extend below the frost line (typically 36-48 inches) to prevent frost heave. Set posts in concrete for maximum stability — one 50-lb bag of post-set concrete per post hole.',
  },
  {
    question: 'What type of wood is best for fences?',
    answer: 'Western red cedar is the premium choice — naturally rot and insect resistant, beautiful grain, lasts 20-30 years. Pressure-treated Southern Yellow Pine costs 30-50% less, resists rot through chemical treatment, and lasts 15-25 years. Redwood offers excellent durability but is expensive and limited in availability. White cedar is affordable but softer and shorter-lived. All wood fences benefit from stain or sealant every 2-3 years.',
  },
  {
    question: 'How much does a wood fence cost per foot?',
    answer: 'Materials only: $8-$20 per linear foot depending on wood type, height, and style. Cedar privacy fence (6 ft): $15-$25/ft materials. Pressure-treated pine (6 ft): $10-$18/ft materials. Professional installation adds $10-$25/ft for labor, bringing total installed cost to $20-$50 per linear foot. A 200-foot perimeter fence costs $4,000-$10,000 installed.',
  },
  {
    question: 'How many fence boards do I need?',
    answer: 'For a standard privacy fence with 5.5-inch dog-ear boards: divide the fence length in inches by 5.5 (no gap) or by 6 (with 1/2-inch gap). A 100-foot fence needs approximately 218 boards with no gap or 200 boards with 1/2-inch spacing. Add 10% for waste, splits, and mistakes. Our calculator computes exact board counts based on your measurements.',
  },
  {
    question: 'How many rails do I need?',
    answer: 'Use 2 horizontal rails for fences up to 5 feet tall, 3 rails for 6-foot and taller fences. Rails span between posts (typically 8 feet) and should be 2x4 lumber for standard fences. For an 80-foot fence with 8-foot post spacing: 10 sections × 2 rails = 20 rail boards (5 feet and under) or 10 sections × 3 rails = 30 rail boards (6 feet and over).',
  },
  {
    question: 'Do I need a permit to build a fence?',
    answer: 'Most municipalities require permits for fences over 6 feet tall. Many HOAs have restrictions on fence height, style, and materials. Check setback requirements — fences often must be 2-6 inches inside the property line. Call 811 before digging to locate underground utilities. Some areas require the "good side" (flat side) to face outward toward neighbors.',
  },
];

export default function WoodFenceCalculator() {
  return (
    <CalculatorLayout
      title="Wood Fence Calculator"
      description="Estimate wood fencing materials and posts required"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <WoodFenceForm />

      <HowToUse
        steps={[
          'Measure the total length of fence needed in feet',
          'Decide on fence height (typically 4-6 feet for privacy)',
          'Choose post spacing (8 feet is standard)',
          'Select board width based on your design',
          'Click Calculate to get materials list',
        ]}
        formula={{
          description: 'Wood fence material calculation:',
          equation: 'Posts = (Length / Spacing) + 1\nBoards = (Length × 12 / Board Width) × Height\nRails = (Length / 8) × 2',
        }}
        tips={[
          'Add 10% extra materials for waste and mistakes',
          'Check local building codes for height restrictions',
          'Mark underground utilities before digging post holes',
          'Use pressure-treated or rot-resistant wood',
          'Apply wood sealer or stain for longer life',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Wood Fence Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Wood Fence Styles and Materials</h3>
        <p className="text-gray-600 mb-4">
          <strong>Privacy fence (board-on-board or solid):</strong> The most popular residential style — vertical boards mounted edge-to-edge on horizontal rails for complete privacy. Standard height is 6 feet. Dog-ear tops (corners trimmed at 45°) are the most common and affordable profile. Flat-top boards create a modern, clean look. Board-on-board alternates boards on opposite sides of the rail for privacy from any angle with an attractive appearance from both sides.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Picket fence:</strong> Classic open-style fence with spaced vertical boards, typically 3-4 feet tall. Traditional pointed pickets or flat-top contemporary styles. Spacing between pickets is usually 2-3 inches. Often used for front yards and decorative boundaries.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Shadow box fence:</strong> Boards are mounted alternately on the front and back of the rails with slight overlap, allowing airflow while providing semi-privacy. Looks good from both sides — no &quot;bad side&quot; facing neighbors. Uses approximately 50% more boards than a flat privacy fence.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Post Installation Methods</h3>
        <p className="text-gray-600 mb-4">
          Setting posts correctly is the most critical step in fence building. Dig holes 3 times the post width (12 inches for a 4x4 post) and deep enough to bury 1/3 of the total post length. Plumb each post with a level and brace before setting. <strong>Concrete setting</strong> is the most durable method — use 1-2 bags of fast-setting post concrete per hole, add water, and let cure 4 hours before attaching rails. <strong>Gravel setting</strong> works well in well-drained soils — pack crushed stone tightly around the post. Use our <Link href="/concrete-cost-calculator" className="text-gray-900 underline hover:no-underline">Concrete Cost Calculator</Link> to estimate post-setting concrete, and our <Link href="/fence-post-calculator" className="text-gray-900 underline hover:no-underline">Fence Post Calculator</Link> for exact post counts.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Wood Fence vs. Chain Link Fence</h3>
        <p className="text-gray-600 mb-4">
          Wood fences provide privacy, noise reduction, and a warm natural appearance that <Link href="/chain-link-fence-calculator" className="text-gray-900 underline hover:no-underline">chain link fences</Link> cannot match. However, chain link costs 40-60% less ($8-$15/ft installed vs $20-$50/ft for wood) and requires virtually no maintenance. Chain link lasts 20-30 years vs 15-25 years for wood. Wood fences require staining or sealing every 2-3 years to prevent rot and graying. For pet containment without privacy needs, chain link is the more economical choice. For property value and aesthetics, wood adds 2-5% to home resale value.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Maintenance for Longevity</h3>
        <p className="text-gray-600 mb-4">
          A well-maintained wood fence lasts 20-30 years compared to 10-15 years for a neglected one. Apply a penetrating wood stain or sealant within the first year of installation (after the wood has dried for 3-6 months if pressure-treated) and reapply every 2-3 years. Inspect annually for loose boards, leaning posts, and signs of rot at ground level. Replace individual damaged boards promptly to prevent spreading damage. Keep soil and mulch away from the base of posts — moisture contact accelerates rot. Trim vegetation that grows against the fence to improve airflow and reduce moisture retention.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
