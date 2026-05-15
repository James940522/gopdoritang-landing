import type { MetadataRoute } from 'next';
import { OG_IMAGES, SITE_ORIGIN } from '@shared/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_ORIGIN,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: OG_IMAGES.map((image) => image.url),
    },
  ];
}
