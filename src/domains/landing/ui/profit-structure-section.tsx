'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { MotionStyle, MotionValue } from 'framer-motion';
import { profitStructureCards, type ProfitStructureCard } from '../model';
import { AmbientTypeTicker } from './ambient-type-ticker';

const EASE = [0.22, 1, 0.36, 1] as const;

function AnimatedHeadline() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 72, scale: 0.82 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 1, ease: EASE }}
      className="mx-auto max-w-5xl text-center"
    >
      <p className="mb-6 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-400)] sm:text-xs">
        PROFIT STRUCTURE
      </p>
      <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
        수익 구조까지
        <br />
        <span className="inline-block rounded-lg bg-[var(--color-beige-100)] px-3 py-1 text-[var(--color-surface-900)] sm:px-5">
          완성했습니다
        </span>
      </h2>
      <p className="mx-auto mt-7 max-w-2xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.85] font-bold text-[var(--color-beige-500)] sm:text-lg">
        조리 속도, 인건비, 메뉴 운영까지 매장에서 바로 체감되는 운영 구조를 설계했습니다.
      </p>
    </motion.header>
  );
}

function PlaceholderVisual({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-t-[28px] bg-[var(--color-surface-900)] sm:rounded-t-[42px]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(circle at 24% 34%, rgba(215,38,61,0.34), transparent 28%), radial-gradient(circle at 74% 66%, rgba(180,124,80,0.34), transparent 30%), linear-gradient(135deg, var(--color-surface-700), var(--color-surface-900))',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/82 via-black/44 to-black/18"
      />
      <div
        aria-hidden
        className="absolute right-6 bottom-0 font-(family-name:--font-black-han-sans) text-[132px] leading-none text-transparent sm:text-[220px]"
        style={{ WebkitTextStroke: '1px rgba(215,38,61,0.55)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="absolute top-5 right-6 font-(family-name:--font-black-han-sans) text-2xl text-[var(--color-red-400)] sm:top-8 sm:right-10 sm:text-3xl">
        {index + 1}/03
      </div>
      <div className="absolute top-7 left-6 h-12 w-12 rounded-full border border-[color:var(--color-wood-500)] bg-black/35 sm:top-9 sm:left-10">
        <span className="grid h-full w-full place-items-center font-(family-name:--font-pol-sensibility) text-2xl text-[var(--color-beige-300)]">
          心
        </span>
      </div>
    </div>
  );
}

function CardVisual({ card, index }: { card: ProfitStructureCard; index: number }) {
  if (!card.image) {
    return <PlaceholderVisual index={index} />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-t-[28px] bg-black sm:rounded-t-[42px]">
      <Image
        src={card.image}
        alt=""
        fill
        sizes="100vw"
        className="h-full w-full scale-[1.03] object-cover object-center opacity-100"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/92 via-black/34 to-black/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_34%_72%,rgba(215,38,61,0.18),transparent_34%)]"
      />
      <div
        aria-hidden
        className="absolute right-6 bottom-0 font-(family-name:--font-black-han-sans) text-[132px] leading-none text-transparent sm:text-[220px]"
        style={{ WebkitTextStroke: '1px rgba(215,38,61,0.62)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="absolute top-5 right-6 font-(family-name:--font-black-han-sans) text-2xl text-[var(--color-red-400)] sm:top-8 sm:right-10 sm:text-3xl">
        {index + 1}/03
      </div>
      <div className="absolute top-7 left-6 h-12 w-12 rounded-full border border-[color:var(--color-wood-500)] bg-black/35 sm:top-9 sm:left-10">
        <span className="grid h-full w-full place-items-center font-(family-name:--font-pol-sensibility) text-2xl text-[var(--color-beige-300)]">
          心
        </span>
      </div>
    </div>
  );
}

const CARD_TIMELINE = [
  { start: 0, end: 0.001 },
  { start: 0.34, end: 0.42 },
  { start: 0.76, end: 0.84 },
] as const;

type StackCardStyle = MotionStyle & {
  '--stack-card-top-mobile': string;
  '--stack-card-top-desktop': string;
  opacity: number;
  zIndex: number;
};

function StackCard({
  card,
  index,
  progress,
}: {
  card: ProfitStructureCard;
  index: number;
  progress: MotionValue<number>;
}) {
  const timing = CARD_TIMELINE[index];
  const entryY = index === 0 ? 0 : 1120;
  const y = useTransform(progress, [timing.start, timing.end], [entryY, 0]);
  const stackStyle: StackCardStyle = {
    '--stack-card-top-mobile': `${index * 76}px`,
    '--stack-card-top-desktop': `${index * 96}px`,
    y,
    opacity: 1,
    zIndex: index + 1,
  };

  return (
    <motion.article
      style={stackStyle}
      className="absolute bottom-0 left-1/2 top-[var(--stack-card-top-mobile)] w-screen -translate-x-1/2 overflow-hidden rounded-t-[28px] border border-[color:var(--color-wood-700)] bg-black shadow-[0_36px_90px_-42px_rgba(0,0,0,0.95)] sm:top-[var(--stack-card-top-desktop)] sm:rounded-t-[42px]"
    >
      <CardVisual card={card} index={index} />
      <div className="absolute inset-x-0 bottom-0 z-10 px-[clamp(24px,8vw,220px)] pb-[clamp(36px,8vh,112px)]">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-[color:var(--color-red-500)] bg-black/50 font-(family-name:--font-black-han-sans) text-xl text-[var(--color-red-400)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.18em] text-[var(--color-beige-500)] sm:text-xs">
            {card.caption}
          </p>
        </div>
        <h3 className="max-w-5xl font-(family-name:--font-black-han-sans) text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          {card.solution}
        </h3>
        <p className="mt-4 max-w-3xl font-(family-name:--font-noto-sans-kr) text-sm font-bold text-[var(--color-beige-300)] sm:text-lg">
          {card.problem}
        </p>
      </div>
    </motion.article>
  );
}

function StaticStack() {
  return (
    <div className="mt-14 grid gap-5">
      {profitStructureCards.map((card, index) => (
        <article
          key={card.problem}
          className="relative min-h-[390px] overflow-hidden rounded-t-[28px] border border-[color:var(--color-wood-700)] bg-black"
        >
          <CardVisual card={card} index={index} />
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8">
            <p className="mb-4 font-(family-name:--font-black-han-sans) text-2xl text-[var(--color-red-400)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.05] text-white">
              {card.solution}
            </h3>
            <p className="mt-4 font-(family-name:--font-noto-sans-kr) text-sm font-bold text-[var(--color-beige-300)]">
              {card.problem}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ScrollStack() {
  const shouldReduceMotion = useReducedMotion();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  if (shouldReduceMotion) return <StaticStack />;

  return (
    <div
      ref={targetRef}
      className="relative left-1/2 mt-16 h-[820vh] w-screen -translate-x-1/2 sm:mt-20 sm:h-[880vh]"
    >
      <div className="sticky top-[57px] h-[calc(100svh-57px)] overflow-hidden">
        {profitStructureCards.map((card, index) => (
          <StackCard key={card.problem} card={card} index={index} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}

export function ProfitStructureSection() {
  return (
    <section
      id="profit-structure"
      className="relative isolate overflow-visible bg-[var(--color-surface-900)] py-24 text-white sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 16%, rgba(215,38,61,0.22), transparent 28%), linear-gradient(180deg, var(--color-surface-900) 0%, var(--color-surface-800) 46%, var(--color-surface-900) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 44px, rgba(245,233,201,0.05) 44px 45px)',
        }}
      />
      <AmbientTypeTicker
        className="absolute inset-x-0 top-28 z-0 opacity-60 sm:top-32"
        gap="loose"
        lines={[
          {
            text: 'FAST KITCHEN FLOW DESIGNED FOR DELIVERY',
            direction: 'left',
          },
          {
            text: 'SIMPLE MENU STRONGER OPERATIONS',
            direction: 'right',
            variant: 'outline',
          },
          {
            text: 'PROFIT STRUCTURE BUILT INTO THE BRAND',
            direction: 'left',
          },
        ]}
        size="small"
        skew="left"
        tone="gold"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <AnimatedHeadline />
        <ScrollStack />
      </div>
    </section>
  );
}
