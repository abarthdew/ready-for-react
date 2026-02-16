# react-etc

실무형 React 앱 패턴을 학습하기 위한 예제 프로젝트입니다.

## 포함한 구성

- **React Router** 기반 페이지 라우팅
  - `/login` (공개)
  - `/` Dashboard (보호 라우트)
  - `/posts`, `/posts/:id` (보호 라우트)
- **Auth Context + ProtectedRoute**로 인증 상태 관리
- **API 계층 분리**
  - `api/httpClient.js`
  - `services/postsService.js`
- **Storage 유틸 분리**
  - `utils/storage.js`로 localStorage read/write/remove 캡슐화
- **Custom Hook (`useAsync`)** 로 로딩/에러/데이터 상태 관리

## 실행

```bash
npm install
npm run dev
```

JSONPlaceholder API를 사용하므로 네트워크가 가능한 환경에서 posts 데이터를 불러옵니다.
