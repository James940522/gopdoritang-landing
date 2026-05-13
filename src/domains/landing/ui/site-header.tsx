'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';

const NAV_ITEMS = [
  { label: '브랜드 소개', href: '#brand-story' },
  { label: '매출 데이터', href: '#sales' },
  { label: '가맹 현황', href: '#franchise-growth' },
  { label: '수익 구조', href: '#profit-structure' },
  { label: '창업 혜택', href: '#franchise-benefit' },
  { label: '상권 보장', href: '#territory-protection' },
  { label: '메뉴', href: '#menu' },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--color-wood-700)]/35 bg-[#24140c]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[57px] w-full max-w-[1440px] items-center justify-between px-[17px] lg:px-8">
          <Link href="/" aria-label="심곱도리탕 홈" className="block shrink-0">
            <Image
              src="/asset/etc/logo.png"
              alt="심곱도리탕"
              width={143}
              height={31}
              priority
              className="h-[31px] w-auto"
            />
          </Link>

          <nav
            aria-label="주요 섹션"
            className="hidden items-center gap-1.5 font-(family-name:--font-noto-sans-kr) lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-black text-[var(--color-beige-300)] transition hover:bg-[rgba(245,233,201,0.08)] hover:text-white xl:px-4"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-full bg-[var(--color-wood-500)] px-5 py-2.5 font-(family-name:--font-noto-sans-kr) text-sm font-black text-white shadow-[0_16px_34px_-22px_rgba(0,0,0,0.9)] transition hover:bg-[var(--color-red-600)]"
            >
              창업문의
            </a>
          </nav>

          <button
            type="button"
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:bg-white/8 lg:hidden"
          >
            <span className="relative h-5 w-7">
              <span
                className={[
                  'absolute left-0 h-[2px] w-7 bg-[#feeab4] transition',
                  isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute top-1/2 left-0 h-[2px] w-7 -translate-y-1/2 bg-[#feeab4] transition',
                  isOpen ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 h-[2px] w-7 bg-[#feeab4] transition',
                  isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-[60] lg:hidden',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="메뉴 닫기"
          onClick={() => setIsOpen(false)}
          className={[
            'absolute inset-0 bg-black/62 backdrop-blur-[2px] transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
        <aside
          id={menuId}
          className={[
            'absolute top-0 right-0 flex h-dvh w-[min(86vw,390px)] flex-col border-l border-[color:var(--color-wood-700)] bg-[var(--color-surface-900)] px-6 py-6 text-white shadow-[0_0_80px_rgba(0,0,0,0.65)] transition-transform duration-300',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <div className="flex items-center justify-between">
            <Image
              src="/asset/etc/logo.png"
              alt="심곱도리탕"
              width={143}
              height={31}
              className="h-[31px] w-auto"
            />
            <button
              type="button"
              aria-label="메뉴 닫기"
              onClick={() => setIsOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5"
            >
              <span className="relative h-5 w-5">
                <span className="absolute top-1/2 left-0 h-[2px] w-5 -translate-y-1/2 rotate-45 bg-[#feeab4]" />
                <span className="absolute top-1/2 left-0 h-[2px] w-5 -translate-y-1/2 -rotate-45 bg-[#feeab4]" />
              </span>
            </button>
          </div>

          <nav
            aria-label="모바일 주요 섹션"
            className="mt-10 grid gap-2 font-(family-name:--font-noto-sans-kr)"
          >
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-white/8 py-4 text-lg font-black text-[var(--color-beige-100)]"
              >
                <span className="flex items-center gap-3">
                  <span className="font-(family-name:--font-black-han-sans) text-xl text-[var(--color-red-400)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </span>
                <span className="text-[var(--color-beige-500)] transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-auto rounded-lg bg-[var(--color-red-600)] px-5 py-4 text-center font-(family-name:--font-noto-sans-kr) text-lg font-black text-white shadow-[0_22px_48px_-30px_rgba(215,38,61,0.9)]"
          >
            창업문의
          </a>
        </aside>
      </div>
    </>
  );
}
