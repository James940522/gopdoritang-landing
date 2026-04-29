# CLAUDE.md

## 1. Project Overview

This project is a single-page franchise landing page for **심 곱도리탕**.

The main goal is to create a high-converting franchise inquiry landing page, not a simple restaurant introduction page.

This page must persuade potential franchise owners by showing:

- Premium 곱도리탕 brand identity
- Strong real sales data
- Fast franchise growth
- Efficient operating structure
- Low initial franchise cost burden
- Territory protection
- Opening support
- Delivery marketing support
- Menu competitiveness
- Clear contact conversion

The page should feel like a premium Korean food franchise brand with a dark, fiery, warm, and trustworthy visual mood.

---

## 2. Core Positioning

### Brand Name

```txt
심 곱도리탕
```

### Brand Meaning

```txt
심(心)은 마음을 의미한다.

심 곱도리탕은 단순히 음식을 파는 브랜드가 아니라,
정성스럽게 만든 한 그릇으로 따뜻한 마음을 전하는 브랜드다.
```

### Brand Positioning

```txt
프리미엄 곱도리탕 창업 브랜드

곱도리탕부터 낙곱새까지,
배달 매출에 강한 한식 프랜차이즈
```

### Core Franchise Appeal

```txt
- 배달 특화 한식 창업
- 곱도리탕, 닭도리탕, 낙곱새 메뉴 확장성
- 빠른 조리 구조
- 낮은 인건비 구조
- 단순한 메뉴 운영
- 실제 매출 데이터 기반 설득
- 초기 창업비 부담 완화
- 배달 구역 보장
- 오픈 후 배달 마케팅 지원
```

---

## 3. Tech Stack

Use the existing project stack if already configured.

Recommended stack:

```txt
- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Recharts or custom SVG chart
- FSD Architecture
- Responsive Design
- Mobile-first UI
```

---

## 4. Architecture Rule

This project must follow **Feature-Sliced Design architecture**.

Do not put all components directly inside `app/page.tsx`.

`app/page.tsx` should only render the landing page composition.

Recommended structure:

```txt
src/
  app/
    page.tsx
    layout.tsx

  pages/
    landing/
      ui/
        LandingPage.tsx

  widgets/
    hero/
      ui/
        HeroSection.tsx

    brand-story/
      ui/
        BrandStorySection.tsx

    sales-performance/
      ui/
        SalesPerformanceSection.tsx

    franchise-growth/
      ui/
        FranchiseGrowthSection.tsx

    profit-structure/
      ui/
        ProfitStructureSection.tsx

    franchise-benefit/
      ui/
        FranchiseBenefitSection.tsx

    cost-data/
      ui/
        CostDataSection.tsx

    territory-protection/
      ui/
        TerritoryProtectionSection.tsx

    opening-process/
      ui/
        OpeningProcessSection.tsx

    marketing-strategy/
      ui/
        MarketingStrategySection.tsx

    menu-introduction/
      ui/
        MenuIntroductionSection.tsx

    contact/
      ui/
        ContactSection.tsx

  features/
    contact-form/
      ui/
        ContactForm.tsx
      model/
        schema.ts
        types.ts

    branch-carousel/
      ui/
        BranchCarousel.tsx
      model/
        branch.data.ts

    sales-chart/
      ui/
        SalesLineChart.tsx
        SalesDonutChart.tsx
      model/
        sales.data.ts

    menu-carousel/
      ui/
        MenuCarousel.tsx
      model/
        menu.data.ts

  entities/
    branch/
      model/
        types.ts

    menu/
      model/
        types.ts

    sales/
      model/
        types.ts

    franchise/
      model/
        types.ts

  shared/
    ui/
      Container.tsx
      Section.tsx
      Button.tsx
      Card.tsx
      Badge.tsx
      VideoBackground.tsx

    lib/
      cn.ts
      formatCurrency.ts

    constants/
      franchise.ts
      menu.ts
      sales.ts

    config/
      site.ts
```

### FSD Import Rules

