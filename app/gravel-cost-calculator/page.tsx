export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import GravelCostForm from './GravelCostForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone needed for bases and driveways',
  },
  {
    name: 'Pea Gravel Calculator',
    slug: 'pea-gravel-calculator',
    description: 'Calculate pea gravel for walkways and landscaping',
  },
  {
    name: 'Asphalt Calculator',
    slug: 'asphalt-calculator',
    description: 'Calculate asphalt for driveways and parking lots',
  },
  {
    name: 'French Drain Calculator',
    slug: 'french-drain-calculator',
    description: 'Calculate drainage gravel and pipe materials',
  },
];

const faqs = [
  {
    question: 'How much does gravel cost per ton?',
    answer: 'Gravel costs $30-$60 per ton depending on type and location. Crushed stone runs $35-$50/ton, pea gravel $35-$55/ton, and decorative river rock $50-$80/ton. Prices vary by region, with urban areas typically 20-30% higher. Bulk delivery (10+ tons) usually qualifies for per-ton discounts of 10-15%.',
  },
  {
    question: 'How much gravel do I need per square foot?',
    answer: 'At 2 inches deep, you need about 0.006 cubic yards per square foot (roughly 100 sq ft per cubic yard). At 4 inches deep, plan on 0.012 cubic yards per sq ft (50 sq ft per cubic yard). One ton of gravel covers approximately 80-100 sq ft at 2 inches deep or 40-50 sq ft at 4 inches deep.',
  },
  {
    question: 'What type of gravel should I use for my project?',
    answer: 'Crushed stone (#57 or #67) for driveways and structural bases — angular edges lock together for stability. Pea gravel for walkways, patios, and landscaping — smooth and comfortable underfoot. River rock (1-3 inch) for decorative areas and dry creek beds. Limestone or drainage rock for French drains and foundation drainage.',
  },
  {
    question: 'How deep should gravel be?',
    answer: 'Driveways: 4-6 inches of crushed stone over compacted subgrade. Walkways and patios: 2-3 inches over landscape fabric. French drains: 4-6 inches surrounding perforated pipe. Landscaping beds: 2-3 inches for weed suppression and decoration. Always compact in 2-inch layers for best results.',
  },
  {
    question: 'How many tons of gravel are in a cubic yard?',
    answer: 'Most gravel weighs 1.3-1.5 tons per cubic yard depending on type and moisture. Crushed limestone weighs about 1.35 tons/yd³, pea gravel about 1.3 tons/yd³, and river rock 1.4-1.5 tons/yd³. The calculator automatically converts between cubic yards and tons based on material density.',
  },
  {
    question: 'Should I use landscape fabric under gravel?',
    answer: 'Yes, landscape fabric is strongly recommended for walkways, patios, and decorative areas to prevent weed growth and keep gravel from mixing with soil. For driveways, use a geotextile fabric rated for vehicle traffic. Skip fabric only for drainage applications where water needs to flow freely through the soil.',
  },
  {
    question: 'How do I keep gravel from spreading?',
    answer: 'Install edging along all borders — steel landscape edging, plastic borders, or timber edging. For driveways, use compacted crushed stone with angular edges that interlock. Pea gravel and river rock spread more easily and always need containment. Add a slight crown (higher in center) so gravel sheds toward edges rather than scattering.',
  },
  {
    question: 'Is gravel cheaper than concrete for driveways?',
    answer: 'Gravel driveways cost $1-$3 per square foot installed vs $6-$12 for concrete. However, gravel requires periodic replenishment (every 2-3 years), regrading, and weed maintenance. Over 20 years, total costs are comparable, but gravel has lower upfront cost and is easier to install yourself.',
  },
];

