import { ThemeProvider } from '@mui/material'

import Main from './Main'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Main />
      </div>
    </ThemeProvider>
  )
}
export default App