Follow this dependency direction:

```txt
app -> pages -> widgets -> features -> entities -> shared
```

Allowed imports:

```txt
app can import pages, widgets, features, entities, shared
pages can import widgets, features, entities, shared
widgets can import features, entities, shared
features can import entities, shared
entities can import shared
shared must not import upper layers
```

Avoid circular dependencies.

---

## 5. Landing Page Section Order

Build the landing page in this order:

```txt
1. Hero
2. Brand Story
3. Sales Performance
4. Franchise Growth
5. Profit Structure
6. Franchise Benefit Event
7. Cost Data
8. Territory Protection
9. Opening Process
10. Delivery Marketing Strategy
11. Menu Introduction
12. Contact Us
```

---

# 6. Section Requirements

---

## Section 1. Hero

### Purpose

Immediately communicate that 심 곱도리탕 is a premium 곱도리탕 franchise brand.

The hero should create a strong visual impression.

### Layout Concept

```txt
프리미엄 곱도리탕의 기준

[끓고 있는 곱도리탕 그릇]

심 곱도리탕
```

The text should appear visually behind the bowl.

### Z-Index Layering

Use this visual layer order:

```txt
1. Fire ember background video
2. Large hero typography
3. Boiling 곱도리탕 bowl image/video
4. CTA buttons and supporting copy
```

### Background

Use a fire spark / ember / flame background video.

Visual mood:

```txt
Dark background, fire sparks, embers, subtle flame movement, smoky atmosphere, premium Korean food mood.
```

### Center Object

Use a boiling 곱도리탕 bowl.

Important:

```txt
The bowl itself should look fixed.
Only the soup, steam, and bubbles should feel alive.
```

### Hero Copy

Use this copy:

```txt
프리미엄 곱도리탕의 기준

심 곱도리탕

매출 구조와 운영 효율까지 설계된
배달 특화 곱도리탕 창업 브랜드
```

### CTA Buttons

```txt
창업 문의하기
브랜드 경쟁력 보기
```

### Implementation Notes

```txt
- Use video with muted, autoPlay, loop, playsInline.
- Use webm first and mp4 fallback.
- Use poster image for video.
- Hero image/video must not cause layout shift.
- Use mobile fallback image if background video is too heavy.
- Hero bowl image should be priority loaded.
- Keep text readable on mobile.
```

---

## Section 2. Brand Story

### Purpose

Emotionally explain the meaning of 심 곱도리탕.

Hero section is strong and intense.  
Brand story section should be warm, sincere, and premium.

### Heading

```txt
마음을 담아 끓이는 한 그릇
```

### Subheading

```txt
심 곱도리탕은 빠른 길보다 정직한 과정을 선택합니다.
```

### Body Copy

```txt
[心] 심 곱도리탕은 [心]

맛있는 한 그릇과 함께
작은 온기를 전하고 싶은 마음으로 시작했어요.

기성 양념에 기대지 않고,
매장에서 하나하나 직접 손질하며
정성을 차곡차곡 담아
깊고 편안한 맛을 만들고 있어요.

맛을 만드는 건 기술이지만,
다시 찾아주시게 만드는 건
결국 마음이라고 믿고 있습니다.

한 끼의 식사가
잠시 쉬어갈 수 있는 시간이 되길 바라며,
그 마음을 고스란히 음식에 담았습니다.

빠른 길보다는
조금 돌아가더라도
재료 하나, 과정 하나 직접 확인하며
손으로 만드는 방식을 고집하고 있어요.

오늘 드신 한 그릇이
기분 좋게, 따뜻하게
기억되었으면 좋겠습니다.
```

### Design Direction

```txt
- Warm dark background or cream-toned section
- Large Korean typography
- Generous spacing
- Steam or ingredient visual can be used
- Break the long copy into readable blocks
- Use subtle scroll reveal animation
- Do not make the mobile section too long or heavy
```

---

## Section 3. Sales Performance

### Purpose

Show that 심 곱도리탕 has strong actual sales data.

### Heading

