import MainLayout from '../components/layouts/MainLayout'
import AppointmentsPage from '../pages/AppointmentsPage'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import NotesPage from '../pages/NotesPage'
import PatientsPage from '../pages/PatientsPage'
import SettingsPage from '../pages/SettingsPage'
import UsersPage from '../pages/UsersPage'
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
          },
          { path: 'patients', element: <PatientsPage /> },
          { path: 'appointments', element: <AppointmentsPage /> },
          { path: 'notes', element: <NotesPage /> },
          { path: 'settings', element: <SettingsPage /> },
          { path: 'users', element: <UsersPage /> }
        ]
      }
    ]
  }
]

export default routes
