export type MonthlySale = {
  month: string;
  sales: number;
};

export const monthlySales: MonthlySale[] = [
  { month: '1월', sales: 120_744_800 },
  { month: '2월', sales: 100_222_400 },
  { month: '3월', sales: 108_651_100 },
  { month: '4월', sales: 124_259_400 },
];

export const peakMonthlySale: MonthlySale = [...monthlySales].sort((a, b) => b.sales - a.sales)[0];
