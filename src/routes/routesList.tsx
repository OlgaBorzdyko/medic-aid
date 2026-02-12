import MainLayout from '../components/layouts/MainLayout'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RequireAuth from './RequireAuth'

const routes = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          }
        ]
      }
    ]
  }
]

export default routes
