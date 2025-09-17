# 9월 17일 강의내용
### 1교시  
## 3장

03. Layouts and Pages

Next.js는 파일 시스템 기반 라우팅(File-system based routing) 을 사용합니다.
즉, 폴더와 파일 구조를 통해 경로(Route)를 정의할 수 있습니다.

이번 장에서는 다음 내용을 다룹니다:
* 레이아웃(Layout): 공통 UI 구조(헤더, 푸터, 사이드바 등)를 정의하는 방법
* 페이지(Page): 각 경로에 대응되는 콘텐츠를 구현하는 방법
*	연결 방법: 레이아웃과 페이지를 서로 연결하여 일관성 있는 화면을 구성하는 방법

⸻

👉 핵심 포인트
1.	app/ 또는 pages/ 디렉토리 안의 파일이 곧 라우트(route) 가 된다.
*	예: pages/about.js → /about 경로
*	예: app/dashboard/page.js → /dashboard 경로
2.	레이아웃은 여러 페이지에서 공유되는 UI를 정의한다.
* 예: app/layout.js → 전체 앱의 공통 레이아웃
*	예: app/dashboard/layout.js → /dashboard 하위 페이지들의 공통 레이아웃
3.	페이지와 레이아웃 연결
*	각 페이지(page.js)는 해당 폴더의 layout.js를 감싸는 구조로 렌더링된다.
*	따라서 재사용 가능한 UI를 손쉽게 구성할 수 있다.

✍️ 간단한 예시
~~~tsx
// app/layout.js (전체 레이아웃)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>공통 헤더</header>
        <main>{children}</main>
        <footer>공통 푸터</footer>
      </body>
    </html>
  )
}
~~~
~~~tsx
// app/page.js (메인 페이지)
export default function HomePage() {
  return <h1>홈페이지</h1>
}
~~~  
1. Creating a page(페이지 만들기)
    * Next.js는 파일 시스템 기반 라우팅을 사용하기 때문에 폴더와 파일을 사용하여 경로를 정의할 수 있습니다.
    * 이번 장에서는 레이아웃과 페이지를 만들고 서로 연결하는 방법을 설명합니다.
    * page는 특정 경로에서 렌더링되는 UI입니다.
    * page를 생성하려면 app 디렉터리에 page파일을 추가하고, React 컴포넌트를 default export합니다. 예를 들어, 인덱스 page(/)를 생성하려면 다음과 같이 합니다.
#### 2장에서 이미 학습한 내용이지만 다시 한 번 작성해 보세요.
2. Creating a layout(레이아웃 만들기)
    * Layout은 여러 페이지에서 공유 되는 UI입니다.
    * layout은 네비게이션에서 state 및 상호작용을 유지하며, 다시 렌더링 되지는 않습니다.
    * layout 파일에서 React 컴포넌트의 default export를 사용하여 Layout을 정의할 수 있 습니다.
    * layout 컴포넌트는 page 또는 다른 니다.

~~~tsx
<Layout>
<Page/>
</Layout>

<Layout>
<AnotherLayout>
<Page/>
</AnotherLayout>
</Layout>  
~~~
* children은 컴포넌트 안에 감싸진 요소(컴포넌트)를 의미합니다.
* 다음 코드에서 〈page/>는 <Layout/>컴포넌트의 Children입니다.
* layout 컴포넌트를 만들 때 그 안에 들어갈 콘텐츠(children)를 받을 수 있게 해야 하 고, 그 컨텐츠는 page또는 Layout 컴포넌트가 될 수도 있다는 의미 입니다.

3. Creating a nested route(중첩 라우트 만들기)
* 중첩 라우트는 다중 URL 세그먼트로 구성된 라우트입니다.
* 예를 들어, /bLog/[slug]경로는 세 개의 세그먼트로 구성됩니다.
- / (Root Segment)
- blog (Segment)
- [slug] (Leaf Segment)

[ Next.js에서 ]
* 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 정의하는데 사용됩니다.
  #### 즉 폴더가 URL 세그먼트가 된다는 의미 입니다.
* 파일(예: page 및 layout)은 세그먼트에 표시되는 UI를 만드는 데 사용됩니다.
* 폴더를 중첩하면 중첩된 라우트를 만들 수 있습니다.

3. Creating a nested route(중첩 라우트 만들기)
    * 폴더를 계속 중첩하여 중첩된 경로를 만들 수 있습니다.
    * 예를 들어 특정 블로그 게시물에 대한 경로를 만들려면 blog 안에 새 [slug] 폴더를 만 들고 page 파일을 추가합니다.
    * 폴더 이름을 대괄호(예: [slug])로 묶으면 데이터에서 여러 페이지를 생성하는데 사용 되는 동적 경로 세그먼트가 생성됩니다. 예: 블로그 게시물, 제품 페이지 등.

