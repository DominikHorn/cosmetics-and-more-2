import React, { useEffect, useState } from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import _uniqueId from "lodash/uniqueId";

const useStyles = makeStyles((theme) => ({
  map: {
    width: "100%",
    height: "calc(100vh - 420px)",
    [theme.breakpoints.down("sm")]: {
      height: "55vh",
    },
  },
}));
export const MapComponent = () => {
  const classes = useStyles();
  const mapkit = (window as any).mapkit;
  const [instanceId] = useState(_uniqueId("mapkitjs-map-"));

  // Configure mapkit & add map after initial render
  useEffect(() => {
    const eventListeners: {
      [key: string]: (event: { status: string }) => void;
    } = {
      "configuration-change": (event) => {
        switch (event.status) {
          case "Initialized":
            break;
          case "Refreshed":
            break;
        }
      },
      error: (event) => {
        switch (event.status) {
          case "Unauthorized":
            break;
          case "Too Many Requests":
            break;
        }
      },
    };

    // Hookup event listeners
    Object.entries(eventListeners).forEach(([eventName, listener]) =>
      mapkit.addEventListener(eventName, listener)
    );

    const poiLocation = new mapkit.Coordinate(48.15424, 11.4152);
    const marker = new mapkit.MarkerAnnotation(poiLocation, {
      title: "Cosmetics and More",
    });
    new mapkit.Map(instanceId, {
      region: new mapkit.CoordinateRegion(
        poiLocation,
        new mapkit.CoordinateSpan(0.005, 0.005)
      ),
      showsPointsOfInterest: true,
      annotations: [marker],
    });

    // Cleanup event listener on component unmount
    return () =>
      Object.entries(eventListeners).forEach(([eventName, listener]) =>
        mapkit.removeEventListener(eventName, listener)
      );
  }, []);

  return <div id={instanceId} className={classes.map} />;
};
