# 9월 10일 강의내용
### 1교시  























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