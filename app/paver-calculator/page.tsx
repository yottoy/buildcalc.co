export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import PaverForm from './PaverForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand needed for paver base',
  },
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for base layer',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate landscaping materials',
  },
  {
    name: 'Concrete Driveway Calculator',
    slug: 'concrete-driveway-calculator',
    description: 'Compare with concrete driveway costs',
  },
];

const faqs = [
  {
    question: 'How many pavers do I need per square foot?',
    answer: 'The number depends on paver size: 4"×8" brick pavers need about 4.5 per sq ft. 6"×6" pavers need 4 per sq ft. 6"×9" pavers need 2.7 per sq ft. 12"×12" pavers need 1 per sq ft. 16"×16" pavers need 0.56 per sq ft. The calculator adjusts automatically based on the paver size you select.',
  },
  {
    question: 'How much sand do I need under pavers?',
    answer: 'Use exactly 1 inch of masonry sand as a leveling bed over compacted gravel. One cubic yard of sand covers approximately 324 sq ft at 1-inch depth. Too much sand (over 1.5 inches) allows pavers to shift and settle unevenly. After laying pavers, sweep polymeric sand into joints — about 50 lbs per 100 sq ft.',
  },
  {
    question: 'Do I need a gravel base under pavers?',
    answer: 'Yes — a compacted gravel base is essential for long-lasting paver installations. Install 4-6 inches of crushed stone (#21A or #57) compacted in 2-inch layers. The gravel base provides drainage, prevents frost heave, and distributes weight evenly. Skipping the base leads to settling, cracking, and premature failure within 2-3 years.',
  },
  {
    question: 'How much waste should I factor in for pavers?',
    answer: '10% waste is standard for straight (running bond) patterns. Add 15% for 45-degree herringbone or diagonal patterns due to more cuts at borders. Complex curved designs or circular patterns may need 20% extra. Pavers cut at borders are often unusable for other areas, so extra material is essential.',
  },
  {
    question: 'How much do pavers cost per square foot?',
    answer: 'Standard concrete pavers cost $2-$5 per square foot for materials. Natural stone pavers (travertine, bluestone) run $8-$20/sq ft. Brick pavers cost $4-$8/sq ft. Permeable pavers cost $6-$12/sq ft. Add base materials ($1-$3/sq ft) and installation labor ($6-$12/sq ft) for total installed costs of $10-$25 per square foot.',
  },
  {
    question: 'What pattern should I lay pavers in?',
    answer: 'Running bond (staggered brick pattern) is the simplest and strongest for driveways. Herringbone at 90° or 45° provides maximum interlock and is best for high-traffic areas and driveways. Basketweave creates a traditional look for patios. Random patterns work well with multiple paver sizes. For driveways, always use herringbone — it distributes load better than other patterns.',
  },
  {
    question: 'Do pavers need to be sealed?',
    answer: 'Sealing is optional but recommended every 2-3 years. Sealant enhances color, prevents staining, inhibits weed growth in joints, and protects against UV fading. Use a penetrating sealer for natural stone or a film-forming sealer for concrete pavers. Wait 60-90 days after installation before the first application to allow efflorescence to dissipate.',
  },
  {
    question: 'How long does a paver patio last?',
    answer: 'A properly installed paver patio lasts 25-50 years with minimal maintenance. Concrete pavers are rated for 8,000+ PSI compressive strength — stronger than poured concrete. Individual damaged pavers can be replaced without disturbing the rest of the patio, unlike concrete which must be demolished and repoured.',
  },
];

export default function PaverCalculator() {
  return (
    <CalculatorLayout
      title="Paver Calculator"
      description="Calculate number of pavers needed for patios and walkways"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <PaverForm />

      <HowToUse
        steps={[
          'Measure the length of your patio or walkway',
          'Measure the width of the area',
          'Select your paver size',
          'Choose a waste factor (10% is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Paver calculation formula:',
          equation: 'Area = Length × Width\nPavers = (Area / Paver Size) × (1 + Waste Factor)',
        }}
        tips={[
          'Excavate 7-8 inches deep for base layers',
          'Compact gravel base in 2-inch layers',
          'Use edge restraints to prevent paver spreading',
          'Sweep polymeric sand into joints for stability',
          'Seal pavers every 2-3 years for protection',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Paver Installation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Planning Your Paver Project</h3>
        <p className="text-gray-600 mb-4">
          A successful paver installation starts with accurate measurements and proper material planning. Measure the length and width of your patio, walkway, or driveway area and add 6-12 inches to each dimension for edge restraints and border cuts. For curved or irregular areas, break the space into rectangles and triangles, calculate each section separately, then add them together. The total paver count depends on paver size — standard 4×8 inch pavers require 4.5 per square foot, while 12×12 inch pavers need just 1 per square foot.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Base Layer Requirements</h3>
        <p className="text-gray-600 mb-4">
          The base layer is the foundation that determines whether your pavers stay level for decades or start shifting within a year. Excavate the area to a depth of 7-9 inches (4-6 inches for gravel base + 1 inch sand + paver thickness). Install 4-6 inches of compacted crushed stone (<Link href="/gravel-cost-calculator" className="text-gray-900 underline hover:no-underline">calculate gravel needed</Link>) in 2-inch layers, compacting each layer with a plate compactor. The base should slope 1/8 inch per foot away from structures for drainage. Top the gravel with exactly 1 inch of <Link href="/sand-calculator" className="text-gray-900 underline hover:no-underline">masonry sand</Link>, screeded smooth and level using pipe rails as guides.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Choosing Paver Materials</h3>
        <p className="text-gray-600 mb-4">
          <strong>Concrete pavers</strong> ($2-$5/sq ft) are the most popular choice — manufactured in consistent sizes and hundreds of color/texture options. They offer 8,000+ PSI strength and are available in interlocking shapes. <strong>Brick pavers</strong> ($4-$8/sq ft) are fired clay that develops a natural patina over time, offering a classic aesthetic. <strong>Natural stone</strong> ($8-$20/sq ft) includes travertine, bluestone, flagstone, and granite — each with unique character but higher cost and more complex installation. <strong>Permeable pavers</strong> ($6-$12/sq ft) have specially designed joints that allow water infiltration, meeting stormwater management requirements in many jurisdictions.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Pavers vs. Poured Concrete</h3>
        <p className="text-gray-600 mb-4">
          Pavers cost 30-50% more than poured concrete upfront but offer significant advantages. Individual pavers can be lifted and replaced if damaged or stained, while concrete requires demolishing and repouring entire sections. Pavers flex with ground movement rather than cracking, making them ideal for regions with freeze-thaw cycles or expansive soils. Poured concrete provides a smoother surface and works better for areas requiring exact slopes (like garage floors), and costs $6-$12 per square foot installed. Compare your options with our <Link href="/concrete-driveway-calculator" className="text-gray-900 underline hover:no-underline">Concrete Driveway Calculator</Link>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Total Project Cost Estimate</h3>
        <p className="text-gray-600 mb-4">
          A complete paver installation includes several material layers: pavers ($2-$8/sq ft), gravel base ($1-$2/sq ft), sand ($0.50-$1/sq ft), edge restraints ($1-$3/linear ft), and polymeric joint sand ($0.50-$1/sq ft). Total material cost for a 300 sq ft patio runs $1,200-$3,600 depending on paver choice. Professional installation adds $6-$12/sq ft for labor, bringing total installed cost to $3,000-$7,500 for a typical patio. DIY installation saves roughly 50% but requires renting a plate compactor ($50-$80/day) and setting aside 2-4 weekends for a project this size.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
