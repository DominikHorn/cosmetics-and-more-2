import React from "react";
import { route } from "../routing";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import { Grid } from "@material-ui/core";
import { cosmeticServices } from "./content";
import { ServiceComponent } from "@cosmetics-and-more/components";

@route({
  displayName: "Leistungen",
  path: "/services",
  icon: <RoomServiceIcon />,
  prio: 2,
})
export class ServicesPage extends React.PureComponent {
  render() {
    return (
      <Grid container spacing={3}>
        {cosmeticServices.map((service, i) => (
          <Grid item key={i} xs={6} sm={4} xl={1}>
            <ServiceComponent {...service} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
