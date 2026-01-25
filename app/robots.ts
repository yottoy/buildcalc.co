import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/static/media/',  // Block font files
          '/_next/static/chunks/',  // Block JS chunks
          '/_next/image',           // Block image optimization API
          '/api/',                  // Block API routes if any
        ],
      },
      {
        // OpenAI GPTBot (ChatGPT)
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // Anthropic ClaudeBot
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        // Anthropic ClaudeBot (alternative)
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        // Perplexity AI
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Google's Bard/Gemini
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    sitemap: 'https://www.buildcalc.co/sitemap.xml',
  };
}
