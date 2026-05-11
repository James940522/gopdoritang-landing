'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { menus, type MenuItem } from '@domains/landing/model';
import { AmbientVerticalTicker } from './ambient-type-ticker';

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTO_SLIDE_DELAY_MS = 2800;

type DragState = {
  isDown: boolean;
  startX: number;
  scrollLeft: number;
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.72, delay: Math.min(index * 0.045, 0.36), ease: EASE }}
      className="group relative h-[390px] w-[78vw] max-w-[390px] min-w-[280px] shrink-0 overflow-hidden rounded-lg border border-[color:var(--color-wood-700)] bg-black shadow-[0_28px_82px_-46px_rgba(0,0,0,0.95)] sm:h-[470px] sm:w-[360px] lg:h-[520px] lg:w-[396px]"
    >
      <Image
        src={item.image}
        alt={`${item.name} 메뉴 이미지`}
        fill
        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 360px, 396px"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black via-black/34 to-black/8"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--color-beige-100)]/70 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            aria-hidden
            className="h-px w-16 bg-linear-to-r from-[var(--color-red-500)] to-transparent"
          />
          <span className="font-(family-name:--font-noto-sans-kr) text-xs font-black tracking-[0.2em] text-white/55">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="font-(family-name:--font-black-han-sans) text-4xl leading-none text-white sm:text-5xl">
          {item.name}
        </h3>
      </div>
    </motion.article>
  );
}

export function MenuSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const dragState = useRef<DragState>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || isDragging) return;

    const intervalId = window.setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const distance = Math.min(scroller.clientWidth * 0.86, 430);
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      const isNearEnd = scroller.scrollLeft + distance >= maxScrollLeft - 8;

      if (isNearEnd) {
        scroller.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      scroller.scrollBy({ left: distance, behavior: 'smooth' });
    }, AUTO_SLIDE_DELAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isDragging, shouldReduceMotion]);

  const scrollCarousel = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * Math.min(scroller.clientWidth * 0.86, 430),
      behavior: 'smooth',
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !scrollerRef.current) return;

    dragState.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: scrollerRef.current.scrollLeft,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown || !scrollerRef.current) return;

    event.preventDefault();
    const distance = event.clientX - dragState.current.startX;
    scrollerRef.current.scrollLeft = dragState.current.scrollLeft - distance;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown) return;

    dragState.current.isDown = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="menu"
      className="relative isolate overflow-hidden bg-[var(--color-surface-900)] py-24 text-white sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 18%, rgba(215,38,61,0.3), transparent 30%), radial-gradient(circle at 82% 22%, rgba(180,124,80,0.28), transparent 28%), linear-gradient(180deg, var(--color-surface-900) 0%, #1d0d09 52%, var(--color-surface-900) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.18]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 46px, rgba(245,233,201,0.07) 46px 47px)',
        }}
      />
      <AmbientVerticalTicker
        className="absolute top-24 bottom-24 left-2 z-0 hidden opacity-46 sm:block lg:left-8"
        gap="normal"
        lines={[
          {
            text: 'SIM GOPDORITANG MENU LINEUP',
            direction: 'up',
          },
          {
            text: 'DELIVERY FRIENDLY KOREAN COMFORT FOOD',
            direction: 'down',
            variant: 'outline',
          },
          {
            text: 'GOPDORI NAKGOPSAE SIDE MENU',
            direction: 'up',
          },
        ]}
        size="small"
        tone="gold"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="mb-5 font-(family-name:--font-noto-sans-kr) text-[11px] font-black tracking-[0.34em] text-[var(--color-red-400)] sm:text-xs">
              MENU LINEUP
            </p>
            <h2 className="font-(family-name:--font-black-han-sans) text-4xl leading-[1.06] text-white sm:text-6xl md:text-7xl">
              팔리는 메뉴만 담은
              <br />
              <span className="text-[var(--color-beige-100)]">심 곱도리탕 메뉴 라인업</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--color-wood-500)] bg-black/44 font-(family-name:--font-black-han-sans) text-2xl text-[var(--color-beige-100)] transition hover:border-[color:var(--color-red-400)] hover:text-[var(--color-red-400)]"
              aria-label="이전 메뉴 보기"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--color-wood-500)] bg-black/44 font-(family-name:--font-black-han-sans) text-2xl text-[var(--color-beige-100)] transition hover:border-[color:var(--color-red-400)] hover:text-[var(--color-red-400)]"
              aria-label="다음 메뉴 보기"
            >
              ›
            </button>
          </div>
        </motion.header>

        <p className="mt-7 max-w-3xl font-(family-name:--font-noto-sans-kr) text-base leading-[1.8] font-bold text-[var(--color-beige-500)] sm:text-lg">
          곱도리탕부터 낙곱새, 사이드 메뉴까지 배달 주문에 맞춘 메뉴 구성을 한눈에 확인할 수
          있습니다.
        </p>
      </div>

      <div className="relative z-10 mt-12 sm:mt-16">
        <div
          ref={scrollerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          className={[
            'flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-7 sm:gap-5 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]',
            'scroll-smooth [touch-action:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab',
          ].join(' ')}
        >
          {menus.map((item, index) => (
            <div key={item.name} className="snap-center">
              <MenuCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
