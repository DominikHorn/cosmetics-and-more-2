import { ThemeOptions } from "@material-ui/core";
import { grey, lime, teal } from "@material-ui/core/colors";

export const baseTheme: ThemeOptions = {
  typography: {
    h2: {
      fontSize: "2rem",
      fontWeight: 300,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 300,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 200,
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 200,
    },
  },
};

export const baseLightTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    primary: teal,
    secondary: lime,
    type: "light",
  },
};

export const baseDarkTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    primary: teal,
    secondary: grey,
    background: {
      default: "#101010",
      paper: "#202020",
    },
    type: "dark",
  },
};
