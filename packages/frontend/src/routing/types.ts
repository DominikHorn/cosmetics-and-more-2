import { RouteProps } from "react-router-dom";
import { ReactElement } from "react";
import { ThemeOptions } from "@material-ui/core";

export interface IRoute extends RouteProps {
  readonly path: string;
  readonly displayName: string;
  readonly icon: ReactElement;
  readonly prio: number;
  readonly hideOnMobile?: boolean;
  readonly lightTheme?: ThemeOptions;
  readonly darkTheme?: ThemeOptions;
}
