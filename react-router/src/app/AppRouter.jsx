import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { authRoutes } from '@/routes/authRoutes'
import { projectRoutes } from '@/routes/projectRoutes'
import { userRoutes } from '@/routes/userRoutes'
import RootLayout from '@/layouts/RootLayout'
import DashboardPage from '@/pages/DashboardPage'
import NotFoundPage from '@/pages/NotFoundPage'

// context 값 확인해보기
import { AuthProvider, useAuth } from '../features/auth/AuthContext'
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

  // context 값 확인해보기
  const auth1 = useContext(AuthProvider) 
  console.log('auth1', auth1) 
  // -> 잘못된 방법: AuthProvider는 그냥 provider 컴포넌트고, AuthContext가 context 객체임.

  // 다른 방법
  const auth2 = useAuth();
  console.log('auth2', auth2)

  return <RouterProvider router={router} />
}