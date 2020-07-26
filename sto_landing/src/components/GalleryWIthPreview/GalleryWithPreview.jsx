import React, { useContext } from 'react';
import { PageContext } from '../../pageReducers/LandingPageReducer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { GridList, GridListTile, useMediaQuery, GridListTileBar, IconButton } from '@material-ui/core';
import ZoomOutMapOutlinedIcon from '@material-ui/icons/ZoomOutMapOutlined';

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
  titleBar: {
    background: theme.backgrounds.greyGradient1,
  },
  icon: {
    color: theme.fontColors.secondary0,
    taransition: 'all 0.2s ease',
    opacity: '0.8',
    '&:hover': {
      opacity: '1',
    },
  },
  mobile_wieve: {
    overflowY: 'scroll',
    cursor: 'pointer',
  },
}));

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
