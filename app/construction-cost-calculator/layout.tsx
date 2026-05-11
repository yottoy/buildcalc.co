import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Construction Cost Calculator — Estimate by Square Foot',
  description: 'Enter square footage and project type, get total material + labor estimate instantly. Free building cost calculator for new construction, renovations, and remodels.',
  keywords: ['construction cost estimator', 'construction cost calculator', 'building cost estimator', 'building cost calculator', 'construction cost estimate', 'estimate construction cost', 'building estimate cost', 'cost estimator construction', 'construction labor cost estimator', 'new construction cost estimator', 'home building cost calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Construction Cost Calculator — Estimate by Square Foot',
    description: 'Enter square footage and project type, get total material + labor estimate instantly. For new construction, renovations, and remodels.',
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
            "dateModified": "2026-05-10"
          })
        }}
      />
      {children}
    </>
  );
}
