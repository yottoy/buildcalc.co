import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sod Calculator - Free Lawn & Grass Estimator | BuildCalc 2025',
  description: 'Calculate sod needed for lawn installation. Free calculator shows square feet, rolls, pallets, and costs. Perfect for new lawns. Updated January 2025.',
  keywords: ['sod calculator', 'lawn calculator', 'grass calculator', 'turf calculator', 'sod roll calculator', 'new lawn calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Sod Calculator - Estimate Lawn Installation | BuildCalc',
    description: 'Calculate sod needed for your lawn installation project',
    url: 'https://buildcalc.co/sod-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/sod-calculator',
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
            "name": "Sod Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate sod required for lawn installation with instant roll and pallet calculations.",
            "url": "https://buildcalc.co/sod-calculator",
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
