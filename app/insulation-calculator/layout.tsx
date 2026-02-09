import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insulation Calculator - R-Value Estimator | BuildCalc 2026',
  description: 'Calculate insulation materials needed for walls and attics. Free calculator for batt, blown-in, and spray foam insulation. Updated February 2026.',
  keywords: ['insulation calculator', 'insulation estimator', 'r-value calculator', 'attic insulation calculator', 'wall insulation calculator', 'insulation material calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Insulation Calculator - R-Value Estimator | BuildCalc',
    description: 'Estimate insulation materials needed for walls and attics',
    url: 'https://www.buildcalc.co/insulation-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/insulation-calculator',
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
            "name": "Insulation Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate insulation materials needed for walls and attics with R-value calculations.",
            "url": "https://www.buildcalc.co/insulation-calculator",
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
