# react-hook

리액트 기본 훅을 **실무적인 형태로** 학습하기 위한 예시 앱입니다.

## 포함된 훅과 사용 맥락

- `useState`: 폼/입력 상태, UI 제어
- `useReducer`: Task CRUD 상태 전환 로직
- `useEffect`: localStorage 동기화, debounce 검색
- `useLayoutEffect`: 결과 렌더 후 패널 너비 측정
- `useRef`: 포커스 제어, 타이머 ID 저장
- `useMemo`: 비싼 계산 결과 캐싱, 파생 데이터 계산
- `useCallback`: 핸들러 안정화 및 자식에 전달
- `useContext`: 전역 user/theme 상태 공유

## 실행

```bash
npm install
npm run dev
```

## 학습 포인트

- 단순 훅 문법이 아니라, 실제 제품 코드에서 훅이 어떤 역할로 쓰이는지 체험
- 상태 관리(지역/전역), 성능 최적화, 사이드 이펙트, DOM 연동까지 한 프로젝트에서 복습
