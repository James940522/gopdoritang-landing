import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex h-[57px] items-center justify-between bg-[#24140c] px-[17px]">
      <a href="/" aria-label="심곱도리탕 홈" className="block">
        <Image
          src="/images/hero/logo.png"
          alt="심곱도리탕"
          width={143}
          height={31}
          priority
          className="h-[31px] w-auto"
        />
      </a>
      <button
        type="button"
        aria-label="메뉴 열기"
        className="grid h-9 w-9 place-items-center text-white"
      >
        <span className="flex flex-col gap-[5px]">
          <span className="h-[2px] w-[22px] bg-[#feeab4]" />
          <span className="h-[2px] w-[22px] bg-[#feeab4]" />
          <span className="h-[2px] w-[22px] bg-[#feeab4]" />
        </span>
      </button>
    </header>
  );
}
