type Props = {
  count?: number;
};

export function StarRating({ count = 5 }: Props) {
  return (
    <div
      className="flex gap-1 text-[var(--color-brand)]"
      aria-label={`별점 ${count}점`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}
