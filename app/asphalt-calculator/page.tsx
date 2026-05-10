export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import AsphaltForm from './AsphaltForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Compare with concrete driveway costs',
  },
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for base layers',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone for driveway base',
  },
  {
    name: 'Paver Calculator',
    slug: 'paver-calculator',
    description: 'Calculate paver alternatives for driveways',
  },
];

const faqs = [
  {
    question: 'How much does asphalt cost per ton?',
    answer: 'Hot-mix asphalt costs $40-$80 per ton for materials only. Installed costs run $85-$150 per ton including delivery, labor, and compaction. Prices fluctuate with crude oil prices since asphalt is a petroleum byproduct. Per square foot, asphalt driveways cost $3-$7 installed at 2-3 inches thick. Larger projects typically get better per-ton pricing.',
  },
  {
    question: 'How thick should asphalt be?',
    answer: 'Residential driveways: 2-3 inches of hot-mix asphalt (2 inches base course + 1 inch top course for best results). Commercial parking lots: 3-4 inches. Heavy truck access: 4-6 inches. Always install over a compacted gravel base of 4-6 inches for residential, 6-8 inches for commercial. The base layer is just as important as the asphalt thickness.',
  },
  {
    question: 'How long does an asphalt driveway last?',
    answer: 'A well-installed, properly maintained asphalt driveway lasts 15-20 years. Commercial parking lots last 10-15 years due to heavier traffic. Seal coating every 2-3 years extends life by 5-8 years. Crack filling immediately after cracks appear prevents water infiltration that leads to base failure. Total lifecycle cost is lower than concrete when maintenance is kept up.',
  },
  {
    question: 'Can I install asphalt myself?',
    answer: 'Standard hot-mix asphalt requires professional installation — the material must be placed at 275-325°F using a paver machine and compacted with a heavy roller within 15-20 minutes before it cools. Cold-patch asphalt is available in bags for small repairs (potholes, edges) but is not suitable for full driveway installation. Always hire a licensed paving contractor for new installations.',
  },
  {
    question: 'How much asphalt do I need for a driveway?',
    answer: 'Calculate the area in square feet (length × width), then multiply by thickness in feet, then multiply by 145 lbs/cubic foot (asphalt density), and divide by 2,000 to get tons. Example: A 40×12 ft driveway at 2.5 inches thick = 40 × 12 × 0.208 × 145 / 2,000 = 7.25 tons. Our calculator does this automatically — just enter your dimensions.',
  },
  {
    question: 'What is the best time to pave asphalt?',
    answer: 'Asphalt should be installed when air temperature is consistently above 50°F and rising — typically April through October in most US regions. Ground temperature must be above 50°F as well. Hot-mix asphalt cools rapidly in cold weather, preventing proper compaction. The ideal temperature range is 70-90°F. Avoid paving during rain or on wet ground.',
  },
  {
    question: 'How soon can I drive on new asphalt?',
    answer: 'Wait at least 24-48 hours for foot traffic and 3-5 days for vehicle traffic. In hot weather (above 85°F), asphalt stays soft longer — wait 5-7 days. Avoid parking in the same spot or turning wheels while stationary for the first 30 days to prevent indentations and scuff marks. Full curing takes 6-12 months.',
  },
  {
    question: 'What is the difference between asphalt and blacktop?',
    answer: 'Asphalt and blacktop are both made from aggregate and bitumen (petroleum binder), but blacktop uses a higher proportion of stone aggregate and is mixed at higher temperatures for a smoother finish. In practice, the terms are used interchangeably for residential driveways. True hot-mix asphalt (HMA) is the industry standard for roads and driveways.',
  },
];

