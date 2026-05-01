'use client';

import { motion } from 'framer-motion';
import { mapoMonthlySalesSummary, mapoSalesMetrics, mapoSalesTotal } from '../model';

const EASE = [0.22, 1, 0.36, 1] as const;
const CHART_WIDTH = 760;
const CHART_HEIGHT = 360;
const CHART_PADDING_X = 72;
const CHART_PADDING_TOP = 42;
const CHART_PADDING_BOTTOM = 68;
const CHART_INNER_WIDTH = CHART_WIDTH - CHART_PADDING_X * 2;
const CHART_INNER_HEIGHT = CHART_HEIGHT - CHART_PADDING_TOP - CHART_PADDING_BOTTOM;
const maxSales = Math.max(...mapoMonthlySalesSummary.map((item) => item.totalSales));
const minAov = Math.min(...mapoMonthlySalesSummary.map((item) => item.averageOrderValue));
const maxAov = Math.max(...mapoMonthlySalesSummary.map((item) => item.averageOrderValue));
const aovRange = maxAov - minAov || 1;

const chartPoints = mapoMonthlySalesSummary.map((item, index) => {
  const x = CHART_PADDING_X + (CHART_INNER_WIDTH * index) / (mapoMonthlySalesSummary.length - 1);
  const aovRatio = (item.averageOrderValue - minAov) / aovRange;
  const y = CHART_PADDING_TOP + CHART_INNER_HEIGHT * (1 - aovRatio);

  return { ...item, x, y };
});

