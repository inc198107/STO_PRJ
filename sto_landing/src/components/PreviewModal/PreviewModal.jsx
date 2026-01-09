import React, { Fragment, useContext } from 'react';
import { PageContext } from '../../pageReducers/LandingPageReducer';
import { useTheme } from '@mui/material/styles';
import { Paper, Modal, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import { useStyles } from './style';

export default function ({ ...props }) {
  const { state, dispatch } = useContext(PageContext);
  const classes = useStyles();
  const picture = state.imageToPreview;

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  const modalClose = () => {
    dispatch({ type: 'PREVIEW_HIDE', payload: {} });
  };
  return (
    <Modal className={classes.preview_modal} open={state.openPreview} onClose={modalClose}>
      <Paper elevation={3} className={classes.preview_container}>
        <div className={classes.close} onClick={modalClose}>
          <CloseIcon color='inherit' />
        </div>
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
      </Paper>
    </Modal>
  );
}
