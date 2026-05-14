import type { Metadata, Viewport } from 'next';
import { OG_IMAGES, SITE_ORIGIN } from '@shared/config/site';

const isPreview = process.env.VERCEL_ENV === 'preview';
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const naverVerification = process.env.NAVER_SITE_VERIFICATION;

const title = '심 곱도리탕 창업 | 프리미엄 곱도리탕 프랜차이즈';
const description =
  '곱도리탕부터 닭도리탕, 낙곱새까지 배달 매출에 강한 프리미엄 한식 프랜차이즈 심 곱도리탕 창업 안내. 실제 매출 데이터와 운영 구조, 창업 혜택을 확인해보세요.';

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: '심 곱도리탕 창업',
  title: {
    default: title,
    template: '%s | 심 곱도리탕 창업',
  },
  description,
  keywords: [
    '심 곱도리탕',
    '심곱도리탕',
    '곱도리탕 창업',
    '곱도리탕 프랜차이즈',
    '곱도리탕 브랜드',
    '배달 창업',
    '한식 창업',
    '한식 프랜차이즈',
    '닭도리탕 창업',
    '낙곱새 창업',
    '소자본 창업',
    '프랜차이즈 창업',
  ],
  authors: [{ name: '온어스에프앤비' }],
  creator: '온어스에프앤비',
  publisher: '온어스에프앤비',
  category: 'franchise',
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    title: '심 곱도리탕 창업',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    nocache: isPreview,
    googleBot: {
      index: !isPreview,
      follow: !isPreview,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: SITE_ORIGIN,
    siteName: '심 곱도리탕 창업',
    locale: 'ko_KR',
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: OG_IMAGES.map((image) => image.url),
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
  },
  verification: {
    google: googleVerification,
  },
  other: {
    ...(naverVerification ? { 'naver-site-verification': naverVerification } : {}),
    'format-detection': 'telephone=no',
  },
};

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1a1208',
};
