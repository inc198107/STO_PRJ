import React, { Fragment, useContext } from "react";
import { PageContext } from "../../pageReducers/LandingPageReducer";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Modal, useMediaQuery } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const useStyles = makeStyles((theme) => ({
  preview_modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  preview_container: {
    width: "calc(100% - 32px)",
    maxWidth: "1000px",
    //border: "1px solid",
    //borderColor: theme.palette.secondary.dark,
    borderRadius: "6px",
    overflow: "hidden",
    cursor: "zoom-in",
    position: "relative",
    backgroundColor: "rgba(255,255,255, 0.8)",
  },
  preview_img: {
    width: "100%",
    height: "auto",
    maxHeight: "80vh",
    objectFit: "contain",
  },
  controls: {
    position: "absolute",
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "24px",
    color: theme.palette.text.disabled,
    borderRadius:'6px',
    padding: '2px 8px',
    boxSizing: 'border-box',
    backgroundColor: theme.backgrounds.backgroundSecondary,
    top: "24px",
    left: "calc(50% - 50px)",
    zIndex: "1",
    "& svg": {
      cursor: "pointer",
    },
    "&:hover":{
        "& svg":{
            "& path":{
                'fill':theme.palette.error.dark,
            }
        }
    }
  },
  close: {
    width: "39px",
    height: "39px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '6px',
    backgroundColor: theme.backgrounds.backgroundSecondary,
    position: "absolute",
    top: "24px",
    right: "24px",
    zIndex: "1",
    cursor: "pointer",
    color: theme.palette.text.disabled,
    "&:hover":{
        "& svg":{
            "& path":{
                'fill':theme.palette.error.dark,
            }
        }
    }
  },
}));

export default function ({ ...props }) {
  const { state, dispatch } = useContext(PageContext);
  const classes = useStyles();
  const picture = state.imageToPreview;

  const mobile = useMediaQuery("(max-width:576px)");

  const modalClose = () => {
    dispatch({ type: "PREVIEW_HIDE", payload: {} });
  };
  return (
    <Modal
      className={classes.preview_modal}
      open={state.openPreview}
      onClose={modalClose}
    >
      <Paper elevation={3} className={classes.preview_container}>
        <div className={classes.close} onClick={modalClose}>
          <CloseIcon fontSize="large" color="inherit" />
        </div>
        <TransformWrapper>
          {({ zoomIn, zoomOut, ...props }) => (
            <Fragment>
              {!mobile ? (
                <div className={classes.controls}>
                  <ZoomOutIcon
                    onClick={zoomOut}
                    fontSize="large"
                    color="inherit"
                  />
                  <ZoomInIcon
                    onClick={zoomIn}
                    fontSize="large"
                    color="inherit"
                  />
                </div>
              ) : (
                ""
              )}
              <TransformComponent>
                <img
                  className={classes.preview_img}
                  src={picture?.img}
                  alt={picture?.title}
                />
              </TransformComponent>
            </Fragment>
          )}
        </TransformWrapper>
      </Paper>
    </Modal>
  );
}
