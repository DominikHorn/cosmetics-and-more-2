import { RouteProps } from "react-router-dom";
import { ReactElement } from "react";

export interface IRoute extends RouteProps {
  readonly path: string;
  readonly displayName: string;
  readonly icon: ReactElement;
  readonly prio: number;
}
