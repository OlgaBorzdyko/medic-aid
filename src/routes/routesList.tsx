import MainLayout from '../components/layouts/MainLayout'
import AppointmentsPage from '../pages/AppointmentsPage'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import NotesPage from '../pages/NotesPage'
import PatientsPage from '../pages/PatientsPage'
import SettingsPage from '../pages/SettingsPage'
import UsersPage from '../pages/UsersPage'
import RequireAuth from './RequireAuth'
import RoleGuard from './RoleGuard'

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
          {
            path: 'patients',
            element: (
              <RoleGuard allowedRoles={['doctor']}>
                <PatientsPage />
              </RoleGuard>
            )
          },
          {
            path: 'appointments',
            element: (
              <RoleGuard allowedRoles={['doctor', 'patient']}>
                <AppointmentsPage />
              </RoleGuard>
            )
          },
          {
            path: 'notes',
            element: (
              <RoleGuard allowedRoles={['doctor', 'patient']}>
                <NotesPage />
              </RoleGuard>
            )
          },
          {
            path: 'settings',
            element: (
              <RoleGuard allowedRoles={['doctor', 'patient']}>
                <SettingsPage />
              </RoleGuard>
            )
          },
          { path: 'users', element: <UsersPage /> }
        ]
      }
    ]
  }
]

export default routes
