import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routing";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { INavigationProps } from "./types";
import { usePageStyles } from "./styles";

export const DesktopPage = (props: INavigationProps) => {
  const classes = usePageStyles(props);

  return (
    <>
      <AppBar position="sticky" color={"primary"}>
        <Tabs
          value={props.routeIndex}
          indicatorColor={"secondary"}
          centered={true}
          TabIndicatorProps={{ className: classes.tabIndicator }}
        >
          {routes.map((r, i) => (
            <Tab
              key={i}
              label={r.displayName}
              onClick={() => props.navigateTo(r)}
            />
          ))}
        </Tabs>
      </AppBar>

      <Switch>
        {routes.map((r, i) => (
          <Route key={i} {...r} />
        ))}
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </>
  );
};
