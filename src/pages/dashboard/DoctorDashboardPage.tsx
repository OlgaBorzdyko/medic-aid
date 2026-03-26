import { NextPatient } from '../../components/dashboard/NextPatient'
import { useNextAppointment } from '../../entities/appointments/next/hooks'

const DoctorDashboardPage = () => {
  const { data: nextAppointment, isLoading, error } = useNextAppointment()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading next appointment</div>
  if (!nextAppointment) return <div>No upcoming appointments</div>
  return (
    <>
      <div>DoctorDashboardPage</div>
      <NextPatient patient={nextAppointment} />
    </>
  )
}
export default DoctorDashboardPage
