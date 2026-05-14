import type { MetadataRoute } from 'next';
import { SITE_ORIGIN, absoluteUrl } from '@shared/config/site';

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === 'preview';

  return {
    rules: {
      userAgent: '*',
      allow: isPreview ? undefined : '/',
      disallow: isPreview ? '/' : undefined,
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_ORIGIN,
  };
}
