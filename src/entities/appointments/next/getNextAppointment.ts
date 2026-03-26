import { apiFetch } from '../../../mocks/hooks/api/client'

export const getNextAppointment = () => apiFetch('/appointments/next')
