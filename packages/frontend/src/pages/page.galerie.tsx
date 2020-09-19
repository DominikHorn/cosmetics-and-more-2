import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { LoremIpsumComponent } from "@cosmetics-and-more/components";

@route({
  displayName: "Galerie",
  path: "/gallery",
  icon: <PhotoLibraryIcon />,
  prio: 2,
})
export class Galerie extends React.PureComponent {
  render() {
    return (
      <div>
        Dies ist die Galerie
        <LoremIpsumComponent />
      </div>
    );
  }
}
