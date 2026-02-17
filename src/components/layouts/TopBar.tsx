import { Box, Typography } from '@mui/material'

import ThemeToggleButton from '../../widgets/ThemeToggleButton'

const TopBar = ({ user }) => {
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
