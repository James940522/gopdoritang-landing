import { cn } from '@shared/lib/cn';

type Props = {
  size?: number;
  className?: string;
};

export function SpinningBadge({ size = 110, className }: Props) {
  const radius = size / 2 - 10;
  const cx = size / 2;
  const id = `badge-arc-${size}`;

  return (
    <div className={cn('relative', className)} style={{ width: size, height: size }}>
      <div className="absolute inset-0 grid place-items-center rounded-full bg-[var(--color-brand)] text-[var(--color-ink)] shadow-[var(--shadow-card)]">
        <div className="text-center leading-tight">
          <div className="text-[10px] font-bold tracking-[0.2em]">1ST</div>
          <div className="font-[family-name:var(--font-gowun-dodum)] text-[15px] font-bold">
            곱도리탕
          </div>
          <div className="mt-0.5 text-[8px] font-bold tracking-[0.15em]">NO.1 K-FOOD</div>
        </div>
      </div>
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 stamp-rotate" aria-hidden>
        <defs>
          <path
            id={id}
            d={`M ${cx},${cx} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="fill-[var(--color-ink)]" fontSize="8" letterSpacing="2" fontWeight="700">
          <textPath href={`#${id}`} startOffset="0">
            ★ SHIM GOPDORITANG · NO.1 K-FOOD · SHIM GOPDORITANG ·
          </textPath>
        </text>
      </svg>
    </div>
  );
}