```txt
심 곱도리탕은 매출부터 다릅니다
```

### Sales Data

Use this data:

```ts
export const MONTHLY_SALES = [
  { month: '1월', sales: 120744800 },
  { month: '2월', sales: 100222400 },
  { month: '3월', sales: 108651100 },
] as const;
```

### Display Text

```txt
1월 120,744,800원
2월 100,222,400원
3월 108,651,100원
```

### Disclaimer

```txt
* 심 곱도리탕 서울 OO점의 실제 매출입니다.
* 매출은 매장 위치, 운영 방식, 배달앱 환경에 따라 달라질 수 있습니다.
```

### Visual Direction

```txt
- Use a line chart
- Use large sales numbers
- Use trophy image or trophy-style background visual
- Make this section feel data-driven and trustworthy
```

### Recommended Layout

```txt
Left:
- Badge
- Headline
- Sales summary
- Disclaimer

Right:
- Line chart card
- Trophy visual
```

### Implementation Notes

```txt
- Use Recharts or lightweight SVG chart.
- Format currency using toLocaleString("ko-KR").
- Animate numbers with count-up if simple.
- Do not overcomplicate chart animation.
- Chart must be readable on mobile.
```

---

## Section 4. Franchise Growth

### Purpose

Show that franchise owners are already choosing the brand.

### Heading

```txt
좋은 브랜드는 점주님이 먼저 알아봅니다.
```

### Main Copy

```txt
가맹사업 시작 한 달 만에
가맹계약 10건 돌파
```

### Emphasized Text

```txt
10건 돌파
```

### Branch Data

Use this data:

```ts
export const BRANCHES = [
  { name: '영종도점', status: '오픈 완료' },
  { name: '송탄점', status: '오픈 완료' },
  { name: '사하점', status: '오픈 완료' },
  { name: '가정점', status: '오픈 완료' },
  { name: '수원점', status: '오픈 완료' },
  { name: '마포점', status: '오픈 완료' },
  { name: '노원점', status: '오픈 완료' },
] as const;
```

### Visual Direction

```txt
- Use carousel or marquee moving from right to left.
- Each branch should be displayed as a card.
- Duplicate the branch array for infinite marquee loop.
- Use subtle animation.
- Respect prefers-reduced-motion.
```

### Card Example

```txt
영종도점
오픈 완료
```

---

## Section 5. Profit Structure

### Purpose

Explain that 심 곱도리탕 is designed around a practical profit structure.

### Heading

```txt
심 곱도리탕은 이미 수익 구조까지 완성했습니다
```

### Interaction

Use scroll-based stacked cards.

Behavior:

```txt
As the user scrolls, image containers/cards move upward and stack.
Each card explains one operational pain point and the solution.
```

### Cards

```ts
export const PROFIT_STRUCTURE_CARDS = [
  {
    problem: '느린 조리 = 낮은 회전율',
    solution: '빠른 조리로 매출을 올리는 구조',
  },
  {
    problem: '높은 인건비 = 수익 감소',
    solution: '인건비를 줄이는 운영 시스템',
  },
  {
    problem: '복잡한 메뉴 = 운영 스트레스',
    solution: '팔리는 메뉴만 남긴 효율 구조',
  },
] as const;
```

### Display Copy

```txt
느린 조리 = 낮은 회전율
→ 빠른 조리로 매출을 올리는 구조

높은 인건비 = 수익 감소
→ 인건비를 줄이는 운영 시스템

복잡한 메뉴 = 운영 스트레스
→ 팔리는 메뉴만 남긴 효율 구조
```

### Design Direction

```txt
- Strong contrast between problem and solution.
- Use bold typography.
- Use arrows visually.
- Add food, kitchen, or operation-related images.
- Cards should stack naturally on scroll.
```

### Implementation Notes

```txt
- Use Framer Motion useScroll and useTransform.
- Keep animation lightweight.
- On mobile, use simple vertical cards instead of complex pinned animation.
- Content clarity is more important than animation complexity.
```

---

