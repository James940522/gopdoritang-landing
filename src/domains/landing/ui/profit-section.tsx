import Image from 'next/image';

export function ProfitSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#24140c]"
      style={{ width: 393, height: 852 }}
    >
      <div className="absolute z-0" style={{ left: -51, top: -3, width: 558, height: 393 }}>
        <Image
          src="/images/sections/aron-visuals.png"
          alt=""
          fill
          sizes="558px"
          className="object-cover mix-blend-exclusion"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(36,20,12,0) 0%, #24140c 73%)',
          }}
        />
      </div>

      <div
        className="absolute z-10 bg-[#feeab4]"
        style={{ left: 98, top: 97, width: 197, height: 60 }}
      />

      <h2
        className="absolute z-20 text-center font-[family-name:var(--font-noto-serif-kr)] font-bold text-[#feeab4]"
        style={{
          left: '50%',
          top: 37,
          transform: 'translateX(-50%)',
          fontSize: 45,
          lineHeight: '61px',
          whiteSpace: 'nowrap',
        }}
      >
        이익도 <span className="text-[#24140c]">확실하게</span>
        <br />
        챙겨가세요
      </h2>

      <div
        className="absolute z-20 flex flex-col items-stretch"
        style={{ left: 33, top: 256, width: 88 }}
      >
        <div style={{ height: 134, background: '#feeab4' }} />
        <div style={{ height: 294, background: '#553424' }} />
        <div style={{ height: 15, background: '#c4886a' }} />
        <div style={{ height: 85, background: '#6c2f10' }} />
        <div style={{ height: 9, background: '#b55d32' }} />
        <div style={{ height: 30, background: '#7e5e4e' }} />
      </div>

      <div className="absolute z-20" style={{ left: 121, top: 308, width: 49.5, height: 10 }}>
        <Image src="/images/sections/profit-arrow-1.svg" alt="" fill sizes="50px" />
      </div>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#feeab4]"
        style={{ left: 176.5, top: 298, fontSize: 28 }}
      >
        순 이익
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] text-[#feeab4]"
        style={{ left: 176.5, top: 333, fontSize: 28, letterSpacing: '-1.68px' }}
      >
        12,000,000원
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#feeab4]"
        style={{ left: 267.5, top: 300, fontSize: 25, letterSpacing: '-1.5px' }}
      >
        11.1%
      </p>

      <div className="absolute z-20" style={{ left: 121, top: 508, width: 72, height: 10 }}>
        <Image src="/images/sections/profit-arrow-2.svg" alt="" fill sizes="72px" />
      </div>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 199, top: 503, fontSize: 20 }}
      >
        식자재 원가율
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 199, top: 529, fontSize: 20 }}
      >
        24.2%
      </p>

      <div className="absolute z-20" style={{ left: 121, top: 686, width: 72, height: 10 }}>
        <Image src="/images/sections/profit-arrow-2.svg" alt="" fill sizes="72px" />
      </div>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 199, top: 683, fontSize: 16 }}
      >
        임대료
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 249, top: 683, fontSize: 16 }}
      >
        1.32%
      </p>

      <div className="absolute z-20" style={{ left: 121, top: 742, width: 65, height: 2 }}>
        <Image src="/images/sections/profit-arrow-3.svg" alt="" fill sizes="65px" />
      </div>
      <div className="absolute z-20" style={{ left: 183, top: 737, width: 10, height: 10 }}>
        <Image src="/images/sections/profit-dot.svg" alt="" fill sizes="10px" />
      </div>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 199, top: 734, fontSize: 16 }}
      >
        인건비
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 249, top: 734, fontSize: 16 }}
      >
        6.9%
      </p>

      <div className="absolute z-20" style={{ left: 121, top: 788, width: 65, height: 2 }}>
        <Image src="/images/sections/profit-arrow-4.svg" alt="" fill sizes="65px" />
      </div>
      <div className="absolute z-20" style={{ left: 183, top: 783, width: 10, height: 10 }}>
        <Image src="/images/sections/profit-dot.svg" alt="" fill sizes="10px" />
      </div>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 199, top: 780, fontSize: 16 }}
      >
        관리비
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 249, top: 779, fontSize: 16 }}
      >
        0.7%
      </p>

      <div className="absolute z-20" style={{ left: 121, top: 808, width: 65, height: 2 }}>
        <Image src="/images/sections/profit-arrow-4.svg" alt="" fill sizes="65px" />
      </div>
      <div className="absolute z-20" style={{ left: 183, top: 803, width: 10, height: 10 }}>
        <Image src="/images/sections/profit-dot.svg" alt="" fill sizes="10px" />
      </div>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 199, top: 800, fontSize: 16 }}
      >
        배달대행
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#7e5e4e]"
        style={{ left: 264, top: 800, fontSize: 16 }}
      >
        2.5%
      </p>
    </section>
  );
}
