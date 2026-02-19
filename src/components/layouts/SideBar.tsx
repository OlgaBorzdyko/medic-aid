import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { useAuthStore } from '../../store/authStore'
import { links } from '../../utils/links'
import { permissions } from '../../utils/permissions'

const SideBar = () => {
  const user = useAuthStore((state) => state.user)
  const rolePermissions = permissions[user.role]
  console.log(rolePermissions)
  console.log('user', user)
  return (
    <Box>
      {links
        .filter((link) => rolePermissions.canView.includes(link.label))
        .map((link) => (
          <Typography key={link.path}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </Typography>
        ))}
    </Box>
  )
}
export default SideBar
