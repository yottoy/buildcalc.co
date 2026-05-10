export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import SodForm from './SodForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate topsoil needed for sod preparation',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate landscaping materials',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand for leveling before sod',
  },
  {
    name: 'Pea Gravel Calculator',
    slug: 'pea-gravel-calculator',
    description: 'Calculate gravel for non-lawn landscape areas',
  },
];

const faqs = [
  {
    question: 'How much does sod cost per square foot?',
    answer: 'Sod costs $0.30-$0.80 per square foot depending on grass type and region. Bermuda and fescue blends are cheapest at $0.30-$0.45/sq ft. Kentucky Bluegrass costs $0.40-$0.60/sq ft. Premium Zoysia runs $0.55-$0.80/sq ft. A standard pallet covers 400-500 sq ft and costs $150-$350. Add delivery ($50-$150) and topsoil preparation costs.',
  },
  {
    question: 'How big is a roll or piece of sod?',
    answer: 'Standard sod rolls are 2 feet × 5 feet (10 square feet per roll). Some suppliers sell mini-rolls (16"×40"), large rolls (42"×5 ft), or 2×2 ft squares. A standard pallet holds 50 rolls totaling 500 square feet. Large-format slabs (4×4 ft) are available from commercial suppliers but require mechanical installation.',
  },
  {
    question: 'Do I need to add topsoil before laying sod?',
    answer: 'Yes — 2-4 inches of quality topsoil provides the nutrient base and drainage sod needs to establish roots. Grade the topsoil to slope 1-2% away from buildings for drainage. If existing soil is heavy clay, amend with 2-3 inches of compost mixed into the top 4-6 inches. Sandy soil may need additional organic matter to retain moisture.',
  },
  {
    question: 'How long does sod take to root and establish?',
    answer: 'Sod begins rooting in 10-14 days with proper watering. Light foot traffic is safe after 2-3 weeks (gently tug a corner — resistance means roots are establishing). Avoid heavy use for 4-6 weeks. Full establishment takes 6-8 weeks in warm weather, longer in cool seasons. Mow for the first time when grass reaches 3-4 inches.',
  },
  {
    question: 'What is the best time of year to lay sod?',
    answer: 'Cool-season grasses (fescue, bluegrass, ryegrass): install in early fall (September-October) or early spring (March-April). Warm-season grasses (Bermuda, Zoysia, St. Augustine): install late spring through early summer (May-June). Avoid installing during extreme heat (above 95°F) or when frost is expected within 6 weeks.',
  },
  {
    question: 'How much water does new sod need?',
    answer: 'Water immediately after installation — soak to 4-6 inches deep. For the first 2 weeks, water 2-3 times daily to keep the soil consistently moist (not waterlogged). Weeks 3-4: reduce to once daily. Weeks 5-6: water every other day. After 6 weeks: transition to normal watering schedule (1-1.5 inches per week). Early morning watering is most effective.',
  },
  {
    question: 'How do I prepare the ground for sod?',
    answer: 'Step 1: Remove existing grass, weeds, and debris. Step 2: Grade the area to slope away from structures. Step 3: Add 2-4 inches of topsoil and rake smooth. Step 4: Compact lightly with a lawn roller. Step 5: Apply starter fertilizer (high phosphorus). Step 6: Water soil lightly before laying sod. The surface should be 1 inch below sidewalks and driveways to account for sod thickness.',
  },
  {
    question: 'Is sod better than grass seed?',
    answer: 'Sod provides an instant lawn and prevents erosion immediately — ideal for slopes, high-traffic areas, and impatient homeowners. Grass seed costs 80-90% less but takes 8-16 weeks to establish and requires more weed management. Seed offers more grass variety options. Sod is the better choice when you need quick results, have erosion concerns, or are installing in late season.',
  },
];

