import React from "react";
import { route } from "../routing";
import PrivacyIcon from "@material-ui/icons/Lock";
import { Alert } from "@material-ui/lab";

@route({
  displayName: "Impressum & Datenschutz",
  path: "/impressum",
  icon: <PrivacyIcon />,
  prio: 5,
})
export class ImpressumPage extends React.PureComponent {
  render() {
    // TODO: attributieren von Bild:
    // Foto von Shiny Diamond von Pexels

    return <Alert severity={"error"}>Unimplemented</Alert>;
  }
}
