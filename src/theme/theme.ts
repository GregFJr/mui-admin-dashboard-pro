import { createTheme } from '@mui/material/styles';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },  // Blue
    secondary: { main: '#9c27b0' }, // Purple
    background: {
      default: '#f4f6f8',
      paper: '#fff'
    }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: { fontWeight: 600, fontSize: '2rem' },
    h2: { fontWeight: 500, fontSize: '1.5rem' },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;
