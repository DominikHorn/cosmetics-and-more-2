import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { routes, IRoute } from "../../routing";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { INavigationProps } from "./types";
import { DesktopPage } from "./page.component.desktop";
import { MobilePage } from "./page.component.mobile";

export const PageComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    // disabling server side rendering prevents double page render on load
    // which in turn prevents false negatives for 'isDesktop' on initial page
    // load
    noSsr: true,
  });

  const history = useHistory();
  const location = useLocation();

  const navBarProps: INavigationProps = {
    routeIndex: routes.findIndex((r) => r.path.match(location.pathname)),
    navigateTo: (route: IRoute) => history.push(route.path),
  };

  if (isDesktop) {
    return <DesktopPage {...navBarProps} />;
  }

  return <MobilePage {...navBarProps} />;
};
