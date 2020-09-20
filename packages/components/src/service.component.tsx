import {
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
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

const ServiceVariant = (props: IServiceVariant) => {
  const theme = useTheme();
  return (
    <ListItem>
      {props.title && (
        <ListItemText>
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item>
              <Typography variant={"body2"}>{props.title}</Typography>
            </Grid>
            {props.info && (
              <Grid item>
                <Tooltip title={props.info}>
                  <div
                    style={{
                      verticalAlign: "center",
                      width: theme.typography.body2.fontSize,
                      height: theme.typography.body2.fontSize,
                    }}
                  >
                    <InfoIcon
                      aria-label="info"
                      style={{
                        color: theme.palette.info.main,
                        width: theme.typography.body2.fontSize,
                        height: theme.typography.body2.fontSize,
                      }}
                    />
                  </div>
                </Tooltip>
              </Grid>
            )}
          </Grid>
        </ListItemText>
      )}

      <ListItemSecondaryAction>
        <Typography variant="subtitle2">{props.price},- €</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: 0,
    width: "100%",
    height: "100%",
  },
  duration: {
    fontSize: 14,
  },
  textRight: {
    textAlign: "end",
  },
  stickToParentBottom: {
    position: "relative",
    bottom: 0,
  },
}));

export const ServiceComponent = (props: IServiceComponentProps) => {
  const classes = useStyles(props);
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant="h5" component="h2">
        {props.title}
      </Typography>

      {props.description && (
        <Typography variant={"body2"}>{props.description}</Typography>
      )}

      <List dense={true}>
        {props.variants &&
          props.variants.map((v, i) => <ServiceVariant key={i} {...v} />)}
      </List>

      {props.price && (
        <Grid container spacing={1} className={classes.stickToParentBottom}>
          {props.duration && (
            <Grid item xs={6}>
              <Typography
                className={classes.duration}
                color="textSecondary"
                gutterBottom
              >
                ca. {props.duration} min
              </Typography>
            </Grid>
          )}

          <Grid item xs={6}>
            <Typography variant="subtitle2" className={classes.textRight}>
              {props.price},- €
            </Typography>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};
