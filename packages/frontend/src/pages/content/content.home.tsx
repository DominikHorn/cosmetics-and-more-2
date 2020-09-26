import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  profileImageContainer: {
    textAlign: "center",
  },
  imageContainer: {
    height: "100%",
    maxHeight: "max(25vh, 200px)",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    margin: theme.spacing(1),
  },
}));

export const HomeContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });

  return (
    <Grid container spacing={xs ? 0 : 2} alignItems={"center"}>
      {!xs && (
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          className={classes.profileImageContainer}
        >
          <img src={"images/home/profile_low.png"} width={"75%"} />
        </Grid>
      )}

      <Grid item xs={12} sm={7} md={8}>
        <Typography variant="h3" className={classes.title}>
          {"Herzlich Willkommen bei Cosmetics and More"}
        </Typography>

        {xs && (
          <div className={classes.profileImageContainer}>
            <img src={"images/home/profile_low.png"} width={"50%"} />
          </div>
        )}

        <Typography variant="body1" className={classes.description}>
          {`Hallo liebe Besucherin, Hallo lieber Besucher, mein Name ist Katarzyna Thurand und ich freue mich 
        Sie auf der Webseite meines Kosmetik- und Frisörstudios begrüßen zu dürfen. Schön, dass Sie da sind.
        Auf diesen Seiten können Sie sich bequem in meinem Studio umsehen sowie alle Informationen zu meinem 
        aktuellen Leistungsangebot finden. Wenn Sie einen Termin vereinbaren wollen kontaktieren Sie mich gerne
        telefonisch oder per Email. Ich freue mich Sie schon bald als KundIn begrüßen zu dürfen!`}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={5} md={4}>
        <div className={classes.imageContainer}>
          <img
            src={"images/home/wellness_low.jpg"}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={7} md={8}>
        <Typography variant="h3" className={classes.title}>
          {"Kosmetik"}
        </Typography>

        <Typography variant="body1" className={classes.description}>
          {`Gönnen Sie sich eine wohlverdiente Auszeit für Körper und Seele. Von Massagen über Maniküre und 
          Gesichtsbehandlungen bis hin zu Pediküre biete ich Ihnen die passende, persönliche Behandlung, die 
          Ihr Körper verdient. Jahrelange Erfahrung machen mich zu der perfekt qualifizierten Person für ihre 
          kosmetischen Bedürfnisse. Vereinbaren Sie Ihren nächsten Wohlfühltermin gleich heute!`}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={5} md={4}>
        <div className={classes.imageContainer}>
          <img
            src={"images/home/kaemmen_low.jpg"}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={7} md={8}>
        <Typography variant="h3" className={classes.title}>
          {"Friseur"}
        </Typography>

        <Typography variant="body1" className={classes.description}>
          {`Erfüllen Sie sich den Wunsch ihrer Traumfrisur! Ob Haarschnitt, Tönung, Färbung, Strähnen oder Brautfrisur 
          inklusive Make-up, über zwanzig Jahre Berufserfahrung garantieren eine Friseur genau nach Ihren Ansprüchen.`}
        </Typography>
      </Grid>
    </Grid>
  );
};
