# react-todo (React 학습용 카운터 예제)

이 프로젝트는 **Vite + React** 기본 템플릿 위에,
`state`와 `props` 전달을 연습하기 위해 만든 작은 카운터 예제입니다.

## 실행 방법

```bash
npm install
npm run dev
```

- 개발 서버: 보통 `http://localhost:5173`

## 파일 구조 핵심

- `src/main.jsx`
  - React 앱 시작점.
  - `#root` DOM에 `<App />`를 렌더링합니다.
- `src/App.jsx`
  - 로고(Vite/React)와 두 개의 카운터 컴포넌트를 렌더링합니다.
  - 부모 상태 `count`를 만들고(`useState`), `CounterProps`로 전달합니다.
- `src/components/CounterCard.jsx`
  - **독립 state**를 가진 카운터.
  - 내부 `count`를 자기 자신이 관리합니다.
- `src/components/CounterProps.jsx`
  - 부모(`App`)에서 받은 `count`, `setCount`를 사용.
  - 즉, **상태를 소유하지 않고 위임받아 조작**하는 예제입니다.

## 이 코드가 보여주는 React 개념

### 1) state는 누가 소유하나?

- `CounterCard`는 `useState`를 직접 호출하므로, 카운트 값이 해당 컴포넌트 안에서만 바뀝니다.
- `CounterProps`는 state가 없고, 부모가 준 `count/setCount`를 사용합니다.

### 2) props로 상태/함수 전달하기

`App`에서:

```jsx
const [count, setCount] = useState(0)
<CounterProps count={count} setCount={setCount} />
```

- `count`: 현재 값
- `setCount`: 값을 바꾸는 함수

즉 자식 컴포넌트도 버튼 클릭으로 부모 state를 바꿀 수 있습니다.

### 3) 함수형 업데이트 문법

`setCount((prev) => prev + 1)` 형태를 사용합니다.

- 비동기 렌더링/연속 업데이트 상황에서도 **최신값(prev)** 기준으로 안전하게 계산할 수 있습니다.

## 버튼 동작 설명 (`CounterProps`)

- `+1` 버튼: `count + 1`
- `+2` 버튼: `count + 2`
- `*3` 버튼:
  1. 먼저 `count += 1`
  2. 그 다음 `* 3`

즉 현재 구현은 수학적으로 `next = (count + 1) * 3` 입니다.

## 한 줄 요약

이 프로젝트는

- **로컬 state 컴포넌트** (`CounterCard`)와
- **부모 state를 props로 제어하는 컴포넌트** (`CounterProps`)

의 차이를 체감하려고 만든 학습용 샘플입니다.
