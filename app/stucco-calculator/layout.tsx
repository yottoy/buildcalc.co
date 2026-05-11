import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Stucco Calculator — 2-Coat & 3-Coat System Coverage',
  description: 'Enter wall area, get exact stucco bags for 2-coat or 3-coat systems instantly. Free calculator includes lath and bead estimates. Updated 2026.',
  keywords: ['stucco calculator', 'stucco estimator', 'exterior stucco calculator', 'stucco material calculator', 'stucco coverage calculator', 'wall stucco calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Stucco Calculator — 2-Coat & 3-Coat System Coverage',
    description: 'Enter wall area, get exact stucco bags for 2-coat or 3-coat systems. Lath and bead estimates included.',
    url: 'https://www.buildcalc.co/stucco-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/stucco-calculator',
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
            "name": "Stucco Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate stucco materials needed for exterior finishes with 2-coat and 3-coat options.",
            "url": "https://www.buildcalc.co/stucco-calculator",
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
