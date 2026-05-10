import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscaping Calculator - Garden Material Estimator | BuildCalc 2026',
  description: 'Calculate materials for landscaping and garden projects. Free calculator for mulch, topsoil, compost, and decorative rock. Updated February 2026.',
  keywords: ['landscaping calculator', 'garden calculator', 'landscape material calculator', 'mulch calculator', 'landscaping estimator', 'yard calculator'],
  authors: [{ name: 'Marcus Rivera', url: 'https://www.buildcalc.co' }],
  openGraph: {
    title: 'Free Landscaping Calculator - Garden Materials | BuildCalc',
    description: 'Calculate materials for landscaping and garden projects',
    url: 'https://www.buildcalc.co/landscaping-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.buildcalc.co/landscaping-calculator',
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
            "name": "Landscaping Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate materials for landscaping and garden projects with instant cubic yard estimates.",
            "url": "https://www.buildcalc.co/landscaping-calculator",
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
