import { IRoute } from "./types";
import React from "react";
import { ThemeOptions } from "@material-ui/core";
import { baseDarkTheme, baseLightTheme } from "../theme";
import { mergeDeep } from "@cosmetics-and-more/utilities";

export interface ThemedRoute extends IRoute {
  readonly darkTheme: ThemeOptions;
  readonly lightTheme: ThemeOptions;
}

export const routes: ThemedRoute[] = [];

export function route(props: IRoute) {
  return function (target: typeof React.Component) {
    if (routes.find((r) => r.path == props.path)) return;
    routes.push({
      component: target,
      exact: true,
      ...props,
      lightTheme: mergeDeep({}, baseLightTheme, props.lightTheme),
      darkTheme: mergeDeep({}, baseDarkTheme, props.darkTheme),
    });
    routes.sort((a, b) => (a.prio < b.prio ? -1 : a.prio > b.prio ? 1 : 0));
  };
}
