import React, { useContext } from 'react';
import { PageContext } from '../../pageReducers/LandingPageReducer';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { ImageList, ImageListItem, useMediaQuery, ImageListItemBar, IconButton } from '@mui/material';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';

import { useStyles } from './style';

const GalleryWithPreview = React.memo(function GalleryWithPreviewComponent({ images, reverse, ...props }) {
  const classes = useStyles();
  const { dispatch } = useContext(PageContext);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={!tablet ? `${classes.galery_container}` : `${classes.galery_container} ${classes.mobile_wieve}`}>
      <ImageList sx={{ width: '100%', height: 'auto' }} cols={!mobile ? 3 : 2} rowHeight={mobile ? 100 : 160}>
        {images?.map((tile) => (
          <ImageListItem
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
            <img src={tile.img} alt={tile.title} loading="lazy" />
            {!mobile ? (
              <ImageListItemBar
                position='top'
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
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
})

export default GalleryWithPreview;

GalleryWithPreview.propTypes = {
  images: PropTypes.array.isRequired,
  reverse: PropTypes.bool,
};
