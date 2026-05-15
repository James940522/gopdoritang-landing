'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SHOW_AFTER_SCROLL = 240;
const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let frameId = 0;

    const updateVisibility = () => {
      frameId = 0;
      const nextVisible = window.scrollY > SHOW_AFTER_SCROLL;
      setIsVisible((current) => (current === nextVisible ? current : nextVisible));
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollBehavior: ScrollBehavior = shouldReduceMotion ? 'auto' : 'smooth';

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: scrollBehavior,
      block: 'start',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior,
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed right-4 bottom-5 z-[70] flex flex-col items-center gap-3 sm:right-6 sm:bottom-7 sm:gap-4 lg:right-8 lg:bottom-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.94 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: MOTION_EASE }}
          aria-label="빠른 이동 버튼"
        >
          <motion.button
            type="button"
            aria-label="창업문의 섹션으로 이동"
            onClick={scrollToContact}
            whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.04 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="group relative grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-full border border-[#f5e9c9]/28 bg-[linear-gradient(145deg,#b11f33_0%,#6a1320_58%,#3d2613_100%)] font-(family-name:--font-black-han-sans) text-[20px] leading-[1.04] text-white shadow-[0_18px_42px_-22px_rgba(177,31,51,0.95),0_10px_26px_rgba(0,0,0,0.52)] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5e9c9] sm:h-[92px] sm:w-[92px] sm:text-[24px]"
          >
            <span
              aria-hidden
              className="absolute inset-[7px] rounded-full border border-[#f5e9c9]/16 transition group-hover:border-[#f5e9c9]/28"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,217,160,0.22),transparent_38%)] opacity-80"
            />
            <span className="relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.32)]">
              창업
              <br />
              문의
            </span>
          </motion.button>

          <motion.button
            type="button"
            aria-label="최상단으로 이동"
            onClick={scrollToTop}
            whileHover={shouldReduceMotion ? undefined : { y: 3, scale: 1.04 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="group relative grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-full border border-[#d6a84f]/38 bg-[linear-gradient(145deg,#1e1813_0%,#0f0c0a_62%,#271709_100%)] font-(family-name:--font-black-han-sans) text-[22px] leading-none text-[var(--color-beige-100)] shadow-[0_18px_38px_-22px_rgba(214,168,79,0.64),0_10px_26px_rgba(0,0,0,0.56)] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5e9c9] sm:h-[92px] sm:w-[92px] sm:text-[27px]"
          >
            <span
              aria-hidden
              className="absolute inset-[7px] rounded-full border border-[#d6a84f]/18 transition group-hover:border-[#d6a84f]/34"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_45%_18%,rgba(214,168,79,0.18),transparent_42%)]"
            />
            <span className="relative flex flex-col items-center gap-1">
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-full border border-[#d6a84f]/74 text-sm text-[#d6a84f] sm:h-7 sm:w-7 sm:text-base"
              >
                心
              </span>
              TOP
            </span>
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