const aovPath = chartPoints
  .map((point, index) => (index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`))
  .join(' ');

function formatWon(value: number) {
  return `${value.toLocaleString('ko-KR')}원`;
}

function formatShortWon(value: number) {
  if (value >= 100000000) {
    const hundredMillion = Math.floor(value / 100000000);
    const restMan = Math.round((value % 100000000) / 10000);
    return `${hundredMillion}억 ${restMan.toLocaleString('ko-KR')}만원`;
  }

  return `${Math.round(value / 10000).toLocaleString('ko-KR')}만원`;
}

function formatOrders(value: number) {
  return `${value.toLocaleString('ko-KR')}콜`;
}

function StatCard({ eyebrow, value, label }: { eyebrow: string; value: string; label: string }) {
  return (
    <div className="rounded-lg border border-[color:var(--color-wood-700)] bg-black/42 p-5 shadow-[0_22px_54px_-34px_rgba(0,0,0,0.9)]">
      <p className="font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.2em] text-[var(--color-red-400)]">
        {eyebrow}
      </p>
      <p className="mt-3 font-(family-name:--font-black-han-sans) text-3xl leading-none text-[var(--color-beige-100)] sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 font-(family-name:--font-noto-sans-kr) text-sm font-bold text-[var(--color-beige-500)]">
        {label}
      </p>
    </div>
  );
}

function ComboChart() {
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
            MAPO MAIN STORE
          </p>
          <h3 className="mt-2 font-(family-name:--font-black-han-sans) text-3xl leading-none text-white sm:text-4xl">
            월별 매출 + 객단가
          </h3>
        </div>
        <div className="flex gap-3 font-(family-name:--font-noto-sans-kr) text-xs font-bold text-[var(--color-beige-500)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red-400)]" />
            월매출
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-beige-100)]" />
            객단가
          </span>
        </div>
      </div>

      <div className="relative aspect-[760/360] w-full">
        <svg viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} className="h-full w-full">
          <defs>
            <linearGradient id="mapo-sales-bar" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E04F61" />
              <stop offset="100%" stopColor="#8E1B2C" />
            </linearGradient>
            <filter id="mapo-chart-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {[0.25, 0.5, 0.75, 1].map((line) => {
            const y = CHART_PADDING_TOP + CHART_INNER_HEIGHT * line;
            return (
              <line
                key={line}
                x1={CHART_PADDING_X - 30}
                x2={CHART_WIDTH - CHART_PADDING_X + 30}
                y1={y}
                y2={y}
                stroke="rgba(245,233,201,0.11)"
                strokeDasharray="5 10"
              />
            );
          })}

          {mapoMonthlySalesSummary.map((item, index) => {
            const barWidth = 86;
            const x = chartPoints[index].x - barWidth / 2;
            const height = (item.totalSales / maxSales) * CHART_INNER_HEIGHT;
            const y = CHART_PADDING_TOP + CHART_INNER_HEIGHT - height;

            return (
              <motion.g
                key={item.month}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.12 + index * 0.12, ease: EASE }}
              >
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height}
                  rx={10}
                  fill="url(#mapo-sales-bar)"
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 16}
                  textAnchor="middle"
                  className="fill-[var(--color-beige-100)] font-(family-name:--font-noto-sans-kr) text-[18px] font-black"
                >
                  {formatShortWon(item.totalSales)}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={CHART_HEIGHT - 22}
                  textAnchor="middle"
                  className="fill-[var(--color-beige-500)] font-(family-name:--font-noto-sans-kr) text-[17px] font-black"
                >
                  {item.month}
                </text>
              </motion.g>
            );
          })}

          <motion.path
            d={aovPath}
            fill="none"
            stroke="var(--color-beige-100)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#mapo-chart-glow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.25, delay: 0.45, ease: EASE }}
          />

          {chartPoints.map((point, index) => (
            <motion.g
              key={`${point.month}-aov`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.9 + index * 0.12, ease: EASE }}
              style={{ transformOrigin: `${point.x}px ${point.y}px` }}
            >
              <circle cx={point.x} cy={point.y} r={13} fill="rgba(245,233,201,0.18)" />
              <circle
                cx={point.x}
                cy={point.y}
                r={7}
                fill="var(--color-beige-100)"
                stroke="var(--color-red-500)"
                strokeWidth={3}
              />
              <text
                x={point.x}
                y={point.y - 20}
                textAnchor="middle"
                className="fill-white font-(family-name:--font-noto-sans-kr) text-[16px] font-black"
              >
                {formatWon(point.averageOrderValue)}
              </text>
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

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-black/28 p-4">
          <p className="font-(family-name:--font-noto-sans-kr) text-xs font-black text-[var(--color-beige-500)]">
            배민 누적 매출
          </p>
          <p className="mt-2 font-(family-name:--font-black-han-sans) text-3xl text-[var(--color-beige-100)]">
            {formatShortWon(mapoSalesTotal.baeminSales)}
          </p>
          <p className="mt-1 font-(family-name:--font-noto-sans-kr) text-xs font-bold text-white/50">
            {mapoSalesMetrics.baeminShare}% · {formatOrders(mapoSalesTotal.baeminOrders)}
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
            {mapoSalesMetrics.coupangShare}% · {formatOrders(mapoSalesTotal.coupangOrders)}
          </p>
        </div>
      </div>

      <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-xs leading-[1.75] font-medium text-white/45">
        * 마포본점 2026년 1월부터 3월까지의 배달앱 매출 데이터 기준입니다. 매출은 상권, 운영 방식,
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
        3M
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-400)] sm:text-xs">
              REAL SALES DATA
            </p>
            <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.06] text-white sm:text-6xl md:text-7xl">
              마포본점 3개월 연속
              <br />
              <span className="text-[var(--color-beige-100)]">월매출 1억 이상</span>
            </h2>
          </div>
          <p className="max-w-2xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.8] font-bold text-[var(--color-beige-500)] sm:text-lg lg:justify-self-end">
            주문 수만 많은 것이 아니라, 평균 객단가까지 꾸준히 상승한 실제 매출 흐름입니다. 창업
            판단에 필요한 숫자를 한 화면에서 확인할 수 있게 정리했습니다.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
          <StatCard
            eyebrow="TOTAL SALES"
            value={formatWon(mapoSalesTotal.totalSales)}
            label="3개월 누적 매출"
          />
          <StatCard
            eyebrow="TOTAL ORDERS"
            value={formatOrders(mapoSalesTotal.totalOrders)}
            label="3개월 누적 주문"
          />
          <StatCard
            eyebrow="AVG ORDER"
            value={formatWon(mapoSalesMetrics.averageOrderValue)}
            label="3개월 평균 객단가"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.25fr_0.75fr]">
          <ComboChart />
          <PlatformShare />
        </div>
      </div>
    </section>
  );
}
