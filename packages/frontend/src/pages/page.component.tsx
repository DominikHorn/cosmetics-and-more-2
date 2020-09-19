import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { routes, IRoute } from "../routing";
import {
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    /* stick to bottom of screen */
    width: "100%",
    position: "fixed",
    bottom: 0,

    /* theming */
    backgroundColor: theme.palette.primary.main,
  },
  bottomNavigationAction: {
    color: theme.palette.primary.contrastText,
  },
  tabIndicator: {
    height: "2px",
  },
}));

export const PageComponent = (props: {}) => {
  // TODO: generalize mobile detection logic
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");
  const isMobile = !isDesktop;

  const history = useHistory();
  const navigateTo = (route: IRoute) => () => history.push(route.path);

  const location = useLocation();
  const navValue = routes.findIndex((r) => r.path.match(location.pathname));

  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <>
      {isDesktop && (
        <AppBar position="static" color={"primary"}>
          <Tabs
            value={navValue}
            indicatorColor={"secondary"}
            centered
            TabIndicatorProps={{ className: classes.tabIndicator }}
          >
            {routes.map((r, i) => (
              <Tab key={i} label={r.displayName} onClick={navigateTo(r)} />
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
        <ThemeProvider
          theme={createMuiTheme({
            palette: {
              primary: theme.palette.secondary,
            },
          })}
        >
          <BottomNavigation
            showLabels
            className={classes.bottomNavigation}
            value={navValue}
          >
            {routes.map((r, i) => (
              <BottomNavigationAction
                key={i}
                className={classes.bottomNavigationAction}
                label={r.displayName}
                icon={r.icon}
                onClick={navigateTo(r)}
              />
            ))}
          </BottomNavigation>
        </ThemeProvider>
      )}
    </>
  );
};
