import Image from 'next/image';

const TOP_CHARS = [
  { ch: '1', left: 47.99, top: 605.79, w: 11.42, h: 10.08, rotate: -64.36 },
  { ch: '등', left: 54.94, top: 593.91, w: 12.71, h: 12.74, rotate: -43.67 },
  { ch: ' ', left: 66.92, top: 584.49, w: 6.73, h: 9.76, rotate: -26.16 },
  { ch: '곱', left: 75.82, top: 580.79, w: 9.86, h: 10.65, rotate: -8.65 },
  { ch: '도', left: 91.62, top: 579.83, w: 10.52, h: 11.22, rotate: 13.63 },
  { ch: '리', left: 106.61, top: 584.93, w: 12.47, h: 12.68, rotate: 35.91 },
  { ch: '탕', left: 118.55, top: 595.34, w: 12.55, h: 12.24, rotate: 58.19 },
];

const BOTTOM_CHARS = [
  { ch: 'N', left: 55.85, top: 628.65, w: 9.26, h: 8.29, rotate: 71.62 },
  { ch: 'O', left: 58.85, top: 636.62, w: 9.85, h: 9.45, rotate: 55.43 },
  { ch: '.', left: 64.24, top: 643.54, w: 6.9, h: 7.26, rotate: 42.35 },
  { ch: '1', left: 68.03, top: 646.82, w: 8.52, h: 9.38, rotate: 29.89 },
  { ch: ' ', left: 75.29, top: 652.07, w: 4.78, h: 8.52, rotate: 17.44 },
  { ch: 'K', left: 79.99, top: 651.84, w: 6.74, h: 8.16, rotate: 4.36 },
  { ch: '-', left: 88.66, top: 652.04, w: 5.13, h: 8.26, rotate: -9.96 },
  { ch: 'F', left: 94.96, top: 650.72, w: 8.04, h: 9.23, rotate: -23.67 },
  { ch: 'O', left: 101.99, top: 647.34, w: 9.66, h: 9.87, rotate: -39.24 },
  { ch: 'O', left: 108.37, top: 641.7, w: 9.85, h: 9.45, rotate: -55.43 },
  { ch: 'D', left: 112.92, top: 634.5, w: 9.26, h: 8.29, rotate: -71.62 },
];

const ORIGIN_X = 37;
const ORIGIN_Y = 571;

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export function HeroBadge({ className, style }: Props) {
  return (
    <div className={`relative ${className ?? ''}`} style={{ width: 104, height: 104, ...style }}>
      <Image
        src="/images/hero/badge-circle.svg"
        alt=""
        width={104}
        height={104}
        className="absolute inset-0 h-full w-full stamp-rotate"
        aria-hidden
      />

      <Image
        src="/images/hero/dot.svg"
        alt=""
        width={4}
        height={4}
        className="absolute"
        style={{ left: 47 - ORIGIN_X, top: 617.12 - ORIGIN_Y }}
        aria-hidden
      />
      <Image
        src="/images/hero/dot.svg"
        alt=""
        width={4}
        height={4}
        className="absolute"
        style={{ left: 121 - ORIGIN_X, top: 617.12 - ORIGIN_Y }}
        aria-hidden
      />

      <span className="sr-only">1등 곱도리탕 NO.1 K-FOOD</span>

      {TOP_CHARS.map((c, i) => (
        <span
          key={`top-${i}`}
          className="absolute font-[family-name:var(--font-batang)] font-bold text-[10px] text-[#feeab4]"
          style={{
            left: c.left - ORIGIN_X,
            top: c.top - ORIGIN_Y,
            width: c.w,
            height: c.h,
            transform: `rotate(${c.rotate}deg)`,
            transformOrigin: 'center',
            display: 'grid',
            placeItems: 'center',
          }}
          aria-hidden
        >
          {c.ch}
        </span>
      ))}

      {BOTTOM_CHARS.map((c, i) => (
        <span
          key={`bot-${i}`}
          className="absolute font-[family-name:var(--font-batang)] font-bold text-[8px] text-[#feeab4]"
          style={{
            left: c.left - ORIGIN_X,
            top: c.top - ORIGIN_Y,
            width: c.w,
            height: c.h,
            transform: `rotate(${c.rotate}deg)`,
            transformOrigin: 'center',
            display: 'grid',
            placeItems: 'center',
          }}
          aria-hidden
        >
          {c.ch}
        </span>
      ))}
    </div>
  );
}
