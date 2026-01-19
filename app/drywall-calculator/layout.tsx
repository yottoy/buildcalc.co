import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drywall Calculator - Free Sheet Estimator | BuildCalc 2025',
  description: 'Calculate drywall sheets needed for walls and ceilings. Free calculator includes screws, tape, and compound estimates. Used by contractors. Updated January 2025.',
  keywords: ['drywall calculator', 'sheetrock calculator', 'drywall estimator', 'drywall sheet calculator', 'gypsum board calculator', 'wall calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Drywall Calculator - Estimate Sheets & Materials | BuildCalc',
    description: 'Calculate drywall sheets needed for your walls and ceilings project',
    url: 'https://buildcalc.co/drywall-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/drywall-calculator',
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
            "name": "Drywall Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate drywall sheets needed for walls and ceilings with instant material calculations.",
            "url": "https://buildcalc.co/drywall-calculator",
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
