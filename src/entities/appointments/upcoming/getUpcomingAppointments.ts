import { apiFetch } from '../../../mocks/hooks/api/client'

export const getUpcomingAppointments = () => apiFetch('/appointments/upcoming')
