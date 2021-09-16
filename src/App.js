import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";

import { ProjectsProvider } from "./AppContext";
import PageContainer from "./pages/PageContainer";

const theme = createTheme();

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProjectsProvider>
          <PageContainer />
        </ProjectsProvider>
      </ThemeProvider>
    </Router>
  );
}
