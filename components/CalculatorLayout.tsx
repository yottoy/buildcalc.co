import React from 'react';
import Link from 'next/link';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  relatedCalculators?: Array<{
    name: string;
    slug: string;
    description: string;
  }>;
}

export default function CalculatorLayout({
  title,
  description,
  children,
  relatedCalculators = [],
}: CalculatorLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600 no-print">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span>{title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-600">{description}</p>
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

      {/* Author Attribution */}
      <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600 no-print">
        <p>
          Calculator by <span className="font-medium">Build Calculators Team</span> | Construction Calculator Specialists
        </p>
        <p className="mt-1">Last updated: January 2025</p>
      </div>
    </div>
  );
}
