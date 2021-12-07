import React from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundaryComponent } from "@cosmetics-and-more/components";
import { PageComponent } from "./pages";
import Snowfall from "react-snowfall";

const AppComponent = (): React.ReactElement => {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  const shouldSnow = month > 11 || month < 2;

  return (
    <Router>
      <ErrorBoundaryComponent>
        <PageComponent />
      </ErrorBoundaryComponent>

      {shouldSnow && <Snowfall />}
    </Router>
  );
};

export const App = hot(module)(AppComponent);
