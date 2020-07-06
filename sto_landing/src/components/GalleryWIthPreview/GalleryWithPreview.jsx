import React, { useContext } from "react";
import { PageContext } from "../../pageReducers/LandingPageReducer";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  galery_container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "auto",
  },
  tile: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(0.99)",
    },
    transition: "transform 0.2s ease",
  },
}));

export default function GalleryWithPreview({ images, ...props }) {
  const classes = useStyles();
  const { dispatch } = useContext(PageContext);
  return (
    <div className={classes.galery_container}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images?.map((tile) => (
          <GridListTile
            className={classes.tile}
            key={tile.img}
            cols={tile.cols || 1}
            onClick={() => {
              dispatch({
                type: "PREVIEW_SHOW",
                payload: { open: true, image: tile },
              });
            }}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
