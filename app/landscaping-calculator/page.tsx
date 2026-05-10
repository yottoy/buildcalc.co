export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import LandscapingForm from './LandscapingForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate topsoil and fill dirt needed',
  },
  {
    name: 'Sod Calculator',
    slug: 'sod-calculator',
    description: 'Calculate sod for lawn installation',
  },
  {
    name: 'Bulk Material Calculator',
    slug: 'bulk-material-calculator',
    description: 'Calculate cubic yards for bulk materials',
  },
  {
    name: 'Pea Gravel Calculator',
    slug: 'pea-gravel-calculator',
    description: 'Calculate pea gravel for landscaping areas',
  },
];

const faqs = [
  {
    question: 'How deep should mulch be?',
    answer: 'Apply 2-3 inches of mulch for flower beds and around trees. Too much mulch (over 4 inches) suffocates roots, harbors pests, and creates a water-repellent mat. Keep mulch 3-6 inches away from plant stems and tree trunks to prevent bark rot. One cubic yard covers approximately 160 sq ft at 2 inches deep or 108 sq ft at 3 inches deep.',
  },
  {
    question: 'How often should I replace mulch?',
    answer: 'Refresh organic mulch annually in spring. Most mulches decompose 30-50% per year — add 1-2 inches to maintain the 2-3 inch target depth. Complete replacement is needed every 2-3 years when the existing layer becomes matted or composted. Turn or rake existing mulch before adding a new layer to prevent compaction and water-repellent surfaces.',
  },
  {
    question: 'What type of mulch is best for landscaping?',
    answer: 'Hardwood bark mulch lasts longest (2-3 years) and provides a classic look. Pine bark nuggets are lighter and resist washing on slopes. Cedar mulch naturally repels insects and decays slowly. Dyed mulch (black, red, brown) holds color longer but uses chemical dyes. Rubber mulch never decomposes but does not enrich soil and can leach chemicals. For vegetable gardens, use straw or untreated wood chips.',
  },
  {
    question: 'How much topsoil do I need for a new lawn?',
    answer: 'New lawns need 4-6 inches of quality topsoil for proper root establishment. Topdressing existing lawns needs 1/4 to 1/2 inch. Raised garden beds need 8-12 inches of topsoil mixed with compost. For flower beds, use 6-8 inches. Calculate the volume with our Dirt Calculator for precise amounts.',
  },
  {
    question: 'How many cubic yards of material do I need?',
    answer: 'Multiply length × width (in feet) × depth (in inches), divide by 12, then divide by 27 to get cubic yards. Example: 20 ft × 10 ft × 3 inches = 600 ÷ 12 ÷ 27 = 1.85 cubic yards. One cubic yard is equivalent to about 13-14 wheelbarrow loads. Our calculator does this math automatically.',
  },
  {
    question: 'Should I use landscape fabric under mulch?',
    answer: 'Landscape fabric works well under rock and gravel to prevent weeds permanently. Under organic mulch, fabric is less effective — it prevents mulch from enriching the soil as it decomposes, and weeds eventually root in the decomposed mulch layer on top. For mulched beds, skip the fabric and rely on 3 inches of mulch plus pre-emergent herbicide for weed prevention.',
  },
  {
    question: 'What is the cheapest landscaping material?',
    answer: 'Pine straw mulch is the cheapest ground cover at $3-$5 per bale (covers 25-30 sq ft). Bulk mulch runs $20-$35 per cubic yard delivered. Pea gravel costs $30-$50/ton. Topsoil costs $15-$30/yd³. Sod is more expensive at $0.30-$0.80/sq ft but provides instant results. Seed is cheapest for lawns at $0.05-$0.15/sq ft.',
  },
  {
    question: 'How do I calculate materials for irregularly shaped areas?',
    answer: 'Break irregular shapes into rectangles and triangles, measure each section, and add the areas together. For circular beds, use Area = π × radius². For kidney or curved shapes, measure the widest and narrowest widths, average them, and multiply by length. Add 10% extra for irregular edges and estimation errors.',
  },
];

