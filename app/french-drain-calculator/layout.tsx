import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'French Drain Calculator - Drainage Material Estimator | BuildCalc 2025',
  description: 'Calculate materials needed for French drain installation. Free calculator for gravel, pipe, and fabric. Perfect for drainage systems. Updated January 2025.',
  keywords: ['french drain calculator', 'drainage calculator', 'drain pipe calculator', 'perforated pipe calculator', 'drainage system calculator', 'yard drainage calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free French Drain Calculator - Drainage Estimator | BuildCalc',
    description: 'Estimate materials needed for French drain and drainage systems',
    url: 'https://buildcalc.co/french-drain-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/french-drain-calculator',
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
            "name": "French Drain Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Estimate materials needed for drainage systems including gravel, pipe, and landscape fabric.",
            "url": "https://buildcalc.co/french-drain-calculator",
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
