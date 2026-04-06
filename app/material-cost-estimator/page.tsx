export const dynamic = 'force-static';

import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import MaterialCostEstimatorForm from './MaterialCostEstimatorForm';

const relatedCalculators = [
  { name: 'Construction Cost Calculator', slug: 'construction-cost-calculator', description: 'Estimate project costs' },
  { name: 'Concrete Cost Calculator', slug: 'concrete-cost-calculator', description: 'Estimate concrete costs' },
];

const faqs = [
  {
    question: 'How do I use a material calculator?',
    answer: 'Enter the quantity of materials needed, unit cost per item, and waste factor percentage (typically 10%). Click Calculate to get total cost including waste. The materials calculator automatically adds waste allowance and computes final costs. Perfect for budgeting construction projects.',
  },
  {
    question: 'What is a materials calculator used for?',
    answer: 'A materials calculator estimates total costs for construction and building projects. Use it to calculate costs for lumber, drywall, concrete, gravel, roofing, flooring, tiles, bricks, or any building materials. It accounts for waste factors and helps you budget accurately before purchasing.',
  },
  {
    question: 'How do I calculate building materials needed?',
    answer: 'Measure your project dimensions accurately, calculate quantity required (linear feet, square feet, cubic yards, or count), add appropriate waste factor (10-20%), then multiply by unit cost. Our calculator for building materials automates this process—just enter quantity, cost, and waste percentage.',
  },
  {
    question: 'Why should I add a waste factor to material calculations?',
    answer: "Waste factors account for cuts, breakage, mistakes, and unusable pieces. 10% is standard for most materials like lumber and drywall. Use 15-20% for complex projects with many angles, cuts, or irregular shapes. Tiles and pavers need 10-15% waste. Without waste factors, you'll run short and face costly delays.",
  },
  {
    question: 'What materials need a materials calculator?',
    answer: 'All construction materials benefit from using a materials calculator: lumber, drywall, flooring, roofing shingles, siding, concrete, gravel, sand, bricks, blocks, tiles, pavers, insulation, and more. Even bulk materials like gravel and soil settle and compact, requiring 10-15% extra.',
  },
  {
    question: 'How do I calculate material cost for a construction project?',
    answer: 'Step 1: Measure dimensions and calculate quantity needed. Step 2: Get unit costs from suppliers ($/piece, $/sq ft, $/cubic yard). Step 3: Add waste factor (typically 10-20%). Step 4: Multiply (Quantity × (1 + Waste%) × Unit Cost) = Total Cost. Always compare quotes from 3+ suppliers.',
  },
  {
    question: 'Should I buy extra building materials?',
    answer: 'Yes, always order 10-20% extra materials. This accounts for waste, cutting mistakes, breakage during handling, and future repairs. Matching materials later is difficult—dye lots change, products get discontinued, or formulations differ. Extra material is cheaper than project delays or mismatched repairs.',
  },
  {
    question: 'What affects construction material pricing?',
    answer: 'Material prices vary by: Geographic location (urban 20-40% more than rural), seasonal demand (summer peak pricing), supplier and quantity ordered (bulk discounts 10-30%), delivery distance, current market conditions (supply chain impacts), and material quality grade. Always shop 3-5 suppliers for best pricing.',
  },
  {
    question: 'Can I use materials calculator for gravel and bulk materials?',
    answer: 'Yes, our materials calculator works perfectly for bulk materials like gravel, sand, topsoil, crushed stone, and mulch. Enter quantity needed in cubic yards or tons, unit cost per yard/ton, and waste factor (10-15% for settling and compaction). Bulk materials always require extra due to settling.',
  },
  {
    question: 'How accurate is a material cost estimator?',
    answer: 'Material cost estimators provide accuracy within 5-10% when you input correct quantities and current unit costs. Accuracy depends on precise measurements, up-to-date pricing from suppliers, and appropriate waste factors. Use estimates for budgeting, then get actual quotes from suppliers for final costs.',
  },
];

