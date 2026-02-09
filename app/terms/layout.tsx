import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | BuildCalc 2026',
  description: 'Terms of service for Build Calculators. Free construction and landscaping calculators for contractors and DIY homeowners.',
  alternates: {
    canonical: 'https://www.buildcalc.co/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
