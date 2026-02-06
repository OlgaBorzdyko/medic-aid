import { Box, Button, TextField } from '@mui/material'
// import { useForm } from 'react-hook-form'

const LoginForm = () => {
  return (
    <Box>
      <TextField label="Username" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button color="primary" type="submit" variant="contained">
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
