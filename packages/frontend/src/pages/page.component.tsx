import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "../routing";

export const PageComponent = () => (
  <Router basename={process.env.PUBLIC_URL}>
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
      <Route>
        <Redirect to={"/"} />
      </Route>
    </Switch>
  </Router>
);
