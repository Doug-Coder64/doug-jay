import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#21394f",
    },
    primary: {
      main: "#21394f",
    },
    secondary: {
      main: "#6b7968",
    },
  },
});

export default theme;
