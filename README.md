# 0xand 프로젝트 
## 미리보기
![chrome-capture-2024-11-9](https://github.com/user-attachments/assets/d5fa5d53-fbf8-4cea-9753-b67a676a4c09)

## 🌐 배포링크
- [프로젝트 배포 링크](https://0xand.jeheecheon.com/)
- [Storybook 배포링크](https://www.chromatic.com/library?appId=672e64bfa06997bbe947e57b)

## 특징
- [0xand](https://0xand.com/) 공식 사이트 디자인을 참조했습니다.
- Storybook과 Atomic Design Pattern을 적용하여 컴포넌트의 재사용성과 유지보수성을 높였습니다.
- 반응형 디자인으로 구현했습니다.
- 데이터 로딩 시에 지연시간 3초를 고정으로 뒀습니다.
- PostCSS인 Tailwind CSS 으로 스타일링 했습니다.
- class-variance-authority를 사용하여 Tailwind CSS 컴포넌트의 다양한 상태를 제어했습니다.
- Custom Hooks를 사용하여 코드의 가독성과 재사용성을 높였습니다. 예를 들어, `useInfiniteScroll`, `useToggleSortOrder`, `useSortOptions` 등 다양한 커스텀 훅을 분리하여, 데이터 로딩, 정렬 옵션, 색상 설정 등의 기능을 모듈화하고 효율적으로 관리했습니다.

## 사용된 기술스택
- react
- tailwind css
- storybook
- tanstack query
- zustand
- eslint & prettier
- jest (추후 예정)

## 📁 프로젝트 폴더 구조
```js
📦 src
├── 📂 assets
│   ├── 🖼️ images          # 이미지 파일 저장
│   └── 🎨 styles          # 글로벌 스타일 시트
│
├── 📂 components          # Atomic Design Pattern을 기반으로 컴포넌트 구성
│   ├── ⚛️ atoms           # 최소 단위의 UI 컴포넌트
│   ├── 🧬 molecules       # 복합 UI 컴포넌트
│   ├── 🧩 organisms       # 더 복잡한 UI 컴포넌트
│   ├── 🖼️ templates       # 페이지 레이아웃 템플릿
│   └── 📄 pages           # 페이지 컴포넌트
│
├── 📂 constants           # 상수 값 저장
│
├── 📂 hooks               # 커스텀 훅
│
├── 📂 stores
│   └── 🗂️ ranking         # Zustand 스토어 및 관련 상태 관리 로직
│
├── 📂 utils               # 유틸리티 함수
│
├── 📝 App.tsx             # 메인 앱 컴포넌트
└── 🚀 main.tsx            # 진입점 파일
```
