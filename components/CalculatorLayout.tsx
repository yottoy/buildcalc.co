import React from 'react';
import Link from 'next/link';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  lastUpdated?: string; // ISO date string, e.g. "2026-02-09"
  relatedCalculators?: Array<{
    name: string;
    slug: string;
    description: string;
  }>;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function CalculatorLayout({
  title,
  description,
  children,
  lastUpdated = '2026-05-10',
  relatedCalculators = [],
}: CalculatorLayoutProps) {
  // Generate breadcrumb schema
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.buildcalc.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": `https://www.buildcalc.co/${slug}`
      }
    ]
  };

  return (
    <>
      {/* Add Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb with structured data */}
        <nav className="mb-6 text-sm text-gray-600 no-print" itemScope itemType="https://schema.org/BreadcrumbList">
          <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-foreground">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </span>
          <span className="mx-2">/</span>
          <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{title}</span>
            <meta itemProp="position" content="2" />
          </span>
        </nav>

        {/* Header with author and date */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-3">{description}</p>
          <div className="text-sm text-gray-500">
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              By <span itemProp="name" className="font-medium text-gray-700">Marcus Rivera</span>
            </span>
            {' • '}
            <time dateTime={lastUpdated}>Last updated: {formatDate(lastUpdated)}</time>
          </div>
        </div>

        {/* Calculator */}
        <div className="mb-12">
          {children}
        </div>

        {/* Related Calculators */}
        {relatedCalculators.length > 0 && (
          <div className="border-t border-gray-200 pt-12 no-print">
            <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedCalculators.map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/${calc.slug}`}
                  className="p-4 border border-gray-200 hover:border-gray-900 transition-colors"
                >
                  <h3 className="font-bold mb-1">{calc.name}</h3>
                  <p className="text-sm text-gray-600">{calc.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Browse All Calculators */}
        <div className="mt-8 no-print">
          <Link
            href="/"
            className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 underline hover:no-underline"
          >
            ← Browse All 23 Construction Calculators
          </Link>
        </div>

        {/* Author Attribution with structured data */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600 no-print">
          <div itemScope itemType="https://schema.org/Person">
            <p>
              Calculator by <span itemProp="name" className="font-medium">Marcus Rivera</span> |
              <span itemProp="jobTitle"> Construction Calculator Specialist</span>
            </p>
            <p className="mt-1">Last updated: <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time></p>
          </div>
        </div>
      </div>
    </>
  );
}
