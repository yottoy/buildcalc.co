export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import InsulationForm from './InsulationForm';
import Link from 'next/link';

const relatedCalculators = [
  {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    description: 'Estimate drywall sheets needed for walls and ceilings',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction costs',
  },
  {
    name: 'Material Cost Estimator',
    slug: 'material-cost-estimator',
    description: 'Estimate total material costs for construction projects',
  },
  {
    name: 'Stucco Calculator',
    slug: 'stucco-calculator',
    description: 'Calculate stucco materials for exterior finishes',
  },
];

const faqs = [
  {
    question: 'What R-value do I need for my home?',
    answer: 'R-value requirements depend on climate zone and location in the home. Walls: R-13 to R-21 (R-13 minimum for 2x4 walls, R-21 for 2x6 walls). Attics: R-30 to R-60 (R-38 minimum in most US climates, R-49 to R-60 in cold northern regions). Floors over unheated spaces: R-13 to R-30. Basement walls: R-10 to R-15. Check your local building code for specific requirements in your climate zone.',
  },
  {
    question: 'What type of insulation is best?',
    answer: 'Fiberglass batts are the most popular — affordable ($0.50-$1.00/sq ft), DIY-friendly, and available in pre-cut sizes for standard framing. Blown cellulose fills gaps and irregular spaces better than batts at $0.60-$1.20/sq ft. Spray foam provides the highest R-value per inch (R-6 to R-7 for closed-cell) plus air sealing, but costs $1.50-$3.50/sq ft and requires professional installation.',
  },
  {
    question: 'Can I install insulation myself?',
    answer: 'Yes — fiberglass batts are designed for DIY installation with basic tools (utility knife, staple gun). Wear protective gear: N95 mask, safety glasses, gloves, and long sleeves. Blown insulation is DIY-possible with rental blower equipment ($50-$100/day from home improvement stores). Spray foam insulation should always be professionally installed due to chemical handling and equipment requirements.',
  },
  {
    question: 'How much does insulation cost?',
    answer: 'Fiberglass batts: $0.50-$1.00 per square foot (R-13 to R-19). Blown fiberglass: $0.60-$1.00/sq ft. Blown cellulose: $0.60-$1.20/sq ft. Open-cell spray foam: $0.75-$1.50/sq ft. Closed-cell spray foam: $1.50-$3.50/sq ft. Rigid foam board: $0.75-$2.00/sq ft. Professional installation adds $0.50-$2.00/sq ft on top of material costs.',
  },
  {
    question: 'How do I measure for insulation?',
    answer: 'Measure the total area to insulate in square feet (length × height for walls, length × width for attics/floors). For walls, subtract window and door openings. Batt insulation is sold in pre-cut widths for 16-inch or 24-inch on-center stud spacing. Measure stud cavity depth to select the correct thickness — 3.5 inches for 2x4 walls, 5.5 inches for 2x6 walls.',
  },
  {
    question: 'Should I remove old insulation before adding new?',
    answer: 'In attics, you can typically add new insulation on top of existing insulation to increase R-value. In walls, old insulation should be removed if it is damaged, moldy, or compressed. If existing insulation is dry and in good condition, adding a second layer is acceptable. Never compress insulation — it reduces R-value. Wet or moldy insulation must be removed and the moisture source fixed before re-insulating.',
  },
  {
    question: 'What is the difference between faced and unfaced insulation?',
    answer: 'Faced insulation has a kraft paper or foil backing that serves as a vapor retarder — use it on exterior walls with the facing toward the heated side of the wall. Unfaced insulation has no backing and is used when adding a second layer over existing insulation, in interior walls for soundproofing, or when a separate vapor barrier is being installed.',
  },
  {
    question: 'How much insulation do I need for a 1,000 sq ft attic?',
    answer: 'For a 1,000 sq ft attic in a cold climate (targeting R-49): you need approximately 16 inches of blown fiberglass or 13 inches of blown cellulose. That equals roughly 30-35 bags of blown insulation. For batt insulation, you would need about 32 rolls of R-49 batts (15-inch width, 48 sq ft per roll). Add 5-10% extra for waste and coverage around obstacles.',
  },
];

