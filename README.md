# Frontend Project Starter (Next.js 15)

> 프론트엔드 개발 환경 템플릿

---

## 🛠️ 주요 스택 및 도구

- **Next.js 15 (App Router 기반)**
- **TypeScript 5**
- **Tailwind CSS 4** (+ tailwindcss-animate)
- **shadcn/ui**
- **Zustand** – 전역 상태 관리
- **TanStack Query** – 서버 상태 관리
- **Prettier, ESLint (eslint-config-next)**

---

## 📂 폴더 구조 (중요 파일 기준)

```
├── public/
│
├── app/ # App Router 기반 폴더
│ ├── layout.tsx # 공통 레이아웃
│ └── page.tsx # 초기 페이지
│
├── components/
│ └── ui/ # shadcn 기반 UI 컴포넌트
│
├── hooks/ # 커스텀 훅
├── lib/ # API, 유틸 등
├── stores/ # zustand 스토어
├── styles/ # 전역 스타일
├── app/providers.tsx # 전역 Provider 모음
└── tailwind.config.ts # Tailwind 설정
```

---

## 🚀 사용 방법

### 1. 의존성 설치

```
yarn install
```

2. 개발 서버 실행

```
yarn dev
```

---

## ✨ **shadcn 컴포넌트 추가 명령어**

```bash
npx shadcn@latest add <component>


npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
컴포넌트명 참고주소: https://ui.shadcn.com/docs/components
```
