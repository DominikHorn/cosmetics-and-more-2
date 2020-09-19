import { RouteProps } from "react-router-dom";

export interface IRoute extends RouteProps {
  readonly path: string;
  readonly displayName: string;
}
