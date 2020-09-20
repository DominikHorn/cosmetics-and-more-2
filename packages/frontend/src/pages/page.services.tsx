import React from "react";
import { route } from "../routing";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import { Grid } from "@material-ui/core";
import { cosmeticServices } from "./content";
import { ServiceComponent } from "@cosmetics-and-more/components";
import { DEFAULT_ANIMATION_DELAY } from "@cosmetics-and-more/types";

@route({
  displayName: "Leistungen",
  path: "/services",
  icon: <RoomServiceIcon />,
  prio: 2,
})
export class ServicesPage extends React.PureComponent {
  render() {
    return (
      <Grid container spacing={2}>
        {cosmeticServices.map((service, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} xl={2}>
            <ServiceComponent
              {...service}
              appearAnimationDelay={`${DEFAULT_ANIMATION_DELAY * i}ms`}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