export default function LandscapingCalculator() {
  return (
    <CalculatorLayout
      title="Landscaping Calculator"
      description="Calculate materials for landscaping and garden projects"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <LandscapingForm />

      <HowToUse
        steps={[
          'Measure area length and width in feet',
          'Determine depth needed in inches',
          'Select material type (mulch, topsoil, compost, or rock)',
          'Click Calculate to get cubic yards and tons',
        ]}
        formula={{
          description: 'Volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27',
        }}
        tips={[
          'Use landscape fabric under mulch and rock',
          'Edge beds for clean lines and to contain materials',
          'Water plants after mulching',
          'Keep mulch away from plant stems',
          'Order 10% extra for irregular shapes',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Landscaping Materials Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Bulk Landscaping Materials</h3>
        <p className="text-gray-600 mb-4">
          Landscaping projects typically require bulk materials measured in cubic yards or tons. One cubic yard is a 3×3×3 foot cube — enough to fill roughly 13 wheelbarrow loads. For mulch, one cubic yard covers 160 sq ft at 2 inches deep. For topsoil, one cubic yard covers 108 sq ft at 3 inches deep. For rock and gravel, coverage varies by density — one ton of pea gravel covers about 80 sq ft at 2 inches, while one ton of river rock covers 60-70 sq ft at the same depth due to larger stone size and more air gaps.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Mulch Types and Applications</h3>
        <p className="text-gray-600 mb-4">
          <strong>Organic mulches</strong> — shredded bark, wood chips, pine straw, and compost — decompose over time, enriching the soil with nutrients and improving soil structure. They need replenishment every 1-2 years but provide the healthiest growing environment for plants. <strong>Inorganic mulches</strong> — <Link href="/pea-gravel-calculator" className="text-gray-900 underline hover:no-underline">pea gravel</Link>, river rock, lava rock, and rubber — never decompose and rarely need replacement. They provide permanent weed suppression and a clean appearance but do not improve soil and can make the soil hotter in summer. Choose organic for garden beds and plantings, inorganic for pathways, borders, and low-maintenance areas.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Topsoil and Soil Amendments</h3>
        <p className="text-gray-600 mb-4">
          Quality topsoil is the foundation of healthy landscapes. Screened topsoil ($15-$30/yd³) is filtered to remove rocks, roots, and debris — use it for grading, filling, and <Link href="/sod-calculator" className="text-gray-900 underline hover:no-underline">sod installation</Link>. Garden mix ($25-$45/yd³) blends topsoil with compost and sometimes peat moss for nutrient-rich planting beds. Compost ($30-$50/yd³) is decomposed organic material that improves drainage in clay soils and water retention in sandy soils. For new lawns, apply 4-6 inches of screened topsoil. For gardens, use 8-12 inches of garden mix. Calculate your exact needs with our <Link href="/dirt-calculator" className="text-gray-900 underline hover:no-underline">Dirt Calculator</Link>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Project Planning and Budgeting</h3>
        <p className="text-gray-600 mb-4">
          Most landscaping materials are available in bulk delivery (dump truck) or bags from home improvement stores. Bulk delivery is 60-75% cheaper per cubic yard but requires minimum orders of 1-3 yards and accessible space for the truck. A typical landscaping project for a 2,000 sq ft yard includes: mulch for beds (3-5 cubic yards, $100-$200), topsoil for grading (2-4 yd³, $50-$120), decorative rock for borders (1-2 tons, $60-$160), and sod or seed for lawn areas. Delivery charges run $50-$150 per load — consolidate orders to minimize delivery costs.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Seasonal Timing for Landscaping Projects</h3>
        <p className="text-gray-600 mb-4">
          Spring (March-May) is the most popular time for landscaping, but material prices and contractor availability reflect the demand. Fall (September-November) is the best time for planting trees, shrubs, and cool-season grass — cooler temperatures reduce transplant stress and roots establish through winter. Mulch can be applied any time but is most effective in late spring after soil has warmed. Avoid major grading and topsoil work during winter when frozen or saturated soil compacts poorly and creates drainage problems.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
