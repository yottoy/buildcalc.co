import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Cost Calculator - Free Price Estimator | BuildCalc 2026',
  description: 'Estimate total concrete costs based on project dimensions. Free calculator shows ready-mix vs bagged costs. Get accurate pricing. Updated February 2026.',
  keywords: ['concrete cost calculator', 'concrete price calculator', 'ready mix concrete cost', 'concrete estimator', 'concrete cost per yard', 'concrete pricing'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Concrete Cost Calculator - Price Estimator | BuildCalc',
    description: 'Estimate total concrete costs for your construction project',
    url: 'https://www.buildcalc.co/concrete-cost-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/concrete-cost-calculator',
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
            "name": "Concrete Cost Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate total concrete costs based on project dimensions with ready-mix and bagged comparisons.",
            "url": "https://www.buildcalc.co/concrete-cost-calculator",
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
