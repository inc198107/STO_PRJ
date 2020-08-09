import React, { useContext } from 'react';
import { PageContext } from '../../pageReducers/LandingPageReducer';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { GridList, GridListTile, useMediaQuery, GridListTileBar, IconButton } from '@material-ui/core';
import ZoomOutMapOutlinedIcon from '@material-ui/icons/ZoomOutMapOutlined';

import { useStyles } from './style';

export default function GalleryWithPreview({ images, reverse, ...props }) {
  const classes = useStyles();
  const { dispatch } = useContext(PageContext);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={!tablet ? `${classes.galery_container}` : `${classes.galery_container} ${classes.mobile_wieve}`}>
      <GridList cellHeight={mobile ? 100 : 160} className={classes.gridList} cols={!mobile ? 3 : 2}>
        {images?.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={mobile ? 1 : tile.cols || 1}
            onClick={() => {
              if (tablet) {
                dispatch({
                  type: 'PREVIEW_SHOW',
                  payload: { open: true, image: tile },
                });
              }
            }}
          >
            <img src={tile.img} alt={tile.title} />
            {!mobile ? (
              <GridListTileBar
                titlePosition='top'
                actionIcon={
                  <IconButton
                    aria-label={`zoom in ${tile.title}`}
                    className={classes.icon}
                    onClick={() => {
                      dispatch({
                        type: 'PREVIEW_SHOW',
                        payload: { open: true, image: tile },
                      });
                    }}
                  >
                    <ZoomOutMapOutlinedIcon />
                  </IconButton>
                }
                actionPosition='right'
                className={classes.titleBar}
              />
            ) : (
              ''
            )}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

GalleryWithPreview.propTypes = {
  images: PropTypes.array.isRequired,
  reverse: PropTypes.bool,
};
