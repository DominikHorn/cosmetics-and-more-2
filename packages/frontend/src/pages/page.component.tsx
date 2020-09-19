import React from "react";
import { Switch, Link, Route, Redirect, useHistory } from "react-router-dom";
import { routes } from "../routing";
import {
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export const PageComponent = () => {
  // TODO: generalize mobile detection logic
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");
  const isMobile = !isDesktop;
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      {isDesktop && (
        <div>
          <nav>
            {routes.map((r, i) => (
              <li key={i}>
                <Link to={r.path}>{r.displayName}</Link>
              </li>
            ))}
          </nav>
        </div>
      )}
      <Switch>
        {routes.map((r, i) => (
          <Route key={i} {...r} />
        ))}
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>

      {isMobile && (
        <BottomNavigation showLabels className={classes.stickToBottom}>
          {routes.map((r, i) => (
            <BottomNavigationAction
              key={i}
              label={r.displayName}
              icon={r.icon}
              onClick={() => history.push(r.path)}
            />
          ))}
        </BottomNavigation>
      )}
    </>
  );
};
