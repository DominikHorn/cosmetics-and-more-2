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
} from "@material-ui/core";
import { INavigationProps as IPageProps } from "./types";
import useScrollPosition from "@react-hook/window-scroll";
import MenuIcon from "@material-ui/icons/Menu";

type SubpageRefs = { [path: string]: RefObject<any> };

const useStyles = makeStyles((theme) => ({
  stickToBottom: {
    /* stick to bottom of screen */
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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
  subpage: {
    marginBottom: theme.spacing(4),
  },
}));

let subpageRefs: SubpageRefs;
export const MobilePage = (props: IPageProps) => {
  const classes = useStyles(props);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // make sure component is redrawn when view scrolls
  // (otherwise floating button does not work)
  useScrollPosition(10);

  if (!subpageRefs) {
    subpageRefs = routes.reduce(
      (prev, curr) => ({ ...prev, [curr.path]: React.createRef() }),
      {}
    );
  }

  const getCoords = (ref: RefObject<any>) => {
    var box = ref.current.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollPosY = window.pageYOffset || docEl.scrollTop || body.scrollTop;

    var clientTop = docEl.clientTop || body.clientTop || 0;

    var top = box.top + scrollPosY - clientTop;
    var bottom = top + box.height;

    return { top: top, bottom: bottom };
  };

  const isInViewport = (ref: RefObject<any>) => {
    if (!ref || !ref.current) return false;
    const coords = getCoords(ref);
    return coords.bottom > 0 && coords.top <= window.innerHeight;
  };

  // find currently visible page (if multiple are visible, use topmost page)
  const currentRoute =
    routes.find((r) => isInViewport(subpageRefs[r.path])) ||
    routes[props.routeIndex] ||
    routes[0];

  const scrollTo = (route: IRoute) =>
    window.scrollTo({
      top: getCoords(subpageRefs[route.path]).top,
      behavior: "smooth",
    });

  useEffect(
    () => window.addEventListener("load", () => scrollTo(currentRoute)),
    []
  );

  // make sure currentPath & visible components
  useEffect(() => props.navigateTo(currentRoute), [currentRoute]);

  const iOS =
    (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      {routes.map((r, i) => (
        <div key={i} ref={subpageRefs[r.path]} className={classes.subpage}>
          <Typography variant="h2" className={classes.pageTitle}>
            {r.displayName}
          </Typography>

          {React.createElement(r.component as React.ComponentClass, {}, null)}
        </div>
      ))}

      <Fab
        className={classes.stickToBottom}
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
              selected={currentRoute.path == r.path}
              onClick={() => {
                props.navigateTo(r);
                scrollTo(r);
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
