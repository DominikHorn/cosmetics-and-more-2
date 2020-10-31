import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  useMediaQuery,
  useTheme,
  Slide,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  tierversucheLogo: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  profileImageContainer: {
    textAlign: "center",
  },
  imageContainer: {
    textAlign: "center",
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
    <Grid
      container
      spacing={xs ? 0 : 2}
      alignItems={"center"}
      style={
        xs
          ? {}
          : {
              paddingRight: theme.spacing(2),
              paddingLeft: theme.spacing(2),
            }
      }
    >
      {!xs && (
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={3}
          className={classes.profileImageContainer}
        >
          <Slide
            direction={"right"}
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <img src={"images/home/profile_low.png"} width={"75%"} />
          </Slide>
        </Grid>
      )}

      <Grid item xs={12} sm={7} md={8} lg={9}>
        <Slide
          direction={"left"}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <Typography variant="h2" className={classes.title}>
            {"Herzlich Willkommen bei Cosmetics and More"}
          </Typography>
        </Slide>

        {xs && (
          <Slide
            direction={"right"}
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <div className={classes.profileImageContainer}>
              <img src={"images/home/profile_low.png"} width={"75%"} />
            </div>
          </Slide>
        )}

        <Slide
          direction={"left"}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={600}
        >
          <Typography variant="body1" className={classes.description}>
            Hallo liebe Besucherin, Hallo lieber Besucher, mein Name ist
            Katarzyna Thurand und ich freue mich Sie auf der Webseite meines
            Kosmetik- und Frisörstudios begrüßen zu dürfen. Schön, dass Sie da
            sind. Auf diesen Seiten können Sie sich bequem in meinem Studio
            umsehen sowie alle Informationen zu meinem aktuellen
            Leistungsangebot finden. Wenn Sie einen Termin vereinbaren wollen
            kontaktieren Sie mich gerne telefonisch oder per Email. Ich freue
            mich Sie schon bald als KundIn begrüßen zu dürfen!
          </Typography>
        </Slide>
      </Grid>

      <Grid item xs={12} sm={5} md={4} lg={3}>
        <Slide
          direction={"right"}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={750}
        >
          <div className={classes.imageContainer}>
            <img
              src={"images/home/entspannung_low.jpg"}
              width={"100%"}
              height={"auto"}
            />
          </div>
        </Slide>
      </Grid>

      <Grid container item xs={12} sm={7} md={8} lg={9}>
        <Grid item xs={12}>
          <Slide
            direction={"left"}
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={700}
          >
            <Typography variant="h3" className={classes.title}>
              {"Kosmetik"}
            </Typography>
          </Slide>
        </Grid>
        <Grid item xs={12}>
          <Slide
            direction={"left"}
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={800}
          >
            <Typography variant="body1" className={classes.description}>
              Gönnen Sie sich eine wohlverdiente Auszeit für Körper und Seele.
              Von Massagen über Maniküre und Gesichtsbehandlungen bis hin zu
              Pediküre biete ich Ihnen die passende, persönliche Behandlung, die
              Ihr Körper verdient. Jahrelange Erfahrung machen mich zu der
              perfekt qualifizierten Person für ihre kosmetischen Bedürfnisse.
              Vereinbaren Sie Ihren nächsten Wohlfühltermin gleich heute!
            </Typography>
          </Slide>
        </Grid>

        <Grid
          container
          item
          lg={3}
          md={5}
          xs={12}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item sm={12} className={classes.tierversucheLogo}>
            <Slide
              direction={"left"}
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={900}
            >
              <img
                src={"images/home/tierversuche.png"}
                alt={"Hase gegen Tierversuche Logo"}
                width={"100%"}
                height={"auto"}
              />
            </Slide>
          </Grid>
        </Grid>

        <Grid container item lg={9} md={7} xs={12} alignItems={"center"}>
          <Slide
            direction={"left"}
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="body1" className={classes.description}>
              In meinem Salon verwende ich hochwertige Kosmetikprodukte von
              HAGINA Cosmetics, welche unter Zusatz natürlicher Inhaltsstoffe
              ohne Tierversuche, nach den Richtlinien des deutschen
              Tierverbundes e.V., im bayerischen Iffeldorf hergestellt und
              abgefüllt werden.
            </Typography>
          </Slide>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={5} md={4} lg={3}>
        <Slide
          direction={"right"}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <div className={classes.imageContainer}>
            <img
              src={"images/home/kaemmen_low.jpg"}
              width={"100%"}
              height={"auto"}
            />
          </div>
        </Slide>
      </Grid>

      <Grid item xs={12} sm={7} md={8} lg={9}>
        <Slide
          direction={"left"}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1100}
        >
          <Typography variant="h3" className={classes.title}>
            {"Friseur"}
          </Typography>
        </Slide>

        <Slide
          direction={"left"}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1200}
        >
          <Typography variant="body1" className={classes.description}>
            Erfüllen Sie sich den Wunsch ihrer Traumfrisur! Ob Haarschnitt,
            Tönung, Färbung, Strähnen oder Brautfrisur inklusive Make-up, über
            zwanzig Jahre Berufserfahrung garantieren eine Friseur genau nach
            Ihren Ansprüchen.
          </Typography>
        </Slide>
      </Grid>
    </Grid>
  );
};
