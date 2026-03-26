import { Box, Typography } from '@mui/material'

export const NextPatient = ({ patient }) => {
  return (
    <Box>
      <Typography>Next Patient</Typography>
      <Box>
        <Typography>{patient.patientName}</Typography>
        <Typography>{patient.datetime}</Typography>
      </Box>
    </Box>
  )
}
