import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asphalt Calculator - Free Tons & Cost Estimator | BuildCalc 2025',
  description: 'Calculate tons of asphalt needed for driveways and parking lots. Free calculator shows cubic yards and costs. Used by contractors nationwide. Updated January 2025.',
  keywords: ['asphalt calculator', 'driveway calculator', 'asphalt tons calculator', 'paving calculator', 'asphalt cost calculator', 'driveway cost estimator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Asphalt Calculator - Calculate Tons & Cost | BuildCalc',
    description: 'Calculate tons of asphalt needed for your driveway or parking lot project. Free tool with instant results.',
    url: 'https://buildcalc.co/asphalt-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/asphalt-calculator',
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
            "name": "Asphalt Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate tons of asphalt needed for driveways and parking lots. Free online calculator with instant results.",
            "url": "https://buildcalc.co/asphalt-calculator",
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
