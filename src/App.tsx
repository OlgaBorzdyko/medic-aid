import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import TopBar from './components/TopBar'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
    </ThemeProvider>
  )
}
export default App
