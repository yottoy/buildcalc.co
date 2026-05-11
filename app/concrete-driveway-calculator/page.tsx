export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import ConcreteDrivewayForm from './ConcreteDrivewayForm';
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
    name: 'Asphalt Calculator',
    slug: 'asphalt-calculator',
    description: 'Calculate asphalt as an alternative to concrete',
  },
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for the base layer',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone for driveway base',
  },
];

const faqs = [
  {
    question: 'How thick should a concrete driveway be?',
    answer: 'Residential driveways should be 4 inches thick minimum. For heavy vehicles like RVs or trucks, use 5-6 inches. Always install over 4-6 inches of compacted gravel base for drainage and stability.',
  },
  {
    question: 'Do I need rebar in my driveway?',
    answer: 'Wire mesh (6x6 W1.4xW1.4) or rebar (#3 at 18" centers) is strongly recommended to prevent cracking. Rebar is especially important for thicker slabs and areas with expansive soils.',
  },
  {
    question: 'How much does a concrete driveway cost per square foot?',
    answer: 'Concrete driveways cost $4-$8 per square foot for materials only. Installed costs average $6-$12 per sq ft. Decorative finishes like stamping or staining add $2-$4 per sq ft more.',
  },
  {
    question: 'Is concrete or asphalt better for driveways?',
    answer: 'Concrete lasts 30-40 years vs. asphalt\'s 15-20 years. Concrete costs more upfront ($6-$12/sq ft vs $3-$7/sq ft for asphalt) but requires less maintenance. Asphalt handles freeze-thaw cycles better.',
  },
  {
    question: 'How long does concrete take to cure?',
    answer: 'Concrete reaches 70% strength in 7 days and full strength in 28 days. Avoid driving on it for 7 days, and avoid parking heavy vehicles for 28 days.',
  },
  {
    question: 'What PSI concrete do I need for a driveway?',
    answer: 'Use 3,000-4,000 PSI concrete for residential driveways. Areas with heavy vehicles or cold climates (freeze-thaw) should use 4,000-4,500 PSI with air entrainment (5-7% air content).',
  },
  {
    question: 'How many expansion joints do I need?',
    answer: 'Place expansion joints every 8-10 feet in both directions for a standard driveway. Control joints (saw cuts) should be made within 6-12 hours of pouring to prevent random cracking.',
  },
  {
    question: 'What is the best time of year to pour a concrete driveway?',
    answer: 'Pour concrete when temperatures are between 50°F and 90°F. Avoid pouring in direct sun over 90°F or when frost is expected within 24 hours. Spring and fall are ideal in most US climates.',
  },
];

export default function ConcreteDrivewayCalculator() {
  return (
    <CalculatorLayout
      title="Concrete Driveway Calculator"
      description="Calculate concrete needed for driveway projects"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <ConcreteDrivewayForm />

      <HowToUse
        steps={[
          'Measure your driveway length in feet',
          'Measure your driveway width in feet',
          'Choose thickness: 4" for standard residential, 5-6" for heavy vehicles',
          'Click Calculate to get cubic yards needed',
          'Add 5-10% for waste and order accordingly',
        ]}
        formula={{
          description: 'Concrete volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Thickness/12) / 27\nExample: 40ft × 12ft × 4in = (40 × 12 × 0.333) / 27 = 5.9 yd³',
        }}
        tips={[
          'Install 4-6 inches of compacted gravel base before pouring',
          'Use expansion joints every 8-10 feet to prevent cracking',
          'Slope driveway 1-2% away from structures for drainage',
          'Cure with plastic sheeting for 7 days to retain moisture',
          'Seal concrete 28-30 days after pouring for maximum protection',
          'Order ready-mix concrete for anything over 1 cubic yard',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Concrete Driveway Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">How to Size Your Concrete Driveway</h3>
        <p className="text-gray-600 mb-4">
          The standard residential driveway width is 10-12 feet for a single-car driveway and 20-24 feet for a two-car driveway. Length varies but a typical attached garage setback from the street is 20-30 feet. A standard single-car driveway of 10×20 feet at 4 inches thick requires approximately 2.5 cubic yards of concrete — well within DIY territory if you rent a mixer, but most contractors prefer ready-mix truck delivery for slabs larger than 1 cubic yard.
        </p>
        <p className="text-gray-600 mb-4">
          For the base layer, use our <Link href="/crushed-stone-calculator" className="text-gray-900 underline hover:no-underline">Crushed Stone Calculator</Link> to estimate the compacted gravel base. A 4-inch gravel base is standard, and 6 inches is recommended in areas with clay soil or high water tables. This base layer is critical — skipping it leads to slab settling, cracking, and premature failure.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Concrete Mix and Reinforcement</h3>
        <p className="text-gray-600 mb-4">
          For driveways, specify 3,500-4,000 PSI concrete with a water-cement ratio below 0.50. In climates with freezing temperatures, request air-entrained concrete (5-7% air content) to resist freeze-thaw damage. Fiber-reinforced concrete adds micro-fibers to the mix that reduce plastic shrinkage cracking and can replace or supplement wire mesh. Rebar (#3 or #4 bars on 18-inch centers) provides structural reinforcement and is essential for driveways over vehicles over 10,000 pounds.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Concrete vs. Asphalt: Which Is Better for Your Driveway?</h3>
        <p className="text-gray-600 mb-4">
          Concrete and asphalt are the two most common driveway materials in the US, each with distinct advantages. Concrete lasts 30-40 years with minimal maintenance, reflects heat (keeping surfaces cooler), and can be stamped or stained for decorative finishes. Asphalt costs 20-30% less upfront, installs faster, and handles freeze-thaw cycles more flexibly — making it the preferred choice in northern states. Use our <Link href="/asphalt-calculator" className="text-gray-900 underline hover:no-underline">Asphalt Calculator</Link> to compare material quantities and costs for both options before deciding.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Cost Estimation</h3>
        <p className="text-gray-600 mb-4">
          Ready-mix concrete costs $125-$175 per cubic yard delivered. A typical 400 sq ft driveway (20×20 feet) at 4 inches thick requires about 5 cubic yards — roughly $700-$900 in materials. Add $300-$500 for gravel base, $100-$200 for rebar or wire mesh, and labor at $3-$6 per sq ft for a total installed cost of $2,500-$4,500 for a standard driveway. For a full project cost estimate, see our <Link href="/concrete-cost-calculator" className="text-gray-900 underline hover:no-underline">Concrete Cost Calculator</Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