## [slug]의 이해
#### slug는 사이트의 특정 페이지를 쉽게 읽을 수 있는 형태로 식별하는 URL의 일부입니다.
  * 신문이나 잡지 등에서 핵심 의미를 포함하는 단어만을 조합해 간단 명료하게 제목을 작성하는 것을 슬러그라고 하는 것에서 유래 하였습니다.
#### 문서의 경로 /bLog/[slug]의 [slug] 부분은 불러올 데이터의 key를 말합니다.
#### 따라서 데이터에는 Slug key가 반드시 있어야 합니다.

~~~tsx
// dummy data

export const posts = [
{ slug: "nextis", title: "Next.js 소개", content: "Next.js는 React 기반의 풀스택 프레임워크입니다." },
{ slug: "routing", title: "App Router 알아보기", content: "Next,js 13부터는 App Router가 도입되었습니다." },
{ slug: "ssr-ssg", titLe: "SSR VS SS6", content: "서버사이드 렌더링과 정적 사이트 생성의 차이를 알아봅니다." },
{ slug: "dynamic-routes", title: "동적 라우팅", content: "Next.js에서 [slug]를 활용한 라우팅 방식입니다." },
];
~~~
#### 예를 들어 첫 번째 데이터를 호출하는 경우라면 /blog/nextis 라고 호출합니다.
#### 먼저 더미 데이터를 만들고 실습을 해보도록 하겠습니다.
#### [slug]는 반드시 Slug일 필요는 없습니다. 단, [foo]라고 했다면 데이터에 반드시 f00 key(필드)가 있어야 합니다.




# 9월 10일 강의내용
### 1교시  
## 2장  
1. Project structure and organization
* 프로젝트의 구조 및 구성
  * 이번 장에서는 Next.js 프로젝트의 폴더 및 파일 규칙에 대한 개요와 프로젝트를 구성하는 권장 사항에 관하여 설명합니다.
# 용어 정의
* 이 장부터 이후에 사용될 몇가지 용어에 대한 설명입니다.
* 원문에는 route라는 단어가 자주 등장하고, 사전적 의미로는 "경로"입니다.
* route(라우트)는 경로"를 의미하고, routing(라우팅)은 경로를 찾아가는 과정"을 의미합니다.
* 그런데 path도 "경로"로 번역하기 때문에의 구별을 위해 대부분 routing(라우팅)으로 번역했습니 다.
* directory와 folder는 특별한 구분 없이 나옵니다.
* 최상위 폴더의 경우 directory로 하위 폴더는 folder로 쓰는 경우가 많지만 꼭 그렇지는 않습니다.
* directory와 folder는 OS에 따라 구분되는 용어이기 때문에 같은 의미로 이해하면 됩니다.
segment는 routing과 관련이 있는 directory의 별칭 정도로 이해하면 됩니다.
# 📂 Next.js 프로젝트 구조 및 구성

## 개요
Next.js는 **파일 시스템 기반 라우팅(File-based Routing)**을 사용하기 때문에 폴더와 파일 구조가 곧 애플리케이션의 동작과 직결됩니다.  
이번 문서에서는 Next.js 프로젝트에서 자주 사용되는 폴더와 파일 규칙, 그리고 권장되는 구조에 대해 설명합니다.

---

## 기본 디렉터리 구조
```
my-next-app/
├── app/ or pages/       # 라우팅 디렉터리 (Next.js 13 이상은 app 권장)
├── components/          # 재사용 가능한 UI 컴포넌트
├── public/              # 정적 파일(이미지, 폰트, 아이콘 등)
├── styles/              # 전역 및 모듈 스타일(CSS, SCSS, Tailwind 등)
├── lib/                 # 유틸리티 함수, API 클라이언트, 헬퍼 함수
├── hooks/               # 커스텀 React 훅
├── context/             # 전역 상태 관리(Context API 등)
├── middleware.ts        # 요청 전 처리 로직
├── next.config.js       # Next.js 환경설정
├── package.json
└── tsconfig.json        # (TypeScript 프로젝트일 경우)
```
---

## 주요 디렉터리 설명

### ✅ `app/` (Next.js 13 이상, App Router)
- 최신 Next.js에서 권장되는 구조.
- 서버 컴포넌트(Server Components)와 클라이언트 컴포넌트(Client Components) 혼합 가능.
- 라우팅은 각 폴더와 예약 파일을 기반으로 이루어짐.

**예약 파일**
- `page.tsx` → 라우트 페이지
- `layout.tsx` → 하위 라우트 공통 레이아웃
- `loading.tsx` → 로딩 UI
- `error.tsx` → 에러 UI
- `not-found.tsx` → 404 페이지
- `route.ts` → API 라우트

**예시**
```
app/
├── dashboard/
│    ├── page.tsx
│    ├── layout.tsx
│    └── settings/
│         └── page.tsx
├── layout.tsx
└── page.tsx
```

---

