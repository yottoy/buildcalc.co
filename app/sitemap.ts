import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.buildcalc.co';

  // Per-page actual last-modified dates (matches layout.tsx dateModified values)
  const calculators: { slug: string; lastModified: string }[] = [
    { slug: 'asphalt-calculator',          lastModified: '2026-02-09' },
    { slug: 'brick-calculator',            lastModified: '2026-02-09' },
    { slug: 'bulk-material-calculator',    lastModified: '2026-02-09' },
    { slug: 'chain-link-fence-calculator', lastModified: '2026-02-04' },
    { slug: 'concrete-cost-calculator',    lastModified: '2026-02-09' },
    { slug: 'concrete-driveway-calculator',lastModified: '2026-02-09' },
    { slug: 'concrete-steps-calculator',   lastModified: '2026-02-09' },
    { slug: 'construction-cost-calculator',lastModified: '2026-02-09' },
    { slug: 'crushed-stone-calculator',    lastModified: '2026-02-04' },
    { slug: 'dirt-calculator',             lastModified: '2026-02-04' },
    { slug: 'drywall-calculator',          lastModified: '2026-02-04' },
    { slug: 'fence-post-calculator',       lastModified: '2026-02-09' },
    { slug: 'french-drain-calculator',     lastModified: '2026-02-09' },
    { slug: 'gravel-cost-calculator',      lastModified: '2026-02-09' },
    { slug: 'insulation-calculator',       lastModified: '2026-02-09' },
    { slug: 'landscaping-calculator',      lastModified: '2026-02-09' },
    { slug: 'material-cost-estimator',     lastModified: '2026-02-09' },
    { slug: 'paver-calculator',            lastModified: '2026-02-09' },
    { slug: 'pea-gravel-calculator',       lastModified: '2026-02-09' },
    { slug: 'sand-calculator',             lastModified: '2026-02-09' },
    { slug: 'sod-calculator',              lastModified: '2026-02-09' },
    { slug: 'stucco-calculator',           lastModified: '2026-02-09' },
    { slug: 'wood-fence-calculator',       lastModified: '2026-02-09' },
  ];

  const calculatorUrls = calculators.map(({ slug, lastModified }) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    { slug: 'about',   priority: 0.5, lastModified: '2026-02-09' },
    { slug: 'contact', priority: 0.5, lastModified: '2026-02-09' },
    { slug: 'terms',   priority: 0.3, lastModified: '2026-02-09' },
    { slug: 'privacy', priority: 0.3, lastModified: '2026-02-09' },
  ];

  const staticUrls = staticPages.map(({ slug, priority, lastModified }) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified: '2026-03-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...calculatorUrls,
    ...staticUrls,
  ];
}
