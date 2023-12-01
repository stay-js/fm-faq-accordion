import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://fm-faq-accordion.znagy.hu',
  sitemap: 'https://fm-faq-accordion.znagy.hu/sitemap.xml',
});

export default robots;
