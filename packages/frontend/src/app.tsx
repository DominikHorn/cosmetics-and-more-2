import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  ThemeOptions,
  Button,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader";

import { ErrorBoundaryComponent } from "@cosmetics-and-more/components";
import { darkTheme, lightTheme } from "./theme";

const useDarkMode = (): [ThemeOptions, () => void] => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (): void => {
    setTheme(theme.palette!.type === "light" ? darkTheme : lightTheme);
  };
  return [theme, toggleTheme];
};

const AppComponent = (): React.ReactElement => {
  const [theme, toggleDarkMode] = useDarkMode();

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ErrorBoundaryComponent>
        <div>hier könnte ihre Werbung stehen</div>
        <Button onClick={toggleDarkMode}>Toggle</Button>
      </ErrorBoundaryComponent>
    </MuiThemeProvider>
  );
};

export const App = hot(module)(AppComponent);
