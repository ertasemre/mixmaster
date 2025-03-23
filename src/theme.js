import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954', // Spotify yeşili
    },
    background: {
      default: '#121212',
      paper: '#181818',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em'
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif"
    },
    h6: {
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif"
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1.1rem',
      lineHeight: 1.7
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.6
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02em'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '0.02em',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(29, 185, 84, 0.3)'
          }
        },
        contained: {
          background: 'linear-gradient(45deg, #1DB954, #1ed760)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1ed760, #1DB954)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out'
        }
      }
    }
  }
});

export default theme; 