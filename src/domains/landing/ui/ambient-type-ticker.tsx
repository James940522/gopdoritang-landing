'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';

type AmbientTypeTickerLine = {
  text: string;
  direction: 'left' | 'right';
  variant?: 'solid' | 'outline';
};

type AmbientTypeTickerProps = {
  lines: readonly AmbientTypeTickerLine[];
  className?: string;
  gap?: 'tight' | 'normal' | 'loose';
  size?: 'small' | 'medium' | 'large';
  skew?: 'left' | 'right';
  tone?: 'red' | 'ember' | 'gold' | 'muted';
};

const toneStyles = {
  red: {
    solid: 'rgba(255,48,71,0.56)',
    stroke: '1px rgba(255,48,71,0.82)',
    shadow: 'drop-shadow(0 0 18px rgba(255,48,71,0.22))',
  },
  ember: {
    solid: 'rgba(238,83,35,0.48)',
    stroke: '1px rgba(238,83,35,0.78)',
    shadow: 'drop-shadow(0 0 18px rgba(238,83,35,0.2))',
  },
  gold: {
    solid: 'rgba(214,168,79,0.42)',
    stroke: '1px rgba(214,168,79,0.72)',
    shadow: 'drop-shadow(0 0 16px rgba(214,168,79,0.16))',
  },
  muted: {
    solid: 'rgba(245,233,201,0.2)',
    stroke: '1px rgba(245,233,201,0.32)',
    shadow: 'drop-shadow(0 0 12px rgba(245,233,201,0.08))',
  },
} as const;

const sizeClasses = {
  small: 'text-[15px] sm:text-[20px] lg:text-[26px]',
  medium: 'text-[22px] sm:text-[30px] lg:text-[38px]',
  large: 'text-[28px] sm:text-[42px] lg:text-[56px]',
} as const;

const gapClasses = {
  tight: 'space-y-1.5 sm:space-y-2',
  normal: 'space-y-3 sm:space-y-4',
  loose: 'space-y-5 sm:space-y-7',
} as const;

function TickerLine({
  line,
  index,
  size,
  tone,
}: {
  line: AmbientTypeTickerLine;
  index: number;
  size: NonNullable<AmbientTypeTickerProps['size']>;
  tone: NonNullable<AmbientTypeTickerProps['tone']>;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isOutline = line.variant === 'outline';
  const duration = 30 + index * 7 + (size === 'large' ? 8 : 0);
  const animateX = line.direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];
  const colors = toneStyles[tone];
  const textStyle: CSSProperties = isOutline
    ? {
        WebkitTextStroke: colors.stroke,
        color: 'transparent',
        filter: colors.shadow,
      }
    : {
        color: colors.solid,
        filter: colors.shadow,
      };

  const content = (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 4 }).map((_, repeatIndex) => (
        <span key={repeatIndex} className="px-5 sm:px-8">
          {line.text}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={[
        'overflow-hidden font-(family-name:--font-black-han-sans) leading-none tracking-normal whitespace-nowrap uppercase',
        sizeClasses[size],
      ].join(' ')}
      style={textStyle}
    >
      {shouldReduceMotion ? (
        <div className="flex w-max">{content}</div>
      ) : (
        <motion.div
          className="flex w-max"
          animate={{ x: animateX }}
          transition={{ duration, ease: 'linear', repeat: Infinity }}
        >
          {content}
          {content}
        </motion.div>
      )}
    </div>
  );
}

export function AmbientTypeTicker({
  lines,
  className,
  gap = 'normal',
  size = 'medium',
  skew,
  tone = 'red',
}: AmbientTypeTickerProps) {
  return (
    <div
      aria-hidden
      className={[
        'pointer-events-none select-none overflow-hidden py-2',
        skew === 'left' ? '-rotate-2' : '',
        skew === 'right' ? 'rotate-2' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={gapClasses[gap]}>
        {lines.map((line, index) => (
          <TickerLine
            key={`${line.text}-${index}`}
            line={line}
            index={index}
            size={size}
            tone={tone}
          />
        ))}
      </div>
    </div>
  );
}
