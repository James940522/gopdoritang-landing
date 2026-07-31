import { RevealDiv, RevealHeader } from '@shared/ui/reveal';
import { branches } from '../model';
import { AmbientTypeTicker } from './ambient-type-ticker';
import { BranchMarqueeWall } from './franchise-growth-marquee';

const EASE = [0.22, 1, 0.36, 1] as const;

export function FranchiseGrowthSection() {
  return (
    <section
      id="franchise-growth"
      className="relative isolate overflow-hidden bg-[var(--color-surface-800)] py-24 text-[var(--color-beige-100)] sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage:
            'linear-gradient(180deg, var(--color-surface-900) 0%, var(--color-surface-800) 48%, var(--color-surface-900) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            'repeating-linear-gradient(110deg, transparent 0 18px, rgba(245,233,201,0.05) 18px 19px), repeating-linear-gradient(0deg, transparent 0 30px, rgba(139,90,43,0.08) 30px 31px)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[230px] border-t border-[color:var(--color-red-700)] bg-[var(--color-surface-900)] sm:h-[270px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-[214px] -z-10 h-12 -skew-y-2 bg-[var(--color-red-700)] sm:bottom-[252px]"
      />
      <AmbientTypeTicker
        className="absolute inset-x-0 top-20 z-0 hidden opacity-55 sm:block"
        gap="tight"
        lines={[
          {
            text: 'SIM GOPDORITANG FRANCHISE MOMENTUM',
            direction: 'left',
          },
          {
            text: 'OWNER-FIRST BRAND GROWTH',
            direction: 'right',
            variant: 'outline',
          },
          {
            text: 'LATEST BRANCH NETWORK',
            direction: 'left',
          },
        ]}
        size="large"
        tone="red"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <RevealHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-center sm:gap-5">
            <span className="rounded-md border border-[color:var(--color-wood-500)] bg-[var(--color-surface-900)] px-3 py-2 font-(family-name:--font-noto-sans-kr) text-[11px] font-black text-[var(--color-beige-300)] sm:text-xs">
              FRANCHISE GROWTH
            </span>
            <span className="h-px w-12 bg-[var(--color-wood-500)] sm:w-20" />
            <span className="rounded-md bg-[var(--color-red-600)] px-3 py-2 font-(family-name:--font-noto-sans-kr) text-[11px] font-black text-white sm:text-xs">
              1 MONTH MOMENTUM
            </span>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_300px]">
            <div className="text-center lg:text-left">
              <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                좋은 브랜드는
                <br />
                <span className="text-[var(--color-beige-300)]">점주님이 먼저</span>
                <br />
                알아봅니다.
              </h2>
              <p className="mt-6 font-(family-name:--font-noto-sans-kr) text-base leading-[1.8] font-bold text-[var(--color-beige-500)] sm:text-lg">
                가맹사업 시작 한 달 만에, 예비 점주님들의 선택이 숫자로 쌓이고 있습니다.
              </p>
            </div>

            <div className="relative mx-auto flex h-[210px] w-full max-w-[300px] flex-col items-center justify-center rounded-lg border border-[color:var(--color-wood-500)] bg-[var(--color-surface-900)] p-6 text-center shadow-[0_22px_60px_-32px_rgba(0,0,0,0.95)] lg:mx-0">
              <p className="font-(family-name:--font-noto-sans-kr) text-[12px] font-black text-[var(--color-red-400)]">
                가맹계약
              </p>
              <p className="mt-2 font-(family-name:--font-black-han-sans) text-8xl leading-none text-[var(--color-beige-100)]">
                {branches.length}
              </p>
              <p className="mt-1 font-(family-name:--font-black-han-sans) text-4xl leading-none text-[var(--color-red-400)]">
                건 돌파
              </p>
              <span
                aria-hidden
                className="absolute top-4 right-4 font-(family-name:--font-pol-sensibility) text-3xl text-[var(--color-wood-500)]/55"
              >
                心
              </span>
            </div>
          </div>
        </RevealHeader>

        <RevealDiv
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
          className="relative -mx-5 mt-16 sm:-mx-8 sm:mt-20 lg:mt-24"
        >
          <BranchMarqueeWall />
        </RevealDiv>
      </div>
    </section>
  );
}
