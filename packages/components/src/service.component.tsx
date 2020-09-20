import {
  Grid,
  Paper,
  Tooltip,
  Typography,
  Zoom,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import React from "react";
import { DEFAULT_ANIMATION_DURATION } from "@cosmetics-and-more/types";

export interface IServiceVariantHeader {
  readonly titleHeader?: string;
  readonly priceHeader?: string;
}

export interface IServiceVariant {
  readonly title?: string; // title/name of variant
  readonly price: string; // price in euro (number might lead to fancy decimal weirdness)
  readonly info?: string; // additional information (if applicable)
}

export interface IService {
  readonly duration?: number; // duration of service in minutes
  readonly title: string; // title of serice
  readonly description?: string; // textual description of the service
  readonly variantsHeader?: IServiceVariantHeader;
  readonly variants?: IServiceVariant[];
  readonly price?: string; // price in euro
  readonly imageURL?: string; // url to image to display

  readonly appearAnimationDuration?: TransitionProps["timeout"];
  readonly appearAnimationDelay?: CSSProperties["transitionDelay"];
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  rootGrid: {
    width: "100%",
    height: "100%",
  },
  contentGrid: {
    margin: theme.spacing(1),
  },
  titleItem: {
    textAlign: "center",
  },
  imageItem: {
    padding: "0px !important",
  },
  textRight: {
    textAlign: "end",
  },
  spaceTop: {
    marginTop: "auto",
  },
  spaceBottom: {
    marginBottom: "auto",
  },
  spaceTopBottom: {
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

const ServiceVariant = (props: IServiceVariant) => {
  const classes = useStyles(props);
  const theme = useTheme();
  return (
    <Grid container item xs={12}>
      <Grid container item xs={8} spacing={0}>
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

      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.textRight}>
          {props.price} €
        </Typography>
      </Grid>
    </Grid>
  );
};

export const ServiceComponent = (props: IService) => {
  const classes = useStyles(props);

  return (
    <Zoom
      in={true}
      timeout={props.appearAnimationDuration || DEFAULT_ANIMATION_DURATION}
      style={{ transitionDelay: props.appearAnimationDelay }}
    >
      <Paper elevation={0} className={classes.root}>
        <Grid container spacing={0} className={classes.rootGrid}>
          {props.imageURL && (
            <Grid item xs={12} className={classes.imageItem}>
              <img
                src={props.imageURL}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
            </Grid>
          )}

          <Grid item container spacing={1} className={classes.contentGrid}>
            <Grid item xs={12} className={classes.titleItem}>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
            </Grid>

            {props.description && (
              <Grid item xs={12} className={classes.spaceTop}>
                <Typography variant={"body2"}>{props.description}</Typography>
              </Grid>
            )}

            {props.variants && (
              <Grid
                container
                item
                xs={12}
                spacing={0}
                className={classes.spaceBottom}
              >
                {props.variantsHeader && (
                  <Grid container item xs={12}>
                    <Grid item xs={8}>
                      {props.variantsHeader.titleHeader && (
                        <Typography variant="subtitle2" color="textSecondary">
                          {props.variantsHeader.priceHeader}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={4} className={classes.textRight}>
                      {props.variantsHeader.priceHeader && (
                        <Typography variant="subtitle2" color="textSecondary">
                          {props.variantsHeader.priceHeader}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                )}
                {props.variants.map((v, i) => (
                  <ServiceVariant key={i} {...v} />
                ))}
              </Grid>
            )}

            {(props.duration || props.price) && (
              <Grid
                container
                item
                xs={12}
                spacing={0}
                className={classes.spaceTop}
              >
                {props.duration && (
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">
                      ca. {props.duration} min
                    </Typography>
                  </Grid>
                )}

                {props.price && (
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textRight}
                    >
                      {props.price} €
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Zoom>
  );
};
