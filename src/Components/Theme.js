import { useState } from "react";
import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import ThemeContext from "./ThemeContext";


function Theme({ children }) {
  const storedThemeMode = localStorage.getItem('themeMode');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const themeMode = storedThemeMode ?? (prefersDarkMode ? 'dark' : 'light');
  const [mode, setMode] = useState(themeMode);

  function toggleMode() {
    const themeMode = mode === 'dark' ? 'light' : 'dark';
    setMode(themeMode);
    localStorage.setItem('themeMode', themeMode);
  }

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeContext.Provider value={{
      isDarkMode: mode === 'dark',
      toggleMode
    }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Theme;