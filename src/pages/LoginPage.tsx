import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import { useLogin } from '../entities/login/hooks'

const LoginPage = () => {
  const navigate = useNavigate()
  const { mutate: login, isLoading, error, data } = useLogin()

  const handleLogin = (formData: { login: string; password: string }) => {
    login(formData, {
      onError: (err: any) => {
        console.error(err)
      },
      onSuccess: (res) => {
        console.log('Успешный вход', res)
        localStorage.setItem('token', res.token)
        navigate('/')
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
