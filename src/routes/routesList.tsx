import MainLayout from '../components/layouts/MainLayout'
import DashboardPage from '../pages/DashboardPage'

const routes = [
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
