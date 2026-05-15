import Image from 'next/image';
import { companyInfo } from '@features/contact-form/model';
import { ContactForm } from '@features/contact-form/ui/contact-form';
import { AmbientTypeTicker } from './ambient-type-ticker';

export function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-black text-white">
      <div className="relative min-h-dvh py-24 sm:py-28 lg:py-32">
        <Image
          src="/asset/sec-9/contact-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-30 object-cover object-center"
        />
        <div aria-hidden className="absolute inset-0 -z-20 bg-black/30" />
        <AmbientTypeTicker
          className="absolute inset-x-0 top-20 z-0 hidden opacity-45 sm:block"
          gap="tight"
          lines={[
            {
              text: 'CONTACT SIM GOPDORITANG FRANCHISE',
              direction: 'left',
            },
            {
              text: 'START YOUR DELIVERY BRAND CONSULTING',
              direction: 'right',
              variant: 'outline',
            },
            {
              text: 'OWNER FIRST OPENING SUPPORT',
              direction: 'left',
            },
          ]}
          size="small"
          tone="muted"
        />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-(family-name:--font-noto-sans-kr) text-xs font-black tracking-[0.34em] text-[var(--color-red-400)]">
              FRANCHISE CONTACT
            </p>
            <h2 className="mt-4 font-(family-name:--font-black-han-sans) text-4xl leading-none text-[var(--color-beige-100)] sm:text-6xl">
              CONTACT US
            </h2>
            <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-base leading-[1.75] font-bold text-white/82 sm:text-lg">
              문의 주시면 담당자가 확인 후
              <br />
              빠른 시일 내에 회신 드리겠습니다.
            </p>
          </header>

          <ContactForm />
        </div>
      </div>

      <footer className="border-t border-white/10 bg-[var(--color-surface-900)] px-5 py-9 text-center sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-(family-name:--font-black-han-sans) text-2xl leading-none text-[var(--color-beige-100)]">
            {companyInfo.companyName}
          </p>
          <dl className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-(family-name:--font-noto-sans-kr) text-xs font-bold leading-[1.8] text-white/62 sm:text-sm">
            <div>
              <dt className="sr-only">사업자등록번호</dt>
              <dd>사업자등록번호 : {companyInfo.businessNumber}</dd>
            </div>
            <div>
              <dt className="sr-only">대표자</dt>
              <dd>대표 : {companyInfo.representative}</dd>
            </div>
            <div>
              <dt className="sr-only">법인등록번호</dt>
              <dd>법인등록번호 : {companyInfo.corporateNumber}</dd>
            </div>
            <div>
              <dt className="sr-only">업태와 종목</dt>
              <dd>
                업태 : {companyInfo.businessType} · 종목 : {companyInfo.businessItem}
              </dd>
            </div>
            <div className="basis-full">
              <dt className="sr-only">주소</dt>
              <dd>주소 : {companyInfo.address}</dd>
            </div>
          </dl>
          <p className="mt-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-bold tracking-[0.18em] text-white/34">
            COPYRIGHT © ONUS F&B. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </section>
  );
}
