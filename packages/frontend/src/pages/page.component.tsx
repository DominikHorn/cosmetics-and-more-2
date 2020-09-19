import * as React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { IRoute } from "./types";
import { Homepage } from "./page.home";
import { Galerie } from "./page.galerie";

const routes: IRoute[] = [
  {
    displayName: "Startseite",
    path: "/",
    render: () => <Homepage />,
  },
  {
    displayName: "Galerie",
    path: "/gallery",
    render: () => <Galerie />,
  },
];

export const PageComponent = () => (
  <Router>
    <div>
      <nav>
        {routes.map((r, i) => (
          <li key={i}>
            <Link to={r.path}>{r.displayName}</Link>
          </li>
        ))}
      </nav>
    </div>

    <Switch>
      {routes.map((r, i) => (
        <Route key={i} {...r} />
      ))}
    </Switch>
  </Router>
);
