import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Build Calculators - Free Construction Calculators | BuildCalc 2026',
  description: 'Learn about Build Calculators. We provide free, accurate construction and landscaping calculators for contractors, builders, and DIY homeowners.',
  alternates: {
    canonical: 'https://www.buildcalc.co/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
