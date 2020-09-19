import React from "react";
import { route } from "../routing";

@route({
  displayName: "Galerie",
  path: "/gallery",
})
export class Galerie extends React.PureComponent {
  render() {
    return <div>Dies ist die Galerie</div>;
  }
}
