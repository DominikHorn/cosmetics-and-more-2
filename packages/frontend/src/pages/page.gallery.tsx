import React from "react";
import { route } from "../routing";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { galleryImageURLs } from "./content";

const useStyles = makeStyles((theme) =>
  createStyles({
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
  })
);

const ImageGrid = () => {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });
  const sm = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  return (
    <GridList
      cellHeight={400}
      className={classes.gridList}
      cols={xs ? 1 : sm ? 2 : 3}
      style={{ width: xs ? "80%" : "100%", margin: "auto" }}
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
  prio: 4,
})
export class GaleriePage extends React.PureComponent {
  render() {
    return <ImageGrid />;
  }
}
