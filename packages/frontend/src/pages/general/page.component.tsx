import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { routes, IRoute } from "../../routing";
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { INavigationProps } from "./types";
import { DesktopPage } from "./page.component.desktop";
import { MobilePage } from "./page.component.mobile";
import { InfoBannerComponent } from "@cosmetics-and-more/components";

export const PageComponent = () => {
  const history = useHistory();
  const location = useLocation();

  const navBarProps: INavigationProps = {
    routeIndex: routes.findIndex((r) => r.path.match(location.pathname)),
    navigateTo: (route: IRoute) => history.push(route.path),
  };

  const route = routes[navBarProps.routeIndex];
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () => createMuiTheme(prefersDarkMode ? route.darkTheme : route.lightTheme),
    [prefersDarkMode, route.path]
  );

  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    // disabling server side rendering prevents double page render on load
    // which in turn prevents false negatives for 'isDesktop' on initial page
    // load
    noSsr: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {isDesktop ? (
        <DesktopPage {...navBarProps} />
      ) : (
        <MobilePage {...navBarProps} />
      )}

      <InfoBannerComponent message="Bitte beachten Sie die geltenden Coronaregeln, insbesondere 2G bei Friseur- und Kosmetikbetrieben" />
    </ThemeProvider>
  );
};
