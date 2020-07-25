import React, { useContext } from 'react';
import { PageContext } from '../../pageReducers/LandingPageReducer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GridList, GridListTile, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  galery_container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  tile: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(0.99)',
    },
    transition: 'transform 0.2s ease',
  },
  mobile_wieve: {
    maxHeight: '360px',
    overflowY: 'scroll',
  },
}));

export default function GalleryWithPreview({ images, ...props }) {
  const classes = useStyles();
  const { dispatch } = useContext(PageContext);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div className={!mobile ? `${classes.galery_container}` : `${classes.galery_container} ${classes.mobile_wieve}`}>
      <GridList cellHeight={160} className={classes.gridList} cols={!mobile ? 3 : 1}>
        {images?.map((tile) => (
          <GridListTile
            className={classes.tile}
            key={tile.img}
            cols={tile.cols || 1}
            onClick={() => {
              dispatch({
                type: 'PREVIEW_SHOW',
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
