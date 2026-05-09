export type ProfitStructureCard = {
  problem: string;
  solution: string;
  caption: string;
  image?: string;
};

export const profitStructureCards: ProfitStructureCard[] = [
  {
    problem: '느린 조리 = 낮은 회전율',
    solution: '빠른 조리로 매출을 올리는 구조',
    caption: '01 / COOKING FLOW',
    image: '/asset/sec-5/fast-cooking.webp',
  },
  {
    problem: '높은 인건비 = 수익 감소',
    solution: '인건비를 줄이는 운영 시스템',
    caption: '02 / LABOR EFFICIENCY',
  },
  {
    problem: '복잡한 메뉴 = 운영 스트레스',
    solution: '팔리는 메뉴만 남긴 효율 구조',
    caption: '03 / MENU OPERATION',
  },
];
