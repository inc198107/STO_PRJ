import { makeStyles } from '@mui/styles';

 export const useStyles = makeStyles((theme) => ({
    footer_root: {
      display: 'flex',
      boxSizing: 'border-box',
      width: '100%',
      padding: ' 16px 24px',
      background: theme.backgrounds.greyGradient,
    },
    data: {
      fontFamily: 'Western',
      fontSize: '16px',
      letterSpacing: 'normal',
      color: theme.fontColors.secondary0,
      padding: '8px 0',
    },
    data_link: {
      display: 'flex',
      boxSizing: 'border-box',
      width: '100%',
      padding: '8px 0',
      justifyContent: 'flex-end',
      '& a': {
        color: theme.fontColors.secondary0,
      },
    },
  }));