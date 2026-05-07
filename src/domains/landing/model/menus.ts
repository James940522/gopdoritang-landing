export type MenuItem = {
  name: string;
  image: string;
};

const menuBasePath = '/asset/menu';

export const menus: readonly MenuItem[] = [
  {
    name: '곱도리탕',
    image: `${menuBasePath}/심곱도리탕/곱도리탕.jpeg`,
  },
  {
    name: '닭도리탕',
    image: `${menuBasePath}/심곱도리탕/닭도리탕.jpeg`,
  },
  {
    name: '마라 곱도리탕',
    image: `${menuBasePath}/심곱도리탕/마라 곱도리탕.jpeg`,
  },
  {
    name: '묵은지 닭도리탕',
    image: `${menuBasePath}/심곱도리탕/묵은지 닭도리탕.jpeg`,
  },
  {
    name: '순두부 닭도리탕',
    image: `${menuBasePath}/심곱도리탕/순두부 닭도리탕.jpeg`,
  },
  {
    name: '우삼겹 닭도리탕',
    image: `${menuBasePath}/심곱도리탕/우삼겹 닭도리탕.jpeg`,
  },
  {
    name: '쭈꾸미 닭도리탕',
    image: `${menuBasePath}/심곱도리탕/쭈꾸미 닭도리탕.jpeg`,
  },
  {
    name: '낙곱새',
    image: `${menuBasePath}/낙곱새/낙곱새.jpeg`,
  },
  {
    name: '낙곱',
    image: `${menuBasePath}/낙곱새/낙곱.jpeg`,
  },
  {
    name: '곱새',
    image: `${menuBasePath}/낙곱새/곱새.jpeg`,
  },
  {
    name: '옥수수전',
    image: `${menuBasePath}/사이드/옥수수전.jpeg`,
  },
  {
    name: '감자채전',
    image: `${menuBasePath}/사이드/감자채전.jpeg`,
  },
  {
    name: '깻잎전',
    image: `${menuBasePath}/사이드/깻잎전.jpeg`,
  },
  {
    name: '날치알 주먹밥',
    image: `${menuBasePath}/사이드/날치알 주먹밥.jpeg`,
  },
  {
    name: '납작만두',
    image: `${menuBasePath}/사이드/납작만두.jpeg`,
  },
  {
    name: '김치전',
    image: `${menuBasePath}/사이드/김치전.jpeg`,
  },
  {
    name: '미니계란찜',
    image: `${menuBasePath}/사이드/미니계란찜.jpeg`,
  },
  {
    name: '해물파전',
    image: `${menuBasePath}/사이드/해물파전.jpeg`,
  },
  {
    name: '튀김오뎅',
    image: `${menuBasePath}/사이드/튀김오뎅.jpeg`,
  },
  {
    name: '오징어튀김',
    image: `${menuBasePath}/사이드/오징어튀김.jpeg`,
  },
  {
    name: '부추전',
    image: `${menuBasePath}/사이드/부추전.jpeg`,
  },
] as const;
