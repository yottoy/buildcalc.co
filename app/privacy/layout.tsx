import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BuildCalc 2026',
  description: 'Privacy policy for Build Calculators. Learn how we handle your data when using our free construction calculators.',
  alternates: {
    canonical: 'https://www.buildcalc.co/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
