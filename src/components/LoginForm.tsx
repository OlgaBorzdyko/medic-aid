import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

interface LoginFormProps {
  onSubmit: (data: { login: string; password: string }) => void
  isLoading?: boolean
  error?: string | null
}

const LoginForm = ({ onSubmit, isLoading, error = null }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ login: string; password: string }>()

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        variant="outlined"
        {...register('login', { required: 'Username is required' })}
        error={!!errors.login}
        helperText={errors.login?.message}
      />
      <TextField
        label="Password"
        variant="outlined"
        {...register('password', { required: 'Password is required' })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        color="primary"
        disabled={isLoading}
        type="submit"
        variant="contained"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </Button>
    </Box>
  )
}

export default LoginForm
