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

interface INavBarProps {
  readonly navValue: number;
  readonly navigateTo: (route: IRoute) => () => void;
}

const DesktopNavBar = (props: INavBarProps) => {
  const classes = useStyles(props);

  return (
    <AppBar position="static" color={"primary"}>
      <Tabs
        value={props.navValue}
        indicatorColor={"secondary"}
        centered={true}
        TabIndicatorProps={{ className: classes.tabIndicator }}
      >
        {routes.map((r, i) => (
          <Tab key={i} label={r.displayName} onClick={props.navigateTo(r)} />
        ))}
      </Tabs>
    </AppBar>
  );
};

const MobileNavBar = (props: INavBarProps) => {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
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
        value={props.navValue}
      >
        {routes.map((r, i) => (
          <BottomNavigationAction
            key={i}
            className={classes.bottomNavigationAction}
            label={r.displayName}
            icon={r.icon}
            onClick={props.navigateTo(r)}
          />
        ))}
      </BottomNavigation>
    </ThemeProvider>
  );
};

export const PageComponent = () => {
  // TODO: generalize mobile detection logic
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");
  const isMobile = !isDesktop;

  const history = useHistory();
  const location = useLocation();

  const navBarProps: INavBarProps = {
    navValue: routes.findIndex((r) => r.path.match(location.pathname)),
    navigateTo: (route: IRoute) => () => history.push(route.path),
  };

  return (
    <>
      {isDesktop && <DesktopNavBar {...navBarProps} />}

      <Switch>
        {routes.map((r, i) => (
          <Route key={i} {...r} />
        ))}
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>

      {isMobile && <MobileNavBar {...navBarProps} />}
    </>
  );
};