## Section 6. Franchise Benefit Event

### Purpose

Show strong limited-time franchise opening benefits.

### Heading

```txt
심 곱도리탕 선착순 창업혜택 이벤트
```

### Subheading

```txt
70호점까지
```

### Benefit Data

Use this data:

```ts
export const FRANCHISE_BENEFITS = [
  { label: '가맹비', amount: '110만원', benefit: '無' },
  { label: '교육비', amount: '55만원', benefit: '無' },
  { label: '로열티', amount: '22만원', benefit: '無' },
  { label: '계약이행보증금', amount: '200만원', benefit: '無' },
] as const;
```

### Display Copy

```txt
1. 가맹비 110만원 無
2. 교육비 55만원 無
3. 로열티 22만원 無
4. 계약이행보증금 200만원 無
```

### Supporting Copy

```txt
초기 창업 부담을 낮추기 위해
선착순 창업 혜택을 제공합니다.
```

### Disclaimer

```txt
* 혜택은 계약 조건 및 시점에 따라 달라질 수 있습니다.
```

### Design Direction

```txt
- Premium offer section.
- Use bold typography.
- Use the character 無 as a strong visual element.
- Do not make it look cheap like a discount flyer.
- Recommended colors: black, deep red, gold, warm cream.
```

---

## Section 7. Cost Data

### Purpose

Show financial structure using a donut chart or circular graph.

### Heading

```txt
숫자로 확인하는 운영 구조
```

### Subheading

```txt
심 곱도리탕은 감이 아닌 데이터로 창업 경쟁력을 설명합니다.
```

### Cost Data

Use this data:

```ts
export const COST_DATA = [
  { label: '식자재 원가', value: 26303541, percentage: 24.2 },
  { label: '임대료', value: 1430000, percentage: 1.32 },
  { label: '인건비', value: 7519200, percentage: 6.9 },
  { label: '관리비', value: 733364, percentage: 0.7 },
  { label: '배달대행', value: 2737400, percentage: 2.5 },
  { label: '순이익', value: 12000000, percentage: 11.1 },
] as const;
```

### Main Highlights

```txt
식자재 원가율 24.2%
순이익 1,200만원 사례
```

### Disclaimer

```txt
* 위 수치는 특정 매장 운영 사례 기준이며, 실제 수익은 상권, 매출, 운영 방식, 배달앱 수수료, 인건비 등에 따라 달라질 수 있습니다.
```

### Visual Direction

```txt
- Use donut chart.
- Show percentage labels.
- Show value in Korean currency.
- Highlight 식자재 원가율 24.2%.
- Highlight 순이익 1,200만원.
- Disclaimer must be visible but not visually dominant.
```

---

## Section 8. Territory Protection

### Purpose

Explain that stable sales start from protected delivery territory.

### Heading

```txt
안정적인 매출은 상권보장부터 시작됩니다.
```

### Body Copy

```txt
심 곱도리탕은 체계적인 지점관리 시스템을 통해
점주님들의 무리한 출점을 방지하고,
신규 출점 제한지역을 보장하여
창업 시 안정적인 운영 환경을 제공합니다.
```

### Comparison Layout

Left card:

```txt
A브랜드

1개 상권에서
2개 이상 지점이
매출을 나눠먹는 구조
```

Right card:

```txt
심 곱도리탕

배달 구역 보장
상권 충돌 최소화
점주 중심 출점 관리
```

### Design Direction

```txt
- Use comparison card layout.
- A브랜드 side should look problematic.
- 심 곱도리탕 side should look protected and trustworthy.
- Use map, delivery radius, or shield-like visual if possible.
```

### Copy Warning

Avoid unsupported exaggerated claims.

Do not use:

```txt
압도적인 성공률을 자랑합니다.
```

Use safer wording:

```txt
안정적인 운영 가능성을 높입니다.
```

---

## Section 9. Opening Process

### Purpose

Show that opening a franchise is simple and guided.

### Heading

```txt
창업 절차
```

### Step Data

Use this data:

