import React from "react";
import { indigo, lightBlue } from "@material-ui/core/colors";
import { route } from "../routing";
import PhoneIcon from "@material-ui/icons/Phone";

@route({
  displayName: "Kontakt",
  path: "/contact",
  icon: <PhoneIcon />,
  prio: 4,
  lightTheme: {
    palette: {
      primary: indigo,
      secondary: lightBlue,
    },
  },
})
export class ContactPage extends React.PureComponent {
  render() {
    return <div>Hier könnte Ihre Werbung stehen</div>;
  }
}
