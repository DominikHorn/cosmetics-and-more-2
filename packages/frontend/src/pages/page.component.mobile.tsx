import React, { RefObject, useEffect } from "react";
import { routes } from "../routing";
import { Menu, MenuItem, Box, Paper, Fab } from "@material-ui/core";
import { usePageStyles } from "./styles";
import { INavigationProps as IPageProps } from "./types";
import useScrollPosition from "@react-hook/window-scroll";

type SubpageRefs = { [path: string]: RefObject<any> };

let subpageRefs: SubpageRefs;
export const MobilePage = (props: IPageProps) => {
  const classes = usePageStyles(props);

  const [anchorEl, setAnchorEl] = React.useState<Element | undefined>();
  const closeMenu = () => {
    setAnchorEl(undefined);
  };

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

  // if ref to subpage from url changes, scroll into view
  const currentRouteRef = subpageRefs[routes[props.routeIndex].path];
  useEffect(
    () =>
      window.scrollTo({
        top: currentRouteRef?.current?.getBoundingClientRect().top || 0,
        behavior: "smooth",
      }),
    [currentRouteRef]
  );

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
        onClick={(e) => setAnchorEl(e.currentTarget)}
        variant="extended"
      >
        {currentRoute.icon}
        <Box className={classes.marginLeft}>{currentRoute.displayName}</Box>
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
            <>
              {r.icon}
              <Box className={classes.marginLeft}>{r.displayName}</Box>
            </>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
