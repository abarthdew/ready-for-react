import Card from '@/components/Card'
import { useAuth } from '@/features/auth/AuthContext'
import { formatDateTime } from '@/utils/date'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <>
      <h2 className="page-title">Dashboard</h2>
      <div className="grid-2">
        <Card title="Profile">
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <p>Last Login: {formatDateTime(user.lastLoginAt)}</p>
        </Card>

        <Card title="Architecture Highlights">
          <ul>
            <li>Route guarding with protected routes</li>
            <li>API layer through dedicated service modules</li>
            <li>Persistence via localStorage helpers</li>
            <li>Reusable UI and custom hooks</li>
          </ul>
        </Card>
      </div>
    </>
  )
}
