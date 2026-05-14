'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-dvh min-h-[720px] overflow-hidden bg-[#0E0907] text-white sm:min-h-[760px] lg:min-h-[820px]">
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

      <motion.h1
        className="absolute inset-x-0 top-[78px] z-30 mx-auto w-fit rounded-full border border-[#FFD9A0]/24 bg-black/28 px-4 py-2 text-center font-(family-name:--font-noto-sans-kr) text-xs leading-none font-black text-[#FFD9A0] shadow-[0_14px_34px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md sm:top-[86px] sm:px-5 sm:py-2.5 sm:text-sm lg:top-[94px] lg:text-base"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        프리미엄 곱도리탕의 기준
      </motion.h1>

      <div className="absolute inset-x-0 top-[15%] z-10 mx-auto h-[58%] min-h-[400px] w-full max-w-[1280px] px-4 sm:top-[14%] sm:min-h-[460px] lg:top-[13%] lg:min-h-[520px]">
        {/* ── 상단 대형 타이포 — 무드 담당, 실제 문장은 위 H1에서 보장 ── */}
        <motion.div
          className="absolute inset-x-0 top-[6%] z-10 text-center leading-[0.86] sm:top-[7%]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          aria-hidden
        >
          <div className="sm:hidden leading-[0.95]" style={{ WebkitTextStroke: '1.8px #FFD9A0' }}>
            <p className="font-(family-name:--font-pol-sensibility) text-[72px] text-[#FFD9A0]/78">
              프리미엄
            </p>
            <p className="font-(family-name:--font-pol-sensibility) text-[72px] text-[#FFD9A0]/78">
              곱도리탕의
            </p>
          </div>

          <p
            className="hidden font-(family-name:--font-pol-sensibility) text-[#FFD9A0]/86 sm:block sm:text-[96px] md:text-[116px] lg:text-[138px] xl:text-[154px]"
            style={{ WebkitTextStroke: '2.5px #FFD9A0' }}
          >
            프리미엄 곱도리탕의
          </p>
        </motion.div>

        {/* ── "기준" — 그릇 중심 안전 공간을 기준으로 배치 ── */}
        <div className="absolute inset-x-0 top-[44%] z-10 flex -translate-y-1/2 items-center justify-center gap-[220px] sm:gap-[310px] md:gap-[390px] lg:gap-[480px] xl:gap-[560px]">
          <motion.span
            className="font-(family-name:--font-pol-sensibility) text-[96px] leading-none text-[#FFD9A0]/88 sm:text-[122px] md:text-[148px] lg:text-[174px] xl:text-[194px]"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ WebkitTextStroke: '2px #FFD9A0' }}
            aria-hidden
          >
            기
          </motion.span>
          <motion.span
            className="font-(family-name:--font-pol-sensibility) text-[96px] leading-none text-[#FFD9A0]/88 sm:text-[122px] md:text-[148px] lg:text-[174px] xl:text-[194px]"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ WebkitTextStroke: '2px #FFD9A0' }}
            aria-hidden
          >
            준
          </motion.span>
        </div>

        {/* ── 그릇 이미지 ── */}
        <div className="absolute top-[47%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
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
                className="h-auto w-[270px] sm:w-[350px] md:w-[430px] lg:w-[500px] xl:w-[540px]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="absolute inset-x-0 bottom-[3%] z-30 mx-auto w-fit rounded-full border border-[#FFD9A0]/16 bg-black/20 px-4 py-2 font-(family-name:--font-noto-sans-kr) text-xs font-black text-[#FFD9A0]/82 backdrop-blur-sm sm:hidden"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          프리미엄 한식 배달 창업 브랜드
        </motion.p>
      </div>

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
