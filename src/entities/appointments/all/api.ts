import { apiFetch } from '../../../mocks/hooks/api/client'

export const getAppointments = () => apiFetch('/appointments')
