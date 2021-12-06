import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  Grow,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { MapComponent } from "./map.component";
import LaunchIcon from "@material-ui/icons/Launch";
import SendIcon from "@material-ui/icons/Send";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import { de } from "date-fns/locale";

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
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

const whatsappText = (date: Date) => `Hallo Frau Thurand, 
ich wollte fragen, ob Sie am ${new Intl.DateTimeFormat("de-DE").format(
  date
)} noch einen Termin für mich hätten. Vielen Dank`;

function shouldDisableDate(date: MaterialUiPickersDate) {
  const today = new Date();

  // Can't reserve in the past
  if (date && today > date) return true;

  const day = date?.getDay();
  return day == 6 || day == 0 || day == 1 || day == 5;
}

export const ContactCardComponent = (props: IContactCardComponentProps) => {
  const classes = useStyles(props);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [date, changeDate] = useState<MaterialUiPickersDate>(new Date());

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

      <Typography variant={"body1"}>
        Für Terminanfragen können Sie mir gerne eine Nachricht per
        <a className={classes.link} onClick={() => setDialogOpen(true)}>
          {" Whatsapp"}
          <LaunchIcon style={{ fontSize: "15px" }} />{" "}
        </a>
        schreiben. Alternativ können Sie mich per Email erreichen oder unter
        einer der angegebenen Telefonnummern zu Geschäftszeiten anrufen.
      </Typography>

      <Divider className={classes.divider} />

      <MapComponent />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent style={{ padding: 0 }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={de}>
            <DatePicker
              autoOk
              orientation="landscape"
              variant="static"
              openTo="date"
              shouldDisableDate={shouldDisableDate}
              value={date}
              onChange={changeDate}
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            disabled={!date}
            onClick={() =>
              date &&
              window.open(
                `https://wa.me/491792947662?text=${encodeURIComponent(
                  whatsappText(date)
                )}`
              )
            }
          >
            Weiter
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
