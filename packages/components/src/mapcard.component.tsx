import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

export interface IMapCardComponentProps {}

const useStyles = makeStyles({
  paper: {},
});

export const MapCardComponent = (props: IMapCardComponentProps) => {
  const classes = useStyles(props);
  return (
    <Paper elevation={0} className={classes.paper}>
      Unimplemented
    </Paper>
  );
};
