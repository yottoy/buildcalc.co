export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import FrenchDrainForm from './FrenchDrainForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Gravel Cost Calculator',
    slug: 'gravel-cost-calculator',
    description: 'Calculate gravel costs for drainage stone',
  },
  {
    name: 'Crushed Stone Calculator',
    slug: 'crushed-stone-calculator',
    description: 'Calculate crushed stone needed for drain fill',
  },
  {
    name: 'Landscaping Calculator',
    slug: 'landscaping-calculator',
    description: 'Calculate materials for landscaping projects',
  },
  {
    name: 'Dirt Calculator',
    slug: 'dirt-calculator',
    description: 'Calculate fill dirt for backfill and grading',
  },
];

const faqs = [
  {
    question: 'What is a French drain and how does it work?',
    answer: 'A French drain is a trench filled with gravel surrounding a perforated pipe that collects and redirects groundwater away from problem areas. Water enters through the gravel, flows into the perforated pipe through its holes, and gravity carries it to a discharge point (street, storm drain, dry well, or low area). French drains are used to protect foundations, dry out soggy yards, and manage surface water runoff.',
  },
  {
    question: 'How deep and wide should a French drain be?',
    answer: 'Standard French drains are 18-24 inches deep and 12-18 inches wide. Foundation drains (curtain drains) should extend below the footer — typically 24-36 inches deep. Width depends on water volume: 12 inches for moderate drainage, 18 inches for heavy water flow. The trench must slope at least 1% (1 inch per 8 feet of length) toward the outlet for gravity flow.',
  },
  {
    question: 'What type of gravel should I use for a French drain?',
    answer: 'Use clean, washed 3/4-inch to 1-inch crushed stone or drainage rock without fines (dust). Angular crushed stone creates voids for water flow and resists compaction. Avoid pea gravel (too small, can shift), river rock (too smooth, poor interlock), and any stone with fines or dust — fine particles clog the system and reduce drainage capacity over time.',
  },
  {
    question: 'Do I need landscape fabric in a French drain?',
    answer: 'Yes — non-woven geotextile fabric (not standard landscape fabric) is essential to prevent soil from infiltrating and clogging the gravel. Wrap the fabric completely around the gravel fill, overlapping at the top by at least 6 inches. The fabric should be permeable enough for water but fine enough to block soil particles. This extends the drain\'s effective lifespan from 5-10 years to 20-30 years.',
  },
  {
    question: 'How much does a French drain cost?',
    answer: 'DIY materials cost $5-$12 per linear foot: perforated pipe ($0.50-$1.50/ft), drainage gravel ($3-$6/ft), geotextile fabric ($0.50-$1/ft), and fittings. Professional installation runs $25-$60 per linear foot including labor. A typical 50-foot residential French drain costs $250-$600 for DIY or $1,250-$3,000 professionally installed. Interior basement drains cost $40-$100/ft due to concrete cutting.',
  },
  {
    question: 'What size pipe should I use?',
    answer: 'Standard 4-inch perforated PVC or corrugated pipe handles most residential drainage needs. Use rigid PVC for long runs and deep installations — it resists crushing and provides better flow. Corrugated pipe is flexible and easier to install but prone to sagging and has lower flow capacity. For high-volume drainage or commercial applications, use 6-inch pipe. Install with holes facing down so water rises into the pipe.',
  },
  {
    question: 'Where should a French drain discharge?',
    answer: 'Discharge to the street gutter, storm drain, a dry well (underground gravel pit), or a low area of your property where water can disperse safely. Never discharge onto a neighbor\'s property or into the sanitary sewer system. Check local codes — some municipalities require permits for discharging into storm drainage systems. A pop-up emitter at the outlet prevents animals from entering the pipe.',
  },
  {
    question: 'How long does a French drain last?',
    answer: 'A properly installed French drain with geotextile fabric lasts 20-30 years. Without fabric, expect 5-10 years before soil infiltration clogs the gravel. PVC pipe lasts 50+ years; corrugated pipe lasts 15-25 years. Annual maintenance includes flushing the pipe with a garden hose through cleanout access points and checking the outlet for blockages.',
  },
];

