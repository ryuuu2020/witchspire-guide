import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://witchspire.gguidehub.com';
  const now = new Date();

  const routes = [
    '',
    '/guides',
    '/familiars',
    '/crafting',
    '/beginners-guide',
    '/boss-strategies',
    '/class-builds',
    '/faq',
    '/news',
    '/privacy',
    '/terms',
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : path === '/news' ? 0.9 : 0.7,
  }));
}
