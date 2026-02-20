import { Box } from '@mui/material'

import { useDoctors } from '../../entities/doctors/hooks'

const DashboardPage = () => {
  const { data, isLoading, error } = useDoctors()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  )
}
export default DashboardPage
