import {
  Noto_Sans_KR,
  Noto_Serif_KR,
  Jua,
  Gowun_Batang,
  Gowun_Dodum,
} from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

export const jua = Jua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jua",
  display: "swap",
});

export const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gowun-batang",
  display: "swap",
});

export const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gowun-dodum",
  display: "swap",
});

export const fontVariables = [
  notoSansKr.variable,
  notoSerifKr.variable,
  jua.variable,
  gowunBatang.variable,
  gowunDodum.variable,
].join(" ");
