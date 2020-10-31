import {
  Avatar,
  Divider,
  Grid,
  Grow,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MapComponent } from "./map.component";

export interface IContactCardComponentProps {
  readonly avatarUrl: string;
  readonly avatarAlt?: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
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
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
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

      <Grow in={true}>
        <Grid container spacing={2} alignItems={"center"} justify={"center"}>
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
            <Typography variant={"body1"}>
              {"Telefon: "}
              <a className={classes.link} href={"tel:+498999757034"}>
                +49 89 99757034
              </a>
            </Typography>
            <Typography variant={"body1"}>
              {"Mobil: "}
              <a className={classes.link} href={"tel:+491792947662"}>
                +49 179 2947662
              </a>
            </Typography>
            <Typography variant={"body1"}>
              {"Email: "}
              <a
                className={classes.link}
                href={"mailto:cosmetics_and_more@me.com?subject=Terminanfrage"}
              >
                cosmetics_and_more@me.com
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grow>

      <Divider className={classes.divider} />

      <MapComponent />
    </Paper>
  );
};
