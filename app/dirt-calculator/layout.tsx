import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dirt Calculator - Topsoil & Fill Dirt Estimator | BuildCalc 2025',
  description: 'Calculate fill dirt or topsoil needed for landscaping projects. Free calculator shows cubic yards and tons. Perfect for grading and gardens. Updated January 2025.',
  keywords: ['dirt calculator', 'topsoil calculator', 'fill dirt calculator', 'soil calculator', 'landscaping dirt calculator', 'cubic yards dirt'],
  authors: [{ name: 'Marcus Rivera', url: 'https://buildcalc.co' }],
  openGraph: {
    title: 'Free Dirt Calculator - Topsoil & Fill Dirt | BuildCalc',
    description: 'Calculate dirt needed for your landscaping and grading projects',
    url: 'https://buildcalc.co/dirt-calculator',
    siteName: 'BuildCalc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://buildcalc.co/dirt-calculator',
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
            "name": "Dirt Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate fill dirt or topsoil needed for landscaping with instant cubic yard calculations.",
            "url": "https://buildcalc.co/dirt-calculator",
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
