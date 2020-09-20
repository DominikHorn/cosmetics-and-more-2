import React from "react";
import { route } from "../routing";
import FaceIcon from "@material-ui/icons/Face";
import { Grid } from "@material-ui/core";
import { hairServices } from "./content";
import { ServiceComponent } from "@cosmetics-and-more/components";
import { DEFAULT_ANIMATION_DELAY } from "@cosmetics-and-more/types";

@route({
  displayName: "Friseur Leistungen",
  path: "/hair-services",
  icon: <FaceIcon />,
  prio: 3,
})
export class HairServicesPage extends React.PureComponent {
  render() {
    return (
      <Grid container spacing={2}>
        {hairServices.map((service, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} xl={2}>
            <ServiceComponent
              {...service}
              appearAnimationDelay={`${
                DEFAULT_ANIMATION_DELAY * (hairServices.length - i)
              }ms`}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
