import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wood Fence Calculator - Free Materials Estimator | BuildCalc 2026',
  description: 'Calculate wood fencing materials and posts needed. Free calculator for picket, privacy, and rail fences. Includes concrete estimates. Updated February 2026.',
  keywords: ['wood fence calculator', 'fence calculator', 'picket fence calculator', 'privacy fence calculator', 'fence post calculator', 'fence board calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Wood Fence Calculator - Materials Estimator | BuildCalc',
    description: 'Estimate wood fencing materials and posts required for your project',
    url: 'https://www.buildcalc.co/wood-fence-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/wood-fence-calculator',
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
            "name": "Wood Fence Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate wood fencing materials and posts required with instant calculations.",
            "url": "https://www.buildcalc.co/wood-fence-calculator",
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
