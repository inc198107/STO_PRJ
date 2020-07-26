import React, { Fragment } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

const useStyles = makeStyles((theme) => ({
  preview_container: {
    width: '100%',
    borderRadius: '6px',
    overflow: 'hidden',
    cursor: 'zoom-in',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  preview_img: {
    width: '100%',
    height: 'auto',
    maxHeight: '80vh',
    objectFit: 'contain',
  },
  controls: {
    position: 'absolute',
    width: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '16px',
    color: theme.palette.text.disabled,
    borderRadius: '16px',
    padding: '2px 8px',
    boxSizing: 'border-box',
    backgroundColor: theme.backgrounds.backgroundSecondary,
    top: '16px',
    left: 'calc(50% - 50px)',
    zIndex: '1',
    '& svg': {
      cursor: 'pointer',
    },
    '&:hover': {
      '& svg': {
        '& path': {
          fill: theme.palette.error.dark,
        },
      },
    },
  },
}));

export default function ZoomableImage({ picture, ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div className={classes.preview_container}>
      <TransformWrapper>
        {({ zoomIn, zoomOut, ...props }) => (
          <Fragment>
            {!mobile ? (
              <div className={classes.controls}>
                <ZoomOutIcon onClick={zoomOut} color='inherit' />
                <ZoomInIcon onClick={zoomIn} color='inherit' />
              </div>
            ) : (
              ''
            )}
            <TransformComponent>
              <img className={classes.preview_img} src={picture?.img} alt={picture?.title} />
            </TransformComponent>
          </Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}

ZoomableImage.propTypes = {
  picture: PropTypes.object.isRequired,
};
