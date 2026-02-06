import { useQuery } from '@tanstack/react-query'

import { getDoctors } from './api'

export const useDoctors = () => {
  return useQuery({ queryKey: ['doctors'], queryFn: getDoctors })
}
