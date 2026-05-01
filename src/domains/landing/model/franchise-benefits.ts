export type FranchiseBenefitRow = {
  category: string;
  content: string;
  note?: string;
  amount: 'waived' | 'self' | 'purchase' | 'consult';
};

export const franchiseBenefitRows: readonly FranchiseBenefitRow[] = [
  {
    category: '가맹비',
    content: '브랜드 상호 사용권, 지역 영업권 보장(최초비용)',
    amount: 'waived',
  },
  {
    category: '교육비',
    content: '조리매뉴얼, 운영매뉴얼 교육',
    note: '*양도양수 계약시 교육비 200만원 발생',
    amount: 'waived',
  },
  {
    category: '로열티',
    content: '상호/상표 사용료 및 경영지원에 대한 대가(정기적 비용)',
    amount: 'waived',
  },
  {
    category: '재가맹비',
    content: '가맹계약 종료 후 재 가맹 계약 시',
    amount: 'waived',
  },
  {
    category: '감리비',
    content: '인테리어 공사에 따른 감리비',
    amount: 'waived',
  },
  {
    category: '인테리어',
    content: '목공사, 전기공사, 타일공사, 도색공사',
    amount: 'self',
  },
  {
    category: '간판',
    content: '매장 메인 간판',
    amount: 'self',
  },
  {
    category: '주방기기 및 기물',
    content: '냉장고, 화구, 조리대, 싱크, 작업대, 조리기구 등',
    amount: 'purchase',
  },
];
