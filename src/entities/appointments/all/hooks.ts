import { useQuery } from '@tanstack/react-query'

import { generateAppointmentDate } from '../../../utils/generateAppointmentDate'
import { getAppointments } from './api'

export const useAppointments = () => {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const data = await getAppointments()
      return generateAppointmentDate(data)
    }
  })
}
