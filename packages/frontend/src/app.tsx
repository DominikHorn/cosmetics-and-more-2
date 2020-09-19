import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as React from "react";
import { hot } from "react-hot-loader";

import { ErrorBoundaryComponent } from "@cosmetics-and-more/components";
import { darkTheme, lightTheme } from "./theme";

const AppComponent = (): React.ReactElement => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () => createMuiTheme(prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ErrorBoundaryComponent>
        <div>hier könnte ihre Werbung stehen</div>
      </ErrorBoundaryComponent>
    </ThemeProvider>
  );
};

export const App = hot(module)(AppComponent);
