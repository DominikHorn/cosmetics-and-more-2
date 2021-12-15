import React, { useEffect, useMemo } from "react";
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
import Snowflakes from "magic-snowflakes";
import { isWinter } from "@cosmetics-and-more/utilities";

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

  // snow effect during winter
  const shouldSnow = isWinter();
  const snowflakes = useMemo(
    () =>
      new Snowflakes({
        color: "#85dede",
        count: 40,
        minOpacity: 0.8,
        maxOpacity: 1.0,
        minSize: 10,
        maxSize: 25,
        rotation: true,
        speed: 1,
        wind: true,
      }),
    []
  );
  useEffect(
    () => (shouldSnow ? snowflakes && snowflakes.start() : snowflakes.stop()),
    [shouldSnow]
  );

  useEffect(() => {
    const tag = document.querySelector('meta[name="theme-color"]');
    console.log("found tag", tag);
    if (tag) {
      tag.setAttribute("content", theme.palette.primary.main);
    }
  }, [theme.palette.primary]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {isDesktop ? (
        <DesktopPage {...navBarProps} />
      ) : (
        <MobilePage {...navBarProps} />
      )}

      {/*<InfoBannerComponent message={"Bitte beachten Sie die geltenden Coronaregeln, insbesondere 2G bei Friseur- und Kosmetikbetrieben"} />*/}
      <InfoBannerComponent
        title={
          "Leider habe ich aus familiären Gründen bis auf weiteres geschlossen"
        }
        message={
          "Ich wünsche Ihnen eine frohe Adventszeit und hoffe Sie bald wieder bei mir begrüßen zu können."
        }
      />
    </ThemeProvider>
  );
};
