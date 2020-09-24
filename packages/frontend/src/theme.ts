import { ThemeOptions } from "@material-ui/core";
import { deepOrange, lightBlue, lime, teal } from "@material-ui/core/colors";

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
    h5: {
      fontWeight: 700,
      fontSize: "20px",
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    primary: deepOrange,
    secondary: lightBlue,
    background: {
      default: "#212121",
    },
    type: "dark",
  },
  typography: {
    h5: {
      fontWeight: 700,
      fontSize: "20px",
    },
  },
};