```ts
export const OPENING_STEPS = [
  {
    title: '가맹 상담 · 상권 분석',
    description: '브랜드 소개 및 창업 컨설팅을 진행합니다.',
  },
  {
    title: '가맹 계약',
    description: '가맹계약서 설명 및 계약을 체결합니다.',
  },
  {
    title: '가맹점주 교육',
    description: '조리 및 서비스 교육, 오픈 지원을 진행합니다.',
  },
  {
    title: '심 곱도리탕 오픈',
    description: '최종 점검 후 매장을 오픈합니다.',
  },
] as const;
```

### Visual Direction

```txt
- Use timeline layout.
- Desktop: horizontal timeline.
- Mobile: vertical timeline.
- Use numbered steps.
- Keep copy short and clear.
```

---

## Section 10. Delivery Marketing Strategy

### Purpose

Explain that 심 곱도리탕 supports actual delivery sales operation, not only recipes.

### Heading

```txt
오픈 후 매출을 만드는 배달 마케팅 전략
```

### Body Copy

```txt
심 곱도리탕은 단순히 매장 오픈에서 끝나지 않습니다.
배달앱 노출, 메뉴 구성, 리뷰 전략, 프로모션 운영까지
실제 주문으로 이어지는 운영 방식을 함께 설계합니다.
```

### Marketing Cards

Use this data:

```ts
export const MARKETING_STRATEGIES = [
  {
    title: '배달앱 메뉴 구성',
    description: '팔리는 메뉴명, 세트 구성, 옵션 설계를 지원합니다.',
  },
  {
    title: '리뷰 관리 전략',
    description: '초기 리뷰 확보와 재주문을 위한 운영 전략을 제안합니다.',
  },
  {
    title: '프로모션 운영',
    description: '할인, 쿠폰, 세트 전략을 매장 상황에 맞게 운영합니다.',
  },
  {
    title: '상권별 운영 피드백',
    description: '상권과 주문 데이터를 기준으로 개선 방향을 제안합니다.',
  },
] as const;
```

### Design Direction

```txt
- Use 4-card grid.
- Add delivery app, rider, review, coupon, chart icons.
- This section should feel practical and operational.
```

---

## Section 11. Menu Introduction

### Purpose

Show menu competitiveness visually.

### Heading

```txt
팔리는 메뉴만 담은 심 곱도리탕 메뉴 라인업
```

### Subheading

```txt
곱도리탕부터 닭도리탕, 낙곱새, 사이드 메뉴까지
배달 주문에 맞춘 메뉴 구성을 제공합니다.
```

### Main Menu Data

```ts
export const MAIN_MENUS = [
  { name: '곱도리탕', price: 15900 },
  { name: '닭도리탕', price: 13900 },
  { name: '마라 곱도리탕', price: 15900 },
  { name: '순두부 닭도리탕', price: 15400 },
  { name: '묵은지 닭도리탕', price: 15900 },
  { name: '쭈꾸미 닭도리탕', price: 15900 },
  { name: '우삼겹 닭도리탕', price: 15900 },
] as const;
```

### Nakgopsae Menu Data

```ts
export const NAKGOPSAE_MENUS = [
  { name: '낙곱새', price: 17900 },
  { name: '곱새', price: 17900 },
  { name: '낙새', price: 17900 },
  { name: '낙곱', price: 17900 },
] as const;
```

### Set Menu Data

```ts
export const SET_MENUS = [
  {
    name: '나홀로 배 만족 세트',
    description: '메인 메뉴 1 + 사이드 1 + 음료 1',
    price: 16900,
  },
  {
    name: '둘이서 도리탕',
    description: '메인 메뉴 2 + 사이드 1 + 음료 1',
    price: 30900,
  },
  {
    name: '모두가 행복 세트',
    description: '메인 메뉴 4 + 사이드 1 + 음료 2',
    price: 53900,
  },
] as const;
```

### Side Menu Data

