import { useAppointments } from '../entities/appointments/hooks'

const AppointmentsPage = () => {
  const { data, isLoading, error } = useAppointments()
  console.log('data:', data)
  console.log('loading:', isLoading)
  console.log('error:', error)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      {data?.map((appointment) => (
        <div key={appointment.id}>{appointment.datetime}</div>
      ))}
    </div>
  )
}
export default AppointmentsPage
