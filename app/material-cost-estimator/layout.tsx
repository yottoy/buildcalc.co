import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Material Calculator - Free Materials Cost Estimator 2026',
  description: 'Free material calculator estimates construction and building materials costs instantly. Calculate materials needed with waste factors for any project. Simple materials calculator for contractors and DIYers.',
  keywords: ['material calculator', 'materials calculator', 'material cost estimator', 'calculator for building materials', 'construction material calculator', 'building material estimator', 'material cost calculator', 'materials calculator gravel', 'construction materials estimator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Material Calculator - Free Materials Cost Estimator',
    description: 'Free materials calculator estimates costs for construction projects. Calculate building materials needed with waste factors. Simple material cost estimator.',
    url: 'https://www.buildcalc.co/material-cost-estimator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/material-cost-estimator',
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
            "name": "Material Cost Estimator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate total material costs for construction projects with waste factor calculations.",
            "url": "https://www.buildcalc.co/material-cost-estimator",
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
