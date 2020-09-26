import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

export interface IContactCardComponentProps {
  readonly avatarUrl: string;
  readonly avatarAlt?: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: "450px",
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: `1px solid rgba(0, 0, 0, 0.12)`,
  },
  centerText: {
    textAlign: "center",
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export const ContactCardComponent = (props: IContactCardComponentProps) => {
  const classes = useStyles(props);
  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant={"h2"} className={classes.centerText}>
        Kontaktdaten
      </Typography>

      <Divider className={classes.divider} />

      <Grid container spacing={2} alignItems={"center"}>
        <Grid item>
          <Avatar
            alt={props.avatarAlt || "Avatar"}
            src={props.avatarUrl}
            className={classes.avatar}
          />
        </Grid>
        <Grid item className={classes.centerText}>
          <Typography variant={"body1"}>Katarzyna Thurand</Typography>
          <Typography variant={"body1"}>Cosmetics and More</Typography>
          <Typography variant={"body1"}>Pretzfelder Strasse 15</Typography>
          <Typography variant={"body1"}>81249 München</Typography>
          &nbsp;
          <Typography variant={"body1"}>Telefon: +49 89 99757034</Typography>
          <Typography variant={"body1"}>Mobil: +49 179 2947662</Typography>
          <Typography variant={"body1"}>
            Email: cosmetics_and_more@me.com
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
