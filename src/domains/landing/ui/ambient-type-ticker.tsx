'use client';

import { motion, useReducedMotion } from 'framer-motion';

type AmbientTypeTickerLine = {
  text: string;
  direction: 'left' | 'right';
  variant?: 'solid' | 'outline';
};

type AmbientTypeTickerProps = {
  lines: readonly AmbientTypeTickerLine[];
  className?: string;
};

function TickerLine({ line, index }: { line: AmbientTypeTickerLine; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const isOutline = line.variant === 'outline';
  const duration = 34 + index * 5;
  const animateX = line.direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

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
        'overflow-hidden font-(family-name:--font-black-han-sans) text-[22px] leading-none tracking-normal whitespace-nowrap uppercase sm:text-[30px] lg:text-[38px]',
        isOutline
          ? 'text-transparent drop-shadow-[0_0_16px_rgba(255,48,71,0.14)]'
          : 'text-[rgba(255,48,71,0.54)] drop-shadow-[0_0_18px_rgba(255,48,71,0.22)]',
      ].join(' ')}
      style={isOutline ? { WebkitTextStroke: '1px rgba(255,48,71,0.78)' } : undefined}
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

export function AmbientTypeTicker({ lines, className }: AmbientTypeTickerProps) {
  return (
    <div
      aria-hidden
      className={['pointer-events-none select-none overflow-hidden py-2', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="space-y-3 sm:space-y-4">
        {lines.map((line, index) => (
          <TickerLine key={`${line.text}-${index}`} line={line} index={index} />
        ))}
      </div>
    </div>
  );
}