### ✅ `pages/` (기존 Router 방식)
- `pages` 디렉터리에 있는 파일 = 라우트
- `pages/api/` 안의 파일 = API 엔드포인트
- 특별한 예약 파일:
  - `_app.tsx` → 앱 전역 설정
  - `_document.tsx` → HTML 문서 구조

---

### ✅ `components/`
- 재사용 가능한 UI 단위 저장소  
- 예: `Button.tsx`, `Navbar.tsx`, `Footer.tsx`

---

### ✅ `public/`
- 정적 자산(이미지, 폰트, 아이콘 등) 저장  
- `/public/logo.png` → `http://localhost:3000/logo.png`

---

### ✅ `styles/`
- 전역 및 모듈 스타일 관리  
- `globals.css` → 전역 스타일  
- `Button.module.css` → 특정 컴포넌트 전용 스타일  

---

### ✅ `lib/`
- DB 연결, API 호출, 헬퍼 함수 등  
- 예: `lib/api.ts`, `lib/db.ts`

---

### ✅ `hooks/`
- 커스텀 React 훅 모음  
- 예: `useAuth.ts`, `useDarkMode.ts`

---

### ✅ `context/`
- 전역 상태 관리 (React Context API 등)

---

### ✅ `middleware.ts`
- 요청(Request) 단계에서 실행되는 코드 정의  
- 예: 인증 체크, 리다이렉트 처리  

---

## App Router vs Pages Router 비교

| 항목 | App Router (`app/`) | Pages Router (`pages/`) |
|------|---------------------|--------------------------|
| 도입 버전 | Next.js 13 이상 | Next.js 12 이하 (기존) |
| 렌더링 방식 | 기본 Server Component | 기본 Client Component |
| 라우팅 | 폴더 + 예약 파일 기반 | 파일명 기반 |
| 레이아웃 | `layout.tsx` 지원 (중첩 가능) | `_app.tsx` 사용 (전역) |
| API | `app/api/route.ts` | `pages/api/*.ts` |
| 권장 여부 | ✅ 권장 (미래 지향) | ⚠️ 신규 프로젝트에서는 비권장 |

---

## 권장 사항
1. **일관성 유지**  
   → 디렉터리 네이밍 규칙을 팀 내에서 통일합니다.
2. **관심사 분리**  
   → 컴포넌트, 훅, API 로직, 스타일을 명확히 구분합니다.
3. **모듈화**  
   → 재사용 가능한 단위로 분리하여 유지보수를 쉽게 합니다.
4. **App Router 권장**  
   → 신규 프로젝트에서는 `app/` 디렉터리 구조 사용을 권장합니다.

---  

# 📂 Folder and File Conventions (폴더 및 파일 규칙)

## 개요
Next.js는 **파일 시스템 기반 라우팅**을 사용하기 때문에, 폴더와 파일의 이름과 배치가 매우 중요합니다.  
이 문서에서는 Next.js에서 자주 사용되는 **예약 폴더/파일**과 **권장 네이밍 규칙**을 정리합니다.

---

## 1. 예약 디렉터리

| 디렉터리 | 설명 |
|----------|------|
| `app/` | Next.js 13 이상에서 사용하는 App Router 디렉터리. 페이지, 레이아웃, 로딩 UI 등을 정의. |
| `pages/` | 기존 Pages Router 디렉터리. 각 파일이 라우트가 됨. `pages/api/`는 API 라우트로 사용. |
| `public/` | 정적 파일(이미지, 폰트, 아이콘 등)을 저장. `/public` 하위 파일은 도메인 루트 경로에서 접근 가능. |
| `styles/` | 전역 및 모듈 CSS/SCSS, Tailwind 설정 파일 저장. |
| `components/` | 재사용 가능한 UI 컴포넌트 모음. |
| `lib/` | API 호출, DB 연결, 헬퍼 함수 등 비즈니스 로직 모음. |
| `hooks/` | 커스텀 React 훅 모음. |
| `context/` | 전역 상태 관리(Context API 등). |
| `api/` (App Router) | `app/api/route.ts` 형태로 API 라우트 정의. |

---

## 2. 예약 파일 (App Router 기준)

| 파일명 | 설명 |
|--------|------|
| `page.tsx` | 라우트에 해당하는 페이지 컴포넌트. |
| `layout.tsx` | 하위 라우트에 공통 적용되는 레이아웃. |
| `loading.tsx` | 라우트 전환 시 로딩 UI. |
| `error.tsx` | 특정 라우트에서 발생한 에러 처리 UI. |
| `not-found.tsx` | 404 Not Found 페이지. |
| `route.ts` | API 라우트 핸들러. (`GET`, `POST` 등 정의 가능) |
| `middleware.ts` | 라우트 진입 전 실행되는 미들웨어. (인증, 리다이렉트 등) |
| `_app.tsx` (Pages Router) | 앱 전역 레이아웃 및 상태 관리 정의. |
| `_document.tsx` (Pages Router) | HTML 문서 구조를 커스터마이징. |

