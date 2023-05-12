import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  useMediaQuery,
  useTheme,
  Slide,
  Paper,
} from "@material-ui/core";

const welcomeImage = "images/home/profile_low.png";
const welcomeImageAlt = "Bild von Katrin Thurand";
const welcomeTitle = "Herzlich Willkommen bei Cosmetics and More";
const welcomeText = `
    Hallo liebe Besucherin, Hallo lieber Besucher, mein Name ist
    Katrin Thurand und ich freue mich Sie auf der Webseite meines
    Kosmetik- und Frisörstudios begrüßen zu dürfen. Schön, dass Sie da
    sind. Auf diesen Seiten können Sie sich bequem in meinem Studio
    umsehen sowie alle Informationen zu meinem aktuellen
    Leistungsangebot finden. Wenn Sie einen Termin vereinbaren wollen
    kontaktieren Sie mich gerne telefonisch oder per Email. Ich freue
    mich Sie schon bald als KundIn begrüßen zu dürfen!`.trim();

const cosmeticImage = "images/home/entspannung_low.jpg";
const cosmeticImageAlt = "Symbol der Entspannung";
const cosmeticTitle = "Kosmetik";
const cosmeticText = `
    Gönnen Sie sich eine wohlverdiente Auszeit für Körper und Seele.
    Von Massagen über Maniküre und Gesichtsbehandlungen bis hin zu
    Pediküre biete ich Ihnen die passende, persönliche Behandlung,
    die Ihr Körper verdient. Jahrelange Erfahrung machen mich zu der
    perfekt qualifizierten Person für ihre kosmetischen Bedürfnisse.
    Vereinbaren Sie Ihren nächsten Wohlfühltermin gleich heute!`.trim();

const tierversucheText = `
    In meinem Salon verwende ich hochwertige Kosmetikprodukte von
    HAGINA Cosmetics, welche unter Zusatz natürlicher Inhaltsstoffe
    ohne Tierversuche, nach den Richtlinien des deutschen
    Tierverbundes e.V., im bayerischen Iffeldorf hergestellt und
    abgefüllt werden. HAGINA Cosmetics ist Mitglied des Internationalen 
    Herstellerverbands gegen Tierversuche in der Kosmetik 
    (Betriebsnummer H501029)`.trim();

const friseurImage = "images/home/kaemmen_low.jpg";
const friseurImageAlt = "Frau beim Haarstyling";
const friseurTitle = "Friseur";
const friseurText = `
    Erfüllen Sie sich den Wunsch ihrer Traumfrisur! Ob Haarschnitt,
    Tönung, Färbung, Strähnen oder Brautfrisur inklusive Make-up, über
    zwanzig Jahre Berufserfahrung garantieren eine Friseur genau nach
    Ihren Ansprüchen.`.trim();

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
  welcomeImageContainer: {
    textAlign: "center",
  },
  imageContainer: {
    textAlign: "center",
  },
  description: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export const HomeContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });

  return (
    <Paper elevation={0} className={classes.paper}>
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
            className={classes.welcomeImageContainer}
          >
            <Slide
              direction={"right"}
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={500}
            >
              <img src={welcomeImage} width={"75%"} alt={welcomeImageAlt} />
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
              {welcomeTitle}
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
              <div className={classes.welcomeImageContainer}>
                <img src={welcomeImage} width={"75%"} alt={welcomeImageAlt} />
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
              {welcomeText}
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
                src={cosmeticImage}
                width={"100%"}
                height={"auto"}
                alt={cosmeticImageAlt}
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
                {cosmeticTitle}
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
                {cosmeticText}
              </Typography>
            </Slide>
          </Grid>

          <Grid container item xs={12} alignItems={"center"}>
            <Slide
              direction={"left"}
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="body1" className={classes.description}>
                {tierversucheText}
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
                src={friseurImage}
                alt={friseurImageAlt}
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
              {friseurTitle}
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
              {friseurText}
            </Typography>
          </Slide>
        </Grid>
      </Grid>
    </Paper>
  );
};
