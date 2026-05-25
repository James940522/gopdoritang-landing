'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { branches, type Branch } from '../model';

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  return (
    <li className="relative h-[148px] w-[236px] shrink-0 overflow-hidden rounded-lg border border-[color:var(--color-wood-700)] bg-[var(--color-surface-900)] px-5 py-5 text-[var(--color-beige-100)] shadow-[0_18px_42px_-24px_rgba(0,0,0,0.9)] sm:h-[168px] sm:w-[304px] sm:px-6 sm:py-6">
      <div aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-[var(--color-red-600)]" />
      <div
        aria-hidden
        className="absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-[var(--color-beige-300)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="absolute right-5 bottom-4 font-(family-name:--font-pol-sensibility) text-7xl leading-none text-[var(--color-beige-100)]/5 sm:text-8xl"
      >
        心
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-(family-name:--font-noto-sans-kr) text-[11px] font-black text-[var(--color-red-400)] sm:text-xs">
              계약 지점 {String(index + 1).padStart(2, '0')}
            </p>
            <p className="mt-2 font-(family-name:--font-black-han-sans) text-3xl leading-none text-white sm:text-4xl">
              {branch.name}
            </p>
          </div>
          <span className="rounded-md border border-[color:var(--color-wood-500)] px-2.5 py-1 font-(family-name:--font-noto-sans-kr) text-[10px] font-black text-[var(--color-beige-300)] sm:text-[11px]">
            OPEN
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <p className="font-(family-name:--font-noto-sans-kr) text-sm font-bold text-[var(--color-beige-500)] sm:text-base">
            {branch.status}
          </p>
          <span className="h-px flex-1 bg-[var(--color-wood-700)]/70" />
        </div>
      </div>
    </li>
  );
}

function MarqueeTrack({ items, duration = 26 }: { items: Branch[]; duration?: number }) {
  return (
    <motion.div
      className="flex w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        duration,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {[0, 1].map((group) => (
        <ul
          key={group}
          className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
          aria-hidden={group === 1}
        >
          {items.map((branch, index) => (
            <BranchCard key={`${group}-${branch.name}`} branch={branch} index={index} />
          ))}
        </ul>
      ))}
    </motion.div>
  );
}

export function BranchMarqueeWall() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="overflow-x-auto px-5 pb-4 sm:px-8">
        <ul className="flex w-max gap-4 sm:gap-5">
          {branches.map((branch, index) => (
            <BranchCard key={branch.name} branch={branch} index={index} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden" aria-label="오픈 완료 지점 목록">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[var(--color-surface-800)] to-transparent sm:w-28"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[var(--color-surface-800)] to-transparent sm:w-28"
      />

      <div className="py-1">
        <MarqueeTrack items={branches} duration={28} />
      </div>
    </div>
  );
}
