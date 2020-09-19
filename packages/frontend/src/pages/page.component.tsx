import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { routes, IRoute } from "../routing";
import { useMediaQuery } from "@material-ui/core";
import { INavigationProps } from "./types";
import { DesktopPage } from "./page.component.desktop";
import { MobilePage } from "./page.component.mobile";

export const PageComponent = () => {
  // TODO: generalize mobile detection logic
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

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
