import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import SideBar from './SideBar'
import TopBar from './TopBar'

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <SideBar />
        <Box sx={{ p: 3, flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout
