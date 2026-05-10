export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import PeaGravelForm from './PeaGravelForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate costs for all gravel types',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand for base layers',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone for bases and driveways',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate all landscaping materials',
  },
];

const faqs = [
  {
    question: 'What is pea gravel used for?',
    answer: 'Pea gravel is ideal for walkways, patios, playgrounds, driveways, landscaping, drainage, and around pools. Its smooth, rounded stones are comfortable to walk on and gentle on bare feet.',
  },
  {
    question: 'How deep should pea gravel be?',
    answer: 'Use 2-3 inches for walkways and patios. For playgrounds, use 9-12 inches for proper cushioning and safety. Driveways need 4-6 inches over compacted base.',
  },
  {
    question: 'What size is pea gravel?',
    answer: 'Pea gravel stones are typically 1/4 to 3/8 inch in diameter, about the size of a pea. This small, uniform size makes it comfortable to walk on and easy to spread.',
  },
  {
    question: 'Do I need landscape fabric under pea gravel?',
    answer: 'Yes, always install landscape fabric or weed barrier under pea gravel. This prevents weeds from growing through and keeps gravel from sinking into soil.',
  },
  {
    question: 'How much does pea gravel cost?',
    answer: 'Pea gravel costs $30-$60 per ton or $35-$55 per cubic yard depending on location and supplier. Bulk delivery is more economical than bags for projects over 1 cubic yard.',
  },
];

export default function PeaGravelCalculator() {
  return (
    <CalculatorLayout
      title="Pea Gravel Calculator"
      description="Estimate pea gravel required for landscaping"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <PeaGravelForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches (2-3 inches typical)',
          'Click Calculate to get cubic yards and tons',
        ]}
        formula={{
          description: 'Pea gravel volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × 2600 lbs/yd³ / 2000',
        }}
        tips={[
          'Use landscape fabric underneath to prevent weeds',
          'Compact base before adding gravel',
          'Add edging to contain pea gravel',
          'Order 10% extra for settling',
          'Rinse pea gravel before use to remove dust',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Pea Gravel Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">What Is Pea Gravel?</h3>
        <p className="text-gray-600 mb-4">
          Pea gravel is a naturally occurring small, rounded stone typically 1/4 to 3/8 inch in diameter — roughly the size of a green pea. Unlike angular crushed stone, pea gravel is smoothed by water erosion, giving it a comfortable texture underfoot. It comes in a natural mix of earth tones — tan, brown, gray, and white — or can be purchased in specific colors. Pea gravel weighs approximately 2,600 lbs (1.3 tons) per cubic yard, making it lighter than most crushed stone products. Its smooth, rounded shape makes it easy to spread and rake but also means it shifts more easily and requires containment edging.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Best Uses for Pea Gravel</h3>
        <p className="text-gray-600 mb-4">
          <strong>Walkways and patios:</strong> Apply 2-3 inches of pea gravel over landscape fabric for a comfortable, permeable walking surface. Edge with steel landscape edging, timber, or stone to prevent spreading. <strong>Playgrounds:</strong> Use 9-12 inches of pea gravel for cushioning under play equipment per CPSC guidelines — pea gravel is one of the approved playground surfaces. <strong>Driveways:</strong> Pea gravel works for low-traffic driveways at 4-6 inches deep, but it displaces under tires more than <Link href="/gravel-cost-calculator" className="text-gray-900 underline hover:no-underline">crushed stone</Link> — expect regular raking. <strong>Landscaping:</strong> Use as ground cover around plants, in dry creek beds, and between stepping stones. <strong>Drainage:</strong> Pea gravel&#39;s round shape creates good drainage channels around foundations and in <Link href="/french-drain-calculator" className="text-gray-900 underline hover:no-underline">French drain</Link> systems.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Pea Gravel vs. Crushed Stone</h3>
        <p className="text-gray-600 mb-4">
          Pea gravel and crushed stone serve different purposes due to their shape. Pea gravel&#39;s rounded edges make it comfortable for walking, attractive in landscaping, and easy to move — but the lack of angular edges means it doesn&#39;t interlock or compact well. Crushed stone has angular, broken faces that lock together under compaction, making it far superior for driveways, structural bases, and load-bearing applications. Use pea gravel where comfort and aesthetics matter (pathways, patios, gardens). Use <Link href="/crushed-stone-calculator" className="text-gray-900 underline hover:no-underline">crushed stone</Link> where stability and load-bearing capacity matter (driveways, foundations, road bases).
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Installation and Maintenance</h3>
        <p className="text-gray-600 mb-4">
          Proper installation starts with excavating the area to the desired depth plus 1-2 inches for settling. Install heavy-duty landscape fabric over the subgrade to prevent weed growth and keep gravel from sinking into the soil. Install edging material around the entire perimeter — steel landscape edging, plastic borders, timber, or stone work well. Spread pea gravel to the desired depth and rake smooth. Compact lightly with a hand tamper for walkways. Maintenance is minimal: rake periodically to even out displaced stones, top off with fresh gravel every 2-3 years to compensate for settling (plan on 10-15% loss annually), and remove leaves and organic debris to prevent weed seeds from germinating in the stone layer.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Cost and Ordering Tips</h3>
        <p className="text-gray-600 mb-4">
          Pea gravel costs $35-$55 per cubic yard or $30-$50 per ton for bulk delivery. Bagged pea gravel from stores costs $5-$7 per 50-lb bag — about $260-$360 per cubic yard, making it practical only for very small projects. Most suppliers require a minimum delivery of 1-3 cubic yards. Delivery charges add $50-$150 depending on distance. A typical 200 sq ft patio at 3 inches deep needs about 1.9 cubic yards (2.5 tons) costing $90-$130 in materials. Order 10% extra for settling, edge spillage, and future top-ups.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
