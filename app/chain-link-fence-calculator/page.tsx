import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import ChainLinkFenceForm from './ChainLinkFenceForm';

const relatedCalculators = [
  { name: 'Wood Fence Calculator', slug: 'wood-fence-calculator', description: 'Calculate wood fence materials' },
  { name: 'Fence Post Calculator', slug: 'fence-post-calculator', description: 'Calculate fence posts' },
];

const faqs = [
  {
    question: 'How do I use the chain link fence calculator?',
    answer: 'Enter your fence length in feet, select your desired height (3-6 feet), choose post spacing (8 or 10 feet), and add any gates. Click Calculate to get instant estimates for posts, fabric, top rail, and total costs for materials and installation.',
  },
  {
    question: 'What is the chain link fence post spacing chart?',
    answer: "Standard spacing is 10 feet on center for residential fences up to 6 feet tall. For commercial fences, taller fences (over 6 feet), or high-wind areas, use 8-foot spacing for added strength and stability. Terminal posts (corners and gates) don't count toward spacing.",
  },
  {
    question: 'How much does chain link fence cost per foot?',
    answer: 'Chain link fence costs $8-$15 per linear foot installed. Materials only run $3-$8 per foot depending on height. 4-foot fence is $8-10/ft installed, 6-foot is $10-15/ft. Vinyl-coated chain link costs $2-$3 more per foot than galvanized.',
  },
  {
    question: 'How do I calculate chain link fence materials?',
    answer: 'Divide fence length by post spacing (typically 10 feet) and add 1 to get total posts. Chain link fabric equals your total fence length. Top rail also equals fence length. Add gates, tension bars, and hardware. Our calculator does this automatically.',
  },
  {
    question: 'What is the cost to install chain link fence?',
    answer: 'Professional installation costs $5-$10 per linear foot for labor, plus $3-$8 per foot for materials. Total installed cost averages $8-$15 per foot. DIY installation saves labor costs but requires tools: post hole digger, level, come-along, and concrete.',
  },
  {
    question: 'How many posts do I need for chain link fence?',
    answer: 'Calculate posts by dividing fence length by spacing (usually 10 feet), then add 1. Example: 100-foot fence with 10-foot spacing needs 11 posts (100 ÷ 10 + 1). Add extra posts for corners and gates.',
  },
  {
    question: 'What is commercial chain link fence calculator?',
    answer: 'Commercial chain link fences are typically 6-8 feet tall with heavier gauge fabric (9-gauge vs 11-gauge residential). Use 8-foot post spacing instead of 10-foot. Commercial grade costs $12-$20 per linear foot installed due to heavier materials and labor.',
  },
  {
    question: 'How deep should chain link fence posts be buried?',
    answer: 'Bury line posts 2 feet deep in concrete. Terminal posts (corners, ends, gates) should be 3 feet deep. In frost areas, go below frost line (typically 3-4 feet). Use 8-inch diameter post holes with concrete for stability.',
  },
  {
    question: 'Can I install chain link fence myself or use Home Depot?',
    answer: "Yes, chain link is DIY-friendly. Home Depot and Lowe's sell complete chain link fence kits with materials and instructions. You'll need: post hole digger, level, come-along or fence puller, wrenches, and concrete. Most homeowners can install 100 feet in a weekend.",
  },
  {
    question: 'What materials are included in chain link fence estimate?',
    answer: 'Complete chain link fence includes: line posts, terminal posts, chain link fabric, top rail, bottom tension wire, post caps, tension bands, rail ends, brace bands, tie wires, concrete, and gates if needed. Our calculator estimates all major materials.',
  },
];

export default function ChainLinkFenceCalculator() {
  return (
    <CalculatorLayout
      title="Chain Link Fence Calculator"
      description="Estimate chain link fencing materials and posts needed"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <ChainLinkFenceForm />

      <HowToUse
        steps={['Measure total fence length in feet', 'Choose fence height (3-6 feet)', 'Select post spacing (8 or 10 feet)', 'Add number of gates needed', 'Click Calculate for instant material and cost estimates']}
        formula={{ description: 'Material calculation:', equation: 'Posts = (Length / Spacing) + 1\nFabric = Total Length × Height\nTop Rail = Total Length' }}
        tips={['Use 10-foot post spacing for residential, 8-foot for commercial', 'Bury posts 1/3 of height in concrete', 'Stretch fabric tightly with come-along tool', 'Add bottom tension wire for stability', 'Terminal posts need deeper holes (3 feet)', 'Order 5-10% extra materials for waste']}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Chain Link Fence Installation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Chain Link Fence Costs</h3>
        <p className="mb-4">
          Chain link fencing is one of the most affordable and durable fencing options available. Material costs typically range from $3-$8 per linear foot, while professional installation adds $5-$10 per foot. Total installed costs average $8-$15 per linear foot depending on height, gauge, and coating options.
        </p>
        <p className="mb-4">
          Height significantly impacts cost: 4-foot residential fence costs $8-10 per foot installed, while 6-foot privacy fence costs $10-15 per foot. Vinyl-coated chain link adds $2-$3 per foot but provides better aesthetics and rust protection.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Residential vs Commercial Chain Link Fence</h3>
        <p className="mb-4">
          <strong>Residential chain link</strong> typically uses 11-gauge or 11.5-gauge fabric with 2-inch diamond mesh. Standard heights are 4-6 feet with posts spaced 10 feet apart. This is suitable for backyards, gardens, and pet containment.
        </p>
        <p className="mb-4">
          <strong>Commercial chain link</strong> uses heavier 6-gauge or 9-gauge fabric with smaller 1-inch or 1.5-inch mesh. Heights range from 6-12 feet with posts spaced 8 feet apart for added strength. Required for parking lots, warehouses, and high-security areas.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Post Spacing and Installation</h3>
        <p className="mb-4">
          Proper post spacing is critical for fence strength and longevity. Standard residential spacing is 10 feet on center between line posts. Commercial and high-wind applications require 8-foot spacing. Terminal posts at corners, ends, and gates need to be larger diameter (2-7/8&quot; or 3&quot;) and buried deeper (3 feet vs 2 feet for line posts).
        </p>
        <p className="mb-4">
          Always use concrete to set posts. Dig holes 8-10 inches in diameter, below frost line in cold climates. Set posts plumb and allow concrete to cure 24-48 hours before attaching fabric.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Material Estimator Checklist</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Line Posts:</strong> Calculate (Length ÷ Spacing) + 1</li>
          <li><strong>Terminal Posts:</strong> 1 per corner, end, and gate</li>
          <li><strong>Chain Link Fabric:</strong> Total fence length × height</li>
          <li><strong>Top Rail:</strong> Total fence length (1-3/8&quot; or 1-5/8&quot; diameter)</li>
          <li><strong>Bottom Tension Wire:</strong> Total fence length (optional but recommended)</li>
          <li><strong>Concrete:</strong> 1 bag (50 lbs) per post</li>
          <li><strong>Hardware:</strong> Post caps, tension bands, rail ends, brace bands, tie wires</li>
          <li><strong>Gates:</strong> Based on access needs (single or double width)</li>
        </ul>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
