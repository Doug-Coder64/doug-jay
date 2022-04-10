import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AppContainer from "./AppContainer";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
