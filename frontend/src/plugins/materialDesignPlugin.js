import { unstable_createMuiStrictModeTheme as createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
  mypoints: {
    values: {
      mmm: '825',
    }
  },
}
);

export default function MaterialDesignPlugin({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}