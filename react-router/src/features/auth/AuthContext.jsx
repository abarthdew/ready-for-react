import { createContext, useContext, useMemo, useState } from 'react'
import { readJSON, removeJSON, writeJSON } from '@/utils/storage'

const AUTH_KEY = 'react-router.auth'
const AuthContext = createContext(null) // 1. 통로 생성 (데이터 초기화, 공유 채널만 만들기)

export function AuthProvider({ children }) { // Provider에서 실제 상태 생성 -> Provider의 value로 내려보냄
  const [session, setSession] = useState(() => readJSON(AUTH_KEY, null))

  const value = useMemo(() => ({
    session,
    isAuthenticated: Boolean(session),
    login: ({ email }) => {
      const next = { email, role: 'admin', loginAt: Date.now() }
      setSession(next)
      writeJSON(AUTH_KEY, next)
    },
    logout: () => {
      setSession(null)
      removeJSON(AUTH_KEY)
    },
  }), [session])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() { // 3. 꺼내기 (Provider가 내려준 value를 읽어오는 역할)
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

// 정리
// 1) createContext로 컨텍스트 만들기
// 2) 로그인/로그아웃 함수로 정보 저장
// 3) useContext(AuthContext)를 리턴하는 useAuth()로 가져오기