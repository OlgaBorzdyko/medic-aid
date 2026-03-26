import { useAppointments } from '../entities/appointments/all/hooks'
import { useAuthStore } from '../store/authStore'

const AppointmentsPage = () => {
  const { data, isLoading, error } = useAppointments()
  const user = useAuthStore((state) => state.user)
  console.log('user', user?.role)
  console.log('data:', data)
  console.log('loading:', isLoading)
  console.log('error:', error)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      {data?.map((appointment) => (
        <div key={appointment.id}>
          <div>{appointment.datetime}</div>

          {user.role === 'doctor' ? (
            <div>Patient: {appointment.patientName}</div>
          ) : (
            <div>Doctor: {appointment.doctorName}</div>
          )}
        </div>
      ))}
    </div>
  )
}
export default AppointmentsPage
