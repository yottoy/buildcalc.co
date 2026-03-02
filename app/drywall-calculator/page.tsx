import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import DrywallForm from './DrywallForm';

const relatedCalculators = [
  {
    name: 'Insulation Calculator',
    slug: 'insulation-calculator',
    description: 'Estimate insulation materials needed',
  },
  {
    name: 'Stucco Calculator',
    slug: 'stucco-calculator',
    description: 'Calculate stucco materials for walls',
  },
  {
    name: 'Construction Cost Calculator',
    slug: 'construction-cost-calculator',
    description: 'Estimate total construction costs',
  },
];

const faqs = [
  {
    question: 'How many sheets of drywall do I need?',
    answer: 'Calculate total wall area (perimeter × height) plus ceiling area (length × width), then divide by sheet size (32 sq ft for 4x8 sheets). Add 10% for waste. Example: 320 sq ft room needs 320 ÷ 32 = 10 sheets + 10% waste = 11 sheets. Use our calculator for instant results.',
  },
  {
    question: 'How many square feet in a sheet of drywall?',
    answer: 'Standard 4x8 sheet = 32 square feet. 4x10 sheet = 40 square feet. 4x12 sheet = 48 square feet. The 4x8 sheet is most common and easiest to handle. Calculate your room square footage and divide by 32 to estimate sheets needed.',
  },
  {
    question: 'How do I calculate drywall square footage?',
    answer: 'For walls: Calculate perimeter (2 × length + 2 × width) and multiply by wall height. For ceiling: Multiply room length × width. Add walls + ceiling for total square footage. Then divide by 32 (sq ft per 4x8 sheet) and add 10% waste.',
  },
  {
    question: 'How much drywall do I need for a room?',
    answer: 'Measure room length, width, and height. Our calculator computes wall area (perimeter × height) + ceiling area (length × width). For a 12x12 room with 8-foot ceilings: walls = 384 sq ft, ceiling = 144 sq ft, total = 528 sq ft ÷ 32 = 17 sheets with waste.',
  },
  {
    question: 'What size drywall sheets should I use?',
    answer: '4x8 sheets (32 sq ft) are standard and easiest to handle for DIY. 4x12 sheets (48 sq ft) reduce seams but are heavy and need 2+ people. Use 1/2" thickness for walls, 5/8" for ceilings and fire-rated applications.',
  },
  {
    question: 'How do I calculate drywall for walls and ceilings?',
    answer: 'Walls: Measure perimeter (add all wall lengths) and multiply by ceiling height. Ceiling: Multiply room length by width. Total square footage ÷ 32 (for 4x8 sheets) = number of sheets. Add 10% for waste and cuts.',
  },
  {
    question: 'How much waste should I factor into drywall calculations?',
    answer: '10% waste is standard for simple rectangular rooms. Add 15-20% for rooms with many corners, angles, windows, or openings. Complex layouts with vaulted ceilings or irregular shapes may need 20-25% waste factor.',
  },
  {
    question: 'How many screws do I need per sheet of drywall?',
    answer: 'Use screws every 12 inches on walls (32-40 screws per 4x8 sheet), every 8 inches on ceilings (48-60 screws per sheet). One pound of #6 drywall screws contains 150-200 screws. Calculate 0.5 lbs per wall sheet, 0.75 lbs per ceiling sheet.',
  },
  {
    question: 'How to measure drywall or sheetrock needed?',
    answer: 'Use a tape measure to get room length, width, and wall height. Calculate wall area: (2 × length + 2 × width) × height. Calculate ceiling: length × width. Add both, divide by 32 for 4x8 sheets. Subtract large openings over 10 sq ft, but add 10% waste.',
  },
  {
    question: 'What are the dimensions of a sheet of drywall?',
    answer: 'Standard sizes: 4x8 feet (most common, 32 sq ft), 4x10 feet (40 sq ft), 4x12 feet (48 sq ft). Standard thicknesses: 1/4" (renovations), 3/8" (overlays), 1/2" (walls), 5/8" (ceilings, fire-rated). Width is always 4 feet, length varies.',
  },
];