export default function MaterialCostEstimator() {
  return (
    <CalculatorLayout
      title="Material Cost Estimator"
      description="Estimate total material costs for construction projects"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <MaterialCostEstimatorForm />

      <HowToUse
        steps={[
          'Calculate or measure the quantity of materials needed for your project',
          'Get unit cost from suppliers ($/piece, $/sq ft, $/cubic yard, etc.)',
          'Add appropriate waste factor (10% for simple projects, 15-20% for complex)',
          'Click Calculate to get total material cost including waste allowance',
          'Compare quotes from 3+ suppliers for best pricing',
        ]}
        formula={{
          description: 'Material cost calculation formula:',
          equation: 'Total Quantity = Base Quantity × (1 + Waste%)\nTotal Cost = Total Quantity × Unit Cost\n\nExample: 100 units at $5 each with 10% waste\nTotal Quantity = 100 × 1.10 = 110 units\nTotal Cost = 110 × $5 = $550',
        }}
        tips={[
          'Get quotes from 3-5 suppliers to compare pricing',
          'Buy in bulk for discounts (typically 10-30% savings)',
          'Factor in delivery costs—can add 5-15% to material costs',
          'Keep receipts and packaging for returns and warranty claims',
          'Order materials from same batch/dye lot for color consistency',
          'Lock in prices for large orders to avoid market fluctuations',
          'Schedule delivery timing to avoid storage and weather damage',
          'Inspect materials on delivery before signing acceptance',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Material Calculator Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">What is a Materials Calculator?</h3>
        <p className="mb-4">
          A materials calculator is an essential tool for estimating construction and building material costs. Whether you&apos;re a professional contractor or DIY homeowner, accurate material calculations save money and prevent project delays. Our material calculator accounts for waste factors, quantities, and unit costs to provide precise budget estimates.
        </p>
        <p className="mb-4">
          The calculator works for all construction materials: lumber, drywall, concrete, gravel, sand, bricks, tiles, roofing, siding, flooring, insulation, and more. Simply enter the quantity needed, unit cost, and waste percentage to get instant total cost estimates.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">How to Calculate Building Materials</h3>
        <p className="mb-4">
          <strong>Step 1: Measure Accurately</strong> - Use proper measuring tools (tape measure, laser measure) to get precise dimensions. Measure twice to avoid costly mistakes. For irregular areas, break them into rectangles and calculate separately.
        </p>
        <p className="mb-4">
          <strong>Step 2: Calculate Quantity</strong> - Convert measurements to the unit your materials are sold in (linear feet, square feet, cubic yards, pieces). Account for material sizes—4×8 sheets, 10-foot boards, etc.
        </p>
        <p className="mb-4">
          <strong>Step 3: Add Waste Factor</strong> - Add 10-20% for waste depending on project complexity. Simple rectangular projects need 10%, complex designs with angles need 15-20%.
        </p>
        <p className="mb-4">
          <strong>Step 4: Get Unit Costs</strong> - Contact multiple suppliers (at least 3) for current pricing. Prices vary significantly between suppliers and change with market conditions.
        </p>
        <p className="mb-4">
          <strong>Step 5: Calculate Total Cost</strong> - Multiply (Quantity × (1 + Waste%) × Unit Cost). Our materials calculator does this automatically.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Waste Factor Guidelines for Common Materials</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Lumber (10-15%):</strong> 10% for simple framing, 15% for complex trim work with angles</li>
          <li><strong>Drywall (10-15%):</strong> 10% for rectangular rooms, 15% for rooms with many openings</li>
          <li><strong>Flooring (10-15%):</strong> 10% for simple layouts, 15% for diagonal or herringbone patterns</li>
          <li><strong>Tiles (10-20%):</strong> 10% for simple grids, 15% for diagonal, 20% for intricate patterns</li>
          <li><strong>Roofing (10-15%):</strong> 10% for simple gable, 15% for complex hip or valley roofs</li>
          <li><strong>Concrete (5-10%):</strong> 5% for simple slabs, 10% for formed structures</li>
          <li><strong>Gravel/Sand (15-20%):</strong> Accounts for settling, compaction, and uneven surfaces</li>
          <li><strong>Bricks/Blocks (5-10%):</strong> 5% for straight runs, 10% for corners and cuts</li>
          <li><strong>Siding (10-15%):</strong> 10% for simple walls, 15% for multiple gables and windows</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Material Cost-Saving Strategies</h3>
        <p className="mb-4">
          <strong>Buy in Bulk:</strong> Purchasing larger quantities often yields 10-30% discounts. Coordinate with neighbors for shared bulk orders.
        </p>
        <p className="mb-4">
          <strong>Compare Suppliers:</strong> Prices vary 20-40% between suppliers. Check big-box stores, local suppliers, and online retailers. Factor in delivery costs.
        </p>
        <p className="mb-4">
          <strong>Seasonal Timing:</strong> Buy materials off-season when demand is lower. Lumber prices drop in winter, roofing materials are cheaper in fall/winter.
        </p>
        <p className="mb-4">
          <strong>Watch for Sales:</strong> Building materials go on sale regularly. Stock up on non-perishable items during holiday sales (10-40% off).
        </p>
        <p className="mb-4">
          <strong>Consider Alternatives:</strong> Engineered lumber, composite materials, or different grades may offer better value without sacrificing quality.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Common Material Calculations</h3>
        <p className="mb-4">
          <strong>Lumber:</strong> Calculate board feet: (Length in ft × Width in inches × Thickness in inches) ÷ 12. For framing, count studs needed (wall length ÷ spacing) + corners and headers.
        </p>
        <p className="mb-4">
          <strong>Concrete:</strong> Calculate cubic yards: (Length × Width × Depth in feet) ÷ 27. Add 10% for waste. One cubic yard covers 81 sq ft at 4 inches thick.
        </p>
        <p className="mb-4">
          <strong>Gravel/Sand:</strong> Calculate cubic yards: (Length × Width × Depth in feet) ÷ 27. Add 15-20% for settling. One ton covers approximately 100 sq ft at 2 inches deep.
        </p>
        <p className="mb-4">
          <strong>Tiles:</strong> Calculate square footage, divide by tile size in sq ft, add 10-20% waste. Account for tile size and layout pattern.
        </p>
        <p className="mb-4">
          <strong>Roofing:</strong> Calculate roof area in squares (100 sq ft = 1 square). Measure slope—steep roofs need more material. Add 10-15% for waste and starter strips.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Material Ordering Checklist</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>✓ Measure project dimensions accurately (measure twice)</li>
          <li>✓ Calculate quantity needed in correct units</li>
          <li>✓ Add appropriate waste factor (10-20%)</li>
          <li>✓ Get quotes from 3-5 suppliers</li>
          <li>✓ Verify material grades and specifications match requirements</li>
          <li>✓ Check delivery costs and scheduling</li>
          <li>✓ Confirm return policies for unused materials</li>
          <li>✓ Order from same batch/lot for consistency (especially tiles, flooring, paint)</li>
          <li>✓ Schedule delivery timing to avoid weather damage</li>
          <li>✓ Arrange proper storage on site</li>
          <li>✓ Inspect materials on delivery before signing</li>
          <li>✓ Keep receipts and documentation for warranties</li>
        </ul>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
