import Image from 'next/image';

export function ProblemSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#24140c]"
      style={{ width: 393, height: 852 }}
    >
      <Image
        src="/images/sections/kakao-photo-1.png"
        alt=""
        fill
        sizes="393px"
        className="absolute inset-0 z-0 object-cover opacity-20 mix-blend-lighten"
      />

      <div
        className="absolute z-10 bg-[#feeab4]"
        style={{ left: 43, top: 196, width: 308, height: 63 }}
      />

      <h2
        className="absolute z-20 text-center font-[family-name:var(--font-jua)] text-[#feeab4]"
        style={{
          left: '50%',
          top: 129,
          transform: 'translateX(-50%)',
          fontSize: 41,
          lineHeight: '66px',
          whiteSpace: 'nowrap',
        }}
      >
        배달 창업
        <br />
        <span className="text-[#24140c]">어렵지 않으세요?</span>
      </h2>

      <p
        className="absolute z-20 font-[family-name:var(--font-gowun-dodum)] text-[#7e5e4e]"
        style={{ left: 174, top: 315, fontSize: 26, lineHeight: '36px' }}
      >
        첫째
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#feeab4]"
        style={{ left: 86, top: 361, fontSize: 26, lineHeight: '36px' }}
      >
        비효율적인 조리 시간
      </p>

      <p
        className="absolute z-20 font-[family-name:var(--font-gowun-dodum)] text-[#7e5e4e]"
        style={{ left: 174, top: 448, fontSize: 26, lineHeight: '36px' }}
      >
        둘째
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#feeab4]"
        style={{ left: 136, top: 494, fontSize: 26, lineHeight: '36px' }}
      >
        높은 인건비
      </p>

      <p
        className="absolute z-20 font-[family-name:var(--font-gowun-dodum)] text-[#7e5e4e]"
        style={{ left: 174, top: 581, fontSize: 26, lineHeight: '36px' }}
      >
        셋째
      </p>
      <p
        className="absolute z-20 font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#feeab4]"
        style={{ left: 136, top: 627, fontSize: 26, lineHeight: '36px' }}
      >
        복잡한 메뉴
      </p>
    </section>
  );
}
