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
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Fab,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stickToBottom: {
    /* stick to bottom of screen */
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  marginLeft: {
    marginLeft: theme.spacing(1),
  },
  tabIndicator: {
    height: "2px",
  },
}));

interface INavigationProps {
  readonly routeIndex: number;
  readonly navigateTo: (route: IRoute) => void;
}

const DesktopNavigation = (props: INavigationProps) => {
  const classes = useStyles(props);

  return (
    <AppBar position="static" color={"primary"}>
      <Tabs
        value={props.routeIndex}
        indicatorColor={"secondary"}
        centered={true}
        TabIndicatorProps={{ className: classes.tabIndicator }}
      >
        {routes.map((r, i) => (
          <Tab
            key={i}
            label={r.displayName}
            onClick={() => props.navigateTo(r)}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

const MobileNavigation = (props: INavigationProps) => {
  const classes = useStyles(props);

  const [anchorEl, setAnchorEl] = React.useState<Element | undefined>();

  const closeMenu = () => {
    setAnchorEl(undefined);
  };

  return (
    <>
      <Fab
        className={classes.stickToBottom}
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        variant="extended"
      >
        {routes[props.routeIndex].icon}
        <Box className={classes.marginLeft}>
          {routes[props.routeIndex].displayName}
        </Box>
      </Fab>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        {routes.map((r, i) => (
          <MenuItem
            key={i}
            onClick={() => {
              props.navigateTo(r);
              closeMenu();
            }}
          >
            {r.displayName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const PageComponent = () => {
  // TODO: generalize mobile detection logic
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");
  const isMobile = !isDesktop;

  const history = useHistory();
  const location = useLocation();

  const navBarProps: INavigationProps = {
    routeIndex: routes.findIndex((r) => r.path.match(location.pathname)),
    navigateTo: (route: IRoute) => history.push(route.path),
  };

  return (
    <>
      {isDesktop && <DesktopNavigation {...navBarProps} />}

      <Switch>
        {routes.map((r, i) => (
          <Route key={i} {...r} />
        ))}
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>

      {isMobile && <MobileNavigation {...navBarProps} />}
    </>
  );
};
