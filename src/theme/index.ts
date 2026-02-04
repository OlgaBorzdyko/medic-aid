import { colors, createTheme } from '@mui/material'

import typography from './typography'

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f6f8',
      paper: colors.common.white
    },
    primary: {
      main: '#000000'
    },
    error: {
      main: '#7c0a0a'
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
          height: '100%',
          width: '100%',
          fontFamily: 'Roboto, Arial, sans-serif'
        },
        a: {
          textDecoration: 'none'
        },
        '#root': {
          height: '100%',
          width: '100%'
        },
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0
        }
      }
    }
  },
  typography
})

export default theme
