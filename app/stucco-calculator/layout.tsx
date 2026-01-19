import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stucco Calculator - Exterior Finish Estimator | BuildCalc 2025',
  description: 'Calculate stucco materials needed for exterior walls. Free calculator for 2-coat and 3-coat systems. Includes lath and bead estimates. Updated January 2025.',
  keywords: ['stucco calculator', 'stucco estimator', 'exterior stucco calculator', 'stucco material calculator', 'stucco coverage calculator', 'wall stucco calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Stucco Calculator - Exterior Finish Estimator | BuildCalc',
    description: 'Calculate stucco materials needed for exterior finishes',
    url: 'https://buildcalc.co/stucco-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/stucco-calculator',
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
            "url": "https://buildcalc.co/stucco-calculator",
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