export default function SodCalculator() {
  return (
    <CalculatorLayout
      title="Sod Calculator"
      description="Estimate sod required for lawn installation"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <SodForm />

      <HowToUse
        steps={[
          'Measure the length of your lawn area in feet',
          'Measure the width of your lawn area in feet',
          'Get price per square foot from your supplier',
          'Click Calculate to get sod rolls, pallets, and cost',
          'Order 5% extra for waste and irregular shapes',
        ]}
        formula={{
          description: 'Sod calculation formula:',
          equation: 'Area = Length × Width\nSod Needed = Area × 1.05 (5% waste)\nRolls = Sod Needed / 10 sq ft per roll',
        }}
        tips={[
          'Install sod within 24 hours of delivery',
          'Water immediately after installation',
          'Water daily for the first 2 weeks',
          'Avoid walking on new sod for 3 weeks',
          'Mow when grass reaches 3-4 inches',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Sod Installation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Grass Type</h3>
        <p className="text-gray-600 mb-4">
          The right grass variety depends on your climate zone, sun exposure, and lawn use. <strong>Cool-season grasses</strong> (USDA zones 3-6) include Kentucky Bluegrass (dense, dark green, self-repairing), Tall Fescue (drought-tolerant, low maintenance), and Perennial Ryegrass (fast establishing, wear-resistant). <strong>Warm-season grasses</strong> (zones 7-10) include Bermuda (excellent wear tolerance, full sun), Zoysia (dense, slow-growing, shade-tolerant), and St. Augustine (best shade tolerance, thick blades). Transition zone areas (zones 6-7) can use either type — Tall Fescue and Zoysia are the most reliable choices in these challenging climates.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Preparing the Site for Sod</h3>
        <p className="text-gray-600 mb-4">
          Proper site preparation is the most important factor in sod success. Start by killing or removing existing vegetation — use a sod cutter for large areas or apply non-selective herbicide 2 weeks before installation. Grade the area to create positive drainage away from foundations and structures at a 1-2% slope. Add 2-4 inches of quality <Link href="/dirt-calculator" className="text-gray-900 underline hover:no-underline">topsoil</Link> and rake smooth, removing rocks, roots, and debris larger than 1 inch. Compact lightly with a water-filled lawn roller — the surface should be firm but not hard-packed. Apply a starter fertilizer high in phosphorus (10-20-10 ratio) per manufacturer directions, then lightly water the prepared soil.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">How to Lay Sod</h3>
        <p className="text-gray-600 mb-4">
          Install sod within 24 hours of delivery — it begins to deteriorate from heat and moisture loss almost immediately. Start along the longest straight edge (typically a sidewalk or driveway) and work outward. Stagger seams like bricks in a wall so no four corners meet at one point. Butt edges tightly together without overlapping — gaps wider than 1/2 inch will be visible for weeks. On slopes, lay sod perpendicular to the slope direction and stake with landscape staples every 3-4 feet to prevent slipping. After laying, roll the entire area with a half-filled lawn roller to press roots into contact with soil.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Sod Cost Breakdown</h3>
        <p className="text-gray-600 mb-4">
          For a typical 2,000 sq ft lawn renovation: sod materials cost $600-$1,600 depending on grass type, topsoil and site prep adds $300-$800 (use our <Link href="/dirt-calculator" className="text-gray-900 underline hover:no-underline">Dirt Calculator</Link> for topsoil quantity), starter fertilizer $30-$50, and delivery $50-$150. DIY total: $1,000-$2,600. Professional installation adds $0.50-$1.50/sq ft for labor, bringing the total to $2,000-$4,600 installed. Compared to seeding ($0.05-$0.15/sq ft for seed), sod costs 5-10 times more but delivers an instant, erosion-free lawn with far less risk of failure.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Common Installation Mistakes to Avoid</h3>
        <p className="text-gray-600 mb-4">
          <strong>Not watering immediately:</strong> Sod must be watered within 30 minutes of being laid — roots dry out fast in warm weather. <strong>Installing on unprepared soil:</strong> Laying sod over compacted clay or debris leads to poor rooting and brown patches within weeks. <strong>Overlapping seams:</strong> Overlapping creates raised ridges that yellow and die. <strong>Waiting too long after delivery:</strong> Sod on a pallet generates heat from decomposition — center rolls can reach 130°F within 24 hours, killing the grass. <strong>Mowing too soon:</strong> Wait until roots have grabbed (2-3 weeks minimum) and set mower height to remove no more than 1/3 of the blade height.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