export default function GravelCostCalculator() {
  return (
    <CalculatorLayout
      title="Gravel Cost Calculator"
      description="Calculate gravel costs based on project requirements"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <GravelCostForm />

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches',
          'Select your gravel type',
          'Enter price per ton from your supplier',
          'Click Calculate to get cost estimate',
        ]}
        formula={{
          description: 'Gravel cost calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Density / 2000\nCost = Tons × Price per Ton',
        }}
        tips={[
          'Compact gravel in 2-inch layers',
          'Use landscape fabric under gravel',
          'Add 10% extra for settling',
          'Get quotes from multiple suppliers',
          'Consider delivery fees for small orders',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Gravel Cost Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Gravel Types and Pricing</h3>
        <p className="text-gray-600 mb-4">
          Gravel pricing depends on the type, size, and your distance from the quarry. Crushed stone (also called crusher run or #57 stone) is the most affordable option at $30-$45 per ton and is the go-to choice for driveways, road bases, and construction foundations. Its angular, irregular edges compact tightly and interlock under pressure, creating a stable surface that resists shifting. Pea gravel costs $35-$55 per ton and is popular for walkways, patios, and landscaping because of its smooth, rounded texture. Decorative options like river rock ($50-$80/ton) and Mexican beach pebbles ($100-$200/ton) cost significantly more but provide premium aesthetics for garden features and high-visibility areas.
        </p>
        <p className="text-gray-600 mb-4">
          Delivery charges typically add $50-$150 per load depending on distance and quantity. Most suppliers offer free delivery for orders over 10-15 tons. Buying bagged gravel from home improvement stores costs $5-$8 per 50-lb bag — roughly $200-$320 per ton — making it practical only for very small projects under 0.5 tons.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Gravel for Your Project</h3>
        <p className="text-gray-600 mb-4">
          <strong>Driveways:</strong> Use #57 crushed stone (3/4-inch) or #411 crusher run (mixed sizes with fines that compact into a solid surface). Apply 4-6 inches over a compacted subgrade. For the base layer, #21A or #21B crushed stone packs tightly and provides excellent drainage. Avoid pea gravel for driveways — its round shape makes it shift under tires. For an alternative driveway surface, compare costs with our <Link href="/asphalt-calculator" className="text-gray-900 underline hover:no-underline">Asphalt Calculator</Link>.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Drainage and French Drains:</strong> Use clean, washed #57 stone or 3/4-inch drainage rock without fines — the open spaces between stones allow water to flow freely. Avoid limestone dust or crusher run for drainage because the fine particles clog over time. Size your drainage project with our <Link href="/french-drain-calculator" className="text-gray-900 underline hover:no-underline">French Drain Calculator</Link>.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Landscaping and Pathways:</strong> Pea gravel (3/8-inch) creates comfortable walking surfaces and attractive garden borders. Use our <Link href="/pea-gravel-calculator" className="text-gray-900 underline hover:no-underline">Pea Gravel Calculator</Link> specifically for those projects. For larger decorative stone, river rock (1-3 inch) works in dry creek beds, around foundations, and as ground cover in low-maintenance landscapes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">How to Estimate Gravel Quantity</h3>
        <p className="text-gray-600 mb-4">
          Gravel is sold by the cubic yard or ton. One cubic yard of gravel covers approximately 100 square feet at 3 inches deep, or 80 square feet at 4 inches deep. To convert between volume and weight, most gravel weighs 1.3-1.5 tons per cubic yard — crushed stone averages 1.4 tons/yd³. Always order 10-15% extra to account for uneven subgrade, compaction losses, and edge spillage. Our calculator handles all conversions automatically — just enter your area dimensions and desired depth.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Installation Tips for Long-Lasting Results</h3>
        <p className="text-gray-600 mb-4">
          Proper installation makes the difference between gravel that lasts years and gravel that washes away in the first heavy rain. Start by excavating to the required depth plus 2 inches for a compacted base layer. Install landscape fabric or geotextile over the subgrade to prevent gravel from sinking into the soil. Spread gravel in 2-inch layers and compact each layer with a plate compactor before adding the next. For driveways, crown the center slightly (1-2% slope) so water drains to the sides rather than pooling in wheel tracks.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
