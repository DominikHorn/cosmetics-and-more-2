import React, { RefObject, useEffect } from "react";
import { IRoute, routes } from "../../routing";
import {
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { INavigationProps as IPageProps } from "./types";
import useScrollPosition from "@react-hook/window-scroll";
import MenuIcon from "@material-ui/icons/Menu";

type SubpageRefs = { [path: string]: RefObject<any> };

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    /* stick to bottom of screen */
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
  tabIndicator: {
    height: "2px",
  },
  pageTitle: {
    textAlign: "center",
    padding: theme.spacing(1),
    color: "#fff",
    backgroundColor: `${theme.palette.primary.main}CC`,
    backdropFilter: "blur(6px)",

    // Stick to top & always in front
    position: "sticky",
    top: 0,
    zIndex: 2,
  },
}));

const FloatingActionButton = (
  props: IPageProps & { scrollTo: (r: IRoute) => void; currentRoute: IRoute }
) => {
  const classes = useStyles(props);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const iOS =
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  return (
    <>
      <Fab
        className={classes.floatingActionButton}
        color="primary"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </Fab>

      <SwipeableDrawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List>
          {routes.map((r, i) => (
            <ListItem
              key={i}
              alignItems={"center"}
              selected={props.currentRoute.path == r.path}
              onClick={() => {
                props.scrollTo(r);
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>{r.icon}</ListItemIcon>
              <ListItemText>{r.displayName}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};

let subpageRefs: SubpageRefs;
export const MobilePage = (props: IPageProps) => {
  const classes = useStyles(props);
  const theme = useTheme();

  // make sure component is redrawn when view scrolls
  // (otherwise route url can not correctly update)
  useScrollPosition(10);

  if (!subpageRefs) {
    subpageRefs = routes.reduce(
      (prev, curr) => ({ ...prev, [curr.path]: React.createRef() }),
      {}
    );
  }

  const getCoords = (ref: RefObject<any>) => {
    const box = ref.current.getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollPosY = window.pageYOffset || docEl.scrollTop || body.scrollTop;

    const clientTop = docEl.clientTop || body.clientTop || 0;

    const top = box.top + scrollPosY - clientTop;
    const bottom = top + box.height;

    return { top: top, bottom: bottom };
  };

  const isInViewport = (ref: RefObject<any>) => {
    if (!ref || !ref.current) return false;
    const coords = getCoords(ref);
    const scrollPosY = window.pageYOffset;
    return scrollPosY < coords.bottom && scrollPosY >= coords.top - 5;
  };

  const scrollTo = (route: IRoute) =>
    window.scrollTo({
      top: getCoords(subpageRefs[route.path]).top,
      behavior: "smooth",
    });

  // Register handler after first render to ensure that we scroll to correct
  // position if directly jumping to subpage
  const currentRoute = routes[props.routeIndex] || routes[0];
  useEffect(
    () => window.addEventListener("load", () => scrollTo(currentRoute)),
    []
  );

  // make sure currentPath & visible components
  const visibleRoute =
    routes.find((r) => isInViewport(subpageRefs[r.path])) || currentRoute;
  useEffect(() => props.navigateTo(visibleRoute), [visibleRoute]);

  return (
    <>
      {routes.map((r, i) => (
        <div
          key={i}
          ref={subpageRefs[r.path]}
          style={{ marginBottom: i < routes.length - 1 ? theme.spacing(4) : 0 }}
        >
          <Typography variant="h2" className={classes.pageTitle}>
            {r.displayName}
          </Typography>

          {React.createElement(r.component as React.ComponentClass, {}, null)}
        </div>
      ))}

      <FloatingActionButton
        {...props}
        scrollTo={scrollTo}
        currentRoute={currentRoute}
      />
    </>
  );
};
