import React, { RefObject, useEffect } from "react";
import { routes } from "../routing";
import {
  Paper,
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import { usePageStyles } from "./styles";
import { INavigationProps as IPageProps } from "./types";
import useScrollPosition from "@react-hook/window-scroll";
import MenuIcon from "@material-ui/icons/Menu";

type SubpageRefs = { [path: string]: RefObject<any> };

let subpageRefs: SubpageRefs;
export const MobilePage = (props: IPageProps) => {
  const classes = usePageStyles(props);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  if (!subpageRefs) {
    subpageRefs = routes.reduce(
      (prev, curr) => ({ ...prev, [curr.path]: React.createRef() }),
      {}
    );
  }

  // make sure component is redrawn when view scrolls
  // (otherwise floating button does not work)
  useScrollPosition(10);

  // find currently visible page (if multiple are visible, use topmost page)
  const currentRoute =
    routes.find((r) => {
      const ref = subpageRefs[r.path];
      if (!ref || !ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      return rect.top + rect.height > 0 && rect.top <= window.innerHeight;
    }) || routes[props.routeIndex];
  useEffect(() => props.navigateTo(currentRoute), [currentRoute]);

  const scrollTo = (ref: RefObject<any>) => {
    const rect = ref?.current?.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
      top: rect.top + scrollTop || 0,
      behavior: "smooth",
    });
  };

  // scroll to routed page part (execute exactly once after initial page render)
  useEffect(() => scrollTo(subpageRefs[routes[props.routeIndex].path]), []);

  const iOS =
    (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      {routes.map((r, i) => (
        <Paper key={i} ref={subpageRefs[r.path]}>
          {React.createElement(r.component as React.ComponentClass, {}, null)}
        </Paper>
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
