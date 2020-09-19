import { makeStyles } from "@material-ui/core";

export const usePageStyles = makeStyles((theme) => ({
  stickToBottom: {
    /* stick to bottom of screen */
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  marginLeft: {
    marginLeft: theme.spacing(1),
  },
  tabIndicator: {
    height: "2px",
  },
}));
