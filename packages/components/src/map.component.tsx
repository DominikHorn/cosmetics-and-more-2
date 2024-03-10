import React from "react";
import { makeStyles } from "@material-ui/core";
import _uniqueId from "lodash/uniqueId";

const useStyles = makeStyles((theme) => ({
  map: {
    width: "100%",
    height: "calc(100vh - 420px)",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));
export const MapComponent = () => {
  const classes = useStyles();

  return <div className={classes.map}>
    <iframe
      width="100%"
      height="100%"
      src="https://www.openstreetmap.org/export/embed.html?bbox=11.40785336494446%2C48.15074098066947%2C11.422637701034548%2C48.15769807643953&amp;layer=mapnik&amp;marker=48.15421964646634%2C11.415245532989502"
    />
  </div>;
};
