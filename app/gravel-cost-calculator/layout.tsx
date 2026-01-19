import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gravel Cost Calculator - Free Price Estimator | BuildCalc 2025',
  description: 'Calculate gravel costs based on project requirements. Free calculator for crushed stone, pea gravel, river rock, and limestone. Updated January 2025.',
  keywords: ['gravel cost calculator', 'gravel calculator', 'gravel price calculator', 'crushed stone cost', 'gravel estimator', 'driveway gravel cost'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Gravel Cost Calculator - Price Estimator | BuildCalc',
    description: 'Calculate gravel costs based on project requirements',
    url: 'https://buildcalc.co/gravel-cost-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/gravel-cost-calculator',
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
            "url": "https://buildcalc.co/gravel-cost-calculator",
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
