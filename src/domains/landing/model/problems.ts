export type Problem = {
  order: string;
  label: string;
  detail: string;
};

export const problems: Problem[] = [
  {
    order: "첫째",
    label: "비효율적인 조리 시간",
    detail: "주문이 몰릴수록 무너지는 조리 라인",
  },
  {
    order: "둘째",
    label: "높은 인건비",
    detail: "사람이 많이 필요한 복잡한 운영 구조",
  },
  {
    order: "셋째",
    label: "복잡한 메뉴",
    detail: "재료 종류가 늘어날수록 늘어나는 손실",
  },
];
