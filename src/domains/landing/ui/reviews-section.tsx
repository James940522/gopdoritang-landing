import Image from "next/image";
import { reviews } from "@domains/landing/model";

export function ReviewsSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#7e5e4e]"
      style={{ width: 393, height: 852 }}
    >
      <div
        className="absolute z-0 overflow-hidden"
        style={{ left: -10, top: 176, width: 427, height: 222 }}
      >
        <Image
          src="/images/reviews/store-photo.png"
          alt=""
          fill
          sizes="427px"
          className="object-cover"
        />
      </div>
      <div
        className="absolute z-[1]"
        style={{
          left: -23,
          top: 174,
          width: 440,
          height: 179,
          background:
            "linear-gradient(180deg, #7e5e4e 0%, rgba(126,94,78,0) 100%)",
        }}
      />
      <div
        className="absolute z-[1]"
        style={{
          left: -23,
          top: 516,
          width: 440,
          height: 336,
          background:
            "linear-gradient(0deg, #7e5e4e 0%, rgba(126,94,78,0) 100%)",
        }}
      />

      <p
        className="absolute z-10 text-center font-[family-name:var(--font-gowun-dodum)] text-white"
        style={{
          left: "50%",
          top: 86,
          transform: "translateX(-50%)",
          fontSize: 60,
          lineHeight: "63px",
          whiteSpace: "nowrap",
        }}
      >
        믿고 먹는
      </p>
      <p
        className="absolute z-10 text-center font-[family-name:var(--font-noto-sans-kr)] font-bold text-[#feeab4]"
        style={{
          left: "50%",
          top: 149,
          transform: "translateX(-50%)",
          fontSize: 40,
          lineHeight: "63px",
          whiteSpace: "nowrap",
        }}
      >
        심 곱도리탕
      </p>

      <div
        className="absolute z-20 flex flex-col gap-[17px]"
        style={{ left: 22, top: 377, width: 350 }}
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="bg-white"
            style={{ width: 350, height: 113, boxShadow: "0 0 14px rgba(0,0,0,0.35)" }}
          >
            <div className="px-4 pt-[14px]">
              <Image
                src="/images/reviews/stars-5.svg"
                alt="별점 5점"
                width={110}
                height={20}
                className="block"
              />
              <p
                className="mt-[8px] font-[family-name:var(--font-noto-sans-kr)] font-bold text-black"
                style={{ fontSize: 13 }}
              >
                {r.user}
              </p>
              <p
                className="mt-[8px] line-clamp-2 font-[family-name:var(--font-noto-sans-kr)] text-black"
                style={{ fontSize: 13 }}
              >
                {r.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
