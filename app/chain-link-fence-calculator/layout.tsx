import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chain Link Fence Calculator - Free Cost Estimator & Material Calculator 2026',
  description: 'Free chain link fence calculator estimates materials, posts, and costs instantly. Calculate chain link fence cost, post spacing, and fabric needed for residential & commercial projects.',
  keywords: ['chain link fence calculator', 'chain link fence cost calculator', 'chain link fence estimator', 'chain link fence cost estimator', 'fence calculator', 'chain link calculator', 'commercial chain link fence calculator', 'fence post spacing calculator', 'chain link fence material calculator', 'chain link fence price calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Chain Link Fence Calculator - Free Cost & Material Estimator',
    description: 'Calculate chain link fence costs, materials, and post spacing instantly. Free estimator for residential and commercial chain link fencing projects.',
    url: 'https://www.buildcalc.co/chain-link-fence-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/chain-link-fence-calculator',
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
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Chain Link Fence Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate chain link fencing materials and posts needed with instant calculations.",
            "url": "https://www.buildcalc.co/chain-link-fence-calculator",
            "author": {
              "@type": "Person",
              "name": "Marcus Rivera",
              "jobTitle": "Construction Calculator Specialist"
            },
            "datePublished": "2025-01-18",
            "dateModified": "2026-02-04"
          })
        }}
      />
      {children}
    </>
  );
}
