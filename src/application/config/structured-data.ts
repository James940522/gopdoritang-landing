import { absoluteUrl, OG_IMAGES, SITE_ORIGIN } from '@shared/config/site';

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: '주식회사 온어스에프앤비',
      alternateName: ['심 곱도리탕', '심곱도리탕'],
      url: SITE_ORIGIN,
      logo: absoluteUrl('/asset/etc/logo.png'),
      image: OG_IMAGES.map((image) => image.url),
      description:
        '곱도리탕부터 낙곱새까지, 배달 매출에 강한 프리미엄 한식 프랜차이즈 심 곱도리탕을 운영하는 브랜드입니다.',
      foundingDate: '2026-01-22',
      legalName: '주식회사 온어스에프앤비',
    },
    {
      '@type': 'Brand',
      '@id': absoluteUrl('/#brand'),
      name: '심 곱도리탕',
      alternateName: '심곱도리탕',
      url: SITE_ORIGIN,
      logo: absoluteUrl('/asset/etc/logo.png'),
      image: OG_IMAGES.map((image) => image.url),
      slogan: '프리미엄 곱도리탕의 기준',
      description: '매출 구조와 운영 효율까지 설계된 배달 특화 곱도리탕 창업 브랜드입니다.',
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: SITE_ORIGIN,
      name: '심 곱도리탕 창업',
      description:
        '곱도리탕 창업, 배달 창업, 한식 프랜차이즈 창업을 검토하는 예비 점주를 위한 심 곱도리탕 창업 안내 페이지입니다.',
      inLanguage: 'ko-KR',
      publisher: {
        '@id': absoluteUrl('/#organization'),
      },
    },
    {
      '@type': 'WebPage',
      '@id': absoluteUrl('/#webpage'),
      url: SITE_ORIGIN,
      name: '심 곱도리탕 창업 | 프리미엄 곱도리탕 프랜차이즈',
      description:
        '곱도리탕부터 닭도리탕, 낙곱새까지 배달 매출에 강한 프리미엄 한식 프랜차이즈 심 곱도리탕 창업 안내 페이지입니다.',
      inLanguage: 'ko-KR',
      isPartOf: {
        '@id': absoluteUrl('/#website'),
      },
      about: {
        '@id': absoluteUrl('/#brand'),
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: OG_IMAGES[0].url,
        width: 1200,
        height: 630,
      },
      breadcrumb: {
        '@id': absoluteUrl('/#breadcrumb'),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': absoluteUrl('/#breadcrumb'),
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '심 곱도리탕 창업',
          item: SITE_ORIGIN,
        },
      ],
    },
  ],
} as const;