```ts
export const SIDE_MENUS = [
  { name: '옥수수전 3조각', price: 4000 },
  { name: '감자채전 3조각', price: 4000 },
  { name: '김치전 3조각', price: 3000 },
  { name: '부추전 3조각', price: 3000 },
  { name: '해물파전 3조각', price: 4000 },
  { name: '깻잎전 3조각', price: 4000 },
  { name: '김말이튀김 5조각', price: 4000 },
  { name: '오징어튀김 3조각', price: 4000 },
  { name: '납작만두 5조각', price: 3000 },
  { name: '튀김오뎅 5조각', price: 3000 },
  { name: '미니계란찜', price: 2500 },
  { name: '날치알주먹밥', price: 4000 },
] as const;
```

### Option Copy

```txt
전 메뉴 닭다리살 변경 가능
추가금 1,900원
```

### Carousel Direction

The user wants a circular carousel.

Preferred implementation:

```txt
Use a visually circular menu carousel if it can be implemented cleanly.
```

Fallback implementation:

```txt
Use a horizontal carousel with circular food cards.
```

Important:

```txt
Do not over-engineer the circular carousel if it hurts mobile UX.
Mobile readability is more important than fancy interaction.
```

---

## Section 12. Contact Us

### Purpose

Convert visitors into franchise inquiries.

### Heading

```txt
심 곱도리탕 창업 문의
```

### Subheading

```txt
상권, 창업 비용, 운영 방식까지
전문 상담을 통해 자세히 안내드립니다.
```

### Form Fields

Use these fields:

```ts
export const CONTACT_FIELDS = [
  '이름',
  '연락처',
  '희망 창업 지역',
  '창업 희망 시기',
  '문의 내용',
] as const;
```

### Required Consent

```txt
개인정보 수집 및 이용에 동의합니다.
```

### CTA Button

```txt
창업 상담 신청하기
```

### Design Direction

```txt
- Use strong final CTA.
- Keep the form short.
- Avoid too many fields.
- Add phone CTA if needed.
- Add sticky mobile CTA button if possible.
```

---

# 7. Visual Style Guide

## Color Palette

Recommended colors:

```txt
Background dark: #0E0907
Deep red: #B91C1C
Hot red: #E11D1D
Warm cream: #FFF3E0
Gold accent: #D6A84F
Text white: #FFFFFF
Muted text: #D6D3D1
Border dark: rgba(255, 255, 255, 0.12)
```

### Color Direction

```txt
- Use dark premium mood as the base.
- Use red and fire tones as accents.
- Use gold only as a premium highlight.
- Avoid bright cheap red.
- Avoid too many colors.
```

---

## Typography

Recommended fonts:

```txt
- Pretendard for body text
- GmarketSans or similar display font for strong headings
```

Typography direction:

```txt
- Use strong Korean headings.
- Use generous line-height.
- Avoid cramped text.
- Use clear hierarchy between heading, subheading, body, disclaimer.
```

---

## Motion Direction

Use motion only where it improves storytelling.

Recommended animations:

```txt
- Hero fade and subtle scale
- Brand story scroll reveal
- Sales number count-up
- Branch carousel marquee
- Profit structure stacked scroll cards
- Menu carousel
- Contact CTA reveal
```

Do not overuse motion.

This is a franchise landing page, not an animation portfolio.

---

# 8. Performance Requirements

This landing page will likely use many images and videos, so performance must be handled from the beginning.

## Video Rules

```txt
- Use .webm for modern browsers.
- Provide .mp4 fallback.
- Use poster image.
- Use muted, autoPlay, loop, playsInline.
- Do not load huge hero video on mobile if unnecessary.
- Consider static image fallback on low-power devices.
```

## Image Rules

```txt
- Use Next.js Image component where possible.
- Use optimized formats: webp or avif.
- Hero bowl image should be priority loaded.
- Lazy-load below-the-fold images.
- Set width and height or aspect-ratio to avoid layout shift.
```

## Animation Rules

```txt
- Animate transform and opacity only where possible.
- Avoid animating layout-heavy properties.
- Respect prefers-reduced-motion.
```

