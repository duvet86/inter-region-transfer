import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";

import PageContainer from "./pages/PageContainer";

const theme = createTheme();

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageContainer />
      </ThemeProvider>
    </Router>
  );
}
