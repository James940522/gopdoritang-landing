'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, motion, useInView } from 'framer-motion';
import { monthlySales, peakMonthlySale } from '../model';

const EASE = [0.22, 1, 0.36, 1] as const;

// 차트 viewBox — 가로로 와이드하게 펼쳐 트로피 배경과 어우러지게
// H를 키우고 PAD_Y를 줄여 라인이 더 가파르게 그려지도록
const W = 1200;
const H = 460;
const PAD_X = 120;
const PAD_Y = 50;
const innerW = W - PAD_X * 2;
const innerH = H - PAD_Y * 2;

const maxSales = Math.max(...monthlySales.map((d) => d.sales));
const minSales = Math.min(...monthlySales.map((d) => d.sales));
const range = maxSales - minSales || 1;

const points = monthlySales.map((d, i) => {
  const x = PAD_X + (innerW * i) / (monthlySales.length - 1);
  const t = (d.sales - minSales) / range;
  const y = PAD_Y + innerH * (1 - t);
  return { ...d, x, y };
});

const pathD = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ');

function CountUp({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{Math.floor(value).toLocaleString('ko-KR')}</span>;
}

function SectionHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="text-center"
    >
      <p className="mb-4 font-(family-name:--font-noto-sans-kr) text-[11px] font-semibold tracking-[0.4em] text-[#E11D1D] sm:text-xs">
        SALES PERFORMANCE
      </p>
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <span
          aria-hidden
          className="hidden h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD9A0]/60 bg-black/50 font-(family-name:--font-pol-sensibility) text-xl text-[#FFD9A0] sm:inline-flex sm:h-16 sm:w-16 sm:text-3xl"
        >
          心
        </span>
        <h2 className="font-(family-name:--font-black-han-sans) text-3xl leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          심 곱도리탕은
          <br />
          <span className="text-[#FFD9A0]">매출부터 다릅니다</span>
        </h2>
        <span
          aria-hidden
          className="hidden h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD9A0]/60 bg-black/50 font-(family-name:--font-noto-sans-kr) text-[10px] font-bold tracking-[0.18em] text-[#FFD9A0] sm:inline-flex sm:h-16 sm:w-16 sm:text-xs"
        >
          NO.1
        </span>
      </div>
    </motion.header>
  );
}

function SalesHighlightCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
      className="relative mx-auto w-full max-w-2xl rounded-3xl border border-[#FFD9A0]/40 bg-black/70 px-6 py-9 text-center shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md sm:px-12 sm:py-12"
    >
      {/* 1위 매출 매장 ribbon */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E11D1D] px-5 py-1.5 font-(family-name:--font-noto-sans-kr) text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_8px_20px_-6px_rgba(225,29,29,0.7)]">
          <span aria-hidden>★</span>
          1위 매출 매장
        </span>
      </div>

      <p className="mt-1 mb-4 font-(family-name:--font-noto-sans-kr) text-[13px] text-white/75 sm:text-base">
        심 곱도리탕 서울 OO점 배달 매장에서
      </p>
      <p className="font-(family-name:--font-black-han-sans) text-4xl leading-none tracking-tight text-[#FFD9A0] sm:text-6xl md:text-7xl">
        <CountUp to={peakMonthlySale.sales} />
        <span className="ml-1 align-baseline text-2xl sm:text-4xl md:text-5xl">원</span>
      </p>
      <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-[11px] text-white/50 sm:text-[12px]">
        * 심 곱도리탕 서울 OO점의 실제 매출입니다.
      </p>
    </motion.div>
  );
}

function MonthlyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      className="relative w-full"
    >
      <div className="relative aspect-1200/460 w-full overflow-visible">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden
        >
          <defs>
            <linearGradient id="sales-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FF6A2A" />
              <stop offset="100%" stopColor="#E11D1D" />
            </linearGradient>
          </defs>

          {/* baseline */}
          <line
            x1={0}
            y1={H - PAD_Y + 30}
            x2={W}
            y2={H - PAD_Y + 30}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={1}
            strokeDasharray="4 8"
          />

          {/* line — 좌측 끝/우측 끝까지 자연스럽게 펼치기 위해 시작/끝 보조선 추가 */}
          <motion.path
            d={`M0,${points[0].y} L${pathD.slice(1)} L${W},${points[points.length - 1].y}`}
            stroke="url(#sales-line)"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
          />

          {/* dots */}
          {points.map((p, i) => (
            <motion.g
              key={p.month}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: 1.2 + i * 0.15,
                ease: EASE,
              }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            >
              <circle cx={p.x} cy={p.y} r={12} fill="#E11D1D" opacity={0.25} />
              <circle cx={p.x} cy={p.y} r={7} fill="#FFD9A0" stroke="#E11D1D" strokeWidth={3} />
            </motion.g>
          ))}
        </svg>

        {/* labels — SVG 좌표 % 기반 */}
        <div className="pointer-events-none absolute inset-0">
          {points.map((p, i) => (
            <motion.div
              key={p.month}
              className="absolute -translate-x-1/2"
              style={{
                left: `${(p.x / W) * 100}%`,
                top: `${(p.y / H) * 100}%`,
              }}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 1.4 + i * 0.15,
                ease: EASE,
              }}
            >
              <div className="flex flex-col items-center pt-6 sm:pt-8">
                <span className="mb-1.5 font-(family-name:--font-black-han-sans) text-base tracking-tight text-white sm:text-lg">
                  {p.month}
                </span>
                <span className="rounded-full border border-[#FFD9A0]/40 bg-black/70 px-3 py-1 font-(family-name:--font-noto-sans-kr) text-[11px] font-semibold whitespace-nowrap text-[#FFD9A0] backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[13px]">
                  {p.sales.toLocaleString('ko-KR')}원
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div aria-hidden className="h-20 sm:h-24" />
    </motion.div>
  );
}

export function SalesSection() {
  return (
    <section
      id="sales"
      className="relative isolate overflow-hidden bg-[#0E0907] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* 트로피 배경 — 섹션 전체 fill */}
      <Image
        src="/asset/sec-3/bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-bottom-left"
        aria-hidden
      />

      {/* 어두운 오버레이 — 트로피는 살짝 보존, 콘텐츠 영역 가독성 확보 */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[#0E0907]/55" />

      {/* 위/아래 페이드 — 위·아래 섹션과 자연 연결 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-[#0E0907] to-transparent sm:h-44"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#0E0907] to-transparent sm:h-44"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader />

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <SalesHighlightCard />
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <MonthlyChart />
        </div>
      </div>
    </section>
  );
}
