import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles((theme) => ({
    main_sheet: {
      padding: '16px',
      marginTop: '32px',
      position: 'relative',
    },
    main_sheet_mobile: {
      padding: '8px',
    },
    article_name: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      ' & h3': {
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        fontSize: '45px',
        fontFamily: 'Western',
        color: theme.colors.primary,
      },
    },
    article_text: {
      width: '100%',
      padding: '16px',
      boxSizing: 'border-box',
      paddingTop: 0,
      fontFamily: 'Roboto',
      color: theme.colors.primary,
      '& h5': {
        marginTop: 0,
        marginBottom: '16px',
        fontSize: '24px',
      },
    },
    horizontal: {
      display: 'flex',
      width: '100%',
      height: '4px',
      backgroundColor: theme.palette.error.dark,
      opacity: '1',
    },
    galery_container: {
      padding: '8px',
    },
    article_p: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      lineHeight: '1.43',
    },
    contact_link: {
      display: 'flex',
      width: '100%',
      maxWidth: '160px',
      height: '24px',
      border: '2px solid',
      borderColor: theme.palette.error.dark,
      borderRadius: '6px',
      padding: '4px',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Western',
      fontSize: '18px',
      letterSpacing: '1.43',
      color: theme.colors.primary,
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      '& .text': {
        marginRight: '8px',
      },
      '&:hover': {
        backgroundColor: theme.backgrounds.contactsHover,
      },
    },
    adv: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      fontSize: '12px',
      color: theme.palette.secondary.light,
    },
  }));