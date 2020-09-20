import {
  Grid,
  Paper,
  Tooltip,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import React from "react";

export interface IServiceVariant {
  readonly title?: string; // title/name of variant
  readonly price: number; // price in euro
  readonly info?: string; // additional information (if applicable)
}

export interface IServiceComponentProps {
  readonly duration?: number; // duration of service in minutes
  readonly title: string; // title of serice
  readonly description?: string; // textual description of the service
  readonly variants?: IServiceVariant[];
  readonly price?: number; // price in euro
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: "100%",
    height: "100%",
  },
  rootGrid: {
    margin: 0,
    width: "100%",
    height: "100%",
  },
  textRight: {
    textAlign: "end",
  },
  bottomTextWrapper: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
}));

const ServiceVariant = (props: IServiceVariant) => {
  const classes = useStyles(props);
  const theme = useTheme();
  return (
    <Grid container item xs={12}>
      <Grid container item xs={10} spacing={0}>
        {props.title && (
          <Grid item>
            <Typography variant={"body2"}>{props.title}</Typography>
          </Grid>
        )}

        {props.info && (
          <Grid item>
            <Tooltip title={props.info}>
              <InfoIcon
                aria-label="info"
                style={{
                  color: theme.palette.info.main,
                  width: theme.typography.body2.fontSize,
                  height: theme.typography.body2.fontSize,
                }}
              />
            </Tooltip>
          </Grid>
        )}
      </Grid>

      <Grid item xs={2}>
        <Typography variant="subtitle2" className={classes.textRight}>
          {props.price},- €
        </Typography>
      </Grid>
    </Grid>
  );
};

export const ServiceComponent = (props: IServiceComponentProps) => {
  const classes = useStyles(props);
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container spacing={1} className={classes.rootGrid}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>

          {props.description && (
            <Typography variant={"body2"}>{props.description}</Typography>
          )}
        </Grid>

        {props.variants &&
          props.variants.map((v, i) => <ServiceVariant key={i} {...v} />)}

        <Grid container item xs={12} spacing={0} style={{ marginTop: "auto" }}>
          {props.duration && (
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="textSecondary">
                ca. {props.duration} min
              </Typography>
            </Grid>
          )}

          {props.price && (
            <Grid item xs={6}>
              <Typography variant="subtitle2" className={classes.textRight}>
                {props.price},- €
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};
