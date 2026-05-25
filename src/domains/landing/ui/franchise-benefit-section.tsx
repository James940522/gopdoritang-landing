import Image from 'next/image';
import { RevealDiv, RevealHeader, RevealTr } from '@shared/ui/reveal';
import { franchiseBenefitRows } from '../model';
import { BenefitAmountCell } from './franchise-benefit-amount-cell';

const EASE = [0.22, 1, 0.36, 1] as const;

function DesktopBenefitTable() {
  return (
    <div className="hidden w-full overflow-hidden lg:block">
      <table className="w-full min-w-[860px] table-fixed border-collapse">
        <thead>
          <tr className="bg-black text-[var(--color-beige-100)]">
            <th className="w-[23%] px-6 py-5 text-center font-(family-name:--font-black-han-sans) text-3xl leading-none font-normal">
              구분
            </th>
            <th className="w-[49%] border-x border-white/45 px-6 py-5 text-center font-(family-name:--font-black-han-sans) text-3xl leading-none font-normal">
              내용
            </th>
            <th className="w-[28%] px-6 py-5 text-center font-(family-name:--font-black-han-sans) text-3xl leading-none font-normal">
              금액
            </th>
          </tr>
        </thead>
        <tbody>
          {franchiseBenefitRows.map((row, index) => (
            <RevealTr
              key={row.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.045, ease: EASE }}
              className="border-b border-[color:var(--color-wood-800)] last:border-b-0"
            >
              <td className="bg-[var(--color-surface-800)] px-6 py-6 text-center align-middle font-(family-name:--font-black-han-sans) text-3xl leading-none text-white">
                {row.category}
              </td>
              <td className="bg-[rgba(245,233,201,0.92)] px-6 py-6 text-center align-middle font-(family-name:--font-noto-sans-kr) text-xl leading-[1.35] font-black break-keep text-[var(--color-surface-900)]">
                {row.content}
                {row.note ? (
                  <p className="mt-2 text-sm font-bold text-[var(--color-surface-300)]">
                    {row.note}
                  </p>
                ) : null}
              </td>
              <td className="bg-[var(--color-surface-800)] px-6 py-6 text-center align-middle">
                <BenefitAmountCell amount={row.amount} index={index} />
              </td>
            </RevealTr>
          ))}
          <tr>
            <td
              colSpan={2}
              className="bg-black px-6 py-7 text-center font-(family-name:--font-black-han-sans) text-3xl leading-none text-[var(--color-beige-300)]"
            >
              최종 창업비용
            </td>
            <td className="bg-[var(--color-beige-100)] px-6 py-7 text-center font-(family-name:--font-black-han-sans) text-3xl leading-none text-[var(--color-surface-900)]">
              상담시 안내
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TabletBenefitTable() {
  return (
    <div className="hidden w-full overflow-hidden md:block lg:hidden">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-black text-[var(--color-beige-100)]">
            <th className="w-[24%] px-4 py-4 text-center font-(family-name:--font-black-han-sans) text-2xl leading-none font-normal">
              구분
            </th>
            <th className="w-[50%] border-x border-white/35 px-4 py-4 text-center font-(family-name:--font-black-han-sans) text-2xl leading-none font-normal">
              내용
            </th>
            <th className="w-[26%] px-4 py-4 text-center font-(family-name:--font-black-han-sans) text-2xl leading-none font-normal">
              금액
            </th>
          </tr>
        </thead>
        <tbody>
          {franchiseBenefitRows.map((row, index) => (
            <RevealTr
              key={row.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
              className="border-b border-[color:var(--color-wood-800)] last:border-b-0"
            >
              <td className="bg-[var(--color-surface-800)] px-3 py-5 text-center align-middle font-(family-name:--font-black-han-sans) text-2xl leading-[1.05] break-keep text-white">
                {row.category}
              </td>
              <td className="bg-[rgba(245,233,201,0.92)] px-4 py-5 text-center align-middle font-(family-name:--font-noto-sans-kr) text-base leading-[1.42] font-black break-keep text-[var(--color-surface-900)]">
                {row.content}
                {row.note ? (
                  <p className="mt-1.5 text-xs leading-[1.35] font-bold text-[var(--color-surface-300)]">
                    {row.note}
                  </p>
                ) : null}
              </td>
              <td className="bg-[var(--color-surface-800)] px-3 py-5 text-center align-middle">
                <BenefitAmountCell amount={row.amount} index={index} size="compact" />
              </td>
            </RevealTr>
          ))}
          <tr>
            <td
              colSpan={2}
              className="bg-black px-4 py-6 text-center font-(family-name:--font-black-han-sans) text-2xl leading-none text-[var(--color-beige-300)]"
            >
              최종 창업비용
            </td>
            <td className="bg-[var(--color-beige-100)] px-3 py-6 text-center font-(family-name:--font-black-han-sans) text-xl leading-[1.1] break-keep text-[var(--color-surface-900)]">
              상담시 안내
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MobileBenefitTable() {
  return (
    <div className="md:hidden" role="table" aria-label="창업 혜택 비용 안내">
      <div
        role="row"
        className="grid grid-cols-[21%_minmax(0,1fr)_23%] bg-black text-[var(--color-beige-100)]"
      >
        {['구분', '내용', '금액'].map((label, index) => (
          <div
            key={label}
            role="columnheader"
            className={[
              'px-1.5 py-3.5 text-center font-(family-name:--font-black-han-sans) text-[18px] leading-none font-normal min-[380px]:text-xl',
              index === 1 ? 'border-x border-white/35' : '',
            ].join(' ')}
          >
            {label}
          </div>
        ))}
      </div>
      {franchiseBenefitRows.map((row, index) => (
        <RevealDiv
          key={row.category}
          role="row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
          className="grid min-h-[76px] grid-cols-[21%_minmax(0,1fr)_23%] border-b border-[color:var(--color-wood-800)] last:border-b-0"
        >
          <div
            role="cell"
            className="grid place-items-center bg-[var(--color-surface-800)] px-1 py-3.5 text-center font-(family-name:--font-black-han-sans) text-[clamp(14px,4.35vw,18px)] leading-[1.1] tracking-[-0.02em] break-keep text-white"
          >
            {row.category}
          </div>
          <div
            role="cell"
            className="grid place-items-center bg-[rgba(245,233,201,0.94)] px-2.5 py-3.5 text-center text-[var(--color-surface-900)] min-[380px]:px-3"
          >
            <div>
              <p className="font-(family-name:--font-noto-sans-kr) text-[10.5px] leading-[1.46] font-black tracking-[-0.01em] break-keep min-[380px]:text-[11.5px]">
                {row.content}
              </p>
              {row.note ? (
                <p className="mt-1 text-[9px] leading-[1.35] font-bold text-[var(--color-surface-300)] min-[380px]:text-[10px]">
                  {row.note}
                </p>
              ) : null}
            </div>
          </div>
          <div
            role="cell"
            className="grid place-items-center bg-[var(--color-surface-800)] px-1 py-3.5 text-center"
          >
            <BenefitAmountCell amount={row.amount} index={index} size="mobile" />
          </div>
        </RevealDiv>
      ))}
      <div role="row" className="grid grid-cols-[1fr_23%]">
        <div
          role="cell"
          className="bg-black px-3 py-[18px] text-center font-(family-name:--font-black-han-sans) text-[19px] leading-none text-[var(--color-beige-300)] min-[380px]:text-[21px]"
        >
          최종 창업비용
        </div>
        <div
          role="cell"
          className="grid place-items-center bg-[var(--color-beige-100)] px-1 py-[18px] text-center font-(family-name:--font-black-han-sans) text-[12px] leading-[1.12] break-keep text-[var(--color-surface-900)] min-[380px]:text-[13px]"
        >
          상담시 안내
        </div>
      </div>
    </div>
  );
}

export function FranchiseBenefitSection() {
  return (
    <section
      id="franchise-benefit"
      className="relative isolate overflow-hidden bg-[var(--color-surface-900)] py-24 text-white sm:py-32 lg:py-40"
    >
      <Image
        src="/asset/sec-6/franchise-benefit-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-center"
        aria-hidden
      />
      <div aria-hidden className="absolute inset-0 -z-20 bg-black/15" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <RevealHeader
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-300)] [text-shadow:0_2px_12px_rgba(0,0,0,0.95)] sm:text-xs">
              STARTUP BENEFIT
            </p>
            <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.06] text-white [text-shadow:0_5px_22px_rgba(0,0,0,0.98)] sm:text-6xl md:text-7xl">
              초기 부담은 낮추고
              <br />
              <span className="text-[var(--color-beige-100)]">필요한 것만 준비</span>
            </h2>
          </div>
          <p className="max-w-2xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.8] font-black text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.98)] sm:text-lg lg:justify-self-end">
            심 곱도리탕은 불필요한 초기 비용을 줄이고, 점주님 상황에 맞춰 준비할 수 있도록 창업
            항목을 투명하게 안내합니다.
          </p>
        </RevealHeader>

        <RevealDiv
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
          className="mt-12 overflow-hidden rounded-lg border border-[color:var(--color-wood-700)] bg-[rgba(15,12,10,0.9)] shadow-[0_36px_110px_-54px_rgba(0,0,0,0.95)] lg:mt-16"
        >
          <DesktopBenefitTable />
          <TabletBenefitTable />
          <MobileBenefitTable />
        </RevealDiv>

        <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-xs leading-[1.7] font-black text-white/85 [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
          * 계약 조건 및 시점에 따라 혜택 내용은 달라질 수 있습니다. 계약이행보증금은 별도 안내되며
          계약 해지 시 조건에 따라 반환됩니다.
        </p>
      </div>
    </section>
  );
}
