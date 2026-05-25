import Image from 'next/image';
import { RevealArticle, RevealHeader } from '@shared/ui/reveal';
import { brandStories } from '../model';

const EASE = [0.22, 1, 0.36, 1] as const;

export function BrandStorySection() {
  return (
    <section
      id="brand-story"
      className="relative isolate overflow-hidden bg-[#120908] py-24 text-white sm:py-32 lg:py-40"
    >
      <Image
        src="/asset/sec-2/brand-story-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-center"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(215,38,61,0.2),transparent_30%),radial-gradient(circle_at_82%_26%,rgba(214,168,79,0.16),transparent_26%),linear-gradient(180deg,rgba(14,9,7,0.88)_0%,rgba(18,9,8,0.72)_44%,rgba(14,9,7,0.94)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(245,233,201,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(245,233,201,0.032)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-12 -z-10 font-(family-name:--font-black-han-sans) text-[220px] leading-none text-[#D7263D]/8 sm:-right-6 sm:text-[320px] lg:top-10 lg:right-8 lg:text-[420px]"
      >
        心
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-[#0e0907] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-8 md:max-w-7xl">
        {/* 섹션 헤더 */}
        <RevealHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-14 text-center sm:mb-20"
        >
          <p className="mb-4 font-(family-name:--font-noto-sans-kr) text-[11px] font-semibold tracking-[0.4em] text-[#E11D1D] sm:text-xs">
            BRAND STORY
          </p>
          <h2 className="font-(family-name:--font-gowun-batang) text-3xl leading-[1.35] font-bold text-white sm:text-4xl md:text-5xl">
            한 그릇에 담은
            <br />
            <span className="text-[#FFD9A0]">정직한 마음</span>
          </h2>
        </RevealHeader>

        {/* 3개 카드 — 모바일 1열 / md 이상 가로 3열 */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {brandStories.map((story, idx) => (
            <RevealArticle
              key={story.index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                delay: idx * 0.15,
                ease: EASE,
              }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/45 p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md backdrop-saturate-150 sm:p-10 md:p-7 lg:p-8"
            >
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="font-(family-name:--font-noto-sans-kr) text-[11px] font-semibold tracking-[0.35em] text-[#E11D1D] sm:text-xs">
                  {story.index}
                </span>
                <span aria-hidden className="h-px w-6 bg-[#E11D1D]/60" />
                <span className="font-(family-name:--font-noto-sans-kr) text-[11px] font-semibold tracking-[0.35em] text-[#E11D1D] sm:text-xs">
                  {story.label}
                </span>
              </div>

              <h3 className="mb-6 text-center font-(family-name:--font-gowun-batang) text-2xl leading-[1.35] font-bold whitespace-pre-line text-white sm:text-[28px] md:text-[22px] lg:text-2xl xl:text-[28px]">
                {story.title}
              </h3>

              <div className="space-y-5 text-center font-(family-name:--font-noto-sans-kr) text-[14px] leading-[1.95] text-white/75 sm:text-[15px] md:text-[13.5px] md:leading-[1.9] lg:text-[14px]">
                {story.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </RevealArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
