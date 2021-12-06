import React from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter as Router } from "react-router-dom";
import {
  ErrorBoundaryComponent,
  InfoBannerComponent,
} from "@cosmetics-and-more/components";
import { PageComponent } from "./pages";

const AppComponent = (): React.ReactElement => (
  <Router>
    <ErrorBoundaryComponent>
      <PageComponent />
      <InfoBannerComponent message="Bitte beachten Sie die geltenden Coronaregeln, insbesondere 2G bei Friseur- und Kosmetikbetrieben" />
    </ErrorBoundaryComponent>
  </Router>
);

export const App = hot(module)(AppComponent);
