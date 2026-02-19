import RequireAuth from '@/features/auth/RequireAuth'
import ProjectLayout from '@/layouts/ProjectLayout'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import ProjectListPage from '@/pages/ProjectListPage'

export const projectRoutes = [
  {
    path: 'projects',
    element: (
      <RequireAuth>
        <ProjectLayout />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <ProjectListPage /> },
      { path: ':projectId', element: <ProjectDetailPage /> },
    ],
  },
]