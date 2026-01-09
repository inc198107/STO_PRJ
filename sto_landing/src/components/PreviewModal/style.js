import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    preview_modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      padding: '8px',
    },
    preview_container: {
      maxWidth: '1000px',
      borderRadius: '6px',
      overflow: 'hidden',
      cursor: 'zoom-in',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255, 0.8)',
    },
    preview_img: {
      width: '100%',
      height: 'auto',
      maxHeight: '90vh',
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
    close: {
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: theme.backgrounds.backgroundSecondary,
      position: 'absolute',
      top: '16px',
      right: '16px',
      zIndex: '1',
      cursor: 'pointer',
      color: theme.palette.text.disabled,
      '&:hover': {
        '& svg': {
          '& path': {
            fill: theme.palette.error.dark,
          },
        },
      },
    },
  }));