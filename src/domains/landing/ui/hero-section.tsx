'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-dvh min-h-screen overflow-hidden bg-[#0E0907] text-white">
      {/* 불꽃 배경 영상 */}
      <video
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

      {/* ── 상단 텍스트 "프리미엄 곱도리탕의" — 그릇 바로 위, z-10 ── */}
      <motion.div
        className="absolute inset-x-0 z-10 text-center leading-[0.88]
                   top-[22%]
                   sm:top-[26%]
                   md:top-[27%]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* 모바일: 2줄 */}
        <div className="sm:hidden leading-[1.05]" style={{ WebkitTextStroke: '2px #FFD9A0' }}>
          <p
            className="font-(family-name:--font-pol-sensibility) tracking-tight text-[#FFD9A0]
                        text-[15vw]"
          >
            프리미엄
          </p>
          <p
            className="font-(family-name:--font-pol-sensibility) tracking-tight text-[#FFD9A0]
                        text-[15vw]"
          >
            곱도리탕의
          </p>
        </div>

        {/* 태블릿+: 1줄 */}
        <p
          className="hidden sm:block font-(family-name:--font-pol-sensibility) tracking-tight text-[#FFD9A0]
                      sm:text-[10.5vw]
                      lg:text-[9vw]"
          style={{ WebkitTextStroke: '2.5px #FFD9A0' }}
        >
          프리미엄 곱도리탕의
        </p>
      </motion.div>

      {/* ── "기" 왼쪽 ── z-10 */}
      <motion.span
        className="absolute z-10 font-(family-name:--font-pol-sensibility) leading-none tracking-tight text-[#FFD9A0]
                   top-1/2 -translate-y-1/2
                   left-[5vw] text-[18vw]
                   sm:left-[10vw] sm:text-[14vw]
                   md:left-[16vw] md:text-[12vw]
                   lg:left-[21vw] lg:text-[10vw]"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        style={{ WebkitTextStroke: '2px #FFD9A0' }}
      >
        기
      </motion.span>

      {/* ── 그릇 이미지 ── z-20 */}
      <div
        className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2
                   top-[50%]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <motion.div
            animate={{
              filter: [
                'drop-shadow(0 24px 56px rgba(200, 50, 0, 0.35))',
                'drop-shadow(0 32px 80px rgba(225, 75, 0, 0.68))',
                'drop-shadow(0 24px 56px rgba(200, 50, 0, 0.35))',
              ],
            }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          >
            <Image
              src="/asset/sec-1/main-bowl.webp"
              alt="심곱도리탕 메인 메뉴"
              width={600}
              height={540}
              priority
              className="h-auto
                         w-[64vw]
                         sm:w-[52vw]
                         md:w-[44vw]
                         lg:w-[38vw]
                         max-w-125"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ── "준" 오른쪽 ── z-10 */}
      <motion.span
        className="absolute z-10 font-(family-name:--font-pol-sensibility) leading-none tracking-tight text-[#FFD9A0]
                   top-1/2 -translate-y-1/2
                   right-[5vw] text-[18vw]
                   sm:right-[10vw] sm:text-[14vw]
                   md:right-[16vw] md:text-[12vw]
                   lg:right-[21vw] lg:text-[10vw]"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        style={{ WebkitTextStroke: '2px #FFD9A0' }}
      >
        준
      </motion.span>

      {/* ── 로고 ── z-30 */}
      <motion.div
        className="absolute left-1/2 z-30 -translate-x-1/2
                   bottom-[21%]
                   sm:bottom-[19%]"
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

      {/* ── 서브카피 + CTA ── z-30 */}
      <motion.div
        className="absolute inset-x-0 z-30 flex flex-col items-center gap-3 px-5
                   bottom-[5%]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
      >
        <p
          className="font-(family-name:--font-noto-sans-kr) text-center leading-relaxed text-white/40
                      text-[11px] sm:text-xs"
        >
          매출 구조와 운영 효율까지 설계된 배달 특화 곱도리탕 창업 브랜드
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-full bg-[#B91C1C] font-semibold text-white transition-colors hover:bg-[#E11D1D]
                       px-5 py-2.5 text-[12px] sm:px-6 sm:py-3 sm:text-sm"
          >
            창업 문의하기
          </button>
          <button
            type="button"
            className="rounded-full border border-white/30 font-semibold text-white/80 transition-colors hover:border-white/55
                       px-5 py-2.5 text-[12px] sm:px-6 sm:py-3 sm:text-sm"
          >
            브랜드 경쟁력 보기
          </button>
        </div>
      </motion.div>
    </section>
  );
}
