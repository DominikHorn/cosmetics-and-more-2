import React from "react";
import { indigo, lightBlue } from "@material-ui/core/colors";
import { route } from "../routing";
import PhoneIcon from "@material-ui/icons/Phone";
import {
  ContactCardComponent,
  MapCardComponent,
} from "@cosmetics-and-more/components";
import { Grid } from "@material-ui/core";

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
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ContactCardComponent avatarUrl={"images//contact/profile.png"} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <MapCardComponent />
        </Grid>
      </Grid>
    );
  }
}
