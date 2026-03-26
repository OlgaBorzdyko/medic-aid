import { apiFetch } from '../../../mocks/hooks/api/client'

export const getNextAppointments = () => apiFetch('/appointments/next')
