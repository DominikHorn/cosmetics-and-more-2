import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { AppleMaps } from "react-apple-mapkitjs";

export interface IMapCardComponentProps {}

const useStyles = makeStyles({
  paper: {},
});

const mapkitJWT =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjM4QkdOTlE5NjgifQ.eyJpc3MiOiJLNjZUVzdGUk4zIiwiaWF0IjoxNjAxMTQwMzYyLjE3MiwiZXhwIjoxNjMyNjc2MzYyLjE3Mn0.62zCnRGk8wM-TW_iBxao10YIQVW-GcGmUD-DjTeA-6sKyzRnZq11tMVAgAmVcjqkIrBq8Hc9m1hJeET5IkZMnA";

export const MapCardComponent = (props: IMapCardComponentProps) => {
  const classes = useStyles(props);
  return (
    <Paper elevation={0} className={classes.paper}>
      <AppleMaps
        token={mapkitJWT}
        longitude={30.8008}
        latitude={-1.5491}
        zoomLevel={100}
        height={"512px"}
        width={"512px"}
      />
    </Paper>
  );
};
