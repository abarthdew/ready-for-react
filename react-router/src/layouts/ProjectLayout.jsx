import { Outlet } from 'react-router-dom'

export default function ProjectLayout() {
  return (
    <>
      <h2>Project Workspace</h2>
      <Outlet />
    </>
  )
}
