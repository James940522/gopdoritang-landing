# 심 곱도리탕 SEO 등록 가이드

## 프로젝트에 반영된 SEO 항목

- 기본 메타데이터: title, description, keywords
- Canonical URL
- Open Graph 이미지 2종: `/seo/og-primary.jpg`, `/seo/og-secondary.jpg`
- Twitter summary large image
- Google Search Console 메타 검증
- Naver Search Advisor 메타 검증
- `robots.txt`: `/robots.txt`
- `sitemap.xml`: `/sitemap.xml`
- 웹 앱 manifest: `/manifest.webmanifest`
- JSON-LD 구조화 데이터: Organization, Brand, WebSite
- SEO 설정 확인 API: `/api/seo-verify`

## 배포 환경변수

운영 배포 환경에 아래 값을 설정합니다.

```env
NEXT_PUBLIC_SITE_ORIGIN=https://운영도메인
GOOGLE_SITE_VERIFICATION=구글_서치콘솔_HTML_TAG_CONTENT값
NAVER_SITE_VERIFICATION=네이버_서치어드바이저_HTML_TAG_CONTENT값
```

`NEXT_PUBLIC_SITE_ORIGIN`은 끝에 `/`를 붙이지 않습니다.

좋은 예:

```env
NEXT_PUBLIC_SITE_ORIGIN=https://www.simgopdoritang.com
```

나쁜 예:

```env
NEXT_PUBLIC_SITE_ORIGIN=https://www.simgopdoritang.com/
```

## 배포 후 확인 URL

아래 URL이 정상 응답하는지 확인합니다.

```txt
https://운영도메인/robots.txt
https://운영도메인/sitemap.xml
https://운영도메인/manifest.webmanifest
https://운영도메인/api/seo-verify
```

`/api/seo-verify`는 검증 토큰 값을 직접 노출하지 않고, 환경변수가 세팅됐는지만 보여줍니다.

## Google Search Console 등록 순서

1. Google Search Console에서 사이트 등록
2. 가능하면 `도메인 속성`으로 등록하고 DNS TXT로 소유권 확인
3. URL Prefix 방식으로 등록한다면 HTML 태그 방식 선택
4. `content="..."` 안의 값만 `GOOGLE_SITE_VERIFICATION`에 입력
5. 배포 후 소유권 확인
6. Sitemap 메뉴에서 `https://운영도메인/sitemap.xml` 제출
7. URL 검사에서 홈 URL 색인 요청

## Naver Search Advisor 등록 순서

1. Naver Search Advisor에서 사이트 등록
2. HTML 태그 방식 선택
3. `content="..."` 안의 값만 `NAVER_SITE_VERIFICATION`에 입력
4. 배포 후 소유 확인
5. 요청 메뉴에서 `robots.txt` 확인
6. Sitemap 제출: `https://운영도메인/sitemap.xml`
7. 웹 페이지 수집에서 홈 URL 수집 요청

## 주의사항

- 운영 도메인은 `www` 사용 여부를 하나로 고정합니다.
- `www`와 루트 도메인을 둘 다 열어둘 경우 하나로 301 리다이렉트합니다.
- Google/Naver 등록 전에는 실제 운영 도메인과 `NEXT_PUBLIC_SITE_ORIGIN`이 반드시 일치해야 합니다.
- Preview 배포에서는 자동으로 noindex 처리됩니다.
