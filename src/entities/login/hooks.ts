import { useMutation } from '@tanstack/react-query'

import { getLogin } from './api'

export const useLogin = () => {
  return useMutation({
    mutationFn: getLogin
  })
}
