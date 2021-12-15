import React, { useCallback, useState } from "react";
import {
  makeStyles,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

export interface IInfoBannerComponentProps {
  readonly message: string;
  readonly title?: string;
  readonly severity?: "error" | "info";
}

const useStyles = makeStyles({
  desktopBar: {
    marginTop: "40px",
    boxShadow: "5px 5px 20px gray",
  },
  mobileBar: {
    marginBottom: "10px",
    boxShadow: "5px 5px 20px gray",
  },
});

export const InfoBannerComponent = (props: IInfoBannerComponentProps) => {
  const classes = useStyles(props);
  const [open, setOpen] = useState(true);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    // disabling server side rendering prevents double page render on load
    // which in turn prevents false negatives for 'isDesktop' on initial page
    // load
    noSsr: true,
  });

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: isDesktop ? "top" : "bottom",
        horizontal: "center",
      }}
      className={isDesktop ? classes.desktopBar : classes.mobileBar}
    >
      <Alert severity={props.severity || "error"} onClose={handleClose}>
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {props.message}
      </Alert>
    </Snackbar>
  );
};
