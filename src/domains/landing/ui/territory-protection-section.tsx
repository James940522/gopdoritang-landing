import Image from 'next/image';
import { RevealArticle, RevealFigure, RevealHeader } from '@shared/ui/reveal';
import { territoryProtection } from '../model';
import { AmbientVerticalTicker } from './ambient-type-ticker';

const EASE = [0.22, 1, 0.36, 1] as const;

function ComparisonCard({
  label,
  title,
  description,
  tone,
}: (typeof territoryProtection.comparisons)[number]) {
  const isSafe = tone === 'safe';

  return (
    <RevealArticle
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.72, ease: EASE }}
      className={[
        'relative overflow-hidden rounded-lg border p-5 sm:p-6 lg:p-7',
        isSafe
          ? 'border-[color:var(--color-red-500)] bg-[rgba(215,38,61,0.14)] shadow-[0_28px_78px_-48px_rgba(215,38,61,0.9)]'
          : 'border-white/12 bg-black/45',
      ].join(' ')}
    >
      <div
        aria-hidden
        className={[
          'absolute inset-y-0 left-0 w-1.5',
          isSafe ? 'bg-[var(--color-red-500)]' : 'bg-white/18',
        ].join(' ')}
      />
      <p
        className={[
          'font-(family-name:--font-noto-sans-kr) text-xs font-black tracking-[0.18em]',
          isSafe ? 'text-[var(--color-red-400)]' : 'text-[var(--color-beige-500)]',
        ].join(' ')}
      >
        {label}
      </p>
      <h3 className="mt-5 font-(family-name:--font-black-han-sans) text-3xl leading-[1.05] text-white sm:text-4xl">
        {title}
      </h3>
      <p className="mt-4 font-(family-name:--font-noto-sans-kr) text-sm leading-[1.75] font-bold break-keep text-[var(--color-beige-300)] sm:text-base">
        {description}
      </p>
    </RevealArticle>
  );
}

export function TerritoryProtectionSection() {
  return (
    <section
      id="territory-protection"
      className="relative isolate overflow-hidden bg-[var(--color-surface-900)] py-24 text-white sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 14% 16%, rgba(215,38,61,0.24), transparent 28%), radial-gradient(circle at 86% 50%, rgba(214,168,79,0.18), transparent 32%), linear-gradient(180deg, var(--color-surface-900) 0%, var(--color-surface-800) 54%, var(--color-surface-900) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.22]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 48px, rgba(245,233,201,0.06) 48px 49px)',
        }}
      />
      <AmbientVerticalTicker
        className="absolute top-24 right-2 bottom-20 z-0 hidden opacity-52 sm:block lg:right-8"
        gap="tight"
        lines={[
          {
            text: 'PROTECTED DELIVERY AREA',
            direction: 'up',
          },
          {
            text: 'NO OVERLAPPED SALES TERRITORY',
            direction: 'down',
            variant: 'outline',
          },
          {
            text: 'STORE MANAGEMENT FOR STABLE GROWTH',
            direction: 'up',
          },
        ]}
        size="small"
        tone="ember"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <RevealHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-500)] sm:text-xs">
            {territoryProtection.eyebrow}
          </p>
          <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.08] break-keep text-white sm:text-6xl md:text-7xl">
            {territoryProtection.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-4xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.85] font-bold break-keep text-[var(--color-beige-300)] sm:text-lg">
            {territoryProtection.description}
          </p>
        </RevealHeader>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <div className="grid gap-5">
            {territoryProtection.comparisons.map((item) => (
              <ComparisonCard key={item.label} {...item} />
            ))}
          </div>

          <RevealFigure
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="relative overflow-hidden rounded-lg border border-[color:var(--color-wood-700)] bg-black shadow-[0_36px_110px_-54px_rgba(0,0,0,0.95)]"
          >
            <div className="absolute top-4 left-4 z-10 rounded-full border border-[color:var(--color-red-500)] bg-black px-4 py-2 font-(family-name:--font-black-han-sans) text-sm text-[var(--color-red-400)] shadow-[0_18px_40px_-28px_rgba(215,38,61,0.9)] sm:top-6 sm:left-6 sm:text-base">
              MAPO-GU AREA
            </div>
            <div className="absolute top-1/2 left-1/2 z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color:var(--color-red-500)] bg-black font-(family-name:--font-black-han-sans) text-xl text-[var(--color-red-400)] shadow-[0_20px_52px_-28px_rgba(0,0,0,0.95)] sm:h-20 sm:w-20 sm:text-3xl">
              VS
            </div>
            <Image
              src={territoryProtection.image}
              alt="A브랜드의 상권 중복 구조와 심 곱도리탕의 배달 구역 보장 구조 비교 지도"
              width={1640}
              height={960}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-auto w-full"
            />
            <figcaption className="grid gap-0 border-t border-[color:var(--color-wood-700)] font-(family-name:--font-noto-sans-kr) text-sm font-black break-keep text-[var(--color-beige-100)] sm:grid-cols-2 sm:text-base">
              <span className="border-b border-[color:var(--color-wood-700)] bg-black/82 px-5 py-4 text-center sm:border-r sm:border-b-0">
                A브랜드: 1개 상권 내 복수 지점 경쟁
              </span>
              <span className="bg-[var(--color-red-600)] px-5 py-4 text-center text-white">
                심 곱도리탕: 배달 구역 보장
              </span>
            </figcaption>
          </RevealFigure>
        </div>
      </div>
    </section>
  );
}
