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
  readonly title?: string;
  readonly price?: string;
}

export interface IServiceVariant {
  readonly title?: string; // title/name of variant
  readonly price?: string; // price in euro (number might lead to fancy decimal weirdness)
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
  image: {
    width: "100%",
    maxHeight: "200px", // must be the same as imageItem maxHeight
    objectFit: "cover",
  },
  textRight: {
    textAlign: "end",
  },
  titleItem: {
    textAlign: "center",
    margin: theme.spacing(1.5),
  },
  variantsItem: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  descriptionItem: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  footerItem: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
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

      {props.price && (
        <Grid item xs={4}>
          <Typography variant="subtitle2" className={classes.textRight}>
            {props.price} €
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

const Image = (props: IService) => {
  const classes = useStyles(props);
  if (!props.imageURL) return null;
  return <img src={props.imageURL} className={classes.image} />;
};

const Title = (props: IService) => {
  const classes = useStyles(props);
  return (
    <Grid item xs={12} className={classes.titleItem}>
      <Typography variant="h5" component="h2">
        {props.title}
      </Typography>
    </Grid>
  );
};

const Description = (props: IService) => {
  const classes = useStyles(props);
  if (!props.description) return null;
  return (
    <Grid item xs={12} className={classes.descriptionItem}>
      <Typography variant={"body2"}>{props.description}</Typography>
    </Grid>
  );
};

const Variants = (props: IService) => {
  const classes = useStyles(props);
  if (!props.variants) return null;
  return (
    <Grid container item xs={12} spacing={0} className={classes.variantsItem}>
      {props.variantsHeader && (
        <Grid container item xs={12}>
          <Grid item xs={8}>
            {props.variantsHeader.title && (
              <Typography variant="subtitle2" color="textSecondary">
                {props.variantsHeader.price}
              </Typography>
            )}
          </Grid>

          <Grid item xs={4} className={classes.textRight}>
            {props.variantsHeader.price && (
              <Typography variant="subtitle2" color="textSecondary">
                {props.variantsHeader.price}
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
      {props.variants.map((v, i) => (
        <ServiceVariant key={i} {...v} />
      ))}
    </Grid>
  );
};

const Footer = (props: IService) => {
  const classes = useStyles(props);
  if (!props.duration && !props.price) return null;
  return (
    <Grid container item xs={12} spacing={0} className={classes.footerItem}>
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
            {props.price} €
          </Typography>
        </Grid>
      )}
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
        <Image {...props} />

        <Grid container spacing={0}>
          <Title {...props} />
          <Description {...props} />
          <Variants {...props} />
          <Footer {...props} />
        </Grid>
      </Paper>
    </Zoom>
  );
};
