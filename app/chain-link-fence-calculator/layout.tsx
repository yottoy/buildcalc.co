import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chain Link Fence Calculator - Free Materials Estimator | BuildCalc 2025',
  description: 'Calculate chain link fencing materials and posts needed. Free calculator for residential and commercial fences. Updated January 2025.',
  keywords: ['chain link fence calculator', 'chain link calculator', 'fence calculator', 'wire fence calculator', 'chain link estimator', 'fence post calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Chain Link Fence Calculator - Materials Estimator | BuildCalc',
    description: 'Estimate chain link fencing materials and posts needed',
    url: 'https://www.buildcalc.co/chain-link-fence-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/chain-link-fence-calculator',
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
            "name": "Chain Link Fence Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate chain link fencing materials and posts needed with instant calculations.",
            "url": "https://www.buildcalc.co/chain-link-fence-calculator",
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
