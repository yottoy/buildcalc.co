import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brick Calculator - Free Wall & Patio Estimator | BuildCalc 2025',
  description: 'Calculate bricks required for walls and patios. Free calculator includes mortar bag estimates. Perfect for masonry projects. Updated January 2025.',
  keywords: ['brick calculator', 'brick estimator', 'masonry calculator', 'brick wall calculator', 'brick patio calculator', 'mortar calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Brick Calculator - Wall & Patio Estimator | BuildCalc',
    description: 'Estimate number of bricks required for walls and construction projects',
    url: 'https://www.buildcalc.co/brick-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/brick-calculator',
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
            "name": "Brick Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate number of bricks required for walls and construction projects with mortar calculations.",
            "url": "https://www.buildcalc.co/brick-calculator",
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