---

## 3. 파일 네이밍 규칙

1. **컴포넌트 파일**  
   - PascalCase 권장 (예: `Navbar.tsx`, `UserCard.tsx`)
2. **훅 파일**  
   - `use` 접두사 사용 (예: `useAuth.ts`, `useDarkMode.ts`)
3. **스타일 파일**  
   - CSS 모듈: `ComponentName.module.css`  
   - 전역 CSS: `globals.css`
4. **유틸/라이브러리 파일**  
   - camelCase 또는 kebab-case 권장 (예: `fetchData.ts`, `format-date.ts`)
5. **폴더명**  
   - 소문자 및 kebab-case 권장 (예: `user-profile/`, `dashboard-settings/`)

---

## 4. 예시 구조
```
my-next-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── loading.tsx
│   └── api/
│       └── route.ts
├── components/
│   ├── Navbar.tsx
│   └── UserCard.tsx
├── hooks/
│   └── useAuth.ts
├── lib/
│   └── fetchData.ts
├── public/
│   └── logo.png
├── styles/
│   ├── globals.css
│   └── Button.module.css
├── middleware.ts
└── next.config.js
```
---
## 5. 권장 사항

- **의미 있는 네이밍** → 파일명과 폴더명이 기능을 잘 설명하도록 작성합니다.  
- **관심사 분리** → UI(`components/`), 로직(`lib/`), 상태(`context/`)를 구분합니다.  
- **일관성 유지** → 팀 내에서 네이밍 규칙과 구조를 표준화합니다.  
- **예약 파일은 반드시 규칙 준수** → 오탈자 시 라우팅이나 기능이 정상 동작하지 않을 수 있습니다.  

---
# 🌐 Routing in Next.js (라우팅)

## 개요
Next.js는 **파일 시스템 기반 라우팅(File-based Routing)**을 사용합니다.  
즉, 프로젝트의 디렉터리와 파일 구조가 곧 애플리케이션의 URL 구조가 됩니다.  

Next.js에는 두 가지 라우팅 방식이 있습니다:
1. **Pages Router** (기존 방식, `pages/` 디렉터리 사용)
2. **App Router** (Next.js 13 이상 권장, `app/` 디렉터리 사용)

---

## 1. Pages Router (기존 방식)

### 라우팅 규칙
- `pages/` 디렉터리 안의 파일 → URL 경로가 됨.
- `pages/index.tsx` → `/`
- `pages/about.tsx` → `/about`
- `pages/blog/[id].tsx` → `/blog/1`, `/blog/2` (동적 라우팅)

### 예약 파일
- `_app.tsx` → 모든 페이지에 공통 적용되는 컴포넌트 (전역 레이아웃, 상태 관리 등)
- `_document.tsx` → HTML 문서 구조 커스터마이징
- `pages/api/` → API 라우트 정의 (`/api/hello` 등)

### 예시  
```
pages/
├── index.tsx        → “/”
├── about.tsx        → “/about”
├── blog/
│    └── [id].tsx    → “/blog/1”
└── api/
└── hello.ts    → “/api/hello”
```  
---

## 2. App Router (Next.js 13 이상, 권장)

### 라우팅 규칙
- `app/` 디렉터리의 **폴더가 라우트**를 의미.
- 각 폴더 안의 **`page.tsx`** 파일이 해당 경로의 페이지로 렌더링됨.
- 중첩 라우트(Nested Route), 동적 라우트(Dynamic Route), 레이아웃(Layout) 등을 지원.

### 예약 파일
- `page.tsx` → 해당 경로의 페이지
- `layout.tsx` → 하위 경로에 공통 적용되는 레이아웃
- `loading.tsx` → 로딩 UI
- `error.tsx` → 에러 UI
- `not-found.tsx` → 404 페이지
- `route.ts` → API 라우트

### 동적 라우팅
- `[id]` 폴더 사용 → `app/blog/[id]/page.tsx` → `/blog/1`, `/blog/2`

### 예시
```
pp/
├── page.tsx            → “/”
├── about/
│    └── page.tsx       → “/about”
├── blog/
│    ├── page.tsx       → “/blog”
│    └── [id]/
│         └── page.tsx  → “/blog/1”, “/blog/2”
├── dashboard/
│    ├── layout.tsx     → 대시보드 공통 레이아웃
│    ├── page.tsx       → “/dashboard”
│    └── settings/
│         └── page.tsx  → “/dashboard/settings”
└── api/
└── route.ts       → “/api”
```  
---
---

## 3. 라우팅 비교 (App Router vs Pages Router)

