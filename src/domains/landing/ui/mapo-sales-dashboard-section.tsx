'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { mapoMonthlySalesSummary, mapoSalesMetrics, mapoSalesTotal } from '../model';

const EASE = [0.22, 1, 0.36, 1] as const;
const CHART_WIDTH = 820;
const CHART_HEIGHT = 390;
const CHART_PADDING_X = 64;
const CHART_PADDING_TOP = 52;
const CHART_PADDING_BOTTOM = 78;
const CHART_INNER_WIDTH = CHART_WIDTH - CHART_PADDING_X * 2;
const CHART_INNER_HEIGHT = CHART_HEIGHT - CHART_PADDING_TOP - CHART_PADDING_BOTTOM;
const maxSales = Math.max(...mapoMonthlySalesSummary.map((item) => item.totalSales));

const monthlySalesLinePoints = mapoMonthlySalesSummary.map((item, index) => {
  const slotWidth = CHART_INNER_WIDTH / mapoMonthlySalesSummary.length;
  const x = CHART_PADDING_X + slotWidth * index + slotWidth / 2;
  const totalHeight = (item.totalSales / maxSales) * CHART_INNER_HEIGHT;
  const y = CHART_PADDING_TOP + CHART_INNER_HEIGHT - totalHeight + 16;

  return { x, y };
});

