import MainLayout from '../components/layouts/MainLayout'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'

const routes = [
  {
    path: '/login',
    element: <LoginPage />
  },
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

export default routes
