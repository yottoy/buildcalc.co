import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drywall Calculator - How Many Sheets Do I Need? Free Estimator 2025',
  description: 'Free drywall calculator answers "how many sheets of drywall do I need?" Instant estimates for drywall sheets, screws, tape, and mud. Calculate drywall square footage for walls and ceilings.',
  keywords: ['drywall calculator', 'how many sheets of drywall do i need', 'drywall estimator', 'sheetrock calculator', 'drywall square foot calculator', 'how much drywall do i need', 'drywall sheet calculator', 'how many square feet in a sheet of drywall', 'sheetrock estimator', 'drywall cost calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Drywall Calculator - How Many Sheets Do I Need? Free Estimator',
    description: 'Calculate how many sheets of drywall you need instantly. Free drywall estimator includes screws, tape, and compound for walls and ceilings.',
    url: 'https://www.buildcalc.co/drywall-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/drywall-calculator',
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
            "name": "Drywall Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate drywall sheets needed for walls and ceilings with instant material calculations.",
            "url": "https://www.buildcalc.co/drywall-calculator",
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
