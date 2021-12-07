import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundaryComponent } from "@cosmetics-and-more/components";
import { PageComponent } from "./pages";
import Snowflakes from "magic-snowflakes";

const AppComponent = (): React.ReactElement => {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  const shouldSnow = month > 11 || month < 2;

  const [snowflakes] = useState(
    new Snowflakes({
      color: "#85dede",
      count: 100,
      minOpacity: 0.8,
      maxOpacity: 1.0,
      minSize: 15,
      maxSize: 30,
      rotation: true,
      speed: 1,
      wind: true,
    })
  );
  useEffect(() => (shouldSnow ? snowflakes.start() : snowflakes.stop()), [
    shouldSnow,
  ]);

  return (
    <Router>
      <ErrorBoundaryComponent>
        <PageComponent />
      </ErrorBoundaryComponent>
    </Router>
  );
};

export const App = hot(module)(AppComponent);
