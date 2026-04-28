import Image from "next/image";
import { SiteHeader } from "./site-header";
import { HeroBadge } from "./hero-badge";

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ width: 393, height: 852 }}
    >
      <Image
        src="/images/hero/background.png"
        alt=""
        fill
        priority
        sizes="393px"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-[rgba(36,20,12,0.7)]" />

      <SiteHeader />

      <div
        className="absolute font-[family-name:var(--font-noto-serif-kr)] font-bold text-[#feeab4]"
        style={{
          left: 30,
          top: 200,
          fontSize: 56,
          lineHeight: "73px",
          letterSpacing: "-0.02em",
        }}
      >
        같이 먹을 때
        <br />더 생각나는
      </div>

      <p
        className="absolute font-[family-name:var(--font-noto-sans-kr)] text-white/80"
        style={{ left: 32, top: 374, fontSize: 14, lineHeight: "22px" }}
      >
        조리 6분, 단순 레시피, 1~2인 운영 가능한
        <br />
        배달 최적화 곱도리탕 브랜드
      </p>

      <div className="absolute" style={{ left: 47, top: 446, width: 300, height: 270 }}>
        <Image
          src="/images/hero/main-bowl.png"
          alt="심곱도리탕 메인 메뉴"
          width={300}
          height={270}
          priority
          className="h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
        />
      </div>

      <HeroBadge className="absolute" style={{ left: 14, top: 504, width: 104, height: 104 }} />

      <div className="absolute inset-x-0 flex justify-center" style={{ bottom: 22 }}>
        <span className="arrow-bounce text-2xl text-white/85" aria-hidden>
          ▾
        </span>
      </div>
    </section>
  );
}
