import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Driveway Calculator - Free Estimator | BuildCalc 2025',
  description: 'Calculate concrete needed for driveway projects. Free calculator shows cubic yards for residential and commercial driveways. Updated January 2025.',
  keywords: ['concrete driveway calculator', 'driveway calculator', 'concrete calculator driveway', 'driveway concrete estimator', 'concrete slab calculator', 'driveway cost calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Concrete Driveway Calculator | BuildCalc',
    description: 'Calculate concrete needed for driveway projects',
    url: 'https://buildcalc.co/concrete-driveway-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/concrete-driveway-calculator',
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
            "name": "Concrete Driveway Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate concrete needed for driveway projects with instant cubic yard estimates.",
            "url": "https://buildcalc.co/concrete-driveway-calculator",
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
