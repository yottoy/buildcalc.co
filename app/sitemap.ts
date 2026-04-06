import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.buildcalc.co';

  // Per-page actual last-modified dates (matches layout.tsx dateModified values)
  const calculators: { slug: string; lastModified: string }[] = [
    { slug: 'asphalt-calculator',          lastModified: '2026-04-06' },
    { slug: 'brick-calculator',            lastModified: '2026-04-06' },
    { slug: 'bulk-material-calculator',    lastModified: '2026-04-06' },
    { slug: 'chain-link-fence-calculator', lastModified: '2026-04-06' },
    { slug: 'concrete-cost-calculator',    lastModified: '2026-04-06' },
    { slug: 'concrete-driveway-calculator',lastModified: '2026-04-06' },
    { slug: 'concrete-steps-calculator',   lastModified: '2026-04-06' },
    { slug: 'construction-cost-calculator',lastModified: '2026-04-06' },
    { slug: 'crushed-stone-calculator',    lastModified: '2026-04-06' },
    { slug: 'dirt-calculator',             lastModified: '2026-04-06' },
    { slug: 'drywall-calculator',          lastModified: '2026-04-06' },
    { slug: 'fence-post-calculator',       lastModified: '2026-04-06' },
    { slug: 'french-drain-calculator',     lastModified: '2026-04-06' },
    { slug: 'gravel-cost-calculator',      lastModified: '2026-04-06' },
    { slug: 'insulation-calculator',       lastModified: '2026-04-06' },
    { slug: 'landscaping-calculator',      lastModified: '2026-04-06' },
    { slug: 'material-cost-estimator',     lastModified: '2026-04-06' },
    { slug: 'paver-calculator',            lastModified: '2026-04-06' },
    { slug: 'pea-gravel-calculator',       lastModified: '2026-04-06' },
    { slug: 'sand-calculator',             lastModified: '2026-04-06' },
    { slug: 'sod-calculator',              lastModified: '2026-04-06' },
    { slug: 'stucco-calculator',           lastModified: '2026-04-06' },
    { slug: 'wood-fence-calculator',       lastModified: '2026-04-06' },
  ];

  const calculatorUrls = calculators.map(({ slug, lastModified }) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    { slug: 'about',   priority: 0.5, lastModified: '2026-04-06' },
    { slug: 'contact', priority: 0.5, lastModified: '2026-04-06' },
    { slug: 'terms',   priority: 0.3, lastModified: '2026-04-06' },
    { slug: 'privacy', priority: 0.3, lastModified: '2026-04-06' },
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
      lastModified: '2026-04-06',
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...calculatorUrls,
    ...staticUrls,
  ];
}
