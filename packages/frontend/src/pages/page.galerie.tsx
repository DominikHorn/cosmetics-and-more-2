import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

@route({
  displayName: "Galerie",
  path: "/gallery",
  icon: <PhotoLibraryIcon />,
})
export class Galerie extends React.PureComponent {
  render() {
    return <div>Dies ist die Galerie</div>;
  }
}
