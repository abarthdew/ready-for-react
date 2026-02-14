# react-basis

리액트 기초를 복습한 뒤, 바로 확장 가능한 To-do List를 만들기 위한 베이스 프로젝트입니다.

## 1) 시작하기

```bash
npm install
npm run dev
```

## 2) 기초 디렉토리 구조 (추천)

```text
react-basis/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ TodoForm.jsx
│  │  ├─ TodoItem.jsx
│  │  └─ TodoList.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

### 각 파일 역할

- `main.jsx`: React 앱 진입점 (`#root`에 `App` 렌더링)
- `App.jsx`: 상태(state) 소유 + 컴포넌트 조합
- `components/TodoForm.jsx`: 입력/추가 이벤트 처리
- `components/TodoList.jsx`: 목록 렌더링
- `components/TodoItem.jsx`: 단일 항목 UI + 완료/삭제 이벤트

## 3) 지금 코드의 핵심 포인트

- 상태를 `App`에서 소유 (`todos`, `filter`)
- 이벤트 핸들러를 props로 내려서 자식 컴포넌트에서 호출
- `setTodos((prev) => ...)` 함수형 업데이트로 안전하게 상태 변경
- `useMemo`로 필터링 결과(`all/active/done`) 계산

## 4) 다음 단계 추천

1. localStorage 연동 (새로고침 후 유지)
2. 수정(edit) 기능 추가
3. 마감일/우선순위 필드 추가
4. 컴포넌트 테스트 작성 (React Testing Library)
