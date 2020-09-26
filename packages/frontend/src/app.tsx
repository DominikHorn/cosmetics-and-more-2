import { CssBaseline } from "@material-ui/core";
import React from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundaryComponent } from "@cosmetics-and-more/components";
import { PageComponent } from "./pages";

const AppComponent = (): React.ReactElement => (
  <Router basename={process.env.PUBLIC_URL}>
    <CssBaseline />
    <ErrorBoundaryComponent>
      <PageComponent />
    </ErrorBoundaryComponent>
  </Router>
);

export const App = hot(module)(AppComponent);
