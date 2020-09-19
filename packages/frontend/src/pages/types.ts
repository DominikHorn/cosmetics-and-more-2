import { IRoute } from "../routing";

export interface INavigationProps {
  readonly routeIndex: number;
  readonly navigateTo: (route: IRoute) => void;
}
