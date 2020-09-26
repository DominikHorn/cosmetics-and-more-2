import React from "react";
import { route } from "../routing";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { cosmeticServices, hairServices } from "./content";
import { ServiceComponent } from "@cosmetics-and-more/components";
import { DEFAULT_ANIMATION_DELAY } from "@cosmetics-and-more/types";
import { blue, cyan } from "@material-ui/core/colors";

const ServiceGrid = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });

  return (
    <Grid container spacing={xs ? 0 : 1}>
      {[...cosmeticServices, ...hairServices].map((service, i) => (
        <Grid
          item
          key={i}
          xs={12}
          sm={6}
          md={4}
          xl={2}
          style={{ marginBottom: xs ? theme.spacing(4) : 0 }}
        >
          <ServiceComponent
            {...service}
            appearAnimationDelay={`${DEFAULT_ANIMATION_DELAY * i}ms`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

@route({
  displayName: "Leistungen",
  path: "/services",
  icon: <RoomServiceIcon />,
  prio: 2,
  lightTheme: {
    palette: {
      primary: blue,
      secondary: cyan,
    },
  },
})
export class ServicesPage extends React.PureComponent {
  render() {
    return <ServiceGrid />;
  }
}
