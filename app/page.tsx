export const dynamic = 'force-static';

import Link from "next/link";

const categories = [
  {
    name: "Concrete & Masonry",
    description: "Calculate concrete volumes, costs, and masonry materials for foundations, driveways, steps, and walls.",
    calculators: [
      { name: "Concrete Cost Calculator", slug: "concrete-cost-calculator", description: "Estimate total concrete costs based on project dimensions" },
      { name: "Concrete Driveway Calculator", slug: "concrete-driveway-calculator", description: "Calculate concrete needed for driveway projects" },
      { name: "Concrete Steps Calculator", slug: "concrete-steps-calculator", description: "Estimate concrete required for steps and stairs" },
      { name: "Brick Calculator", slug: "brick-calculator", description: "Estimate number of bricks required for walls and construction projects" },
      { name: "Stucco Calculator", slug: "stucco-calculator", description: "Calculate stucco materials needed for exterior finishes" },
    ],
  },
  {
    name: "Fence Calculators",
    description: "Plan and estimate fencing materials, posts, and hardware for chain link, wood, and other fence types.",
    calculators: [
      { name: "Chain Link Fence Calculator", slug: "chain-link-fence-calculator", description: "Estimate chain link fencing materials and posts needed" },
      { name: "Wood Fence Calculator", slug: "wood-fence-calculator", description: "Estimate wood fencing materials and posts required" },
      { name: "Fence Post Calculator", slug: "fence-post-calculator", description: "Calculate number of fence posts required for your project" },
    ],
  },
  {
    name: "Landscaping & Materials",
    description: "Calculate gravel, sand, dirt, sod, and other bulk landscaping materials by volume and weight.",
    calculators: [
      { name: "Gravel Cost Calculator", slug: "gravel-cost-calculator", description: "Calculate gravel costs based on project requirements" },
      { name: "Pea Gravel Calculator", slug: "pea-gravel-calculator", description: "Estimate pea gravel required for landscaping" },
      { name: "Crushed Stone Calculator", slug: "crushed-stone-calculator", description: "Calculate crushed stone needed for driveways and base layers" },
      { name: "Sand Calculator", slug: "sand-calculator", description: "Calculate sand needed for construction and landscaping" },
      { name: "Dirt Calculator", slug: "dirt-calculator", description: "Calculate fill dirt or topsoil needed for landscaping" },
      { name: "Bulk Material Calculator", slug: "bulk-material-calculator", description: "Calculate cubic yards for bulk construction and landscaping materials" },
      { name: "Sod Calculator", slug: "sod-calculator", description: "Estimate sod required for lawn installation" },
      { name: "Landscaping Calculator", slug: "landscaping-calculator", description: "Calculate materials for landscaping and garden projects" },
    ],
  },
  {
    name: "Building & Interior",
    description: "Estimate drywall, insulation, and overall construction costs for residential and commercial projects.",
    calculators: [
      { name: "Drywall Calculator", slug: "drywall-calculator", description: "Estimate drywall sheets needed for walls and ceilings" },
      { name: "Insulation Calculator", slug: "insulation-calculator", description: "Estimate insulation materials needed for walls and attics" },
      { name: "Construction Cost Calculator", slug: "construction-cost-calculator", description: "Estimate total construction project material costs" },
      { name: "Material Cost Estimator", slug: "material-cost-estimator", description: "Estimate total material costs for construction projects" },
    ],
  },
  {
    name: "Paving & Drainage",
    description: "Calculate asphalt tonnage, paver quantities, and drainage materials for driveways and outdoor spaces.",
    calculators: [
      { name: "Asphalt Calculator", slug: "asphalt-calculator", description: "Calculate tons of asphalt needed for driveways and parking lots" },
      { name: "Paver Calculator", slug: "paver-calculator", description: "Calculate number of pavers needed for patios and walkways" },
      { name: "French Drain Calculator", slug: "french-drain-calculator", description: "Estimate materials needed for drainage systems" },
    ],
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Free Construction Material Calculators
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-4">
          Instantly estimate materials and costs for any construction or landscaping project. Our calculators use industry-standard formulas trusted by contractors and DIYers across the US.
        </p>
        <p className="text-gray-500">
          23 free calculators covering concrete, gravel, asphalt, fencing, drywall, insulation, and more.
        </p>
      </div>

      <div className="mb-16 bg-gray-50 border border-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-gray-300 mb-2">1</div>
            <h3 className="font-bold mb-2">Enter Your Dimensions</h3>
            <p className="text-gray-600 text-sm">Input the length, width, depth, or area of your project. All calculators work in standard US units.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-300 mb-2">2</div>
            <h3 className="font-bold mb-2">Get Instant Results</h3>
            <p className="text-gray-600 text-sm">Click Calculate to instantly see material quantities in cubic yards, tons, square feet, or bags — ready to share with your supplier.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-300 mb-2">3</div>
            <h3 className="font-bold mb-2">Plan & Order Materials</h3>
            <p className="text-gray-600 text-sm">Use the results to plan your project budget and order the right amount of materials — waste factors included.</p>
          </div>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
          <div className="space-y-3">
            {category.calculators.map((calculator) => (
              <Link
                key={calculator.slug}
                href={`/${calculator.slug}`}
                className="flex items-center justify-between p-5 border border-gray-200 hover:border-gray-900 transition-colors group"
              >
                <div>
                  <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors">
                    {calculator.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{calculator.description}</p>
                </div>
                <span className="text-gray-400 group-hover:text-gray-900 transition-colors ml-4 shrink-0">&#8594;</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-6">Why Use Our Calculators?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-600">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Accurate Formulas</h3>
            <p className="text-sm">All calculations use industry-standard formulas and material densities. We calculate in cubic yards, tons, and square feet — the same units your supplier uses.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Waste Included</h3>
            <p className="text-sm">Our calculators automatically account for standard waste factors (typically 5–15%), so you order the right amount and avoid costly under-ordering.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">No Sign-Up Required</h3>
            <p className="text-sm">Free to use, no account needed. Get instant results and print them directly from your browser for supplier quotes.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">For Contractors &amp; DIYers</h3>
            <p className="text-sm">Whether you are a professional contractor estimating a job or a homeowner planning a weekend project, our calculators work for any project size.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
