import { NextResponse } from 'next/server';
import { SITE_ORIGIN, absoluteUrl } from '@shared/config/site';

export async function GET() {
  return NextResponse.json(
    {
      hasGoogleVerification: Boolean(process.env.GOOGLE_SITE_VERIFICATION),
      hasNaverVerification: Boolean(process.env.NAVER_SITE_VERIFICATION),
      siteOrigin: SITE_ORIGIN,
      sitemap: absoluteUrl('/sitemap.xml'),
      robots: absoluteUrl('/robots.txt'),
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  );
}