export default function InsulationCalculator() {
  return (
    <CalculatorLayout
      title="Insulation Calculator"
      description="Estimate insulation materials needed for walls and attics"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-05-10"
    >
      <InsulationForm />

      <HowToUse
        steps={[
          'Measure the length of the area to insulate',
          'Measure the width of the area',
          'Select your insulation type',
          'Choose the appropriate R-value',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Insulation calculation:',
          equation: 'Area = Length × Width\nMaterials = Area / Coverage per Unit',
        }}
        tips={[
          'Wear protective gear (mask, gloves, long sleeves)',
          'Fill all gaps but do not compress insulation',
          'Seal air leaks before insulating',
          'Ensure proper ventilation in attics',
          'Check for moisture issues before insulating',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Insulation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding R-Value and Climate Zones</h3>
        <p className="text-gray-600 mb-4">
          R-value measures insulation&#39;s resistance to heat flow — higher numbers mean better insulation. The US Department of Energy divides the country into 8 climate zones, each with different R-value recommendations. Southern states (zones 1-3) need R-30 to R-38 in attics and R-13 in walls. Northern states (zones 5-7) need R-49 to R-60 in attics and R-21 in walls. These minimums are set by the International Energy Conservation Code (IECC) and adopted by most local building departments. Under-insulating saves money upfront but costs far more in heating and cooling bills over the life of the home.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Insulation Types Compared</h3>
        <p className="text-gray-600 mb-4">
          <strong>Fiberglass batts (R-3.1 to R-3.7 per inch):</strong> The most common and affordable option. Pre-cut to fit standard 16-inch or 24-inch stud spacing. Easy to install with no special equipment. Available faced (with vapor retarder) or unfaced. Best for open walls, attics, and floors during new construction or renovation when wall cavities are accessible.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Blown cellulose (R-3.2 to R-3.8 per inch):</strong> Made from recycled newspaper treated with fire retardant. Fills gaps, voids, and irregular spaces better than batts. Ideal for existing attics — can be blown over old insulation. Requires a blowing machine (rental available at most home improvement stores for $50-$100/day). Settles 10-20% over time, so install 10-20% more than target thickness.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Spray foam (R-3.7 open-cell, R-6.0-6.5 closed-cell per inch):</strong> Provides the highest R-value per inch and doubles as an air barrier. Closed-cell spray foam also serves as a vapor barrier and adds structural rigidity. Ideal for rim joists, crawl spaces, cathedral ceilings, and anywhere air sealing is critical. Requires professional installation — the chemicals must be mixed at specific ratios and temperatures.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Rigid foam board (R-3.8 to R-6.5 per inch):</strong> Polystyrene (EPS/XPS) or polyisocyanurate sheets used for exterior sheathing, basement walls, and under slabs. Provides continuous insulation without thermal bridging through studs. Typically 1/2-inch to 2-inch thickness. Must be covered with drywall for fire safety when used indoors.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Where to Insulate for Maximum Impact</h3>
        <p className="text-gray-600 mb-4">
          The attic is the single highest-impact area to insulate because heat rises — an under-insulated attic can account for 25-30% of a home&#39;s heat loss. After the attic, prioritize exterior walls, basement/crawl space walls, and floors over unheated spaces (garages, porches). Don&#39;t forget rim joists — the area where the floor framing meets the foundation is a major source of air leakage. Seal all air leaks with caulk or foam before installing insulation, since air movement through gaps defeats the purpose of insulation. After insulating, finish the interior with <Link href="/drywall-calculator" className="text-gray-900 underline hover:no-underline">drywall</Link> to create the complete wall assembly.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Insulation Cost and Energy Savings</h3>
        <p className="text-gray-600 mb-4">
          Insulating a 1,500 sq ft attic from R-11 to R-49 costs approximately $1,500-$2,500 for DIY blown insulation or $2,500-$4,500 professionally installed. The Department of Energy estimates this saves 10-20% on annual heating and cooling costs, typically $200-$500 per year. The payback period ranges from 3-7 years depending on climate, energy costs, and existing insulation levels. Insulation also qualifies for federal tax credits (currently 30% of material and labor costs under the Inflation Reduction Act) and many utility company rebates. For full project budgeting, see our <Link href="/construction-cost-calculator" className="text-gray-900 underline hover:no-underline">Construction Cost Calculator</Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
