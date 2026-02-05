import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useRoutes } from 'react-router-dom'

import routes from './routes/routesList'
import { theme } from './theme'

const App = () => {
  const routing = useRoutes(routes)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  )
}
export default App
