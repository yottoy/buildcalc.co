import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sand Calculator - Free Cubic Yards Estimator | BuildCalc 2026',
  description: 'Calculate sand needed for construction and landscaping projects. Free calculator for masonry sand, play sand, concrete sand. Updated February 2026.',
  keywords: ['sand calculator', 'masonry sand calculator', 'play sand calculator', 'concrete sand calculator', 'beach sand calculator', 'sand cubic yards'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Sand Calculator - Calculate Cubic Yards | BuildCalc',
    description: 'Calculate sand needed for your construction and landscaping projects',
    url: 'https://www.buildcalc.co/sand-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/sand-calculator',
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
            "name": "Sand Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate sand needed for construction and landscaping with instant results.",
            "url": "https://www.buildcalc.co/sand-calculator",
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
