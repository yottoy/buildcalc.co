export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import ConcreteStepsForm from './ConcreteStepsForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'All Concrete Calculators',
    slug: 'concrete-calculators',
    description: 'Browse all free concrete and masonry calculators in one place',
  },
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate total concrete costs with pricing',
  },
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Calculate concrete for driveway projects',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction project costs',
  },
  {
    name: 'Brick Calculator',
    slug: 'brick-calculator',
    description: 'Calculate bricks for step veneering',
  },
];

const faqs = [
  {
    question: 'How do I calculate concrete needed for steps?',
    answer: 'Measure the width of the staircase, the depth (tread) and height (rise) of each step, and the number of steps. Each step is essentially a rectangular block that sits on top of the one below it, creating a cumulative volume. The calculator sums the volume of each step layer — the bottom step supports the full structure, so it uses the most concrete.',
  },
  {
    question: 'What is the standard outdoor step size?',
    answer: 'Standard outdoor steps have a rise (height) of 6-8 inches and a run (tread depth) of 11-14 inches. Wider treads (12-14") are more comfortable for outdoor use. The International Building Code requires a maximum 7.75-inch rise and minimum 10-inch tread for residential stairs. Stair width should be at least 36 inches, with 48 inches preferred for main entries.',
  },
  {
    question: 'How much concrete do I need for 3 steps?',
    answer: 'A typical 3-step staircase (48 inches wide, 7-inch rise, 12-inch tread) requires approximately 0.4-0.6 cubic yards of concrete including a 4-inch thick landing pad. That equals roughly 8-12 bags of 80-lb concrete mix. The exact volume depends on whether the steps are solid or formed over a compacted fill base. Use our calculator for precise estimates.',
  },
  {
    question: 'Should I use bags or ready-mix concrete for steps?',
    answer: 'For most residential step projects (under 1 cubic yard), bagged concrete mix is practical — it allows you to mix and pour at your own pace. For larger staircases or projects requiring more than 1 cubic yard, ready-mix truck delivery is more cost-effective and provides consistent quality. Ready-mix concrete costs $125-$175/yd³ vs $130-$200/yd³ for bagged when you factor in the labor of mixing bags.',
  },
  {
    question: 'Do concrete steps need rebar?',
    answer: 'Yes — rebar reinforcement is strongly recommended for concrete steps. Use #4 rebar (1/2 inch) placed horizontally in each step and vertically connecting to the footing. Rebar prevents cracking from ground movement, thermal expansion, and the weight of foot traffic. At minimum, use fiber-reinforced concrete mix and wire mesh for small residential steps.',
  },
  {
    question: 'How do I build forms for concrete steps?',
    answer: 'Build forms from 2x lumber (2x8 for risers, 2x12 for larger steps) braced with stakes driven into the ground every 24 inches. Each riser form should be plumb and level. Oil or spray forms with release agent before pouring. Brace the top of each riser form to prevent the weight of wet concrete from bowing the boards outward. Remove forms after 24-48 hours.',
  },
  {
    question: 'How long does it take concrete steps to cure?',
    answer: 'Concrete reaches initial set in 24-48 hours — forms can be removed and light foot traffic is safe. Full working strength (70%) develops in 7 days. Maximum strength is reached at 28 days. Cure properly by keeping surfaces moist for 7 days — cover with plastic sheeting or spray with curing compound. Avoid heavy use or de-icing chemicals for 30 days.',
  },
  {
    question: 'Can I pour concrete steps over existing steps?',
    answer: 'Pouring over existing concrete steps is possible if the old steps are structurally sound and not crumbling. Clean the surface thoroughly, apply a concrete bonding adhesive, and pour a minimum 2-inch overlay. However, this raises the total height and may affect door clearance and landing size. For severely damaged steps, demolition and full replacement produces better results.',
  },
];

