import { AuthProvider } from '@/features/auth/AuthContext'

export function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
