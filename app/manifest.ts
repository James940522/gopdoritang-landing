import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '심 곱도리탕 창업',
    short_name: '심 곱도리탕',
    description: '프리미엄 곱도리탕 프랜차이즈 심 곱도리탕 창업 안내',
    start_url: '/',
    id: '/',
    display: 'standalone',
    background_color: '#0E0907',
    theme_color: '#1a1208',
    lang: 'ko-KR',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
