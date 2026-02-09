import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Cost Estimator - Free Building Cost Calculator 2026',
  description: 'Free construction cost estimator calculates building costs instantly. Estimate construction project costs per square foot for renovations, new builds, and remodels. Calculate material and labor costs.',
  keywords: ['construction cost estimator', 'construction cost calculator', 'building cost estimator', 'building cost calculator', 'construction cost estimate', 'estimate construction cost', 'building estimate cost', 'cost estimator construction', 'construction labor cost estimator', 'new construction cost estimator', 'home building cost calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Construction Cost Estimator - Free Building Cost Calculator',
    description: 'Calculate construction and building costs per square foot. Free estimator for materials, labor, and total project costs for new construction and renovations.',
    url: 'https://www.buildcalc.co/construction-cost-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/construction-cost-calculator',
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
            "name": "Construction Cost Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate total construction project material costs with labor and material breakdowns.",
            "url": "https://www.buildcalc.co/construction-cost-calculator",
            "author": {
              "@type": "Person",
              "name": "Marcus Rivera",
              "jobTitle": "Construction Calculator Specialist"
            },
            "datePublished": "2025-01-18",
            "dateModified": "2026-02-09"
          })
        }}
      />
      {children}
    </>
  );
}
