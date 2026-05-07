export type MapoMonthlySales = {
  month: '1월' | '2월' | '3월' | '4월';
  baeminSales: number;
  coupangSales: number;
};

export type MapoMonthlySalesSummary = MapoMonthlySales & {
  totalSales: number;
  baeminShare: number;
  coupangShare: number;
};

export const mapoMonthlySales = [
  {
    month: '1월',
    baeminSales: 28684600,
    coupangSales: 92060200,
  },
  {
    month: '2월',
    baeminSales: 27601700,
    coupangSales: 72620700,
  },
  {
    month: '3월',
    baeminSales: 25587500,
    coupangSales: 83063600,
  },
  {
    month: '4월',
    baeminSales: 27279500,
    coupangSales: 96979900,
  },
] as const satisfies readonly MapoMonthlySales[];

export const mapoMonthlySalesSummary = mapoMonthlySales.map((item) => {
  const totalSales = item.baeminSales + item.coupangSales;

  return {
    ...item,
    totalSales,
    baeminShare: Number(((item.baeminSales / totalSales) * 100).toFixed(1)),
    coupangShare: Number(((item.coupangSales / totalSales) * 100).toFixed(1)),
  };
}) satisfies MapoMonthlySalesSummary[];

export const mapoSalesTotal = mapoMonthlySalesSummary.reduce(
  (acc, item) => ({
    totalSales: acc.totalSales + item.totalSales,
    baeminSales: acc.baeminSales + item.baeminSales,
    coupangSales: acc.coupangSales + item.coupangSales,
  }),
  {
    totalSales: 0,
    baeminSales: 0,
    coupangSales: 0,
  },
);

export const mapoSalesMetrics = {
  baeminShare: Number(((mapoSalesTotal.baeminSales / mapoSalesTotal.totalSales) * 100).toFixed(1)),
  coupangShare: Number(
    ((mapoSalesTotal.coupangSales / mapoSalesTotal.totalSales) * 100).toFixed(1),
  ),
} as const;
