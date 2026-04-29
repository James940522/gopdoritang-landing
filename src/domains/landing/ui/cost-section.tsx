import Image from 'next/image';
import { costRows } from '@domains/landing/model';

export function CostSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#7e5e4e]"
      style={{ width: 393, height: 920 }}
    >
      <div className="absolute z-0" style={{ left: -179, top: 0, width: 1542, height: 853 }}>
        <Image
          src="/images/sections/cost-bg.png"
          alt=""
          fill
          sizes="1542px"
          className="object-cover"
        />
      </div>
      <div
        className="absolute z-[1]"
        style={{
          left: -57,
          top: 418,
          width: 510,
          height: 434,
          background: 'linear-gradient(0deg, rgba(196,136,106,0.4) 0%, rgba(196,136,106,0) 100%)',
        }}
      />

      <h2
        className="absolute z-10 text-center font-[family-name:var(--font-noto-sans-kr)] font-bold text-white"
        style={{
          left: '50%',
          top: 108,
          transform: 'translateX(-50%)',
          fontSize: 40,
          lineHeight: '53px',
          whiteSpace: 'nowrap',
        }}
      >
        개설비용 안내
      </h2>
      <p
        className="absolute z-10 text-center font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#e0c3b4]"
        style={{
          left: '50%',
          top: 176,
          transform: 'translateX(-50%)',
          fontSize: 22,
          whiteSpace: 'nowrap',
        }}
      >
        가맹점과 함께 성장합니다
      </p>

      <table
        className="absolute z-10 border-collapse"
        style={{
          left: '50%',
          top: 267,
          transform: 'translateX(-50%)',
          width: 346,
        }}
      >
        <thead>
          <tr>
            {(['항목', '세부내용', '금액(부가세별도)'] as const).map((h, i) => (
              <th
                key={h}
                className="border border-[#7e5e4e] bg-[#c4886a] p-[10px] text-center font-[family-name:var(--font-noto-sans-kr)] text-[#24140c]"
                style={{ width: i === 0 ? 85 : i === 1 ? 161 : 100, fontSize: 12 }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {costRows.map((row, i) => (
            <tr key={i}>
              <td
                className="border border-[#7e5e4e] p-[10px] text-center font-[family-name:var(--font-noto-sans-kr)] text-[#7e5e4e]"
                style={{ background: row.altRow ? '#f5f5f5' : '#ffffff', fontSize: 12 }}
              >
                {row.label}
              </td>
              <td
                className="border border-[#7e5e4e] p-[10px] font-[family-name:var(--font-noto-sans-kr)] text-[#7e5e4e]"
                style={{ background: row.altRow ? '#f5f5f5' : '#ffffff', fontSize: 12 }}
              >
                {row.detail}
              </td>
              <td
                className="border border-[#7e5e4e] p-[10px] text-center font-[family-name:var(--font-noto-sans-kr)]"
                style={{ background: row.altRow ? '#f5f5f5' : '#ffffff' }}
              >
                {row.highlight ? (
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-[#ff9e00]" style={{ fontSize: 15 }}>
                      {row.amount}
                    </span>
                    {row.strike ? (
                      <span className="text-[#b2a199] line-through" style={{ fontSize: 12 }}>
                        {row.strike}
                      </span>
                    ) : null}
                  </div>
                ) : (
                  <span className="text-[#7e5e4e]" style={{ fontSize: 12 }}>
                    {row.amount}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
