import { NavLink } from 'react-router-dom'

export default function AppNav() {
  return (
    <nav className="sidebar">
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  )
}
