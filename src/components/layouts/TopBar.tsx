import { Box, Typography } from '@mui/material'

import { useAuthStore } from '../../store/authStore'
import ThemeToggleButton from '../../widgets/ThemeToggleButton'

const TopBar = () => {
  const user = useAuthStore((state) => state.user)
  return (
    <Box>
      <Box>
        <ThemeToggleButton />
        <Typography>{user.name}</Typography>
        <img alt={user.name} src={user.avatar} />
      </Box>
    </Box>
  )
}
export default TopBar
