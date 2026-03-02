import CalculatorLayout from '@/components/CalculatorLayout';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import ConstructionCostForm from './ConstructionCostForm';

const relatedCalculators = [
  {
    name: 'Concrete Cost Calculator',
    slug: 'concrete-cost-calculator',
    description: 'Estimate total concrete costs based on project dimensions',
  },
  {
    name: 'Material Cost Estimator',
    slug: 'material-cost-estimator',
    description: 'Estimate total material costs for construction projects',
  },
  {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    description: 'Estimate drywall sheets needed for walls and ceilings',
  },
];

const faqs = [
  {
    question: 'How do I estimate construction costs?',
    answer: 'To estimate construction costs, calculate total square footage and multiply by cost per square foot based on project type. Basic renovations cost $15-40/sq ft, standard builds $25-75/sq ft, premium $40-120/sq ft. Add labor costs (typically 50-60% of total) and contingency (10-20%). Our calculator automates this process instantly.',
  },
  {
    question: 'What is a construction cost estimator?',
    answer: 'A construction cost estimator calculates total project costs including materials, labor, equipment, permits, and overhead. It breaks down costs per square foot based on project type (basic, standard, premium, luxury) and local labor rates. Use it for budgeting renovations, new construction, or remodels before getting contractor quotes.',
  },
  {
    question: 'How accurate is this construction cost estimate?',
    answer: 'This calculator provides estimates accurate within 15-30% for preliminary budgeting. Actual costs vary by location (urban vs rural), materials chosen, labor availability, project complexity, and market conditions. Use estimates as starting points, then get detailed quotes from 3+ licensed contractors for precise pricing.',
  },
  {
    question: 'How much does building cost per square foot?',
    answer: 'Building costs range $100-$400+ per square foot depending on quality level. Basic construction: $100-150/sq ft. Standard residential: $150-200/sq ft. Premium builds: $200-300/sq ft. Luxury custom homes: $300-500/sq ft. Location significantly impacts costs—urban areas cost 20-50% more than rural.',
  },
  {
    question: 'What does each project type include?',
    answer: 'Basic ($15-40/sq ft): Essential materials, builder-grade finishes, basic fixtures. Standard ($25-75/sq ft): Mid-grade materials, standard appliances, quality finishes. Premium ($40-120/sq ft): High-quality materials, custom features, designer finishes. Luxury ($60-200/sq ft): Top-tier materials, extensive custom work, high-end everything.',
  },
  {
    question: 'Are permits and fees included in the estimate?',
    answer: 'No, this estimate covers materials and labor only. Add these costs separately: Permits (1-4% of project cost), inspections ($200-500 each), insurance (1-2%), design/architect fees (5-15%), and contingency for unexpected issues (10-20% recommended).',
  },
  {
    question: 'What is the typical labor cost for construction?',
    answer: 'Labor typically represents 50-60% of total construction costs. General contractors charge $40-80/hour. Specialized trades: electricians $50-100/hour, plumbers $60-120/hour, HVAC $75-150/hour. Rates vary by location—urban areas 30-50% higher than rural. Our calculator uses customizable rates.',
  },
  {
    question: 'How to calculate building cost for new construction?',
    answer: 'Calculate building cost: (Square Footage × Cost per Sq Ft) + (Square Footage × Labor Hours per Sq Ft × Labor Rate). Example: 2,000 sq ft standard build at $25/sq ft materials + 0.75 hrs/sq ft labor at $50/hr = $50,000 materials + $75,000 labor = $125,000 total, or $62.50/sq ft.',
  },
  {
    question: 'What affects construction cost estimates?',
    answer: 'Key factors: Location (urban 30-50% more expensive), project size (larger = lower cost/sq ft), material quality, labor availability, site conditions (difficult access adds 10-25%), timeline (rushed = premium costs), design complexity, permit requirements, and market conditions (supply chain impacts pricing).',
  },
  {
    question: 'How much contingency should I budget for construction?',
    answer: 'Budget 10-20% contingency for unexpected costs. Use 10% for straightforward projects with fixed scope, 15% for renovations (unknown conditions), 20% for older buildings or complex projects. Contingency covers unforeseen issues: hidden damage, code upgrades, material price increases, design changes.',
  },
];