export default function ConcreteStepsCalculator() {
  return (
    <CalculatorLayout
      title="Concrete Steps Calculator"
      description="Calculate exactly how much concrete you need for your steps and stairs project"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <ConcreteStepsForm />

      <HowToUse
        steps={[
          'Measure the width of your steps in feet',
          'Measure the depth (tread) of each step in feet',
          'Measure the height (rise) of each step in feet',
          'Count the total number of steps',
          'Enter all measurements into the calculator',
          'Click Calculate to get the concrete needed',
        ]}
        formula={{
          description: 'The calculator sums the volume of each step in the staircase:',
          equation: 'Total Volume = Σ(Width × Depth × (Height × Step Number)) / 27 cubic yards',
        }}
        tips={[
          'Always order 5-10% extra concrete to account for waste',
          'Standard step rise is 6-8 inches (0.5-0.67 feet)',
          'Standard step tread is 11-14 inches (0.92-1.17 feet)',
          'Consider adding a base or landing pad to your calculation',
          'Check local building codes for required step dimensions',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Concrete Steps Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Designing Concrete Steps</h3>
        <p className="text-gray-600 mb-4">
          Safe, comfortable concrete steps follow the &quot;rule of 25&quot; — the rise plus the run should equal approximately 25 inches. For example, a 7-inch rise with an 11-inch tread (7 + 11 = 18) leaves room for a 7-inch nosing overhang, totaling 25 inches. All risers in a staircase must be the same height — building codes require a maximum 3/8-inch variation between any two risers. Calculate the total rise (ground level to landing height) and divide by your target riser height (7 inches is most comfortable) to determine the number of steps needed.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Foundation and Footing Requirements</h3>
        <p className="text-gray-600 mb-4">
          Concrete steps must rest on a stable footing that extends below the frost line (12-48 inches depending on climate zone). The footing should be at least 12 inches wide and 6-8 inches thick, poured on undisturbed or compacted soil. In many cases, steps can be tied into an existing foundation wall with rebar drilled and epoxied into the foundation. For freestanding steps, the footing must be large enough to support the entire staircase weight without settling. Use <Link href="/concrete-cost-calculator" className="text-gray-900 underline hover:no-underline">our concrete cost calculator</Link> to estimate the additional concrete needed for the footing.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Pouring and Finishing Concrete Steps</h3>
        <p className="text-gray-600 mb-4">
          Pour concrete steps from the bottom up — fill the lowest step first, then work upward. Use a stiff mix (3-4 inch slump) to prevent the concrete from slumping out of the upper step forms before setting. Vibrate or tap the forms to eliminate air pockets, especially at edges and corners. Screed the tread surface level with the form tops and finish with a wood float for a slightly textured, slip-resistant surface. Apply a broom finish perpendicular to foot traffic direction for maximum traction in wet conditions. Round the front edge of each tread with an edging tool to prevent chipping.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Building Code Requirements</h3>
        <p className="text-gray-600 mb-4">
          Residential building codes (IRC) specify: maximum 7.75-inch rise, minimum 10-inch tread depth, minimum 36-inch stair width, and handrails required for 4 or more risers. Landings must be at least as deep as the stair width (36 inches minimum) and are required at the top and bottom of every staircase and at every door. Outdoor steps require non-slip surfaces — broom-finished concrete, exposed aggregate, or applied non-slip coatings meet this requirement. Check local codes before construction — requirements vary by jurisdiction.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Cost Estimation for Concrete Steps</h3>
        <p className="text-gray-600 mb-4">
          Materials for a standard 3-step entry staircase (48 inches wide) cost $200-$400 including concrete, rebar, form lumber, and finishing supplies. Professional installation runs $300-$500 per step, or $1,000-$3,000 for a complete 3-5 step staircase with landing. Factors that increase cost include depth of frost footings, decorative finishes (stamping, veneering with <Link href="/brick-calculator" className="text-gray-900 underline hover:no-underline">brick</Link> or stone), handrail installation, and demolition of existing steps. For a full project budget including all concrete work, use our <Link href="/construction-cost-calculator" className="text-gray-900 underline hover:no-underline">Construction Cost Calculator</Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
