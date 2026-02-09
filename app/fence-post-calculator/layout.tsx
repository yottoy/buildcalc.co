import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fence Post Calculator - Free Post Spacing Estimator | BuildCalc 2026',
  description: 'Calculate number of fence posts required for your project. Free calculator includes concrete bag estimates. Perfect for all fence types. Updated February 2026.',
  keywords: ['fence post calculator', 'post calculator', 'fence post estimator', 'post spacing calculator', 'fence post spacing', 'concrete for fence posts'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Fence Post Calculator - Post Spacing Estimator | BuildCalc',
    description: 'Calculate number of fence posts required for your project',
    url: 'https://www.buildcalc.co/fence-post-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/fence-post-calculator',
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
            "name": "Fence Post Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate number of fence posts required for your project with concrete estimates.",
            "url": "https://www.buildcalc.co/fence-post-calculator",
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