| 항목 | App Router (`app/`) | Pages Router (`pages/`) |
|------|---------------------|--------------------------|
| 도입 버전 | Next.js 13 이상 | Next.js 12 이하 |
| 라우트 정의 | 폴더 + 예약 파일 기반 | 파일명 기반 |
| 동적 라우팅 | `[id]` 폴더 | `[id].tsx` 파일 |
| 중첩 라우팅 | `layout.tsx`로 지원 | 불가능 (전역 `_app.tsx`만 존재) |
| API 라우트 | `app/api/route.ts` | `pages/api/*.ts` |
| 로딩 상태 | `loading.tsx` | 직접 구현 필요 |
| 권장 여부 | ✅ 권장 | ⚠️ 신규 프로젝트 비권장 |

---

## 4. 링크 이동 (Navigation)

- Next.js는 **`<Link>` 컴포넌트**를 사용해 클라이언트 측 라우팅을 지원합니다.
- 페이지 전환 시 전체 새로고침 없이 빠르게 이동 가능.

### 예시
```tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <Link href="/about">About 페이지로 이동</Link>
    </div>
  );
}
```
## Open Graph Protocol
* 웹사이트나 페이스북, 인스타그램, X (트위터), 카카오톡 등에 링크를 전달할 때 '미리보기' 를 생성하는 프로토콜 입니다.
* Open Graph Protocol이 대표적인 프로토콜 입니다.
* 페이스북이 주도하는 표준화 규칙으로 대부분의 SNS 플랫폼에서 활용되고 있습니다.
* 모든 플랫폼이 동일한 방식으로 오픈 그래프를 처리하는 것은 아닙니다.
* 웹페이지의 메타 태그에 선언 합니다.
```jsx
<head>
‹meta property="og: type" content="website"›
‹meta property="og:url" content="https://example.com/page.html*>
〈meta property="og: title" content="페이지 제목">
〈meta property="og:description" content="페이지 설명 요약">
‹ meta property="og: image" content-"https://example.com/image.jpg">
〈meta property="0g: site_name" content="사이트 이름">
‹meta property="og:locale" content="ko_KR">
</head>
```
## Organizing your project(프로젝트 구성하기)
* Next.js는 프로젝트 파일을 어떻게 구성하고 어디에 배치할지에 대한제약이 없습니다.
* 하지만 프로젝트 구성에 도움이 되는 몇 가지 기능을 제공합니다.
### [ component의 계층 구조 ] Component hierarchy
* 특수 파일에 정의된 component는 특정 계층 구조로 렌더링 됩니다.

2. Organizing your project(프로젝트 구성하기)
*  app 디렉토리의 파일은 기본적으로 안전하게 코로케이션 될 수 있으므로, 코로케이션에 비공개 폴더는 불필요 합니다. 하지만 다음과 같은 경우에는 유용할 수 있습니다.  
✓ UI 로직과 라우팅 로직을 분리합니다.  
✓ 프로젝트와 Nextjs 생태계 전반에서 내부 파일을 일관되게 구성합니다.  
✓ 코드 편집기에서 파일을 정렬하고 그룹화합니다.  
✓ 향후 Nextjs 파일 규칙과 관련된 잠재적인 이름 충돌을 방지합니다.  
*  알아두면 좋은 정보 : 
  - 프레임워크 규칙은 아니지만, 동일한 밑줄 패턴을 사용하여 비공개 폴더 외부의 파일을" 비공개"로 표시하는 것도 고려할 수 있습니다.
  - 폴더 이름 앞에 %5F(밑줄로 URL 인코딩된 형태)를 접두사로 붙여 밑줄로 시작하는 URL
세그먼트를 만들 수 있습니다. %5FfolderName # 아스키 코드의 URL-encoding
  - 비공개 폴더를 사용하지 않는 경우, 예상치 못한 이름 충돌을 방지하기 위해 Nextjs의 특 수 파일 규칙을 아는 것이 좋습니다.  







# 9월 3일 강의내용
## 1교시  
### Installation
[IDE플러그인]
• Nextjs에는 사용자 정의 TypeScript 플러그인과 유형 검사기가 포함되어 있습니다.
• VS Code와 다른 코드 편집기에서 고급 유형 검사 및 자동 완성에 사용할 수 있습니다.
    #다음 작업을 하기 전에 TypeScript reference를 참고해서, next.config.js를 먼저 작성합니다.

• VS Code에서 플러그인을 활성화하는 방법은 다음과 같습니다.
1. 명령 팔레트 열기 (Ctrl/36+Shift+P)
2. "TypeScript: TypeScript 버전 선택 검색
3. "Use Workspace Version 선택

<img width="413" height="71" alt="Image" src="https://github.com/user-attachments/assets/86cc9f97-7207-47bd-bb01-6d8e04d27404" />  

