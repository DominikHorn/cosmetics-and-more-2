import {
  Card,
  CardContent,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React from "react";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  duration: {
    fontSize: 14,
  },
  // pos: {
  //   marginBottom: 12,
  // },
});

export interface IServiceVariant {
  readonly title: string; // title/name of variant
  readonly price: number; // price in euro
}

export interface IServiceComponentProps {
  readonly duration: number; // duration of service in minutes
  readonly title: string; // title of serice
  readonly description: string; // textual description of the service
  readonly variants: IServiceVariant[];
}

const ServiceVariant = (props: IServiceVariant) => (
  <ListItem>
    <ListItemText>
      <Typography variant={"body1"}>{props.title}</Typography>
    </ListItemText>

    <ListItemSecondaryAction>
      <Typography variant="h6">{props.price}</Typography>
    </ListItemSecondaryAction>
  </ListItem>
);

export const ServiceComponent = (props: IServiceComponentProps) => {
  const classes = useStyles(props);
  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.duration}
          color="textSecondary"
          gutterBottom
        >
          Dauer: {props.duration}
        </Typography>

        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>

        {props.variants.length == 1 && (
          <ServiceVariant {...props.variants[0]} />
        )}

        <Typography variant={"body1"}>{props.description}</Typography>

        {props.variants.length > 1 &&
          props.variants.map((v, i) => <ServiceVariant key={i} {...v} />)}
      </CardContent>
    </Card>
  );
};
