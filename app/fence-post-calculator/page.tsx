import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import FencePostForm from './FencePostForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Wood Fence Calculator',
    slug: 'wood-fence-calculator',
    description: 'Calculate boards, rails, and posts for wood fences',
  },
  {
    name: 'Chain Link Fence Calculator',
    slug: 'chain-link-fence-calculator',
    description: 'Estimate chain link fencing materials and posts',
  },
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate concrete costs for post footings and installation',
  },
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate fill dirt for backfilling post holes',
  },
];

const faqs = [
  {
    question: 'How far apart should fence posts be?',
    answer: 'Standard spacing is 8 feet on-center for wood fences and 10 feet for chain link. Use 6-foot spacing for fences over 6 feet tall, in high-wind areas, or for heavy privacy fencing. Closer post spacing adds strength but increases material costs proportionally.',
  },
  {
    question: 'How deep should fence posts be buried?',
    answer: 'Bury posts at least 1/3 of their total length — a 9-foot post gives you a 6-foot fence with 3 feet in the ground. In cold climates, posts must go below the frost line (typically 36–48 inches) to prevent heaving. Corner and gate posts benefit from extra depth.',
  },
  {
    question: 'What size fence posts should I use?',
    answer: 'Use 4×4 posts for fences up to 6 feet tall with 8-foot spacing. Use 6×6 posts for 8-foot fences, wide spans, or gate openings. Corner posts and gate posts should always be one size larger than line posts to handle the additional load and torque.',
  },
  {
    question: 'Should I use pressure-treated posts?',
    answer: 'Yes, always use pressure-treated lumber rated for ground contact — look for UC4B (.40 retention or higher) for wood in direct soil contact. Cedar and redwood resist rot naturally but cost 2–3× more. Pressure-treated pine lasts 20–30+ years in ground contact.',
  },
  {
    question: 'How much concrete do I need per fence post?',
    answer: 'For standard 4×4 posts in a 10-inch diameter hole: 2 bags of 50-lb or 60-lb concrete mix per post. For 6×6 posts or a 12-inch diameter hole: 3–4 bags per post. Use quick-setting concrete (e.g. Quikrete Fast-Setting) which sets in 20–40 minutes without mixing.',
  },
  {
    question: 'Should I set fence posts in concrete or gravel?',
    answer: 'Concrete is stronger and preferred for most applications. Compacted gravel is a good alternative in very well-draining soils — it allows water to drain away from the post and can extend post life by reducing rot. Never leave posts in loose, uncompacted soil.',
  },
  {
    question: 'What is the frost line and why does it matter?',
    answer: 'The frost line is the maximum depth at which groundwater freezes in your area. Posts set above the frost line can be pushed upward (heaved) by the freeze-thaw cycle, causing the fence to lean or become uneven. In northern states, the frost line may be 48 inches or deeper. Check local building codes for your area.',
  },
  {
    question: 'How do I keep fence posts from rotting?',
    answer: 'Use ground-contact rated pressure-treated lumber (UC4B). Slope the concrete cap above grade so water drains away from the post. Avoid burying untreated wood ends. Applying a wood preservative to cut ends helps. Keeping soil away from the post above grade also slows decay significantly.',
  },
];

export default function FencePostCalculator() {
  return (
    <CalculatorLayout
      title="Fence Post Calculator"
      description="Calculate number of fence posts required for your project"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <FencePostForm />

      <HowToUse
        steps={[
          'Measure total fence length in feet',
          'Determine post spacing (8 feet standard for wood, 10 feet for chain link)',
          'Enter post height needed (add 1/3 for burial depth)',
          'Click Calculate to get number of posts and concrete bags needed',
          'Add 1–2 extra posts for corners and gate openings',
          'Call 811 before digging to check for underground utilities',
        ]}
        formula={{
          description: 'Fence post calculation:',
          equation: 'Line Posts = (Length / Spacing) - 1\nTotal Posts = Line Posts + Corner Posts + Gate Posts\nConcrete Bags = Total Posts × 2 (for standard 4×4 posts)',
        }}
        tips={[
          'Use 4×4 posts for fences up to 6 feet; use 6×6 for taller or gate posts',
          'Set posts in concrete for maximum stability — slope the top cap for drainage',
          'Check posts are plumb with a level on two adjacent sides before concrete sets',
          'Let concrete cure 24–48 hours before attaching fence boards or panels',
          'Dig holes at least 1/3 of post length deep, deeper in cold climates',
          'Always call 811 (US) before digging to locate buried utilities',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Fence Post Installation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Post Sizing and Spacing Chart</h3>
        <p className="text-gray-600 mb-4">
          Post size and spacing work together to determine fence strength. For a standard 6-foot privacy fence with 8-foot post spacing, 4×4 posts are the minimum; 4×6 posts provide noticeably better rigidity. For 8-foot fences, step up to 6×6 posts regardless of spacing. Corner posts and end posts handle more stress than line posts — always use the next size up at corners, and for gate posts use the largest practical size since gate weight and repeated opening creates significant leverage. In high-wind regions (coastal, plains), reduce spacing from 8 feet to 6 feet and use 6×6 posts throughout. See our <Link href="/wood-fence-calculator" className="text-gray-900 underline hover:no-underline">Wood Fence Calculator</Link> for a complete fence materials estimate including rails and boards.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Hole Depth and Frost Line Requirements</h3>
        <p className="text-gray-600 mb-4">
          The two rules governing post depth are: (1) bury at least 1/3 of the total post length, and (2) extend below your local frost line. In southern US states with no frost, 24–30 inches is typically sufficient for a 6-foot fence. In northern states, the frost line can be 36–48 inches deep, requiring post holes of 42–54 inches for adequate depth plus burial depth. Check local building codes — many municipalities have specific requirements for fence post depth. Holes should be 3–4 inches wider than the post diameter to allow concrete to surround the post completely. Use a power auger (available at equipment rental stores) for digging more than 5–6 holes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Concrete Setting Methods</h3>
        <p className="text-gray-600 mb-4">
          There are three common methods for setting fence posts. <strong>Dry-set (fast setting)</strong>: pour dry quick-setting concrete mix directly into the hole around the post, then add water — no mixing required, sets in 20–40 minutes. This is the easiest DIY method. <strong>Wet-set</strong>: mix concrete to a thick (oatmeal-like) consistency and pour around the post — allows fine adjustment for plumb before concrete hardens. <strong>Compacted gravel</strong>: fill hole with 3/4-inch clean gravel, compact in layers — works well in sandy, well-draining soils and can extend post life by keeping the base drier. For concrete cost estimates to go with your post count, use our <Link href="/concrete-cost-calculator" className="text-gray-900 underline hover:no-underline">Concrete Cost Calculator</Link>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Lumber Selection and Post Life</h3>
        <p className="text-gray-600 mb-4">
          The single biggest factor in fence longevity is using the correct lumber for ground contact. Standard construction lumber (SPF) will rot in 2–5 years when buried. Pressure-treated lumber rated UC4B (.40 retention) is designed for direct ground contact and lasts 20–30+ years. Always check the end tag on treated lumber — UC4A is for above-ground use only and is not suitable for post burial. Cedar and redwood are naturally rot-resistant and work well for above-grade portions, but only use heartwood (not sapwood) for in-ground applications. Treat any field cuts (where you trim the post to height) with copper naphthenate or a similar end-cut preservative to protect the exposed wood. For chain link fence post sizing, see our <Link href="/chain-link-fence-calculator" className="text-gray-900 underline hover:no-underline">Chain Link Fence Calculator</Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
