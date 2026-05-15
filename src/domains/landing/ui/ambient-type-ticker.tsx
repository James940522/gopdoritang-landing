'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

type AmbientTypeTickerLine = {
  text: string;
  direction: 'left' | 'right';
  variant?: 'solid' | 'outline';
};

type AmbientVerticalTickerLine = {
  text: string;
  direction: 'up' | 'down';
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

type AmbientVerticalTickerProps = Omit<AmbientTypeTickerProps, 'lines' | 'skew'> & {
  lines: readonly AmbientVerticalTickerLine[];
};

const toneStyles = {
  red: {
    solid: 'rgba(255,48,71,0.56)',
    stroke: '1px rgba(255,48,71,0.82)',
  },
  ember: {
    solid: 'rgba(238,83,35,0.48)',
    stroke: '1px rgba(238,83,35,0.78)',
  },
  gold: {
    solid: 'rgba(214,168,79,0.42)',
    stroke: '1px rgba(214,168,79,0.72)',
  },
  muted: {
    solid: 'rgba(245,233,201,0.2)',
    stroke: '1px rgba(245,233,201,0.32)',
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

const columnGapClasses = {
  tight: 'gap-x-2 sm:gap-x-3',
  normal: 'gap-x-3 sm:gap-x-5',
  loose: 'gap-x-5 sm:gap-x-7',
} as const;

function getTickerTextStyle({
  isOutline,
  tone,
}: {
  isOutline: boolean;
  tone: NonNullable<AmbientTypeTickerProps['tone']>;
}): CSSProperties {
  const colors = toneStyles[tone];

  return isOutline
    ? {
        WebkitTextStroke: colors.stroke,
        color: 'transparent',
      }
    : {
        color: colors.solid,
      };
}

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
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { amount: 0.08 });
  const isOutline = line.variant === 'outline';
  const duration = 30 + index * 7 + (size === 'large' ? 8 : 0);
  const animateX = line.direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];
  const textStyle = getTickerTextStyle({ isOutline, tone });

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
      ref={ref}
      className={[
        'overflow-hidden font-(family-name:--font-black-han-sans) leading-none tracking-normal whitespace-nowrap uppercase',
        sizeClasses[size],
      ].join(' ')}
      style={textStyle}
    >
      {shouldReduceMotion || !isInView ? (
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

function VerticalTickerLine({
  line,
  index,
  size,
  tone,
}: {
  line: AmbientVerticalTickerLine;
  index: number;
  size: NonNullable<AmbientTypeTickerProps['size']>;
  tone: NonNullable<AmbientTypeTickerProps['tone']>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { amount: 0.08 });
  const isOutline = line.variant === 'outline';
  const duration = 38 + index * 8 + (size === 'large' ? 10 : 0);
  const animateY = line.direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'];
  const textStyle = getTickerTextStyle({ isOutline, tone });

  const content = (
    <div className="flex shrink-0 flex-col items-center gap-7">
      {Array.from({ length: 5 }).map((_, repeatIndex) => (
        <span
          key={repeatIndex}
          className="py-4 [text-orientation:mixed] [writing-mode:vertical-rl]"
        >
          {line.text}
        </span>
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className={[
        'h-full overflow-hidden font-(family-name:--font-black-han-sans) leading-none tracking-normal whitespace-nowrap uppercase',
        sizeClasses[size],
      ].join(' ')}
      style={textStyle}
    >
      {shouldReduceMotion || !isInView ? (
        <div className="flex h-max flex-col items-center">{content}</div>
      ) : (
        <motion.div
          className="flex h-max flex-col items-center"
          animate={{ y: animateY }}
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

export function AmbientVerticalTicker({
  lines,
  className,
  gap = 'normal',
  size = 'small',
  tone = 'red',
}: AmbientVerticalTickerProps) {
  return (
    <div
      aria-hidden
      className={['pointer-events-none select-none overflow-hidden py-3', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={['flex h-full items-stretch justify-center', columnGapClasses[gap]].join(' ')}
      >
        {lines.map((line, index) => (
          <VerticalTickerLine
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
