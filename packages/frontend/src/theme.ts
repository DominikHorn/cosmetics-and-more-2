import { ThemeOptions } from "@material-ui/core";
import { blueGrey, deepPurple, lime, teal } from "@material-ui/core/colors";

export const lightTheme: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: lime,
    background: {
      default: "#f5f5f5",
    },
    type: "light",
  },
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
      fontSize: "0.875rem",
      fontWeight: 200,
    },
    subtitle2: {
      fontWeight: 200,
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...lightTheme,
  palette: {
    primary: deepPurple,
    secondary: blueGrey,
    background: {
      default: "#212121",
    },
    type: "dark",
  },
};
