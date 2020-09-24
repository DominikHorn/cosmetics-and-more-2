import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import {
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { galleryImageURLs } from "./content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));

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
        <GridListTile key={i} cols={1}>
          <img src={url} />
        </GridListTile>
      ))}
    </GridList>
  );
};

@route({
  displayName: "Galerie",
  path: "/gallery",
  icon: <PhotoLibraryIcon />,
  prio: 3,
})
export class GaleriePage extends React.PureComponent {
  render() {
    return <ImageGrid />;
  }
}
