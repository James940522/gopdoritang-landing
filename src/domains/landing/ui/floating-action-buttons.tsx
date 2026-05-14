'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SHOW_AFTER_SCROLL = 240;
const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
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
          className="fixed right-4 bottom-5 z-[70] flex flex-col items-center sm:right-6 sm:bottom-7 lg:right-8 lg:bottom-8"
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
            className="grid h-[76px] w-[76px] place-items-center rounded-full border border-white/20 bg-[#ff6a16] font-(family-name:--font-black-han-sans) text-[21px] leading-[1.04] text-white shadow-[0_18px_36px_-20px_rgba(255,106,22,0.95),0_8px_24px_rgba(0,0,0,0.42)] transition hover:bg-[#ff7a22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5e9c9] sm:h-[92px] sm:w-[92px] sm:text-[25px]"
          >
            <span>
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
            className="-mt-2 grid h-[76px] w-[76px] place-items-center rounded-full border border-[#f5e9c9]/18 bg-[#006356] font-(family-name:--font-black-han-sans) text-[23px] leading-none text-[var(--color-beige-100)] shadow-[0_18px_38px_-22px_rgba(0,99,86,0.92),0_8px_24px_rgba(0,0,0,0.42)] transition hover:bg-[#007262] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5e9c9] sm:h-[92px] sm:w-[92px] sm:text-[28px]"
          >
            <span className="flex flex-col items-center gap-1">
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-full border border-[#ff8a22] text-sm text-[#ff8a22] sm:h-7 sm:w-7 sm:text-base"
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
