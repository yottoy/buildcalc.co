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
  title: "Build Calculators - Free Construction Material Calculators | 2025",
  description: "Calculate asphalt, concrete, gravel, sand, and more. Free construction calculators with accurate formulas. Updated January 2025.",
  authors: [{ name: "Build Calculators Team" }],
  keywords: ["construction calculator", "material calculator", "asphalt calculator", "concrete calculator", "gravel calculator"],
  openGraph: {
    title: "Build Calculators - Free Construction Material Calculators",
    description: "Professional construction calculators for contractors and DIYers",
    url: "https://www.buildcalc.co",
    siteName: "Build Calculators",
    type: "website",
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
              dateModified: "2025-01-18",
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-4">Build Calculators</h3>
                  <p className="text-sm text-gray-600">
                    Free construction and landscaping calculators for contractors, builders, and DIY homeowners.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="text-gray-600 hover:text-foreground">Home</Link></li>
                    <li><Link href="/about" className="text-gray-600 hover:text-foreground">About</Link></li>
                    <li><Link href="/contact" className="text-gray-600 hover:text-foreground">Contact</Link></li>
                  </ul>
                </div>
                
                <div itemScope itemType="https://schema.org/Person">
                  <h3 className="font-bold mb-4">Created By</h3>
                  <p className="text-sm">
                    <span itemProp="name" className="font-medium">Build Calculators Team</span><br />
                    <span itemProp="jobTitle" className="text-gray-600">Construction Calculator Specialists</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    Last updated: January 2025
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
                <p>&copy; 2025 Build Calculators. All rights reserved.</p>
                <div className="mt-2 space-x-4">
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
