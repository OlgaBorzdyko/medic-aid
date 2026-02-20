import { useAuthStore } from '../../store/authStore'
import DoctorDashboardPage from './DoctorDashboardPage'
import PatientDashboardPage from './PatientDashboardPage'

const DashboardPage = () => {
  const role = useAuthStore((state) => state.user.role)
  switch (role) {
    case 'doctor':
      return <DoctorDashboardPage />
    case 'patient':
      return <PatientDashboardPage />
    default:
      return null
  }
}
export default DashboardPage
