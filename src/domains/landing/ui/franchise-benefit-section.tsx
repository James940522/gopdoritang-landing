'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { franchiseBenefitRows, type FranchiseBenefitRow } from '../model';
import { AmbientTypeTicker } from './ambient-type-ticker';

const EASE = [0.22, 1, 0.36, 1] as const;

function AmountCell({ amount, index }: { amount: FranchiseBenefitRow['amount']; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (amount === 'waived') {
    return (
      <motion.div
        className="flex justify-center"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
        viewport={{ once: true, amount: 0.75 }}
      >
        <motion.span
          aria-label="면제"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 1.9,
                  rotate: -18,
                  filter: 'blur(2px)',
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: -7,
            filter: 'blur(0px)',
          }}
          viewport={{ once: true, amount: 0.75 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: 'spring',
                  stiffness: 520,
                  damping: 18,
                  mass: 0.7,
                  delay: 0.12 + index * 0.055,
                }
          }
          className="relative grid h-11 w-[72px] place-items-center rounded-[5px] border-2 border-[color:var(--color-red-500)] bg-[rgba(215,38,61,0.08)] font-(family-name:--font-black-han-sans) leading-none text-[var(--color-red-500)] shadow-[0_18px_34px_-22px_rgba(215,38,61,0.95)] sm:h-[58px] sm:w-[96px] sm:rounded-md"
        >
          <span
            aria-hidden
            className="absolute inset-1 rounded-[4px] border border-[color:var(--color-red-500)]/80 sm:rounded-[5px]"
          />
          <span aria-hidden className="text-[26px] sm:text-[34px]">
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
    <span className="block font-(family-name:--font-black-han-sans) text-sm leading-[1.15] break-keep text-[var(--color-beige-100)] sm:text-2xl sm:leading-none">
      {label}
    </span>
  );
}

export function FranchiseBenefitSection() {
  return (
    <section
      id="franchise-benefit"
      className="relative isolate overflow-hidden bg-[var(--color-surface-900)] py-24 text-white sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(215,38,61,0.26), transparent 28%), radial-gradient(circle at 86% 20%, rgba(180,124,80,0.24), transparent 28%), linear-gradient(180deg, var(--color-surface-900) 0%, var(--color-surface-800) 48%, var(--color-surface-900) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.24]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 46px, rgba(245,233,201,0.06) 46px 47px)',
        }}
      />
      <div
        aria-hidden
        className="absolute -right-16 top-24 -z-10 font-(family-name:--font-black-han-sans) text-[180px] leading-none text-[rgba(215,38,61,0.12)] sm:text-[300px]"
      >
        0
      </div>
      <AmbientTypeTicker
        className="absolute inset-x-0 top-20 z-0 opacity-65 sm:top-24"
        gap="loose"
        lines={[
          {
            text: 'LOWER STARTUP BURDEN FOR NEW OWNERS',
            direction: 'left',
          },
          {
            text: 'WAIVED FEES CLEAR COST GUIDE',
            direction: 'right',
            variant: 'outline',
          },
          {
            text: 'PREPARE ONLY WHAT YOUR STORE NEEDS',
            direction: 'left',
          },
        ]}
        size="medium"
        skew="right"
        tone="ember"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-500)] sm:text-xs">
              STARTUP BENEFIT
            </p>
            <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.06] text-white sm:text-6xl md:text-7xl">
              초기 부담은 낮추고
              <br />
              <span className="text-[var(--color-beige-100)]">필요한 것만 준비</span>
            </h2>
          </div>
          <p className="max-w-2xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.8] font-bold text-[var(--color-beige-500)] sm:text-lg lg:justify-self-end">
            심 곱도리탕은 불필요한 초기 비용을 줄이고, 점주님 상황에 맞춰 준비할 수 있도록 창업
            항목을 투명하게 안내합니다.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
          className="mt-12 overflow-hidden rounded-lg border border-[color:var(--color-wood-700)] bg-[rgba(15,12,10,0.9)] shadow-[0_36px_110px_-54px_rgba(0,0,0,0.95)] lg:mt-16"
        >
          <div className="w-full overflow-hidden">
            <table className="w-full table-fixed border-collapse lg:min-w-[860px]">
              <thead>
                <tr className="bg-black text-[var(--color-beige-100)]">
                  <th className="w-[25%] px-2 py-4 text-center font-(family-name:--font-black-han-sans) text-[clamp(22px,6vw,30px)] leading-none font-normal sm:w-[23%] sm:px-6 sm:py-5 sm:text-3xl">
                    구분
                  </th>
                  <th className="w-[47%] border-x border-white/45 px-2 py-4 text-center font-(family-name:--font-black-han-sans) text-[clamp(22px,6vw,30px)] leading-none font-normal sm:w-[49%] sm:px-6 sm:py-5 sm:text-3xl">
                    내용
                  </th>
                  <th className="w-[28%] px-2 py-4 text-center font-(family-name:--font-black-han-sans) text-[clamp(22px,6vw,30px)] leading-none font-normal sm:px-6 sm:py-5 sm:text-3xl">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                {franchiseBenefitRows.map((row, index) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.045, ease: EASE }}
                    className="border-b border-[color:var(--color-wood-800)] last:border-b-0"
                  >
                    <td className="bg-[var(--color-surface-800)] px-2 py-5 text-center align-middle font-(family-name:--font-black-han-sans) text-[clamp(23px,6.4vw,30px)] leading-[1.08] break-keep text-white sm:px-6 sm:py-6 sm:text-3xl sm:leading-none">
                      {row.category}
                    </td>
                    <td className="bg-[rgba(245,233,201,0.92)] px-3 py-5 text-center align-middle font-(family-name:--font-noto-sans-kr) text-[clamp(13px,3.5vw,20px)] leading-[1.38] font-black break-keep text-[var(--color-surface-900)] sm:px-6 sm:py-6 sm:text-xl sm:leading-[1.35]">
                      {row.content}
                      {row.note ? (
                        <p className="mt-1 text-[11px] leading-[1.35] font-bold text-[var(--color-surface-300)] sm:mt-2 sm:text-sm">
                          {row.note}
                        </p>
                      ) : null}
                    </td>
                    <td className="bg-[var(--color-surface-800)] px-2 py-5 text-center align-middle sm:px-6 sm:py-6">
                      <AmountCell amount={row.amount} index={index} />
                    </td>
                  </motion.tr>
                ))}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-black px-3 py-6 text-center font-(family-name:--font-black-han-sans) text-[clamp(24px,6.6vw,30px)] leading-none text-[var(--color-beige-300)] sm:px-6 sm:py-7 sm:text-3xl"
                  >
                    최종 창업비용
                  </td>
                  <td className="bg-[var(--color-beige-100)] px-2 py-6 text-center font-(family-name:--font-black-han-sans) text-[clamp(17px,4.8vw,30px)] leading-[1.1] break-keep text-[var(--color-surface-900)] sm:px-6 sm:py-7 sm:text-3xl sm:leading-none">
                    상담시 안내
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-xs leading-[1.7] font-bold text-[var(--color-beige-500)]">
          * 계약 조건 및 시점에 따라 혜택 내용은 달라질 수 있습니다. 계약이행보증금은 별도 안내되며
          계약 해지 시 조건에 따라 반환됩니다.
        </p>
      </div>
    </section>
  );
}
