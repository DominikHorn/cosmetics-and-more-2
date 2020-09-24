import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../../routing";
import { AppBar, Tabs, Tab, useTheme, makeStyles } from "@material-ui/core";
import { INavigationProps } from "./types";

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
}));

export const DesktopPage = (props: INavigationProps) => {
  const classes = useStyles(props);
  const theme = useTheme();

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

      <div style={{ margin: theme.spacing(1) }}>
        <Switch>
          {routes.map((r, i) => (
            <Route key={i} {...r} />
          ))}
          <Route>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </div>
    </>
  );
};
