import { useQuery } from '@tanstack/react-query'

import { getNextAppointment } from './getNextAppointment'

export const useNextAppointment = () => {
  return useQuery({
    queryKey: ['appointments', 'next'],
    queryFn: async () => {
      const data = await getNextAppointment()
      return data
    }
  })
}
