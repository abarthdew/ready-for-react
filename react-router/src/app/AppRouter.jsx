import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { authRoutes } from '@/routes/authRoutes'
import { projectRoutes } from '@/routes/projectRoutes'
import { userRoutes } from '@/routes/userRoutes'
import RootLayout from '@/layouts/RootLayout'
import DashboardPage from '@/pages/DashboardPage'
import NotFoundPage from '@/pages/NotFoundPage'

// context 값 확인해보기
import { AuthContext } from '../features/auth/AuthContext'
import { useContext } from 'react'

const router = createBrowserRouter([
  ...authRoutes,
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      ...projectRoutes,
      ...userRoutes,
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function AppRouter() {

  const auth = useContext(AuthContext)
  console.log(auth) // context 값 확인해보기

  return <RouterProvider router={router} />
}