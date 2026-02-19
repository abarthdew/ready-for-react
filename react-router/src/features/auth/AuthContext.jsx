import { createContext, useContext, useMemo, useState } from 'react'
import { readJSON, removeJSON, writeJSON } from '@/utils/storage'

const AUTH_KEY = 'react-router.auth'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
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

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}