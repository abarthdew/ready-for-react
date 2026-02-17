import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'

export default function AppLayout() {
  const { user, logout } = useAuth()

  return (
    <div className="shell">
      <header className="topbar">
        <h1>React ETC Workspace</h1>
        <div className="topbar-right">
          <span>{user?.email}</span>
          <button type="button" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </aside>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
