import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import {
  Fade,
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { galleryImageURLs } from "./content";
import { deepPurple, purple } from "@material-ui/core/colors";
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

const ImageGrid = () => {
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
            <img src={url} />
          </GridListTile>
        </Fade>
      ))}
    </GridList>
  );
};

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
})
export class GaleriePage extends React.PureComponent {
  render() {
    return <ImageGrid />;
  }
}
