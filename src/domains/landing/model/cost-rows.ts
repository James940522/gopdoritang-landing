export type CostRow = {
  label: string;
  detail: string;
  amount: string;
  highlight?: boolean;
  strike?: string;
  altRow?: boolean;
};

export const costRows: CostRow[] = [
  {
    label: '가뱅비',
    detail: '가입비, 상표사용료, 메뉴얼/인력지원 대가',
    amount: '0원',
    highlight: true,
    strike: '300만원',
  },
  {
    label: '교육비',
    detail: '개점 전 교육비',
    amount: '0원',
    highlight: true,
    strike: '200만원',
    altRow: true,
  },
  { label: '물품보증금', detail: '물품보증금', amount: '200만원' },
  { label: '로열티', detail: '로열티', amount: '0원', highlight: true, altRow: true },
  { label: '감리비', detail: '인테리어 감리비', amount: '0원', highlight: true },
  { label: '간판', detail: '기본간판 및 싸인물', amount: '간판 - 자가시공', altRow: true },
  {
    label: '내장인테리어',
    detail: '가설공사, 목공사, 금속공사, 유리공사, 설비공사, 타일공사, 도장공사, 전기공사',
    amount: '자가시공',
  },
  { label: '의탁자', detail: '의탁자', amount: '자가시공', altRow: true },
  { label: '주방설비', detail: '주방설비', amount: '자가시공' },
];
