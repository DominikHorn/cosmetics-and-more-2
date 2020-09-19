import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { routes } from "../routing";
import {
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  tabIndicator: {
    height: "2px",
  },
});

export const PageComponent = () => {
  // TODO: generalize mobile detection logic
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");
  const isMobile = !isDesktop;
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  return (
    <>
      {isDesktop && (
        <AppBar position="static" color={"primary"}>
          <Tabs
            value={routes.findIndex((r) => r.path.match(location.pathname))}
            indicatorColor={"secondary"}
            centered
            TabIndicatorProps={{ className: classes.tabIndicator }}
          >
            {routes.map((r, i) => (
              <Tab
                key={i}
                label={r.displayName}
                onClick={() => history.push(r.path)}
              />
            ))}
          </Tabs>
        </AppBar>
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
