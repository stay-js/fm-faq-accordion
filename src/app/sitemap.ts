import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `https://fm-faq-accordion.znagy.hu`,
    lastModified: new Date().toISOString().split('T')[0],
  },
];

export default sitemap;
