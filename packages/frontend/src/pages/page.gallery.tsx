import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import {
  Dialog,
  DialogContent,
  Fade,
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { galleryImageURLs } from "./content";
import { deepPurple, grey, purple } from "@material-ui/core/colors";
import {
  DEFAULT_ANIMATION_DELAY,
  DEFAULT_ANIMATION_DURATION,
} from "@cosmetics-and-more/types";

const useStyles = makeStyles({
  gridList: {
    width: "100%",
    height: "100%",
  },
});

const ImageGrid = ({
  setPreviewImageUrl,
}: {
  setPreviewImageUrl: (url: string) => void;
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });
  const sm = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  return (
    <GridList
      cellHeight={400}
      className={classes.gridList}
      cols={sm || xs ? 2 : 3}
    >
      {galleryImageURLs.map((url, i) => (
        <Fade
          key={i}
          in={true}
          timeout={DEFAULT_ANIMATION_DURATION}
          style={{
            transitionDelay: `${DEFAULT_ANIMATION_DELAY * (i % 3)}ms`,
          }}
        >
          <GridListTile cols={1}>
            <img src={url} onClick={() => setPreviewImageUrl(url)} />
          </GridListTile>
        </Fade>
      ))}
    </GridList>
  );
};

const DialogComponent = ({
  dialogOpen,
  setDialogOpen,
  previewImageURL,
}: {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  previewImageURL: string;
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={dialogOpen}
      maxWidth={"xl"}
      onClose={() => setDialogOpen(false)}
    >
      <DialogContent style={{ padding: 0, overflow: "hidden" }}>
        <img
          src={previewImageURL}
          style={{
            maxHeight: `calc(100vh - ${theme.spacing(4 * 2)}px)`,
            maxWidth: `calc(100vw - ${theme.spacing(4 * 2)}px)`,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

interface IState {
  readonly previewImageURL: string;
  readonly dialogOpen: boolean;
}

@route({
  displayName: "Galerie",
  path: "/gallery",
  icon: <PhotoLibraryIcon />,
  prio: 3,
  lightTheme: {
    palette: {
      primary: purple,
      secondary: deepPurple,
    },
  },
  darkTheme: {
    palette: {
      primary: deepPurple,
      secondary: grey,
    },
  },
})
export class GaleriePage extends React.PureComponent<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { previewImageURL: galleryImageURLs[0], dialogOpen: false };
  }

  render() {
    const { previewImageURL, dialogOpen } = this.state;

    return (
      <>
        <ImageGrid
          setPreviewImageUrl={(previewImageURL) =>
            this.setState({ previewImageURL, dialogOpen: true })
          }
        />

        <DialogComponent
          dialogOpen={dialogOpen}
          setDialogOpen={(dialogOpen) => this.setState({ dialogOpen })}
          previewImageURL={previewImageURL}
        />
      </>
    );
  }
}
