import React from "react";
import { route } from "../routing";
import HomeIcon from "@material-ui/icons/Home";
import { HomeContent } from "./content";

@route({
  displayName: "Willkommen",
  path: "/",
  icon: <HomeIcon />,
  prio: 1,
})
export class HomePage extends React.PureComponent {
  render() {
    return <HomeContent />;
  }
}