export default function DrywallCalculator() {
  return (
    <CalculatorLayout
      title="Drywall Calculator"
      description="Estimate drywall sheets needed for walls and ceilings"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <DrywallForm />

      <HowToUse
        steps={[
          'Measure room length and width in feet',
          'Measure wall height (typically 8 feet)',
          'Select your drywall sheet size (4x8 is standard)',
          'Choose waste factor (10% for simple rooms, 15-20% for complex)',
          'Click Calculate to get instant sheet count and materials estimate',
        ]}
        formula={{
          description: 'Drywall calculation formula:',
          equation: 'Wall Area = (2 × Length + 2 × Width) × Height\nCeiling Area = Length × Width\nTotal Area = Wall Area + Ceiling Area\nSheets = (Total Area × (1 + Waste%)) ÷ Sheet Size',
        }}
        tips={[
          'Hang drywall perpendicular to studs for maximum strength',
          'Stagger seams to avoid long continuous joints',
          'Use a drywall lift for ceiling installation (safer and easier)',
          'Apply three coats of joint compound: taping, second coat, final coat',
          'Sand between coats with fine-grit sandpaper for smooth finish',
          'Measure twice, cut once to minimize waste',
          'Account for windows and doors over 10 sq ft',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Drywall Installation Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">How Many Sheets of Drywall Do I Need?</h3>
        <p className="mb-4">
          The most common question homeowners ask is &quot;how many sheets of drywall do I need?&quot; The answer depends on your room dimensions and sheet size. A standard 4x8 sheet covers 32 square feet. Calculate your total wall and ceiling area, divide by 32, and add 10% for waste.
        </p>
        <p className="mb-4">
          <strong>Quick example:</strong> For a 12×15 room with 8-foot ceilings:
          <br />• Wall area: (2 × 12 + 2 × 15) × 8 = 432 sq ft
          <br />• Ceiling area: 12 × 15 = 180 sq ft
          <br />• Total: 612 sq ft ÷ 32 = 19.1 sheets
          <br />• With 10% waste: 21 sheets needed
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Drywall Sheet Sizes</h3>
        <p className="mb-4">
          <strong>4×8 sheets (32 sq ft):</strong> Most common size, perfect for 8-foot ceilings, easy to handle alone or with one helper. Best for DIY projects and standard residential rooms.
        </p>
        <p className="mb-4">
          <strong>4×10 sheets (40 sq ft):</strong> Good for 9-foot ceilings, reduces seams, requires 2 people to carry and install. Weighs about 20% more than 4×8 sheets.
        </p>
        <p className="mb-4">
          <strong>4×12 sheets (48 sq ft):</strong> Best for 10-12 foot ceilings, fewest seams, heavy and difficult to maneuver (needs 2-3 people). Used mainly by professional contractors.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Drywall Thickness Guide</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>1/4 inch:</strong> Renovation work, curved walls, covering existing drywall</li>
          <li><strong>3/8 inch:</strong> Repair work, covering damaged plaster walls</li>
          <li><strong>1/2 inch:</strong> Standard for walls in residential construction (most common)</li>
          <li><strong>5/8 inch:</strong> Ceilings, fire-rated walls, commercial buildings, soundproofing</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Calculating Drywall Materials</h3>
        <p className="mb-4">
          Beyond sheets, you need screws, joint tape, and compound (mud). Our calculator estimates all materials:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Drywall Screws:</strong> 0.5 lbs per wall sheet, 0.75 lbs per ceiling sheet (screws every 12&quot; on walls, 8&quot; on ceilings)</li>
          <li><strong>Joint Tape:</strong> 1 roll (250-500 ft) per 500 sq ft of drywall</li>
          <li><strong>Joint Compound:</strong> 1 gallon covers approximately 100 sq ft (need 3 coats)</li>
          <li><strong>Corner Bead:</strong> Measure all outside corners in linear feet</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Waste Factor Guidelines</h3>
        <p className="mb-4">
          Always order extra drywall to account for cuts, mistakes, and damage:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>10% waste:</strong> Simple rectangular rooms with few openings</li>
          <li><strong>15% waste:</strong> Rooms with multiple windows, doors, or closets</li>
          <li><strong>20% waste:</strong> Complex layouts, angled walls, vaulted ceilings</li>
          <li><strong>25% waste:</strong> Irregular shapes, multiple levels, first-time DIYers</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Drywall Cost Estimator</h3>
        <p className="mb-4">
          Budget planning for drywall projects:
          <br />• Drywall sheets: $10-$15 per 4×8 sheet (1/2 inch)
          <br />• Screws: $8-$12 per pound
          <br />• Joint tape: $5-$8 per roll
          <br />• Joint compound: $12-$18 per 5-gallon bucket
          <br />• Professional installation: $1.50-$3.00 per square foot
          <br />• DIY materials only: $0.40-$0.65 per square foot
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
