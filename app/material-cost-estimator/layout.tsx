import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Material Cost Estimator - Construction Calculator | BuildCalc 2025',
  description: 'Estimate total material costs for construction projects. Free calculator includes waste factors and quantity calculations. Updated January 2025.',
  keywords: ['material cost estimator', 'material calculator', 'construction material cost', 'building material estimator', 'material cost calculator', 'construction estimator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Material Cost Estimator - Construction Calculator | BuildCalc',
    description: 'Estimate total material costs for construction projects',
    url: 'https://buildcalc.co/material-cost-estimator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/material-cost-estimator',
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
            "url": "https://buildcalc.co/material-cost-estimator",
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
