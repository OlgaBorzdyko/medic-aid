import { useAuthStore } from '../../store/authStore'

export const getAppointments = async () => {
  const { user } = useAuthStore.getState()

  if (!user) throw new Error('User not authenticated')

  const res = await fetch('/appointments', {
    headers: {
      'x-role': user.role,
      'x-user-id': String(user.id)
    }
  })

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}
