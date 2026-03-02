import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Build Calculators',
  description: 'Contact Build Calculators with questions, feedback, or suggestions about our free construction and landscaping calculators.',
  alternates: {
    canonical: 'https://www.buildcalc.co/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
