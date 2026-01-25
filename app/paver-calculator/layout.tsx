import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paver Calculator - Free Patio & Walkway Estimator | BuildCalc 2025',
  description: 'Calculate pavers needed for patios and walkways. Free calculator includes sand base and gravel calculations. Used by landscapers. Updated January 2025.',
  keywords: ['paver calculator', 'patio calculator', 'walkway calculator', 'brick paver calculator', 'paving stone calculator', 'patio paver estimator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Paver Calculator - Patio & Walkway Estimator | BuildCalc',
    description: 'Calculate pavers needed for your patio or walkway project',
    url: 'https://www.buildcalc.co/paver-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/paver-calculator',
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
            "name": "Paver Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate number of pavers needed for patios and walkways with base material estimates.",
            "url": "https://www.buildcalc.co/paver-calculator",
            "author": {
              "@type": "Person",
              "name": "Marcus Rivera",
              "jobTitle": "Construction Calculator Specialist"
            },
            "datePublished": "2025-01-18",
            "dateModified": "2025-01-18"
          })
        }}
      />
      {children}
    </>
  );
}
