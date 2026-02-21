import { AuthProvider } from '@/features/auth/AuthContext'

export function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>
  // createContext -> 통로 생성
  // AuthProvider 실행 -> 상태 생성
  // Provider value로 상태 전달
  // useContext / useAuth로 값 읽기
  // => context는 데이터를 저장하는 곳이 아니라, 상태를 '공유'하기 위한 전달 시스템
}