## Bundle Rules

```txt
- Avoid unnecessary heavy libraries.
- If using Recharts, isolate chart components.
- Do not load chart code in the hero section.
- Keep initial render fast.
```

---

# 9. SEO Requirements

Set metadata for the landing page.

Recommended metadata:

```ts
export const metadata = {
  title: '심 곱도리탕 창업 | 프리미엄 곱도리탕 프랜차이즈',
  description:
    '곱도리탕부터 낙곱새까지, 배달 매출에 강한 프리미엄 한식 프랜차이즈 심 곱도리탕 창업 안내.',
  keywords: [
    '곱도리탕 창업',
    '곱도리탕 프랜차이즈',
    '심 곱도리탕',
    '배달 창업',
    '한식 창업',
    '닭도리탕 창업',
    '낙곱새 창업',
  ],
};
```

Recommended H1:

```txt
프리미엄 곱도리탕의 기준, 심 곱도리탕
```

Rules:

```txt
- Use only one H1.
- Use semantic section structure.
- Important text must be real text, not only inside images.
- Use proper alt text for meaningful images.
```

---

# 10. Accessibility Requirements

```txt
- All meaningful images must have alt text.
- Decorative images should use empty alt.
- Buttons must be keyboard accessible.
- Form fields must have labels.
- Text contrast must be readable.
- Do not rely only on color to communicate meaning.
- Motion should not block content understanding.
- Respect prefers-reduced-motion.
```

---

# 11. Copywriting Rules

Use direct, trustworthy, and conversion-oriented Korean copy.

Good copy style:

```txt
심 곱도리탕은 매출부터 다릅니다.
숫자로 확인되는 운영 구조를 제안합니다.
초기 창업 부담을 낮춘 선착순 혜택을 제공합니다.
```

Avoid vague or unsupported copy:

```txt
최고의 맛
압도적인 성공
무조건 대박
누구나 성공
100% 성공 보장
```

Use disclaimers for:

```txt
- Sales data
- Profit data
- Franchise benefits
- Territory protection
```

---

# 12. Shared Constants Recommendation

Create constants instead of hardcoding data inside components.

Recommended files:

```txt
src/shared/constants/sales.ts
src/shared/constants/franchise.ts
src/shared/constants/menu.ts
```

Example:

```ts
export const MONTHLY_SALES = [
  { month: '1월', sales: 120744800 },
  { month: '2월', sales: 100222400 },
  { month: '3월', sales: 108651100 },
] as const;

export const FRANCHISE_BENEFITS = [
  { label: '가맹비', amount: '110만원', benefit: '無' },
  { label: '교육비', amount: '55만원', benefit: '無' },
  { label: '로열티', amount: '22만원', benefit: '無' },
  { label: '계약이행보증금', amount: '200만원', benefit: '無' },
] as const;
```

---

# 13. Implementation Priority

Build in this order:

```txt
1. Base layout and shared section components
2. Hero section
3. Brand story section
4. Sales performance section
5. Franchise growth carousel
6. Profit structure stacked cards
7. Franchise benefits section
8. Cost data chart
9. Territory protection section
10. Opening process section
11. Delivery marketing strategy section
12. Menu introduction carousel
13. Contact form
14. Responsive polish
15. Performance optimization
```

Do not start with the most complex animation.

First build the full content structure.  
Then add motion and visual polish.

---

# 14. Final Landing Page Goal

When a visitor lands on this page, they should understand these points within 30 seconds:

```txt
1. 심 곱도리탕 is a premium 곱도리탕 franchise.
2. It has strong real sales examples.
3. Franchise openings are already happening.
4. The business model is designed for efficient delivery operation.
5. Initial franchise burden is reduced through limited benefits.
6. Territory protection and opening support are provided.
7. Inquiry is easy.
```

The final page should convert franchise prospects.

The purpose is not only to make users think the food looks delicious.

The purpose is to make potential franchise owners think:

```txt
이 브랜드는 지금 문의해볼 만하다.
```
