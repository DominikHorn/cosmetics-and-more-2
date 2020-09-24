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
    h1: {
      fontSize: "42px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "30px",
      fontWeight: 400,
    },
    h5: {
      fontWeight: 700,
      fontSize: "20px",
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
