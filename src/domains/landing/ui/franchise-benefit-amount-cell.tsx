'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { FranchiseBenefitRow } from '../model';

const EASE = [0.22, 1, 0.36, 1] as const;

export function BenefitAmountCell({
  amount,
  index,
  size = 'default',
}: {
  amount: FranchiseBenefitRow['amount'];
  index: number;
  size?: 'default' | 'compact' | 'mobile';
}) {
  const shouldReduceMotion = useReducedMotion();
  const isCompact = size === 'compact';
  const isMobile = size === 'mobile';

  if (amount === 'waived') {
    const stampDelay = 0.1 + index * 0.055;

    return (
      <motion.div
        className="flex justify-center"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          aria-label="무상 혜택"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -8,
                  scale: 2.15,
                  rotate: -18,
                  filter: 'blur(2px)',
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: -7,
            filter: 'blur(0px)',
          }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: 'spring',
                  stiffness: 620,
                  damping: 17,
                  mass: 0.7,
                  delay: stampDelay,
                }
          }
          className={[
            'relative grid place-items-center border-2 border-[color:var(--color-red-500)] bg-[rgba(215,38,61,0.08)] font-(family-name:--font-black-han-sans) leading-none text-[var(--color-red-500)] shadow-[0_18px_34px_-22px_rgba(215,38,61,0.95)]',
            isMobile
              ? 'h-8 w-[48px] rounded-[5px] min-[380px]:h-9 min-[380px]:w-[56px]'
              : isCompact
                ? 'h-10 w-[66px] rounded-[5px] md:h-11 md:w-[74px]'
                : 'h-11 w-[72px] rounded-[5px] sm:h-[58px] sm:w-[96px] sm:rounded-md',
          ].join(' ')}
        >
          <motion.span
            aria-hidden
            className="absolute -inset-1 rounded-[7px] border border-[color:var(--color-red-400)]/65"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
            whileInView={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: [0, 0.72, 0],
                    scale: [0.72, 1.08, 1.22],
                  }
            }
            viewport={{ once: true, amount: 0.35 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.42,
                    delay: stampDelay + 0.08,
                    ease: EASE,
                  }
            }
          />
          <span
            aria-hidden
            className="absolute inset-1 rounded-[4px] border border-[color:var(--color-red-500)]/80 sm:rounded-[5px]"
          />
          <span
            aria-hidden
            className={
              isMobile
                ? 'text-[20px] min-[380px]:text-[23px]'
                : isCompact
                  ? 'text-[24px] md:text-[27px]'
                  : 'text-[26px] sm:text-[34px]'
            }
          >
            無
          </span>
        </motion.span>
      </motion.div>
    );
  }

  const label = {
    self: '자율 시공 가능',
    purchase: '필요한 만큼만 구입',
    consult: '상담시 안내',
  }[amount];

  return (
    <span
      className={[
        'block font-(family-name:--font-black-han-sans) leading-[1.15] break-keep text-[var(--color-beige-100)]',
        isMobile
          ? 'text-[9.5px] min-[380px]:text-[10.5px]'
          : isCompact
            ? 'text-[13px] md:text-base'
            : 'text-sm sm:text-2xl sm:leading-none',
      ].join(' ')}
    >
      {label}
    </span>
  );
}
