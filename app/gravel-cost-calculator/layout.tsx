import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gravel Cost Calculator - Free Price Estimator | BuildCalc 2026',
  description: 'Calculate gravel costs based on project requirements. Free calculator for crushed stone, pea gravel, river rock, and limestone. Updated February 2026.',
  keywords: ['gravel cost calculator', 'gravel calculator', 'gravel price calculator', 'crushed stone cost', 'gravel estimator', 'driveway gravel cost'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Gravel Cost Calculator - Price Estimator | BuildCalc',
    description: 'Calculate gravel costs based on project requirements',
    url: 'https://www.buildcalc.co/gravel-cost-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/gravel-cost-calculator',
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
            "name": "Gravel Cost Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate gravel costs based on project requirements with instant price estimates.",
            "url": "https://www.buildcalc.co/gravel-cost-calculator",
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
