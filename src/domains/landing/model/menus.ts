export type MenuItem = {
  name: string;
  image: string;
};

const menuBasePath = '/asset/menu';

export const menus: readonly MenuItem[] = [
  {
    name: '곱도리탕',
    image: `${menuBasePath}/optimized/menu-01.webp`,
  },
  {
    name: '닭도리탕',
    image: `${menuBasePath}/optimized/menu-02.webp`,
  },
  {
    name: '마라 곱도리탕',
    image: `${menuBasePath}/optimized/menu-03.webp`,
  },
  {
    name: '묵은지 닭도리탕',
    image: `${menuBasePath}/optimized/menu-04.webp`,
  },
  {
    name: '순두부 닭도리탕',
    image: `${menuBasePath}/optimized/menu-05.webp`,
  },
  {
    name: '우삼겹 닭도리탕',
    image: `${menuBasePath}/optimized/menu-06.webp`,
  },
  {
    name: '쭈꾸미 닭도리탕',
    image: `${menuBasePath}/optimized/menu-07.webp`,
  },
  {
    name: '낙곱새',
    image: `${menuBasePath}/optimized/menu-08.webp`,
  },
  {
    name: '낙곱',
    image: `${menuBasePath}/optimized/menu-09.webp`,
  },
  {
    name: '곱새',
    image: `${menuBasePath}/optimized/menu-10.webp`,
  },
  {
    name: '옥수수전',
    image: `${menuBasePath}/optimized/menu-11.webp`,
  },
  {
    name: '감자채전',
    image: `${menuBasePath}/optimized/menu-12.webp`,
  },
  {
    name: '깻잎전',
    image: `${menuBasePath}/optimized/menu-13.webp`,
  },
  {
    name: '날치알 주먹밥',
    image: `${menuBasePath}/optimized/menu-14.webp`,
  },
  {
    name: '납작만두',
    image: `${menuBasePath}/optimized/menu-15.webp`,
  },
  {
    name: '김치전',
    image: `${menuBasePath}/optimized/menu-16.webp`,
  },
  {
    name: '미니계란찜',
    image: `${menuBasePath}/optimized/menu-17.webp`,
  },
  {
    name: '해물파전',
    image: `${menuBasePath}/optimized/menu-18.webp`,
  },
  {
    name: '튀김오뎅',
    image: `${menuBasePath}/optimized/menu-19.webp`,
  },
  {
    name: '오징어튀김',
    image: `${menuBasePath}/optimized/menu-20.webp`,
  },
  {
    name: '부추전',
    image: `${menuBasePath}/optimized/menu-21.webp`,
  },
] as const;
