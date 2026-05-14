export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://www.simgopdoritang.com'
).replace(/\/$/, '');

export const absoluteUrl = (path: string): string => new URL(path, `${SITE_ORIGIN}/`).toString();

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

type SiteOgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export const OG_IMAGES: SiteOgImage[] = [
  {
    url: absoluteUrl('/seo/og-primary.jpg'),
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: '붉은 테이블 위에 차려진 심 곱도리탕 메뉴 라인업',
  },
  {
    url: absoluteUrl('/seo/og-secondary.jpg'),
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: '프리미엄 한식 무드의 심 곱도리탕 메뉴 이미지',
  },
];
