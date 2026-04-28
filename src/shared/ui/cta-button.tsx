import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/lib/cn";

type Variant = "solid" | "outline";

const variantClass: Record<Variant, string> = {
  solid:
    "bg-[var(--color-brand)] text-[var(--color-ink)] shadow-[var(--shadow-card)]",
  outline:
    "border border-white/15 bg-white/5 text-white",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function CtaButton({
  variant = "solid",
  children,
  className,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      className={cn(
        "block w-full rounded-2xl py-4 text-center text-base font-bold transition active:scale-[0.98]",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