export default function FrenchDrainCalculator() {
  return (
    <CalculatorLayout
      title="French Drain Calculator"
      description="Estimate materials needed for drainage systems"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <FrenchDrainForm />

      <HowToUse
        steps={[
          'Measure the length of the drainage trench needed',
          'Determine the width of the trench (typically 12-18 inches)',
          'Decide on the depth (typically 18-24 inches)',
          'Select the perforated pipe size (4 inch is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'French drain material calculation:',
          equation: 'Gravel Volume (cubic yards) = (Length × Width × Depth/12) / 27\nPipe Length = Trench Length\nFabric = (Length + 4) × (Width + 2) square feet',
        }}
        tips={[
          'Slope the trench at least 1% (1 inch per 8 feet) for proper drainage',
          'Use perforated pipe with holes facing down',
          'Wrap landscape fabric around gravel, not just line the trench',
          'Add a cleanout access point for maintenance',
          'Direct the drain outlet away from buildings',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete French Drain Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">When You Need a French Drain</h3>
        <p className="text-gray-600 mb-4">
          French drains solve three common water problems: standing water in yards after rain, water intrusion into basements or crawl spaces, and erosion from surface runoff. Signs you need a French drain include persistently soggy areas in your yard, water stains or dampness on basement walls, mold or musty odors in below-grade spaces, and ice forming on walkways from water seepage. A French drain intercepts water underground before it reaches problem areas and redirects it to a safe discharge point using gravity.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Designing Your French Drain System</h3>
        <p className="text-gray-600 mb-4">
          Effective French drain design starts with identifying the water source and choosing the optimal trench route. <strong>Curtain drains</strong> intercept water flowing downhill toward your home — install them upslope of the problem area, perpendicular to the water flow. <strong>Foundation drains</strong> run along the base of the foundation footer to collect water before it enters the basement. <strong>Yard drains</strong> collect standing water in low spots and redirect it to a discharge point. The trench must maintain a consistent slope of at least 1% (1 inch drop per 8 feet of length) from start to outlet — use a string level or laser level during excavation.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Materials and Installation</h3>
        <p className="text-gray-600 mb-4">
          A standard French drain requires three key materials: perforated pipe, drainage gravel, and geotextile fabric. Dig the trench to the designed width (12-18 inches) and depth (18-24 inches), maintaining the slope. Line the trench with non-woven geotextile fabric, leaving enough extra on each side to fold over the top. Add 2-3 inches of clean <Link href="/gravel-cost-calculator" className="text-gray-900 underline hover:no-underline">drainage stone</Link> to the bottom, lay the perforated pipe (holes facing down), then fill with gravel to within 4-6 inches of the surface. Fold the fabric over the top of the gravel, overlapping at least 6 inches. Backfill with soil and topsoil, or leave gravel exposed depending on aesthetics and maintenance access.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">French Drain vs. Other Drainage Solutions</h3>
        <p className="text-gray-600 mb-4">
          <strong>French drain vs. surface drain:</strong> Surface drains (catch basins with grates) collect water from the surface and pipe it away — best for driveways, patios, and areas where water pools on hard surfaces. French drains collect subsurface water from saturated soil — best for soggy lawns and foundation protection. Many drainage plans combine both systems. <strong>French drain vs. dry well:</strong> A dry well is a destination, not a collector — it receives water from French drains, downspouts, or surface drains and allows it to percolate into surrounding soil. Use a dry well as the discharge point when no storm drain or suitable surface outlet is available.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Maintenance and Troubleshooting</h3>
        <p className="text-gray-600 mb-4">
          Flush the pipe annually through cleanout access points (install a vertical PVC pipe with a removable cap at the highest point). Check the outlet for obstructions after heavy rains. If drainage slows over time, the most common cause is sediment accumulation — professional hydro-jetting can clear stubborn blockages. Tree roots are another common problem — avoid routing French drains near mature trees, and use root barrier if trees are within 20 feet. For ongoing <Link href="/landscaping-calculator" className="text-gray-900 underline hover:no-underline">landscaping projects</Link> around the drain, avoid compacting the soil over the trench with heavy equipment.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
