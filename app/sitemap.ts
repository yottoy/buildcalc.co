import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.buildcalc.co'; // Update to your actual domain
  const currentDate = new Date().toISOString();

  const calculators = [
    'asphalt-calculator',
    'brick-calculator',
    'bulk-material-calculator',
    'chain-link-fence-calculator',
    'concrete-cost-calculator',
    'concrete-driveway-calculator',
    'concrete-steps-calculator',
    'construction-cost-calculator',
    'crushed-stone-calculator',
    'dirt-calculator',
    'drywall-calculator',
    'fence-post-calculator',
    'french-drain-calculator',
    'gravel-cost-calculator',
    'insulation-calculator',
    'landscaping-calculator',
    'material-cost-estimator',
    'paver-calculator',
    'pea-gravel-calculator',
    'sand-calculator',
    'sod-calculator',
    'stucco-calculator',
    'wood-fence-calculator',
  ];

  const calculatorUrls = calculators.map((calc) => ({
    url: `${baseUrl}/${calc}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    { slug: 'about', priority: 0.5 },
    { slug: 'terms', priority: 0.3 },
    { slug: 'privacy', priority: 0.3 },
    { slug: 'contact', priority: 0.5 },
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...calculatorUrls,
    ...staticUrls,
  ];
}
