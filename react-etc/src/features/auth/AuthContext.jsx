import { createContext, useContext, useMemo, useState } from 'react'
import { readStorage, removeStorage, writeStorage } from '@/utils/storage'

const AUTH_KEY = 'react-etc.auth'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStorage(AUTH_KEY, null))

  const value = useMemo(
    () => ({
      user,
      login: ({ email }) => {
        const nextUser = { email, role: 'member', lastLoginAt: Date.now() }
        setUser(nextUser)
        writeStorage(AUTH_KEY, nextUser)
      },
      logout: () => {
        setUser(null)
        removeStorage(AUTH_KEY)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
