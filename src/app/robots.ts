import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://faq-accordion.znagy.hu',
  sitemap: 'https://faq-accordion.znagy.hu/sitemap.xml',
});

export default robots;
