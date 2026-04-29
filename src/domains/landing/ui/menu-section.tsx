import Image from 'next/image';
import { menus } from '@domains/landing/model';

export function MenuSection() {
  const small = menus.filter((m) => m.size === 'sm');
  const large = menus.find((m) => m.size === 'lg');

  return (
    <section
      className="relative isolate overflow-hidden bg-[#24140c]"
      style={{ width: 393, height: 852 }}
    >
      <p
        className="absolute z-10 text-center font-[family-name:var(--font-noto-serif-kr)] font-medium text-[#7e5e4e]"
        style={{
          left: '50%',
          top: 50,
          transform: 'translateX(-50%)',
          fontSize: 31,
          lineHeight: '63px',
          whiteSpace: 'nowrap',
        }}
      >
        심 곱도리탕
      </p>
      <h2
        className="absolute z-10 text-center font-[family-name:var(--font-noto-serif-kr)] font-medium text-[#feeab4]"
        style={{
          left: '50%',
          top: 121,
          transform: 'translateX(-50%)',
          fontSize: 60,
          lineHeight: '63px',
          whiteSpace: 'nowrap',
        }}
      >
        BEST
        <br />
        MENU
      </h2>

      <div
        className="absolute z-10 grid grid-cols-2 gap-[11px]"
        style={{
          left: '50%',
          top: 280,
          transform: 'translateX(-50%)',
        }}
      >
        {small.slice(0, 2).map((m, i) => (
          <MenuCard key={`top-${i}`} item={m} size={152} fontSize={20} />
        ))}
        {large ? (
          <div className="col-span-2 flex justify-center">
            <MenuCard item={large} size={281} fontSize={30} />
          </div>
        ) : null}
        {small.slice(2, 4).map((m, i) => (
          <MenuCard key={`mid-${i}`} item={m} size={152} fontSize={20} />
        ))}
      </div>

      <a
        href="#menu"
        className="absolute z-10 grid place-items-center rounded-[10px] bg-[#feeab4] text-center font-[family-name:var(--font-gowun-batang)] font-bold text-[#24140c]"
        style={{
          left: 42,
          top: 695,
          width: 311,
          height: 54,
          fontSize: 20,
        }}
      >
        메뉴 자세히 보기
      </a>
    </section>
  );
}

function MenuCard({
  item,
  size,
  fontSize,
}: {
  item: { name: string; image: string };
  size: number;
  fontSize: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-[10px]" style={{ width: size, height: size }}>
      <Image src={item.image} alt={item.name} fill sizes={`${size}px`} className="object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(36,20,12,0) 0%, rgba(36,20,12,0.5) 100%)',
        }}
      />
      <p
        className="absolute inset-x-0 text-center font-[family-name:var(--font-noto-sans-kr)] font-bold text-white"
        style={{
          bottom: 12,
          fontSize,
        }}
      >
        {item.name}
      </p>
    </div>
  );
}
