import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundaryComponent } from "@cosmetics-and-more/components";
import { darkTheme, lightTheme } from "./theme";
import { PageComponent } from "./pages";

const AppComponent = (): React.ReactElement => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () => createMuiTheme(prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline />
        <ErrorBoundaryComponent>
          <PageComponent />
        </ErrorBoundaryComponent>
      </ThemeProvider>
    </Router>
  );
};

export const App = hot(module)(AppComponent);
