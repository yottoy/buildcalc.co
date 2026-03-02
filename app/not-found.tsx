import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Build Calculators',
  description: 'The page you were looking for could not be found. Browse our free construction calculators.',
  robots: { index: false, follow: true },
};

const topCalculators = [
  { name: 'Drywall Calculator', slug: 'drywall-calculator' },
  { name: 'Chain Link Fence Calculator', slug: 'chain-link-fence-calculator' },
  { name: 'Concrete Driveway Calculator', slug: 'concrete-driveway-calculator' },
  { name: 'Construction Cost Calculator', slug: 'construction-cost-calculator' },
  { name: 'Brick Calculator', slug: 'brick-calculator' },
  { name: 'Asphalt Calculator', slug: 'asphalt-calculator' },
];

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-lg">
        Sorry, we couldn&apos;t find that page. Try one of our popular calculators below,
        or head back to the homepage.
      </p>

      <Link
        href="/"
        className="inline-block mb-12 px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-700 transition-colors"
      >
        Back to All Calculators
      </Link>

      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-xl font-bold mb-6">Popular Calculators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topCalculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/${calc.slug}`}
              className="p-4 border border-gray-200 hover:border-gray-900 transition-colors text-left"
            >
              <span className="font-medium">{calc.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
