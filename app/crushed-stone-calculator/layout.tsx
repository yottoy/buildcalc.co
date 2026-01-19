import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crushed Stone Calculator - Driveway Base Estimator | BuildCalc 2025',
  description: 'Calculate crushed stone needed for driveways and base layers. Free calculator shows cubic yards and tons. Perfect for road base. Updated January 2025.',
  keywords: ['crushed stone calculator', 'crushed rock calculator', 'stone calculator', 'road base calculator', 'driveway base calculator', 'crushed stone estimator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Crushed Stone Calculator - Driveway Base | BuildCalc',
    description: 'Calculate crushed stone needed for driveways and base layers',
    url: 'https://buildcalc.co/crushed-stone-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/crushed-stone-calculator',
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
            "name": "Crushed Stone Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate crushed stone needed for driveways and base layers with instant estimates.",
            "url": "https://buildcalc.co/crushed-stone-calculator",
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
