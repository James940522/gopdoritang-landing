import type { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
  title: "심곱도리탕 | 같이 먹을 때 더 생각나는",
  description:
    "조리시간 6분, 1~2인 운영 가능, 0원 가맹비. 배달 최적화 메뉴로 시작하는 심곱도리탕 창업 안내.",
  openGraph: {
    title: "심곱도리탕 창업 안내",
    description: "같이 먹을 때 더 생각나는 1등 곱도리탕",
    locale: "ko_KR",
    type: "website",
  },
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a1208",
};
