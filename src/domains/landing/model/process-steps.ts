export type ProcessStep = {
  step: number;
  title: string;
  icon: string;
  iconSize: { width: number; height: number };
  highlight?: boolean;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: '가맹상담',
    icon: '/images/sections/step-1.svg',
    iconSize: { width: 35, height: 34.65 },
  },
  {
    step: 2,
    title: '상권분석',
    icon: '/images/sections/step-2.svg',
    iconSize: { width: 31, height: 30.09 },
  },
  {
    step: 3,
    title: '가맹계약',
    icon: '/images/sections/step-3.svg',
    iconSize: { width: 35, height: 32.67 },
  },
  {
    step: 4,
    title: '매장시공/설비/교육',
    icon: '/images/sections/step-4.svg',
    iconSize: { width: 34, height: 33.15 },
  },
  {
    step: 5,
    title: '매장오픈',
    icon: '/images/sections/step-5.svg',
    iconSize: { width: 28, height: 34 },
    highlight: true,
  },
];
