import React from "react";
import { blueGrey, grey, indigo, lightBlue } from "@material-ui/core/colors";
import { route } from "../routing";
import PhoneIcon from "@material-ui/icons/Phone";
import { ContactCardComponent } from "@cosmetics-and-more/components";

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
  darkTheme: {
    palette: {
      primary: blueGrey,
      secondary: grey,
    },
  },
})
export class ContactPage extends React.PureComponent {
  render() {
    return <ContactCardComponent avatarUrl={"images/contact/profile.png"} />;
  }
}
