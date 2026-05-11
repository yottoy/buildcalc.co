import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Calculators — Free Tools for Any Concrete Project',
  description: 'Free concrete calculators for steps, driveways, costs, brick, and stucco. Enter your dimensions, get instant cubic yards, bag counts, and cost estimates. No signup.',
  keywords: [
    'concrete calculator',
    'concrete calculators',
    'concrete cost calculator',
    'concrete steps calculator',
    'concrete driveway calculator',
    'brick calculator',
    'stucco calculator',
    'concrete estimator',
    'concrete yardage calculator',
  ],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Concrete Calculators — Free Tools for Any Concrete Project',
    description: 'Free concrete calculators for steps, driveways, costs, brick, and stucco. Instant results, no signup.',
    url: 'https://www.buildcalc.co/concrete-calculators',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/concrete-calculators',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Concrete Calculators',
            description:
              'A collection of free concrete calculators covering steps, driveways, costs, brick, and stucco. Instant results for contractors and DIYers.',
            url: 'https://www.buildcalc.co/concrete-calculators',
            author: {
              '@type': 'Person',
              name: 'Marcus Rivera',
              jobTitle: 'Construction Calculator Specialist',
            },
            hasPart: [
              { '@type': 'SoftwareApplication', name: 'Concrete Cost Calculator', url: 'https://www.buildcalc.co/concrete-cost-calculator' },
              { '@type': 'SoftwareApplication', name: 'Concrete Steps Calculator', url: 'https://www.buildcalc.co/concrete-steps-calculator' },
              { '@type': 'SoftwareApplication', name: 'Concrete Driveway Calculator', url: 'https://www.buildcalc.co/concrete-driveway-calculator' },
              { '@type': 'SoftwareApplication', name: 'Brick Calculator', url: 'https://www.buildcalc.co/brick-calculator' },
              { '@type': 'SoftwareApplication', name: 'Stucco Calculator', url: 'https://www.buildcalc.co/stucco-calculator' },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.buildcalc.co' },
                { '@type': 'ListItem', position: 2, name: 'Concrete Calculators', item: 'https://www.buildcalc.co/concrete-calculators' },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
