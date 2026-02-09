import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Material Calculator - Gravel, Sand, Dirt | BuildCalc 2026',
  description: 'Calculate cubic yards for bulk construction materials. Free calculator for gravel, sand, topsoil, mulch, and more. Get instant estimates. Updated February 2026.',
  keywords: ['bulk material calculator', 'material calculator', 'gravel calculator', 'topsoil calculator', 'mulch calculator', 'bulk calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Bulk Material Calculator - Gravel, Sand, Dirt | BuildCalc',
    description: 'Calculate cubic yards for bulk construction and landscaping materials',
    url: 'https://www.buildcalc.co/bulk-material-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/bulk-material-calculator',
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
            "name": "Bulk Material Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate cubic yards for bulk construction and landscaping materials with instant ton estimates.",
            "url": "https://www.buildcalc.co/bulk-material-calculator",
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
