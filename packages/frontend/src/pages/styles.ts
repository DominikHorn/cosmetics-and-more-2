import { makeStyles } from "@material-ui/core";

export const usePageStyles = makeStyles((theme) => ({
  stickToBottom: {
    /* stick to bottom of screen */
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  tabIndicator: {
    height: "2px",
  },
}));
