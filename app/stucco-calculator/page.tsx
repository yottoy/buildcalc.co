export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import StuccoForm from './StuccoForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'All Concrete Calculators',
    slug: 'concrete-calculators',
    description: 'Browse all free concrete and masonry calculators in one place',
  },
  {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    description: 'Estimate drywall sheets needed for walls and ceilings',
  },
  {
    name: 'Brick Calculator',
    slug: 'brick-calculator',
    description: 'Estimate number of bricks required for walls',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction project costs',
  },
  {
    name: 'Sand Calculator',
    slug: 'sand-calculator',
    description: 'Calculate sand for stucco mortar mix',
  },
];

const faqs = [
  {
    question: 'What is the difference between 2-coat and 3-coat stucco?',
    answer: 'Three-coat stucco (scratch coat, brown coat, finish coat) is the traditional system — total thickness 7/8 inch, applied over metal lath on wood-framed walls. It provides superior durability and crack resistance. Two-coat stucco (base coat + finish coat) is 5/8 inch thick and is designed for solid substrates like concrete block, CMU, or existing masonry where the substrate itself provides the mechanical bond.',
  },
  {
    question: 'How thick should stucco be?',
    answer: 'Three-coat stucco totals 7/8 inch: scratch coat (3/8"), brown coat (3/8"), and finish coat (1/8"). Two-coat systems total 5/8 inch: base coat (1/2") and finish coat (1/8"). Each coat must cure 24-48 hours before applying the next. Never apply more than the specified thickness per coat — thicker coats crack as they cure.',
  },
  {
    question: 'Do I need metal lath for stucco?',
    answer: 'Yes — metal lath (galvanized wire mesh, typically 17-gauge, 2.5 lb/yd²) is required over wood sheathing and most non-masonry substrates. It provides mechanical grip for the scratch coat. Attach lath with corrosion-resistant nails or staples every 6 inches. Over concrete block or masonry, lath is not required because stucco bonds directly to the rough surface.',
  },
  {
    question: 'How long does stucco take to dry and cure?',
    answer: 'Each coat needs 24-48 hours minimum cure time before applying the next coat. Mist the curing surface with water 2-3 times daily to prevent too-rapid drying, which causes cracking. Total installation takes 5-7 days for a three-coat system. Full curing strength develops over 28 days. Avoid applying stucco below 40°F or above 90°F — temperature extremes compromise curing.',
  },
  {
    question: 'How much does stucco cost per square foot?',
    answer: 'Stucco materials cost $3-$6 per square foot for a three-coat system (cement, sand, lath, accessories). Professional installation runs $6-$12/sq ft for new construction and $8-$14/sq ft for re-stucco over existing surfaces. A 2,000 sq ft exterior wall area costs $12,000-$28,000 fully installed. DIY materials-only for the same area: $6,000-$12,000.',
  },
  {
    question: 'What type of stucco finish is best?',
    answer: 'Smooth (fine sand) finishes look modern but show cracks and repairs more easily. Dash (rough) finishes hide imperfections and are the most forgiving for DIY application. Sand float finish is the most popular — a uniform sandy texture applied with a float. Lace (skip trowel) creates an irregular pattern popular in southwestern design. Choose based on aesthetics and maintenance tolerance.',
  },
  {
    question: 'How do I repair cracked stucco?',
    answer: 'Hairline cracks (under 1/16"): fill with elastomeric caulk and repaint. Small cracks (1/16" to 1/4"): clean, dampen, and fill with pre-mixed stucco patch. Large cracks or spalling: remove loose stucco back to the lath, apply bonding agent, and re-apply all three coats. Extensive cracking or bulging may indicate structural issues — have a contractor inspect before patching.',
  },
  {
    question: 'Is stucco or siding better for my house?',
    answer: 'Stucco excels in dry, warm climates (Southwest, California, Florida) — it breathes well, resists fire, and lasts 50-80 years. Vinyl or fiber cement siding performs better in wet, humid climates and costs less ($4-$8/sq ft installed). Stucco requires more skill to install correctly and is harder to repair. Siding is easier to replace in sections. Both provide excellent weather protection when properly installed.',
  },
];

