export type ProfitItem = {
  label: string;
  value: string;
  height: number;
  color: string;
  textColor: 'cream' | 'mocha';
  fontSize: number;
};

export const profitBars: ProfitItem[] = [
  {
    label: '순 이익',
    value: '12,000,000원',
    height: 134,
    color: '#feeab4',
    textColor: 'cream',
    fontSize: 28,
  },
  {
    label: '식자재 원가율',
    value: '24.2%',
    height: 294,
    color: '#553424',
    textColor: 'mocha',
    fontSize: 20,
  },
  { label: '_divider1', value: '', height: 15, color: '#c4886a', textColor: 'mocha', fontSize: 0 },
  {
    label: '인건비',
    value: '6.9%',
    height: 85,
    color: '#6c2f10',
    textColor: 'mocha',
    fontSize: 16,
  },
  { label: '_divider2', value: '', height: 9, color: '#b55d32', textColor: 'mocha', fontSize: 0 },
  {
    label: '관리비/배달대행',
    value: '',
    height: 30,
    color: '#7e5e4e',
    textColor: 'mocha',
    fontSize: 16,
  },
];