### Installation
6. ESLint 설정
- Nextjs에는 ESLint가 내장되어 있습니다.
- create-next-app 명령을 사용하여 새 프로젝트를 생성하면 필요한 패키지를 자동으로 설치 하고, 적절한 설정을 구성합니다.
- 기존 프로젝트에 ESLint를 수동으로 추가하려면 package.json에 next lint 스크립트를 다음 과 같이 추가합니다.
``` json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```
다음으로 npm run lint 형을 실행하면 설치 및 구성 과정에 대한 안내를 확인할 수 있습니다.  

### Installation
- 다음과 같은 메시지가 표시됩니다.  

<img width="156" height="58" alt="Image" src="https://github.com/user-attachments/assets/ee5414e7-d4b0-49c9-b501-b54f2aa93d4e" />  

- Strict: Nextjs의 기본 ESLint 구성과 더욱 엄격한 Core Web Vitals 규칙 세트를 포함합니다. ESLint를 처음 설정하는 개발자에게 권장되는 구성입니다.
- BaseNext.js의 기본 ESLint 구성을 포함합니다.
- Cancel: 구성을 건너뀝니다. 사용자 지정 ESLint 구성을 설정하려면 이 옵션을 선택하세 요.
- Strict 또는 Base 중 하나가 선택되면, Next.js는 자동으로 eslint와 eslint-config-next를 애플 리케이션의 의존성으로 설치합니다.
- 또한 선택한 설정을 포함하는 eslintrcjson 파일을 프로젝트 루트 디렉토리에 생성합니다. 
- 이제 [next lint]를 실행할 때마다 ESLint가 실행되어 오류를 찾아 냅니다.

### Installation
7. import 및 모듈의 절대 경로 별칭 설정
- Next.js에는 tsconfig.json 및 jsconfig.json 파일의 "paths" 및 "baseUrl" 옵션에 대한 지원을
내장하고 있습니다.
- 이 옵션을 사용하면 프로젝트 디렉터리를 절대 경로로 별칭 하여 모듈을 더 쉽고 깔끔하게 가져올 수 있습니다.
```
// Before
import (Button) from '../../../components/button
// After
import (Button) from '@/components/button
```
- 별칭으로 import를 구성하려면 tsconfig.json 또는 jsconfig.json 파일의 baseUrl에 구성 옵 션을 추가하세요.  
``` json
{
  "compilerOptions": {
    "baseUrl": "src/"
  }
}
```  

### Installation
- 경로를 구성하는 것 외에도 모듈 경로 옵션을 baseUrl 사용할 수 있습니다 ."paths""alias"

