import Image from "next/image";
import { strengths } from "@domains/landing/model";

export function StrengthsSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#feeab4]"
      style={{ width: 393, height: 852 }}
    >
      <div className="absolute z-0" style={{ left: -234, top: -104, width: 673, height: 505 }}>
        <Image
          src="/images/sections/img-0345.png"
          alt=""
          fill
          sizes="673px"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[rgba(254,234,180,0.9)]" />

      <div
        className="absolute z-10 text-center font-[family-name:var(--font-jua)] text-[#ff9e00]"
        style={{
          left: "50%",
          top: 41,
          transform: "translateX(-50%)",
          fontSize: 70,
          lineHeight: "96px",
          whiteSpace: "nowrap",
        }}
      >
        진짜
        <br />
        {"(            )"}
        <br />
        심곱도리탕
      </div>

      <p
        className="absolute z-20 text-center font-[family-name:var(--font-gowun-dodum)] text-[#24140c]"
        style={{
          left: "50%",
          top: 168,
          transform: "translateX(-50%) rotate(-1.75deg)",
          fontSize: 60,
          lineHeight: "66px",
          whiteSpace: "nowrap",
        }}
      >
        간단한
      </p>

      <div
        className="absolute z-10 rounded-[20px] border border-white"
        style={{
          left: "50%",
          top: 401,
          transform: "translateX(-50%)",
          width: 365,
          height: 376,
          background: "rgba(255,255,255,0.75)",
        }}
      />

      <div
        className="absolute z-20 grid grid-cols-2 gap-[15px]"
        style={{
          left: "50%",
          top: 435,
          transform: "translateX(-50%)",
        }}
      >
        {strengths.map((s) => (
          <div
            key={s.key}
            className="flex flex-col items-center justify-end"
            style={{ width: 150, height: 150 }}
          >
            <div className="relative flex h-[95px] items-end justify-center">
              {s.icons.map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  alt=""
                  width={s.icons.length > 1 ? 60 : 80}
                  height={s.icons.length > 1 ? 60 : 90}
                  className={
                    s.icons.length > 1
                      ? i === 0
                        ? "absolute bottom-0 left-2"
                        : "absolute bottom-2 right-2"
                      : "h-auto w-auto"
                  }
                  style={
                    s.icons.length === 1
                      ? { maxHeight: 90, width: "auto" }
                      : undefined
                  }
                />
              ))}
            </div>
            <p
              className="mt-2 text-center font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#24140c]"
              style={{ fontSize: 20, lineHeight: "36px" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
