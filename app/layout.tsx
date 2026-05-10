import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Calculators - Free Construction Material Calculators | 2026",
  description: "Calculate asphalt, concrete, gravel, sand, and more. Free construction calculators with accurate formulas. Updated February 2026.",
  authors: [{ name: "Build Calculators Team" }],
  keywords: ["construction calculator", "material calculator", "asphalt calculator", "concrete calculator", "gravel calculator"],
  openGraph: {
    title: "Build Calculators - Free Construction Material Calculators",
    description: "Professional construction calculators for contractors and DIYers",
    url: "https://www.buildcalc.co",
    siteName: "Build Calculators",
    type: "website",
  },
  alternates: {
    canonical: "https://www.buildcalc.co",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PMPJCD86W2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PMPJCD86W2');
            `,
          }}
        />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Build Calculators",
              description: "Free construction and landscaping calculators for contractors and DIYers",
              url: "https://www.buildcalc.co",
              datePublished: "2025-01-18",
              dateModified: "2026-05-10",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Build Calculators Team",
              jobTitle: "Construction Calculator Specialists",
              url: "https://www.buildcalc.co",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-200 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <Link href="/" className="text-2xl font-bold text-foreground hover:text-gray-600 transition-colors">
                Build Calculators
              </Link>
            </div>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="border-t border-gray-200 mt-16 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                <div className="col-span-2 md:col-span-3 lg:col-span-1">
                  <h3 className="font-bold mb-3">Build Calculators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Free construction and landscaping calculators for contractors, builders, and DIY homeowners.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/" className="text-gray-600 hover:text-foreground">Home</Link></li>
                    <li><Link href="/about" className="text-gray-600 hover:text-foreground">About</Link></li>
                    <li><Link href="/contact" className="text-gray-600 hover:text-foreground">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">Concrete &amp; Masonry</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/concrete-cost-calculator" className="text-gray-600 hover:text-foreground">Concrete Cost</Link></li>
                    <li><Link href="/concrete-driveway-calculator" className="text-gray-600 hover:text-foreground">Concrete Driveway</Link></li>
                    <li><Link href="/concrete-steps-calculator" className="text-gray-600 hover:text-foreground">Concrete Steps</Link></li>
                    <li><Link href="/brick-calculator" className="text-gray-600 hover:text-foreground">Brick</Link></li>
                    <li><Link href="/stucco-calculator" className="text-gray-600 hover:text-foreground">Stucco</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">Landscaping</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/gravel-cost-calculator" className="text-gray-600 hover:text-foreground">Gravel Cost</Link></li>
                    <li><Link href="/pea-gravel-calculator" className="text-gray-600 hover:text-foreground">Pea Gravel</Link></li>
                    <li><Link href="/crushed-stone-calculator" className="text-gray-600 hover:text-foreground">Crushed Stone</Link></li>
                    <li><Link href="/sand-calculator" className="text-gray-600 hover:text-foreground">Sand</Link></li>
                    <li><Link href="/dirt-calculator" className="text-gray-600 hover:text-foreground">Dirt</Link></li>
                    <li><Link href="/bulk-material-calculator" className="text-gray-600 hover:text-foreground">Bulk Material</Link></li>
                    <li><Link href="/sod-calculator" className="text-gray-600 hover:text-foreground">Sod</Link></li>
                    <li><Link href="/landscaping-calculator" className="text-gray-600 hover:text-foreground">Landscaping</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">Building</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/drywall-calculator" className="text-gray-600 hover:text-foreground">Drywall</Link></li>
                    <li><Link href="/insulation-calculator" className="text-gray-600 hover:text-foreground">Insulation</Link></li>
                    <li><Link href="/construction-cost-calculator" className="text-gray-600 hover:text-foreground">Construction Cost</Link></li>
                    <li><Link href="/material-cost-estimator" className="text-gray-600 hover:text-foreground">Material Cost</Link></li>
                  </ul>
                  <h3 className="font-bold mb-3 mt-6 text-sm uppercase tracking-wider text-gray-400">Fencing &amp; Paving</h3>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/chain-link-fence-calculator" className="text-gray-600 hover:text-foreground">Chain Link Fence</Link></li>
                    <li><Link href="/wood-fence-calculator" className="text-gray-600 hover:text-foreground">Wood Fence</Link></li>
                    <li><Link href="/fence-post-calculator" className="text-gray-600 hover:text-foreground">Fence Post</Link></li>
                    <li><Link href="/asphalt-calculator" className="text-gray-600 hover:text-foreground">Asphalt</Link></li>
                    <li><Link href="/paver-calculator" className="text-gray-600 hover:text-foreground">Paver</Link></li>
                    <li><Link href="/french-drain-calculator" className="text-gray-600 hover:text-foreground">French Drain</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>&copy; 2026 Build Calculators. All rights reserved.</p>
                <div className="mt-2 md:mt-0 space-x-4">
                  <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
