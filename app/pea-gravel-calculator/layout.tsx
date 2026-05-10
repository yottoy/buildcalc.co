import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pea Gravel Calculator - Free Landscaping Estimator | BuildCalc 2026',
  description: 'Calculate pea gravel needed for landscaping projects. Free calculator for walkways, patios, and playgrounds. Get instant cubic yards. Updated February 2026.',
  keywords: ['pea gravel calculator', 'pea stone calculator', 'pea gravel estimator', 'landscaping gravel calculator', 'walkway gravel calculator', 'pea gravel cubic yards'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Pea Gravel Calculator - Landscaping Estimator | BuildCalc',
    description: 'Estimate pea gravel required for landscaping projects',
    url: 'https://www.buildcalc.co/pea-gravel-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/pea-gravel-calculator',
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
            "name": "Pea Gravel Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate pea gravel required for landscaping with instant cubic yard calculations.",
            "url": "https://www.buildcalc.co/pea-gravel-calculator",
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
