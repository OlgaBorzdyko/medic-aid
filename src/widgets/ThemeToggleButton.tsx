import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

const ThemeToggleButton = () => {
  const { mode, setMode } = useColorScheme()

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <IconButton onClick={toggleTheme}>
      {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}

export default ThemeToggleButton