export default function StuccoCalculator() {
  return (
    <CalculatorLayout
      title="Stucco Calculator"
      description="Calculate stucco materials needed for exterior finishes"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <StuccoForm />

      <HowToUse
        steps={[
          'Calculate total wall area (length × height)',
          'Subtract area for windows and doors',
          'Choose between 2-coat or 3-coat system',
          'Click Calculate to get materials needed',
          'Order 10% extra for waste',
        ]}
        formula={{
          description: 'Stucco material calculation:',
          equation: 'Base Coat Bags = Area / 25 sq ft per bag\nFinish Coat Bags = Area / 50 sq ft per bag\n(Three-coat uses 2× base coat)',
        }}
        tips={[
          'Apply stucco in temperatures between 40°F and 90°F',
          'Keep fresh stucco moist for 48 hours after application',
          'Use corner beads on all outside corners',
          'Install weep screed at the bottom of walls',
          'Consider synthetic stucco (EIFS) for easier application',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Stucco Installation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding the Three-Coat Stucco System</h3>
        <p className="text-gray-600 mb-4">
          Traditional three-coat stucco has been used for centuries and remains the gold standard for exterior wall finishes on wood-framed construction. The system consists of three layers applied over metal lath attached to building paper and sheathing. The <strong>scratch coat</strong> (3/8 inch) is the first layer — mixed stiff and scratched with horizontal grooves to provide tooth for the next coat. The <strong>brown coat</strong> (3/8 inch) is the leveling layer — floated smooth and true to create a flat, plumb surface. The <strong>finish coat</strong> (1/8 inch) provides the final texture and color. Each coat must cure 24-48 hours with periodic mist-watering before applying the next.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Stucco Mix Ratios and Materials</h3>
        <p className="text-gray-600 mb-4">
          Standard stucco mix for the scratch and brown coats is 1 part Portland cement to 3-4 parts <Link href="/sand-calculator" className="text-gray-900 underline hover:no-underline">masonry sand</Link> by volume, with just enough water for workability. Pre-mixed base coat bags (80 lb) cover approximately 25 square feet per bag at 3/8 inch thickness. Finish coat bags cover about 50 square feet per bag. For a 1,000 sq ft wall, expect to use approximately 40 bags of base coat, 20 bags of finish coat, 30 sheets of metal lath (2.5 lb, 27"×96"), and 200+ linear feet of accessories (corner beads, weep screed, control joints).
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">EIFS vs. Traditional Stucco</h3>
        <p className="text-gray-600 mb-4">
          Exterior Insulation and Finish System (EIFS), sometimes called synthetic stucco, is a multi-layer system that includes rigid foam insulation bonded to the wall, a fiberglass mesh reinforcement, and a thin acrylic finish coat. EIFS provides superior energy efficiency (R-4 to R-8 depending on foam thickness) and weighs 80% less than traditional stucco. However, EIFS has a troubled history with moisture problems — older barrier-type EIFS trapped water behind the foam, causing extensive rot damage. Modern drainable EIFS systems with a drainage plane behind the insulation have largely solved this problem. Traditional stucco remains the safer, more proven choice in most applications.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Stucco Maintenance and Longevity</h3>
        <p className="text-gray-600 mb-4">
          Well-installed traditional stucco lasts 50-80 years with minimal maintenance. Repaint every 5-10 years using elastomeric paint, which flexes with minor movement and bridges hairline cracks. Inspect annually for cracks around windows, doors, and where different materials meet — caulk with elastomeric sealant. Keep sprinklers directed away from stucco walls, as constant moisture accelerates deterioration. Clean stucco with a garden hose and soft brush — avoid pressure washing, which can drive water behind the surface and cause damage. For complete project budgeting including stucco, framing, and interior finishes, see our <Link href="/construction-cost-calculator" className="text-gray-900 underline hover:no-underline">Construction Cost Calculator</Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
