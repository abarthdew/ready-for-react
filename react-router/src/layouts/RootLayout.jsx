import { Outlet } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import AppNav from '@/components/AppNav'

export default function RootLayout() {
  const { session, logout } = useAuth()

  return (
    <div className="shell">
      <header className="topbar">
        <h1>React Router Practical Lab</h1>
        <div>
          <span>{session?.email}</span>
          <button type="button" onClick={logout}>Logout</button>
        </div>
      </header>
      <div className="body">
        <AppNav />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
