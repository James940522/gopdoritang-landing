'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: 0.08 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative h-dvh min-h-[720px] overflow-hidden bg-[#0E0907] text-white sm:min-h-[760px] lg:min-h-[820px]">
      {/* 불꽃 배경 영상 */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-top"
        style={{ zIndex: 0 }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/asset/sec-1/bg.mp4" type="video/mp4" />
      </video>

      {/* 오버레이 */}
      <div
        className="absolute inset-0 bg-linear-to-b from-[#0E0907]/75 via-[#0E0907]/20 to-[#0E0907]/85"
        style={{ zIndex: 1 }}
        aria-hidden
      />

      <h1 className="sr-only">심 곱도리탕 — 프리미엄 곱도리탕의 기준</h1>

      <div className="absolute inset-x-0 top-[12%] z-20 mx-auto flex h-[61%] min-h-[430px] w-full max-w-[1360px] flex-col items-center px-4 pt-8 sm:top-[13%] sm:h-[59%] sm:min-h-[470px] sm:pt-7 lg:top-[12%] lg:h-[61%] lg:min-h-[540px] lg:pt-9">
        {/* ── 상단 대형 타이포 ── */}
        <motion.div
          className="shrink-0 text-center leading-[0.94] sm:leading-[0.86]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          aria-hidden
        >
          <div
            className="flex flex-col items-center gap-3 sm:hidden"
            style={{ WebkitTextStroke: '1.8px #FFD9A0' }}
          >
            <p className="font-(family-name:--font-pol-sensibility) text-[70px] leading-[0.82] text-[#FFD9A0]">
              프리미엄
            </p>
            <p className="font-(family-name:--font-pol-sensibility) text-[70px] leading-[0.82] text-[#FFD9A0]">
              곱도리탕의
            </p>
            <p className="font-(family-name:--font-pol-sensibility) text-[78px] leading-[0.82] text-[#FFD9A0]">
              기준
            </p>
          </div>

          <p
            className="hidden font-(family-name:--font-pol-sensibility) text-[#FFD9A0] sm:block sm:text-[96px] md:text-[116px] lg:text-[136px] xl:text-[152px]"
            style={{ WebkitTextStroke: '2.5px #FFD9A0' }}
          >
            프리미엄 곱도리탕의
          </p>
        </motion.div>

        {/* ── 기준 + 그릇: 같은 레이아웃 안에서 겹치지 않게 배치 ── */}
        <div className="grid min-h-0 w-full flex-1 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-7 md:gap-x-10 lg:gap-x-14">
          <motion.span
            className="hidden justify-self-end font-(family-name:--font-pol-sensibility) text-[122px] leading-none text-[#FFD9A0] sm:block md:text-[148px] lg:text-[174px] xl:text-[194px]"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ WebkitTextStroke: '2px #FFD9A0' }}
            aria-hidden
          >
            기
          </motion.span>

          <motion.div
            className="col-start-2 justify-self-center"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="drop-shadow-[0_28px_72px_rgba(225,75,0,0.5)]">
              <Image
                src="/asset/sec-1/main-bowl.webp"
                alt="심곱도리탕 메인 메뉴"
                width={600}
                height={540}
                priority
                className="h-auto w-[300px] max-w-[78vw] sm:w-[330px] md:w-[410px] lg:w-[470px] xl:w-[520px]"
              />
            </div>
          </motion.div>

          <motion.span
            className="hidden justify-self-start font-(family-name:--font-pol-sensibility) text-[122px] leading-none text-[#FFD9A0] sm:block md:text-[148px] lg:text-[174px] xl:text-[194px]"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ WebkitTextStroke: '2px #FFD9A0' }}
            aria-hidden
          >
            준
          </motion.span>
        </div>
      </div>

      {/* ── 로고 ── z-30 */}
      <motion.div
        className="absolute left-1/2 z-30 -translate-x-1/2
                   bottom-[7%]
                   sm:bottom-[7%]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Image
          src="/asset/etc/logo.png"
          alt="심 곱도리탕"
          width={320}
          height={80}
          className="h-auto
                     w-[75vw]
                     sm:w-[52vw]
                     md:w-[38vw]
                     lg:w-[28vw]
                     max-w-sm"
        />
      </motion.div>
    </section>
  );
}
