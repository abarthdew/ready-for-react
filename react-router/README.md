# react-router

`react-etc`보다 더 복잡한 학습용 실무 프로토타입 React 앱입니다.

## 핵심 학습 포인트

- `routes/` 폴더에서 라우트 모듈 분리
  - `authRoutes`
  - `projectRoutes` (nested)
  - `userRoutes`
- `api/` 폴더에서 도메인별 API 분리
  - `projectsApi`, `tasksApi`, `usersApi`
- 실제 서버처럼 동작하는 `mockServer`
  - localStorage에 DB를 저장
  - 비동기 지연(delay)로 네트워크 느낌 재현
- 라우트/기능별 CRUD
  - Projects: 생성/목록/수정/삭제
  - Tasks(by Project): 생성/상태변경/삭제
  - Users: 생성/역할수정/삭제

## 실행

```bash
npm install
npm run dev
```