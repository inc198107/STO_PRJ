import { makeStyles } from '@mui/styles';
import headerBckgr from '../../Assets/images/header_bckgr_bw.jpg';

 export const useStyles = makeStyles((theme) => ({
    header_root: {
      display: 'flex',
      boxSizing: 'border-box',
      width: '100%',
      minHeight: '100vh',
      background: `url(${headerBckgr}) no-repeat`,
      backgroundSize: 'cover',
      padding: '16px',
    },
    main_title: {
      color: '#ffffff',
    },
    site_name: {
      width: '100%',
      display: 'flex',
      boxSizing: 'border-box',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      flexBasis: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      ' & h1': {
        paddingLeft: '32px',
        paddingRight: '32px',
        textAlign: 'center',
        fontSize: '100px',
        fontFamily: 'Western',
      },
    },
    site_name_mobile: {
      ' & h1': {
        paddingLeft: '0',
        paddingRight: '0',
        textAlign: 'center',
        fontSize: '70px',
        fontFamily: 'Western',
      },
    },
    slogan_wrapper: {
      justifyContent: 'center',
    },
    slogan: {
      fontFamily: 'Quentin',
      fontSize: '54px',
      transform: 'rotate(-10deg)',
      color: theme.palette.background.default,
      display: 'flex',
      justifyContent: 'center',
    },
    slogan_mobile: {
      fontSize: '32px',
    },
    horizontal: {
      display: 'flex',
      width: '100%',
      height: '4px',
      backgroundColor: '#ffffff',
      opacity: '0.7',
    },
    links: {
      marginTop: '16px',
      '& a': {
        color: '#ffffff',
        fontFamily: 'Western',
        fontSize: '24px',
        textTransform: 'uppercase',
        minWidth: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '14px 8px 0 8px',
      },
    },
    category_name: {
      marginRight: '8px',
    },
  }));