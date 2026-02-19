import RequireAuth from '@/features/auth/RequireAuth'
import UserManagementPage from '@/pages/UserManagementPage'

export const userRoutes = [
  {
    path: 'users',
    element: (
      <RequireAuth>
        <UserManagementPage />
      </RequireAuth>
    ),
  },
]