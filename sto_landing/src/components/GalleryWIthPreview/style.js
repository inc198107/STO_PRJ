import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
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