- 예를 들어, 다음 구성은 @/components/*다음에 매핑됩니다 components/*.

``` json
{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
}
```
- "paths"의 각 항목은 baseUrl의 경로에 타라 상대적입니다.

### 자동 생성되는 항목
#### 강의에서는 프로젝트를 자동으로 생성해서 사용합니다.
#### 다음은 프로젝트를 자동 생성할 때 자동으로 생성되는 항목입니다.
* package.json 파일에 scripts 자동 추가 / public 디렉토리
* TypeScript 사용(선택) : tsconfig json 파일 생성
* Eslint 설정 (선택) : eslintrcjson 대신
* eslint.config.mis 파일 생성
* Tailwind CSS 사용 (선택)
* SrC 디렉토리 사용 (선택)
* App Router(선택), app/layout tsx 파일 및 app/page.tsx
* Turbopack 사용(선택)
* import alias 사용 (선택) : tsconfigjson에 "paths" 자동 생성.
* 수동으로 프로젝트를 생성할 때 추가적으로 해야 하는 작업을 자동으로 처리해 줍니다  

# Core Web Vitals
* LCP(Largest Contentful Paint) : 뷰포트 내에서 가장 큰 페이지 요소(큰 텍스트 블록, 이미 지 또는 비디오)를 표시하는 데 걸리는 시간.
* 뷰포트 : 웹페이지 사용자가 별도의 스크롤 동작 없이 볼 수 있는 영역.
* FID(First Input Delay) : 사용자가 웹페이지와 상호작용을 시도하는 첫 번째 순간부터 웹페 이지가 응답하는 시간.
* CLS(Cumulative Layout Shift) : 방문자에게 콘텐츠가 얼마나 불안정한 지 측정한 값입니다.
페이지에서 갑자기 발생하는 레이아웃의 변경이 얼마나 일어나는지를 측정합니다.
##### 즉, 레이아웃 이동(layout shift) 빈도를 측정 합니다.  

## 실습에 사용할 프로젝트를 생성합니다.
* 공식 문서에는 기본 패키지 관리자를 pnpm을 사용합니다.
* 원하는 패키지 관리자 탭을 클릭하면 명령을 확인할 수 있습니다.
* 다음 명령으로 프로젝트를 생성합니다.
* 명령을 실행하면 다음과 같은 8개의 선택 항목이 나옵니다.

1. 프로젝트 이름을 입력합니다.
2.  ~ 4. TypeScript, ESLint, Tailwind를 사용할지 선택합니다.
5. src/ 디렉토리를 사용할지 선택합니다.
6. App Router를 사용할지 선택합니다.
7. import alias를 사용할지 선택합니다.
8. alias 문자를 지정합니다. 기본은 @/* 입니다.  

## eslintrc,json vs eslint.config.mjs
* JsON은 주석, 변수, 조건문 등을 쓸 수 없기 때문에 복잡한 설정이 어렵습니다.
(JavaScript Object Notation)
* mis는 ESLint가 새롭게 도입한 방식으로, ESM(ECMAScript 모듈) 형식입니다.
* 확장자 .mjs는 "module JavaScript"를 의미합니다.
* ESLint v9 이상에서 공식 권장 방식입니다.
* 조건문, 변수, 동적 로딩 등 코드처럼 유연한 설정이 가능합니다.
* 다른 설정 파일을 import 해서 재사용을 할 수 있습니다.
* 프로젝트 규모가 커질수록 유지보수에 유리합니다.

# Next.js? eslint.config.mjs
* Nextjs 14 이후로는 ESLint 9와의 호환성을 고려해 최신 권장 방식인 eslint.config.mis 를 사용하는 쪽으로 전환되고 있습니다.
* .eslintrcjson도 여전히 지원되므로, 필요한 경우 수동으로 만들거나 마이그레이션해서 사 용할 수 있습니다.
* 마이그레이션 도구는 아직 공식적으로 제공되지는 않지만, 직접 옮기려면 다음처럼 하면 됩니다.
```jsx
json
// ,eslintrc.json
{
"extends": "next",
"rules": {
"no-console": "warn"
  }
}
```  
```jsx
// eslint.config.mjs
import next from 'eslint-config-next';
export default [ next(),
{
rules: {
'no-console': 'warn',
  }，
},
];
```  

## alias 문자 및 경로
* alias 문자를 선택하면 tsconfia.ison에 등록됩니다.
* 기본값은 선택하면 ./src/를 @으로 대신합니다.
* 즉 ./src/*는 @/*로 사용할 수 있습니다.
* 생성된 프로젝트의 서버의 실행 : $ npm run dev


## pnpm
* pnpm은 Performant(효율적인) NPM의 약자로 고성능 Node 패키지 매니저입니다.
* npm, yarn과 같은 목적의 패키지 관리자이지만, 디스크 공간 낭비, 복잡한 의존성 관리, 느 린 설치 속도 문제 개선을 위해 개발되었습니다.
* 대표적인 특징은 다음과 같습니다.
1. 하드 링크(Hard Link) 기반의 효율적인 저장 공간 사용 : 패키지를 한 번만 설치하여 글로벌 저장소에 저장하고, 각 프로젝트의 node modules 디 렉토리에는 설치된 패키지에 대한 하드 링크(또는 심볼릭 링크)가 생성됩니다.
2. 빠른 패키지 설치 속도(Performant) : 이미 설치된 패키지는 다시 다운로드하지 않고 재사 용하므로, 초기 설치뿐만 아니라 종속성 설치 및 업데이트 할 때도 더 빠른 속도를 경험할 수 있습니다.
3. 엄격하고 효율적인 종속성 관리
4. 다른 패키지 매니저의 비효율성 개선

# pnpm 설치 및 기본 명령어
* pnpm 글로벌 설치 : $ npm install -g pnpm
```jsx
$ npm i -g pnpm
added 1 package in 4s
1 package is looking for funding run "npm fund for details npm notice
npm notice New minor version of pm available! 11.4.2 -> 11.5.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.2
npm notice To update run: npm install -9 npm@11.5.2 npm notice
```  
## [ 많이 사용하는 명령어 ]
• Node module 설치(clone 한 경우) : $ pnpm install
• 새로운 패키지 설치 : $ pnpm add [package]
• 패키지 제거 : $ pnpm remove [package]
• 종속성을 최신 버전으로 업데이트 : $ pnpm update
• 프로젝트에 설치된 모든 패키지를 표시 : $ pnpm list

## pnpm으로 React 프로젝트 생성 :• Nextjs에 비해서 react는 pnpm 도입에 소극적입니다.
* 따라서 다음 명령 중 1번 명령을 실행해도 npx create-react-app my-app와 동일하게 생성 됩니다.
* 따라서 무엇으로 프로젝트를 생성하던 node modules과 package-lockjson을 삭제하고, 4 번 명령으로 node modules을 다시 설치해야 합니다.
1. $ popm create react-app my-app
2. $ cd my-app
3. $ rm -rf node_modules package-lock json
4. $ pnpm install
5. 서버 실행 : $ pnpm dev

## Hard link vs. Symbolic link(Soft link)
#### pnpm의 특징 중에 하드 링크를 사용해서 디스크 공간을 효율적으로 사용할 수 있다고 합 니다. 탐색기에서 npm과 pnpm 프로젝트의 node module의 용량을 확인해 보세요.
#### 왜 효율적이라 한 것일까요?
## 하드 링크(Hard link)
* 우리가 "파일"이라고 부르는 것은 두 부분으로 나뉘어 있습니다.
1. Directory Entry : 파일 이름과 해당 inode 번호를 매핑 정보가 있는 특수한 파일.
2. inode : 파일 또는 디렉토리에 대한 모든 메타데이터를 저장하는 구조체.
(권한, 소유자, 크기, 데이터 블록 위치 등)

## Hard link vs. Symbolic link(Soft link)
### 하드 링크(Hard link)
* 하드링크를 생성하면 디렉토리 엔트리에 매핑 정보가 추가 되어 동일한 inode를 가리키게 됩니다.
* 따라서 원본과 하드링크는 완전히 동일한 파일입니다.
* 원본과 사본(copy)의 개념이 아닙니다

# Hard link vs. Symbolic link(Soft link)
* 디렉토리 엔트리에 있는 원본과 하드링크는 같은 inode를 참조하므로 데이터 블록을 100% 공유합니다.
* 따라서 원본이나 하드링크 중에서 하나만 삭제하면 디렌토리 엔트리에서 이름만 삭제되는 것이라서 link count가 0이 되지 않는 한 데이터는 남아 있습니다.
* pnpm store에 저장된 패키지나, node modules/ pnpm에 저장된 패키지나 동일한 파일을 참조하고 있습니다.
* 그런데 탐색기에서 node modules의 속성을 보면 npm의 경우와 디스크용량이 같아 보입 니다.
* 이 것은 하드링크는 겉으로는 복사한 것처럼 보이는 특징을 가지고 있기 때문입니다.
pnpm으로 패키지를 설치하면 전역 store에 1번만 저장합니다.
(C:#Users/<user>/AppDataw/Local/pnpm-store/)
* 따라서 실제 디스크 사용량은 중복되지 않습니다.

## Hard link vs. Symbolic link(Soft link)
### 심볼릭 링크 (소프트 링크)
* inode를 공유하지 않고 경로 문자열을 저장해 두는 특수 파일입니다.
* 따라서 심볼릭 링크를 열면 내부에 적힌 "경로"를 따라가서 원본 파일을 찾습니다.
* 원본이 삭제되면 심볼릭 링크는 끊어진 경로가 되므로 더 이상 사용할 수 없습니다.
* 윈도우의 바로 가기 파일과 비슷하게 생각할 수 있습니다.





## 8월 27일 1주차 수업내용
ot 진행
윈도우 파워쉘 choco 명령어로 깃 노드 설치
# React 프로젝트

## 📌 React란?

React는 Facebook에서 개발한 **사용자 인터페이스(UI) 구축용 JavaScript 라이브러리**입니다.  
컴포넌트 기반 아키텍처, 가상 DOM, 선언적 프로그래밍, 단방향 데이터 흐름을 통해 효율적이고 유지보수하기 쉬운 웹 애플리케이션 개발을 지원합니다.

### 주요 특징
1. **컴포넌트 기반 구조**  
   - UI를 작은 단위인 컴포넌트로 나누어 재사용성과 유지보수성을 높입니다.  
   - 각 컴포넌트는 자체 상태(state)와 속성(props)을 가질 수 있습니다.

2. **가상 DOM(Virtual DOM)**  
   - 실제 DOM 대신 가상 DOM에서 변경 사항을 계산하고, 최소한의 업데이트만 수행하여 성능 최적화가 가능합니다.

3. **선언적 프로그래밍(Declarative)**  
   - "어떻게"보다는 "무엇을" 표시할지 선언적으로 작성하여 코드가 간결하고 예측 가능해집니다.

4. **단방향 데이터 흐름**  
   - 부모 → 자식으로 props 전달 구조로 데이터 흐름이 명확하며 디버깅이 쉽습니다.

---

## ⚙️ Installation

React 프로젝트를 설치하고 시작하는 과정은 여러 단계로 구성됩니다. 여기서는 **초보자도 바로 따라할 수 있는 상세 가이드**를 제공합니다.

### 1. Node.js 및 npm 설치

React는 Node.js 기반에서 실행됩니다. 따라서 Node.js가 먼저 설치되어 있어야 합니다.

- [Node.js 공식 사이트](https://nodejs.org/)에 접속
- 권장 LTS 버전을 다운로드 후 설치
- 설치 확인
```bash
node -v
npm -v
```  

* 위 명령어를 실행하면 설치된 Node.js와 npm 버전이 출력됩니다.

Tip: npm(Node Package Manager)은 Node.js와 함께 설치되며, 프로젝트에서 필요한 라이브러리 관리를 담당합니다.

2. React 프로젝트 생성

create-react-app은 React 프로젝트를 빠르게 시작할 수 있는 공식 도구입니다.

```bash
npx create-react-app my-app
```  
my-app은 프로젝트 이름입니다. 원하는 