import { Avatar, Box, Typography } from '@mui/material'

import { useAuthStore } from '../../store/authStore'
import ThemeToggleButton from '../../widgets/ThemeToggleButton'

const TopBar = () => {
  const user = useAuthStore((state) => state.user)
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <ThemeToggleButton />
        <Typography>{user.name}</Typography>
        <Avatar alt={user.name} src={user.avatar} />
      </Box>
    </Box>
  )
}
export default TopBar
