import type { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@shared/lib/cn';

type Tone = 'dark' | 'soft' | 'brand';

const toneClass: Record<Tone, string> = {
  dark: 'bg-[var(--color-bg)]',
  soft: 'bg-[var(--color-bg-soft)]',
  brand: 'bg-[var(--color-brand)] text-[var(--color-ink)]',
};

type Props = HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  children: ReactNode;
};

export function Section({ tone = 'dark', className, children, ...rest }: Props) {
  return (
    <section
      {...rest}
      className={cn('relative isolate overflow-hidden px-6 py-20', toneClass[tone], className)}
    >
      {children}
    </section>
  );
}
