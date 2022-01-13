import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { routes, ThemedRoute } from "../../routing";
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
  Modal,
  Box,
} from "@material-ui/core";
import { INavigationProps as IPageProps } from "./types";
import useScrollPosition from "@react-hook/window-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import { FairyLights } from "@cosmetics-and-more/components";
import { isChristmas } from "@cosmetics-and-more/utilities";

type SubpageRefs = { [path: string]: RefObject<any> };

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    /* stick to bottom of screen */
    position: "fixed",
    top: theme.spacing(0.8),
    right: theme.spacing(1),
    zIndex: 3,
  },
  tabIndicator: {
    height: "2px",
  },
  pageTitle: {
    textAlign: "center",
    padding: theme.spacing(1),
    color: "#fff",
    backgroundColor: theme.palette.primary.main,

    // Stick to top & always in front
    position: "sticky",
    top: 0,
    zIndex: 2,
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "95%",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "24",
  },
}));

const FloatingActionButton = (
  props: IPageProps & {
    currentRoute: ThemedRoute;
    setCurrentRoute: (r: ThemedRoute) => void;
  }
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
        size={"small"}
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
                props.setCurrentRoute(r);
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
  const showLights = isChristmas();

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

  const [overlayRoute, setOverlayRoute] = useState<ThemedRoute | null>(null);
  const closeOverlay = useCallback(() => setOverlayRoute(null), [
    setOverlayRoute,
  ]);

  // Register handler after first render to ensure that we scroll to correct
  // position if directly jumping to subpage
  const currentRoute = routes[props.routeIndex] || routes[0];
  const setCurrentRoute = useCallback(
    (route: ThemedRoute) => {
      if (route.hideOnMobile) {
        setOverlayRoute(route);
      } else {
        window.scrollTo({
          top: getCoords(subpageRefs[route.path]).top + 2,
          behavior: "smooth",
        });
      }
    },
    [setOverlayRoute]
  );
  useEffect(
    () => window.addEventListener("load", () => setCurrentRoute(currentRoute)),
    []
  );

  // make sure path is updated during scrolling
  const visibleRoute =
    routes.find((r) => isInViewport(subpageRefs[r.path])) || currentRoute;
  useEffect(() => props.navigateTo(visibleRoute), [visibleRoute]);

  const visibleRoutes = useMemo(() => routes.filter((r) => !r.hideOnMobile), [
    routes,
  ]);

  return (
    <>
      {visibleRoutes.map((r, i) => (
        <div key={i} ref={subpageRefs[r.path]}>
          <Typography variant="h2" className={classes.pageTitle}>
            {r.displayName}
          </Typography>

          {showLights && <FairyLights style={{ marginTop: "38px" }} />}

          {React.createElement(r.component as React.ComponentClass, {}, null)}
        </div>
      ))}

      <Modal open={overlayRoute != null} onClose={closeOverlay}>
        <Box className={classes.overlay}>
          {overlayRoute != null &&
            React.createElement(
              overlayRoute.component as React.ComponentClass,
              {},
              null
            )}
        </Box>
      </Modal>

      <FloatingActionButton
        {...props}
        setCurrentRoute={setCurrentRoute}
        currentRoute={currentRoute}
      />
    </>
  );
};
