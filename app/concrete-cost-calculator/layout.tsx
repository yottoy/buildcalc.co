import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Cost Calculator - Free Price Estimator | BuildCalc 2025',
  description: 'Estimate total concrete costs based on project dimensions. Free calculator shows ready-mix vs bagged costs. Get accurate pricing. Updated January 2025.',
  keywords: ['concrete cost calculator', 'concrete price calculator', 'ready mix concrete cost', 'concrete estimator', 'concrete cost per yard', 'concrete pricing'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Concrete Cost Calculator - Price Estimator | BuildCalc',
    description: 'Estimate total concrete costs for your construction project',
    url: 'https://buildcalc.co/concrete-cost-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/concrete-cost-calculator',
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
            "url": "https://buildcalc.co/concrete-cost-calculator",
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
