import React, { Fragment } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

import { useStyles } from './style';

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