export default function ConstructionCostCalculator() {
  return (
    <CalculatorLayout
      title="Construction Cost Calculator"
      description="Estimate total construction project material costs"
      relatedCalculators={relatedCalculators}
      lastUpdated="2026-02-09"
    >
      <ConstructionCostForm />

      <HowToUse
        steps={[
          'Calculate or measure the total square footage of your project',
          'Select the project type that best matches your needs (basic, standard, premium, luxury)',
          'Enter the average labor rate in your area ($40-80/hour typical)',
          'Click Calculate to get instant material, labor, and total cost estimates',
          'Add 10-20% contingency budget for unexpected costs',
          'Get detailed quotes from 3+ contractors for comparison',
        ]}
        formula={{
          description: 'Construction cost estimation formula:',
          equation: 'Material Cost = Square Footage × Material Cost per Sq Ft\nLabor Hours = Square Footage × Labor Hours per Sq Ft\nLabor Cost = Labor Hours × Hourly Labor Rate\nTotal Project Cost = Material Cost + Labor Cost\nCost per Sq Ft = Total Cost ÷ Square Footage',
        }}
        tips={[
          'Get multiple quotes from licensed and insured contractors',
          'Always factor in 10-20% contingency for unexpected costs',
          'Consider seasonal pricing—winter often has lower labor rates',
          'Check permit requirements (1-4% of project cost)',
          'Urban areas typically cost 30-50% more than rural',
          'Material costs fluctuate—lock in prices early for large orders',
          'Labor costs represent 50-60% of total construction budget',
          'Detailed plans reduce cost overruns by 15-30%',
        ]}
      />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Complete Construction Cost Estimator Guide</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Construction Costs</h3>
        <p className="mb-4">
          Construction costs vary widely based on project type, location, materials, and labor. Our construction cost estimator helps you budget accurately by breaking down costs into materials and labor. The average construction project costs $100-$200 per square foot, but can range from $50 for basic renovations to $500+ for luxury custom builds.
        </p>
        <p className="mb-4">
          Material costs typically represent 40-50% of total project costs, while labor accounts for 50-60%. The remaining 10-20% should be budgeted as contingency for unforeseen issues, permit fees, and design changes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Construction Cost Per Square Foot Breakdown</h3>
        <p className="mb-4">
          <strong>Basic Construction ($100-150/sq ft):</strong> Essential materials, builder-grade finishes, standard fixtures and appliances. Suitable for rental properties, basic renovations, or budget-conscious projects.
        </p>
        <p className="mb-4">
          <strong>Standard Construction ($150-200/sq ft):</strong> Mid-grade materials, quality finishes, good appliances, standard features. Most common for residential homes and typical renovations.
        </p>
        <p className="mb-4">
          <strong>Premium Construction ($200-300/sq ft):</strong> High-quality materials, custom features, designer finishes, premium appliances. For upscale homes with attention to detail.
        </p>
        <p className="mb-4">
          <strong>Luxury Construction ($300-500+/sq ft):</strong> Top-tier materials, extensive custom work, high-end everything, unique architectural features. Custom luxury homes and high-end commercial projects.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">How to Estimate Construction Costs Accurately</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2"><strong>Measure Square Footage:</strong> Calculate total area to be built or renovated. Include all floors and finished spaces.</li>
          <li className="mb-2"><strong>Determine Project Type:</strong> Choose quality level based on your budget and expectations.</li>
          <li className="mb-2"><strong>Research Local Labor Rates:</strong> Contact contractors or check local rate surveys ($40-80/hour typical).</li>
          <li className="mb-2"><strong>Calculate Material Costs:</strong> Square footage × material cost per sq ft for your project type.</li>
          <li className="mb-2"><strong>Calculate Labor Costs:</strong> Square footage × labor hours per sq ft × hourly rate.</li>
          <li className="mb-2"><strong>Add Permits &amp; Fees:</strong> Typically 1-4% of project cost, varies by location.</li>
          <li className="mb-2"><strong>Include Contingency:</strong> Add 10-20% for unexpected costs and changes.</li>
        </ol>

        <h3 className="text-2xl font-bold mt-8 mb-4">What Affects Building Costs?</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Location:</strong> Urban areas 30-50% more expensive than rural due to higher labor rates and material delivery</li>
          <li><strong>Project Size:</strong> Larger projects have lower cost per square foot due to economies of scale</li>
          <li><strong>Site Conditions:</strong> Difficult access, slopes, or poor soil add 10-25% to costs</li>
          <li><strong>Design Complexity:</strong> Complex designs require more labor hours and specialized trades</li>
          <li><strong>Timeline:</strong> Rushed schedules command premium rates (15-30% more)</li>
          <li><strong>Market Conditions:</strong> Supply chain issues and labor shortages increase costs</li>
          <li><strong>Seasonal Factors:</strong> Winter construction may cost more in cold climates</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Labor Cost Estimator for Construction</h3>
        <p className="mb-4">
          Labor is the largest component of construction costs. Typical hourly rates by trade:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>General Contractor/Foreman: $40-80/hour</li>
          <li>Carpenters: $35-75/hour</li>
          <li>Electricians: $50-100/hour</li>
          <li>Plumbers: $60-120/hour</li>
          <li>HVAC Technicians: $75-150/hour</li>
          <li>Drywall Installers: $35-65/hour</li>
          <li>Painters: $30-60/hour</li>
          <li>Laborers: $25-45/hour</li>
        </ul>
        <p className="mb-4">
          Labor hours vary by project: basic renovations need 0.5 hrs/sq ft, standard builds 0.75 hrs/sq ft, premium projects 1.0 hrs/sq ft, and luxury builds 1.5+ hrs/sq ft.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Budgeting Tips for Construction Projects</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Get detailed written quotes from 3-5 licensed contractors</li>
          <li>Check contractor licenses, insurance, and references</li>
          <li>Budget 10-20% contingency for unexpected issues</li>
          <li>Consider financing options before breaking ground</li>
          <li>Lock in material prices for large orders to avoid increases</li>
          <li>Value engineer to reduce costs without sacrificing quality</li>
          <li>Schedule strategically—off-season can save 10-20%</li>
          <li>Include soft costs: permits, design, inspections, insurance</li>
        </ul>
      </div>

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
