export type MapoMonthlySales = {
  month: '1월' | '2월' | '3월';
  baeminSales: number;
  baeminOrders: number;
  coupangSales: number;
  coupangOrders: number;
};

export type MapoMonthlySalesSummary = MapoMonthlySales & {
  totalSales: number;
  totalOrders: number;
  averageOrderValue: number;
  baeminShare: number;
  coupangShare: number;
};

export const mapoMonthlySales = [
  {
    month: '1월',
    baeminSales: 28684600,
    baeminOrders: 1880,
    coupangSales: 92060200,
    coupangOrders: 5118,
  },
  {
    month: '2월',
    baeminSales: 27601700,
    baeminOrders: 1614,
    coupangSales: 72620700,
    coupangOrders: 3921,
  },
  {
    month: '3월',
    baeminSales: 25587500,
    baeminOrders: 1398,
    coupangSales: 83063600,
    coupangOrders: 4420,
  },
] as const satisfies readonly MapoMonthlySales[];

export const mapoMonthlySalesSummary = mapoMonthlySales.map((item) => {
  const totalSales = item.baeminSales + item.coupangSales;
  const totalOrders = item.baeminOrders + item.coupangOrders;

  return {
    ...item,
    totalSales,
    totalOrders,
    averageOrderValue: Math.round(totalSales / totalOrders),
    baeminShare: Number(((item.baeminSales / totalSales) * 100).toFixed(1)),
    coupangShare: Number(((item.coupangSales / totalSales) * 100).toFixed(1)),
  };
}) satisfies MapoMonthlySalesSummary[];

export const mapoSalesTotal = mapoMonthlySalesSummary.reduce(
  (acc, item) => ({
    totalSales: acc.totalSales + item.totalSales,
    totalOrders: acc.totalOrders + item.totalOrders,
    baeminSales: acc.baeminSales + item.baeminSales,
    baeminOrders: acc.baeminOrders + item.baeminOrders,
    coupangSales: acc.coupangSales + item.coupangSales,
    coupangOrders: acc.coupangOrders + item.coupangOrders,
  }),
  {
    totalSales: 0,
    totalOrders: 0,
    baeminSales: 0,
    baeminOrders: 0,
    coupangSales: 0,
    coupangOrders: 0,
  },
);

export const mapoSalesMetrics = {
  averageOrderValue: Math.round(mapoSalesTotal.totalSales / mapoSalesTotal.totalOrders),
  baeminShare: Number(((mapoSalesTotal.baeminSales / mapoSalesTotal.totalSales) * 100).toFixed(1)),
  coupangShare: Number(
    ((mapoSalesTotal.coupangSales / mapoSalesTotal.totalSales) * 100).toFixed(1),
  ),
  baeminAverageOrderValue: Math.round(mapoSalesTotal.baeminSales / mapoSalesTotal.baeminOrders),
  coupangAverageOrderValue: Math.round(mapoSalesTotal.coupangSales / mapoSalesTotal.coupangOrders),
} as const;
