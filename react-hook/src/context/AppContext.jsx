import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState({ name: 'Frontend Learner', role: 'Developer' })

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    user,
    updateUserName: (name) => setUser((prev) => ({ ...prev, name })),
  }), [theme, user])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}
