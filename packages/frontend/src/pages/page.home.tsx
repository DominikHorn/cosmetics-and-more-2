import React from "react";
import { route } from "../routing";

@route({
  displayName: "Startseite",
  path: "/",
})
export class Homepage extends React.PureComponent {
  render() {
    return <div>Dies ist die Homepage</div>;
  }
}
