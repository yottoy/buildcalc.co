export const dynamic = 'force-static';

import Link from 'next/link';

const tools = [
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    headline: 'Total cost from dimensions + price per yard',
    description:
      'Enter slab or footing dimensions and your local concrete price to get total cubic yards and estimated cost. Accounts for standard waste and rounding to the nearest quarter yard.',
    bestFor: 'Patios, slabs, footings, foundations',
  },
  {
    name: 'Concrete Steps Calculator',
    slug: 'concrete-steps-calculator',
    headline: 'Cubic yards and 80-lb bag count for stairs',
    description:
      'Enter the number of steps, rise, run, and width to get exact cubic yards and how many 80-lb bags you need. Handles straight and landing-style stair configurations.',
    bestFor: 'Entry steps, porch stairs, outdoor staircases',
  },
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    headline: 'Yards needed for any driveway shape',
    description:
      'Enter driveway length, width, and slab thickness to get cubic yards and bag counts. Includes a cost estimate when you add a price per yard.',
    bestFor: 'Residential driveways, parking pads, aprons',
  },
  {
    name: 'Brick Calculator',
    slug: 'brick-calculator',
    headline: 'Brick count + mortar for walls and surfaces',
    description:
      'Enter wall or surface dimensions and brick size to get the exact brick count and bags of mortar required. Includes standard 10% waste allowance.',
    bestFor: 'Retaining walls, garden walls, veneer, fireplaces',
  },
  {
    name: 'Stucco Calculator',
    slug: 'stucco-calculator',
    headline: 'Bags per coat for 2-coat and 3-coat systems',
    description:
      'Enter wall area and choose a 2-coat or 3-coat system to get bag quantities for scratch, brown, and finish coats. Includes lath and corner bead estimates.',
    bestFor: 'Exterior walls, additions, stucco repairs',
  },
];

const faqs = [
  {
    question: 'How many cubic yards of concrete do I need?',
    answer:
      'Multiply length × width × depth (all in feet) then divide by 27 to convert cubic feet to cubic yards. Add 10% for waste. For example, a 10×10 ft slab at 4 inches thick is (10 × 10 × 0.333) ÷ 27 = 1.23 cubic yards — order 1.4 yards to be safe. Use our individual calculators above to skip the math.',
  },
  {
    question: 'How much does a cubic yard of concrete cost?',
    answer:
      'Ready-mix concrete ranges from $120–$200 per cubic yard depending on your region, mix design, and delivery distance. Short-load fees ($50–$150) apply for orders under 5 yards. Fiber reinforcement and accelerators add $10–$30 per yard. Get 2–3 quotes from local batch plants before ordering.',
  },
  {
    question: 'When should I use bags vs. ready-mix concrete?',
    answer:
      'Use 80-lb bags for projects under about 1 cubic yard — steps, fence posts, small repairs. Ready-mix is more cost-effective and stronger for anything larger. A cubic yard requires roughly 45 bags of 80-lb mix, which takes several hours to mix by hand. For driveways and slabs over 1 yard, always order ready-mix.',
  },
  {
    question: 'What is the right concrete thickness for a driveway vs. a walkway?',
    answer:
      'Driveways should be at least 4 inches thick (5–6 inches for heavy vehicles or trucks). Walkways and patios are typically 3–4 inches. Steps use a minimum of 3.5 inches at the tread. Thicker pours cost more but dramatically increase longevity and load capacity.',
  },
  {
    question: 'Do these calculators include reinforcement (rebar or wire mesh)?',
    answer:
      'The volume and cost calculators cover concrete only. Rebar and wire mesh are separate line items — a standard 10×10 slab uses about one roll of 6×6 wire mesh or rebar on 18-inch centers. Add 10–15% to your total project budget for reinforcement, forming lumber, and stakes.',
  },
];

export default function ConcreteCalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Concrete Calculators</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Concrete Calculators</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Free concrete calculators for every project type. Enter your dimensions and get instant
            cubic yard totals, bag counts, and cost estimates — no account needed.
          </p>
        </header>

        {/* Tool cards */}
        <section className="mb-14">
          <div className="grid gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      {tool.name}
                    </h2>
                    <p className="text-sm font-medium text-blue-600 mb-2">{tool.headline}</p>
                    <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                    <p className="text-xs text-gray-400">
                      <span className="font-medium text-gray-500">Best for:</span> {tool.bestFor}
                    </p>
                  </div>
                  <span className="text-blue-500 text-xl mt-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How concrete calculations work */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Concrete Calculations Work</h2>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">
              All concrete volume calculations follow the same formula: <strong>length × width × depth ÷ 27</strong>.
              Dividing by 27 converts cubic feet to cubic yards, the unit batch plants use for pricing.
              Always add at least <strong>10% for waste</strong> — concrete can't be returned once poured, and running
              short on a pour creates cold joints that weaken the structure.
            </p>
            <p className="mb-4">
              Steps and irregular shapes require breaking the pour into rectangular sections and summing the volumes.
              That's what the concrete steps calculator automates: each tread-and-riser combination becomes its own
              rectangular block, and the results are added together.
            </p>
            <p className="mb-4">
              For cost estimates, the calculators use your local price per cubic yard. Call 2–3 local batch plants
              for quotes — prices vary by $30–$60 per yard between suppliers in the same city. Short-load fees,
              fiber additives, and accelerators are quoted separately and should be added to the calculator output.
            </p>
            <p>
              Brick and stucco calculators use area (square feet) rather than volume, converting through material-specific
              coverage rates. A standard modular brick covers about 6.75 bricks per square foot at 3/8-inch mortar
              joints. Stucco coverage varies by coat thickness, which is why the stucco calculator asks you to choose
              a 2-coat or 3-coat system.
            </p>
          </div>
        </section>

        {/* When to hire vs. DIY */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to DIY vs. Hire a Contractor</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-green-800 mb-3">Good for DIY</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Steps and small pours under 1 cubic yard (bags)</li>
                <li>• Fence post footings</li>
                <li>• Small patio slabs under 100 sq ft</li>
                <li>• Brick garden walls under 3 ft tall</li>
                <li>• Stucco patch repairs</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold text-amber-800 mb-3">Hire a Contractor</h3>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>• Driveways (requires proper grading and drainage)</li>
                <li>• Structural footings and foundations</li>
                <li>• Large pours requiring a pump truck</li>
                <li>• Any work near underground utilities</li>
                <li>• Full stucco exterior systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div
            itemScope
            itemType="https://schema.org/FAQPage"
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text" className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related clusters */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Calculator Collections</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/wood-fence-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
              <p className="font-medium text-gray-900">Fence Calculators</p>
              <p className="text-sm text-gray-500 mt-1">Wood fence, chain link, and fence post calculators</p>
            </Link>
            <Link href="/gravel-cost-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
              <p className="font-medium text-gray-900">Gravel & Aggregate Calculators</p>
              <p className="text-sm text-gray-500 mt-1">Pea gravel, crushed stone, and bulk material calculators</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
