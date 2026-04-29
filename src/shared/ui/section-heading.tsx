import type { ReactNode } from 'react';
import { cn } from '@shared/lib/cn';

type Props = {
  eyebrow?: ReactNode;
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, children, align = 'left', className }: Props) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : '', className)}>
      {eyebrow ? (
        <p className="text-sm tracking-wide text-[var(--color-brand-soft)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-[family-name:var(--font-gowun-dodum)] text-[28px] leading-tight">
        {children}
      </h2>
    </div>
  );
}
