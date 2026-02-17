import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import { useLogin } from '../entities/login/hooks'
import { useAuthStore } from '../store/authStore'

const LoginPage = () => {
  const navigate = useNavigate()
  const { mutate: loginApi, isLoading, error, data } = useLogin()
  const login = useAuthStore((state) => state.login)

  const handleLogin = (formData: { login: string; password: string }) => {
    loginApi(formData, {
      onError: (err: any) => {
        console.error(err)
      },
      onSuccess: (res) => {
        console.log('Успешный вход', res)
        login(res.user, res.token)
        navigate('/', { replace: true })
      }
    })
  }
  return (
    <Box>
      <LoginForm error={error} isLoading={isLoading} onSubmit={handleLogin} />
    </Box>
  )
}

export default LoginPage