const monthlySalesPath = monthlySalesLinePoints
  .map((point, index) => (index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`))
  .join(' ');
const averageMonthlySales = Math.round(mapoSalesTotal.totalSales / mapoMonthlySalesSummary.length);

function formatNumber(value: number) {
  return value.toLocaleString('ko-KR');
}

function formatShortWon(value: number) {
  if (value >= 100000000) {
    const hundredMillion = Math.floor(value / 100000000);
    const restMan = Math.round((value % 100000000) / 10000);
    return `${hundredMillion}억 ${formatNumber(restMan)}만원`;
  }

  return `${formatNumber(Math.round(value / 10000))}만원`;
}

function RollingNumber({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.65,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">
        {formatNumber(shouldReduceMotion ? value : displayValue)}
      </span>
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function HeroMetric({
  eyebrow,
  value,
  suffix,
  label,
  featured = false,
}: {
  eyebrow: string;
  value: number;
  suffix: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85, ease: EASE }}
      className={[
        'relative overflow-hidden rounded-lg border border-[color:var(--color-wood-700)] bg-black/46 shadow-[0_30px_80px_-48px_rgba(0,0,0,0.95)] backdrop-blur-md',
        featured ? 'p-6 sm:p-8 lg:p-10' : 'p-5 sm:p-7',
      ].join(' ')}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--color-beige-100)]/50 to-transparent"
      />
      <p className="font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.24em] text-[var(--color-red-400)]">
        {eyebrow}
      </p>
      <RollingNumber
        value={value}
        suffix={suffix}
        className={[
          'mt-4 block font-(family-name:--font-black-han-sans) leading-none tracking-normal text-[var(--color-beige-100)]',
          featured ? 'text-[clamp(2rem,6.8vw,5.6rem)]' : 'text-[clamp(2.2rem,5.8vw,4.8rem)]',
        ].join(' ')}
      />
      <p className="mt-4 font-(family-name:--font-noto-sans-kr) text-sm font-bold text-[var(--color-beige-500)] sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}

function MonthlySalesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative rounded-lg border border-[color:var(--color-wood-700)] bg-[rgba(15,12,10,0.72)] p-4 shadow-[0_34px_90px_-52px_rgba(0,0,0,0.95)] backdrop-blur-md sm:p-6"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.24em] text-[var(--color-red-400)]">
            MONTHLY SALES
          </p>
          <h3 className="mt-2 font-(family-name:--font-black-han-sans) text-3xl leading-none text-white sm:text-4xl">
            월별 매출 추이
          </h3>
        </div>
        <div className="flex gap-3 font-(family-name:--font-noto-sans-kr) text-xs font-bold text-[var(--color-beige-500)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-beige-100)]" />
            배민
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red-500)]" />
            쿠팡
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-5 bg-[var(--color-wood-300)]" />
            총매출
          </span>
        </div>
      </div>

      <div className="relative aspect-[820/390] w-full">
        <svg viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} className="h-full w-full">
          <defs>
            <linearGradient id="mapo-coupang-bar" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E04F61" />
              <stop offset="100%" stopColor="#8E1B2C" />
            </linearGradient>
          </defs>

          {[0.25, 0.5, 0.75, 1].map((line) => {
            const y = CHART_PADDING_TOP + CHART_INNER_HEIGHT * line;
            return (
              <line
                key={line}
                x1={CHART_PADDING_X - 24}
                x2={CHART_WIDTH - CHART_PADDING_X + 24}
                y1={y}
                y2={y}
                stroke="rgba(245,233,201,0.11)"
                strokeDasharray="5 10"
              />
            );
          })}

          {mapoMonthlySalesSummary.map((item, index) => {
            const slotWidth = CHART_INNER_WIDTH / mapoMonthlySalesSummary.length;
            const barWidth = 82;
            const x = CHART_PADDING_X + slotWidth * index + (slotWidth - barWidth) / 2;
            const totalHeight = (item.totalSales / maxSales) * CHART_INNER_HEIGHT;
            const baeminHeight = (item.baeminSales / item.totalSales) * totalHeight;
            const coupangHeight = totalHeight - baeminHeight;
            const baseY = CHART_PADDING_TOP + CHART_INNER_HEIGHT;
            const topY = baseY - totalHeight;

            return (
              <motion.g
                key={item.month}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.12 + index * 0.11, ease: EASE }}
              >
                <rect
                  x={x}
                  y={topY}
                  width={barWidth}
                  height={coupangHeight}
                  rx={10}
                  fill="url(#mapo-coupang-bar)"
                />
                <rect
                  x={x}
                  y={baseY - baeminHeight}
                  width={barWidth}
                  height={baeminHeight}
                  rx={10}
                  fill="var(--color-beige-100)"
                />
                <text
                  x={x + barWidth / 2}
                  y={topY - 16}
                  textAnchor="middle"
                  className="fill-[var(--color-beige-100)] font-(family-name:--font-noto-sans-kr) text-[18px] font-black"
                >
                  {formatShortWon(item.totalSales)}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={CHART_HEIGHT - 40}
                  textAnchor="middle"
                  className="fill-[var(--color-beige-500)] font-(family-name:--font-noto-sans-kr) text-[17px] font-black"
                >
                  {item.month}
                </text>
              </motion.g>
            );
          })}

          <motion.path
            d={monthlySalesPath}
            fill="none"
            stroke="var(--color-wood-300)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          />

          {monthlySalesLinePoints.map((point, index) => (
            <motion.g
              key={`${mapoMonthlySalesSummary[index].month}-total-line`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: 0.92 + index * 0.1, ease: EASE }}
              style={{ transformOrigin: `${point.x}px ${point.y}px` }}
            >
              <circle cx={point.x} cy={point.y} r={13} fill="rgba(201,157,112,0.22)" />
              <circle
                cx={point.x}
                cy={point.y}
                r={7}
                fill="var(--color-wood-300)"
                stroke="var(--color-surface-900)"
                strokeWidth={3}
              />
            </motion.g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}

function PlatformShare() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay: 0.16, ease: EASE }}
      className="rounded-lg border border-[color:var(--color-wood-700)] bg-[rgba(21,17,14,0.86)] p-5 backdrop-blur-md sm:p-7"
    >
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.24em] text-[var(--color-red-400)]">
            DELIVERY MIX
          </p>
          <h3 className="mt-2 font-(family-name:--font-black-han-sans) text-3xl leading-none text-white sm:text-4xl">
            배달앱 매출 비중
          </h3>
        </div>
        <p className="font-(family-name:--font-black-han-sans) text-4xl leading-none text-[var(--color-beige-100)]">
          {mapoSalesMetrics.coupangShare}%
        </p>
      </div>

      <div className="mt-7 overflow-hidden rounded-full border border-white/10 bg-black/45">
        <div className="flex h-5 w-full">
          <motion.div
            className="bg-[var(--color-beige-100)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${mapoSalesMetrics.baeminShare}%` }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.div
            className="bg-[var(--color-red-500)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${mapoSalesMetrics.coupangShare}%` }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="rounded-lg bg-black/28 p-4">
          <p className="font-(family-name:--font-noto-sans-kr) text-xs font-black text-[var(--color-beige-500)]">
            배민 누적 매출
          </p>
          <p className="mt-2 font-(family-name:--font-black-han-sans) text-3xl text-[var(--color-beige-100)]">
            {formatShortWon(mapoSalesTotal.baeminSales)}
          </p>
          <p className="mt-1 font-(family-name:--font-noto-sans-kr) text-xs font-bold text-white/50">
            전체 매출 중 {mapoSalesMetrics.baeminShare}%
          </p>
        </div>
        <div className="rounded-lg bg-black/28 p-4">
          <p className="font-(family-name:--font-noto-sans-kr) text-xs font-black text-[var(--color-beige-500)]">
            쿠팡 누적 매출
          </p>
          <p className="mt-2 font-(family-name:--font-black-han-sans) text-3xl text-[var(--color-red-400)]">
            {formatShortWon(mapoSalesTotal.coupangSales)}
          </p>
          <p className="mt-1 font-(family-name:--font-noto-sans-kr) text-xs font-bold text-white/50">
            전체 매출 중 {mapoSalesMetrics.coupangShare}%
          </p>
        </div>
      </div>

      <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-xs leading-[1.75] font-medium text-white/45">
        * 마포본점 2026년 1월부터 4월까지의 배달앱 매출 데이터 기준입니다. 매출은 상권, 운영 방식,
        배달앱 환경에 따라 달라질 수 있습니다.
      </p>
    </motion.aside>
  );
}

