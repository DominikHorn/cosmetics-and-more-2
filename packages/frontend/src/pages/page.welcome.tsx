import React from "react";
import { route } from "../routing";
import HomeIcon from "@material-ui/icons/Home";
import { LoremIpsumComponent } from "@cosmetics-and-more/components";

@route({
  displayName: "Willkommen",
  path: "/",
  icon: <HomeIcon />,
  prio: 1,
})
export class WelcomePage extends React.PureComponent {
  render() {
    return (
      <div>
        Willkommen bei Cosmetics and More
        <LoremIpsumComponent />
      </div>
    );
  }
}
