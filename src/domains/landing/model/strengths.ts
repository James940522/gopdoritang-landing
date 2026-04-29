export type Strength = {
  key: 'time' | 'people' | 'recipe' | 'delivery';
  label: string;
  icons: string[];
};

export const strengths: Strength[] = [
  {
    key: 'time',
    label: '6분 조리',
    icons: ['/images/sections/icon-cook-bowl.svg', '/images/sections/icon-cook-time.svg'],
  },
  {
    key: 'recipe',
    label: '간단 레시피',
    icons: ['/images/sections/icon-recipe.svg'],
  },
  {
    key: 'people',
    label: '1-2인 운영가능',
    icons: ['/images/sections/icon-people.svg'],
  },
  {
    key: 'delivery',
    label: '배달 최적화 메뉴',
    icons: ['/images/sections/icon-delivery.svg'],
  },
];
