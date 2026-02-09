import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Steps Calculator - Free Stair Estimator | BuildCalc 2026',
  description: 'Calculate concrete needed for steps and stairs. Free calculator shows cubic yards and 80lb bags required. Perfect for outdoor steps. Updated February 2026.',
  keywords: ['concrete steps calculator', 'stair calculator', 'concrete stairs calculator', 'steps estimator', 'outdoor steps calculator', 'concrete staircase calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Concrete Steps Calculator - Stair Estimator | BuildCalc',
    description: 'Calculate concrete needed for your steps and stairs project',
    url: 'https://www.buildcalc.co/concrete-steps-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/concrete-steps-calculator',
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
            "name": "Concrete Steps Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate concrete needed for steps and stairs projects with instant cubic yard estimates.",
            "url": "https://www.buildcalc.co/concrete-steps-calculator",
            "author": {
              "@type": "Person",
              "name": "Marcus Rivera",
              "jobTitle": "Construction Calculator Specialist"
            },
            "datePublished": "2025-01-18",
            "dateModified": "2026-02-09"
          })
        }}
      />
      {children}
    </>
  );
}