export function MapoSalesDashboardSection() {
  return (
    <section
      id="mapo-sales-dashboard"
      className="relative isolate overflow-hidden bg-[var(--color-surface-900)] py-24 text-white sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 16% 24%, rgba(215,38,61,0.28), transparent 30%), radial-gradient(circle at 78% 18%, rgba(180,124,80,0.32), transparent 26%), linear-gradient(180deg, var(--color-surface-900) 0%, #260c09 48%, var(--color-surface-900) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 46px, rgba(245,233,201,0.07) 46px 47px)',
        }}
      />
      <div
        aria-hidden
        className="absolute top-8 right-[6%] -z-10 font-(family-name:--font-black-han-sans) text-[190px] leading-none text-[rgba(73,8,15,0.24)] sm:top-12 sm:text-[300px]"
      >
        4M
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end"
        >
          <div>
            <p className="mb-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-400)] sm:text-xs">
              REAL SALES DATA
            </p>
            <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.06] text-white sm:text-6xl md:text-7xl">
              마포본점 4개월 연속
              <br />
              <span className="text-[var(--color-beige-100)]">월매출 1억 이상</span>
            </h2>
          </div>
          <p className="max-w-2xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.8] font-bold text-[var(--color-beige-500)] sm:text-lg lg:justify-self-end">
            2026년 1월부터 4월까지, 마포본점은 배달앱 기준 월매출 1억 이상 흐름을 이어가고 있습니다.
            창업 판단에 필요한 실제 매출 흐름을 한눈에 볼 수 있도록 정리했습니다.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-[1.3fr_0.7fr]">
          <HeroMetric
            eyebrow="4 MONTH TOTAL SALES"
            value={mapoSalesTotal.totalSales}
            suffix="원"
            label="2026년 1월-4월 누적 매출"
            featured
          />
          <HeroMetric
            eyebrow="MONTHLY AVERAGE SALES"
            value={averageMonthlySales}
            suffix="원"
            label="2026년 1월-4월 평균 월매출"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.25fr_0.75fr]">
          <MonthlySalesChart />
          <PlatformShare />
        </div>
      </div>
    </section>
  );
}
