import React, { RefObject, useEffect } from "react";
import { routes } from "../../routing";
import {
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
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

  const isInViewport = (ref: RefObject<any>) => {
    if (!ref || !ref.current) return false;
    const rect = ref.current.getBoundingClientRect();
    return rect.top + rect.height > 0 && rect.top <= window.innerHeight;
  };
  const scrollTo = (ref: RefObject<any>) => {
    props.navigateTo(currentRoute);
    if (isInViewport(ref)) return;
    const rect = ref?.current?.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
      top: rect.top + scrollTop || 0,
      behavior: "smooth",
    });
  };

  // find currently visible page (if multiple are visible, use topmost page)
  const currentRoute =
    routes.find((r) => isInViewport(subpageRefs[r.path])) ||
    routes[props.routeIndex];
  // make sure currentPath & visible components matche
  useEffect(() => scrollTo(subpageRefs[currentRoute.path]), [currentRoute]);

  const iOS =
    (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      {routes.map((r, i) => (
        <div key={i}>
          {i > 0 && (
            <Typography variant="h2" className={classes.pageTitle}>
              {r.displayName}
            </Typography>
          )}

          <Paper ref={subpageRefs[r.path]} elevation={0}>
            {React.createElement(r.component as React.ComponentClass, {}, null)}
          </Paper>
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
                scrollTo(subpageRefs[r.path]);
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
