import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { LoremIpsumComponent } from "@cosmetics-and-more/components";

@route({
  displayName: "Galerie",
  path: "/gallery",
  icon: <PhotoLibraryIcon />,
  prio: 3,
})
export class GaleriePage extends React.PureComponent {
  render() {
    return (
      <div>
        Dies ist die Galerie
        <LoremIpsumComponent />
      </div>
    );
  }
}
