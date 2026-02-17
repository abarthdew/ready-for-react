import { Link } from 'react-router-dom'
import SectionCard from '@/components/SectionCard'

export default function DashboardPage() {
  return (
    <div className="grid-2">
      <SectionCard title="Learning Focus">
        <ul>
          <li>Route composition with route modules</li>
          <li>Per-domain API folders with CRUD methods</li>
          <li>Nested project/task management flows</li>
          <li>Storage-based fake backend for prototyping</li>
        </ul>
      </SectionCard>

      <SectionCard title="Quick Actions">
        <p>Start from projects and test CRUD on both projects and tasks.</p>
        <div className="row">
          <Link to="/projects">Open Projects</Link>
          <Link to="/users">Open Users</Link>
        </div>
      </SectionCard>
    </div>
  )
}
