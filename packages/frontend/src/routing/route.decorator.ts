import { IRoute } from "./types";
import React from "react";

export const routes: IRoute[] = [];

export function route(props: IRoute) {
  return function (target: typeof React.Component) {
    routes.push({ component: target, exact: true, ...props });
  };
}
