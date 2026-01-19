import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Cost Calculator - Project Estimator | BuildCalc 2025',
  description: 'Estimate total construction project costs including materials and labor. Free calculator for renovations and new builds. Get instant quotes. Updated January 2025.',
  keywords: ['construction cost calculator', 'building cost calculator', 'construction estimator', 'renovation cost calculator', 'project cost estimator', 'construction pricing'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Construction Cost Calculator - Project Estimator | BuildCalc',
    description: 'Estimate total construction project material and labor costs',
    url: 'https://buildcalc.co/construction-cost-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/construction-cost-calculator',
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
            "url": "https://buildcalc.co/construction-cost-calculator",
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