export default function AsphaltCalculator() {
  return (
    <CalculatorLayout
      title="Asphalt Calculator"
      description="Calculate tons of asphalt needed for driveways and parking lots"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <AsphaltForm />

      <HowToUse
        steps={[
          'Measure the length of your driveway or parking area',
          'Measure the width of the area',
          'Determine the asphalt depth (2-3 inches for driveways)',
          'Enter the price per ton from your contractor',
          'Click Calculate to get tons and cost',
        ]}
        formula={{
          description: 'Asphalt calculation formula:',
          equation: 'Volume (cubic feet) = Length × Width × (Depth/12)\nWeight (tons) = Volume × 145 lbs/ft³ / 2000',
        }}
        tips={[
          'Install a 4-6 inch gravel base before asphalt',
          'Ensure proper drainage with 1-2% slope',
          'Asphalt must be installed in warm weather (above 50°F)',
          'Avoid driving on new asphalt for 24-48 hours',
          'Seal coat every 2-3 years for longevity',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Asphalt Driveway Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Asphalt Types</h3>
        <p className="text-gray-600 mb-4">
          <strong>Hot-mix asphalt (HMA)</strong> is the standard for driveways and roads. Aggregate (crushed stone, sand) is heated and mixed with liquid asphalt cement at 275-325°F, then placed and compacted while hot. The result is a durable, smooth, waterproof surface. <strong>Warm-mix asphalt (WMA)</strong> uses additives to allow mixing at lower temperatures (200-275°F), reducing energy costs and emissions while extending the paving season. <strong>Cold-mix asphalt</strong> is pre-mixed material sold in bags for patching and repairs — it does not require heating but produces a weaker, temporary surface not suitable for new driveways.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Base Layer Preparation</h3>
        <p className="text-gray-600 mb-4">
          The base layer under asphalt is critical to driveway longevity — most asphalt failures are caused by inadequate base, not asphalt quality. Excavate to remove organic soil (8-12 inches total depth for residential). Install 4-6 inches of <Link href="/crushed-stone-calculator" className="text-gray-900 underline hover:no-underline">compacted crushed stone</Link> (#21A or #21B) as the base course. Compact in 2-inch layers to 95% Modified Proctor density. The base must slope 1-2% for drainage — water pooling under asphalt causes the base to soften and the surface to crack. For areas with poor drainage or clay soils, increase the gravel base to 8 inches and consider a <Link href="/french-drain-calculator" className="text-gray-900 underline hover:no-underline">French drain</Link> along the driveway edge.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Asphalt vs. Concrete Driveways</h3>
        <p className="text-gray-600 mb-4">
          Asphalt driveways cost $3-$7 per square foot installed vs. $6-$12 for <Link href="/concrete-driveway-calculator" className="text-gray-900 underline hover:no-underline">concrete driveways</Link> — a 30-50% savings on initial installation. Asphalt flexes with ground movement and freeze-thaw cycles, making it the preferred choice in northern climates. Concrete lasts 30-40 years vs. asphalt&#39;s 15-20 years and requires less ongoing maintenance. Asphalt needs seal coating every 2-3 years ($0.15-$0.25/sq ft) and crack filling as needed. Concrete needs joint sealing and occasional pressure washing. In hot climates, asphalt softens in extreme heat and can be damaged by pointed heels and kickstands, while concrete stays rigid.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Seal Coating and Maintenance</h3>
        <p className="text-gray-600 mb-4">
          Seal coating is the most important maintenance task for asphalt longevity. Apply the first seal coat 6-12 months after installation to allow the asphalt to fully cure, then reapply every 2-3 years. Coal-tar sealant provides the best UV and chemical protection but is banned in some states. Asphalt-based sealants are environmentally friendlier and widely available. DIY seal coating costs $0.10-$0.15/sq ft; professional application runs $0.15-$0.30/sq ft. Fill cracks immediately when they appear — water infiltrating through cracks is the primary cause of base failure and potholes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Driveway Cost Estimation</h3>
        <p className="text-gray-600 mb-4">
          A typical single-car driveway (12×30 ft, 360 sq ft) costs $1,100-$2,500 installed with 2.5 inches of asphalt over a 4-inch gravel base. A two-car driveway (20×30 ft, 600 sq ft) runs $1,800-$4,200. These prices include excavation, gravel base, asphalt, and compaction. Get at least 3 quotes from paving contractors — prices vary 30-40% between companies. Beware of extremely low quotes, especially from door-to-door salespeople claiming leftover material — this often results in thin asphalt, no base layer, or recycled material that fails quickly.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
