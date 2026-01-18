import Link from "next/link";

const calculators = [
  {
    name: "Asphalt Calculator",
    slug: "asphalt-calculator",
    description: "Calculate tons of asphalt needed for driveways and parking lots",
  },
  {
    name: "Brick Calculator",
    slug: "brick-calculator",
    description: "Estimate number of bricks required for walls and construction projects",
  },
  {
    name: "Bulk Material Calculator",
    slug: "bulk-material-calculator",
    description: "Calculate cubic yards for bulk construction and landscaping materials",
  },
  {
    name: "Chain Link Fence Calculator",
    slug: "chain-link-fence-calculator",
    description: "Estimate chain link fencing materials and posts needed",
  },
  {
    name: "Concrete Cost Calculator",
    slug: "concrete-cost-calculator",
    description: "Estimate total concrete costs based on project dimensions",
  },
  {
    name: "Concrete Driveway Calculator",
    slug: "concrete-driveway-calculator",
    description: "Calculate concrete needed for driveway projects",
  },
  {
    name: "Concrete Steps Calculator",
    slug: "concrete-steps-calculator",
    description: "Estimate concrete required for steps and stairs",
  },
  {
    name: "Construction Cost Calculator",
    slug: "construction-cost-calculator",
    description: "Estimate total construction project material costs",
  },
  {
    name: "Crushed Stone Calculator",
    slug: "crushed-stone-calculator",
    description: "Calculate crushed stone needed for driveways and base layers",
  },
  {
    name: "Dirt Calculator",
    slug: "dirt-calculator",
    description: "Calculate fill dirt or topsoil needed for landscaping",
  },
  {
    name: "Drywall Calculator",
    slug: "drywall-calculator",
    description: "Estimate drywall sheets needed for walls and ceilings",
  },
  {
    name: "Fence Post Calculator",
    slug: "fence-post-calculator",
    description: "Calculate number of fence posts required for your project",
  },
  {
    name: "French Drain Calculator",
    slug: "french-drain-calculator",
    description: "Estimate materials needed for drainage systems",
  },
  {
    name: "Gravel Cost Calculator",
    slug: "gravel-cost-calculator",
    description: "Calculate gravel costs based on project requirements",
  },
  {
    name: "Insulation Calculator",
    slug: "insulation-calculator",
    description: "Estimate insulation materials needed for walls and attics",
  },
  {
    name: "Landscaping Calculator",
    slug: "landscaping-calculator",
    description: "Calculate materials for landscaping and garden projects",
  },
  {
    name: "Material Cost Estimator",
    slug: "material-cost-estimator",
    description: "Estimate total material costs for construction projects",
  },
  {
    name: "Paver Calculator",
    slug: "paver-calculator",
    description: "Calculate number of pavers needed for patios and walkways",
  },
  {
    name: "Pea Gravel Calculator",
    slug: "pea-gravel-calculator",
    description: "Estimate pea gravel required for landscaping",
  },
  {
    name: "Sand Calculator",
    slug: "sand-calculator",
    description: "Calculate sand needed for construction and landscaping",
  },
  {
    name: "Sod Calculator",
    slug: "sod-calculator",
    description: "Estimate sod required for lawn installation",
  },
  {
    name: "Stucco Calculator",
    slug: "stucco-calculator",
    description: "Calculate stucco materials needed for exterior finishes",
  },
  {
    name: "Wood Fence Calculator",
    slug: "wood-fence-calculator",
    description: "Estimate wood fencing materials and posts required",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Free Construction Material Calculators
        </h1>
        <p className="text-lg text-gray-600">
          Calculate asphalt, concrete, gravel, sand, and more for your projects.
        </p>
      </div>

      <div className="space-y-6">
        {calculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/${calculator.slug}`}
            className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors group"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
              {calculator.name}
            </h2>
            <p className="text-gray-600">{calculator.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
