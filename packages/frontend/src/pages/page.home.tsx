import React from "react";
import { route } from "../routing";
import HomeIcon from "@material-ui/icons/Home";
import { LoremIpsumComponent } from "@cosmetics-and-more/components";

@route({
  displayName: "Startseite",
  path: "/",
  icon: <HomeIcon />,
  prio: 1,
})
export class Homepage extends React.PureComponent {
  render() {
    return (
      <div>
        Dies ist die Homepage
        <LoremIpsumComponent />
      </div>
    );
  }
}
