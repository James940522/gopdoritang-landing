import Image from "next/image";
import { processSteps } from "@domains/landing/model";

const CARD_TOPS = [226, 342, 458, 574, 690];
const ARROW_TOPS = [317, 434, 551, 668];

export function ProcessSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#24140c]"
      style={{ width: 393, height: 852 }}
    >
      <p
        className="absolute z-10 text-center font-[family-name:var(--font-noto-sans-kr)] text-white"
        style={{
          left: "50%",
          top: 58,
          transform: "translateX(-50%)",
          fontSize: 30,
          lineHeight: "53px",
          whiteSpace: "nowrap",
        }}
      >
        저희만 따라오세요
      </p>
      <h2
        className="absolute z-10 text-center font-[family-name:var(--font-noto-sans-kr)] font-bold text-white"
        style={{
          left: "50%",
          top: 104,
          transform: "translateX(-50%)",
          fontSize: 35,
          lineHeight: "53px",
          whiteSpace: "nowrap",
        }}
      >
        심곱도리탕 창업절차
      </h2>

      {processSteps.map((step, i) => (
        <div key={step.step}>
          <div
            className="absolute z-10 flex items-center rounded-[10px]"
            style={{
              left: 52,
              top: CARD_TOPS[i],
              width: 291,
              height: 84,
              background: step.highlight ? "#feeab4" : "#ffffff",
            }}
          >
            <div className="ml-[28px] grid h-full place-items-center" style={{ width: 50 }}>
              <Image
                src={step.icon}
                alt=""
                width={step.iconSize.width}
                height={step.iconSize.height}
              />
            </div>
            <p
              className="ml-[10px] font-[family-name:var(--font-noto-sans-kr)] font-bold"
              style={{
                fontSize: 20,
                lineHeight: "53px",
                color: step.highlight ? "#24140c" : "#7e5e4e",
              }}
            >
              {step.title}
            </p>
          </div>

          <div
            className="absolute z-20 flex items-center justify-center rounded-[10px] px-[10px] py-[10px]"
            style={{
              left: 269,
              top: CARD_TOPS[i] - 17,
              background: step.highlight ? "#ff9e00" : "#feeab4",
              boxShadow: "0 0 6.5px rgba(36,20,12,0.3)",
            }}
          >
            <span
              className="font-[family-name:var(--font-noto-sans-kr)] font-bold"
              style={{
                fontSize: 15,
                color: step.highlight ? "#ffffff" : "#24140c",
              }}
            >
              STEP {step.step}
            </span>
          </div>

          {i < ARROW_TOPS.length ? (
            <>
              <div
                className="absolute z-10"
                style={{ left: 178.5, top: ARROW_TOPS[i] - 7, width: 28, height: 9 }}
              >
                <Image
                  src="/images/sections/step-arrow-up.svg"
                  alt=""
                  fill
                  sizes="28px"
                />
              </div>
              <div
                className="absolute z-10"
                style={{ left: 178, top: ARROW_TOPS[i], width: 28, height: 9 }}
              >
                <Image
                  src="/images/sections/step-arrow-down.svg"
                  alt=""
                  fill
                  sizes="28px"
                />
              </div>
            </>
          ) : null}
        </div>
      ))}
    </section>
  );
}
