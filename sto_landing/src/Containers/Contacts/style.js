import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
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
    horizontal: {
      display: 'flex',
      width: '100%',
      height: '4px',
      backgroundColor: theme.palette.error.dark,
      opacity: '1',
    },
    staff: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
    },
    master_block: {
      minHeight: '120px',
      display: 'flex',
      flexDirection: 'row',
      padding: '8px',
      alignItems: 'center',
      boxSizing: 'border-box',
      '&:not(:first-of-type)': {
        marginTop: '16px',
      },
    },
    master_block_mob: {
      flexDirection: 'column',
      padding: ' 8px 0 8px 0',
      marginBottom: '16px',
      '&:not(:first-of-type)': {
        marginTop: '0px',
      },
    },
    contact: {
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 8px 8px 16px',
      marginLeft: '16px',
      '& .name': {
        fontSize: '18px',
        fontWeight: 'bold',
      },
      '& .phone': {
        fontWeight: 'bold',
        '& .number': {
          fontWeight: 'normal',
        },
      },
    },
    mail_and_schedule: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    ava: {
      width: '80px',
      height: '80px',
      overflow: 'hidden',
      borderRadius: '50%',
      border: `1px solid ${theme.backgrounds.backgroundSecondary}`,
      boxShadow: theme.blockShadows.shadow3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mail_block: {
      display: 'flex',
      flexDirection: 'row',
      padding: '8px 8px 8px 16px',
      marginLeft: '16px',
      alignItems: 'center',
      '& .sign': {
        fontSize: '18px',
        fontWeight: 'bold',
      },
      '& .mailLink': {
        marginLeft: '8px',
        cursor: 'pointer',
      },
    },
    shedule_block: {
      padding: '8px 8px 8px 16px',
      marginLeft: '8px',
      display: 'flex',
      flexDirection: 'column',
      '& .sign': {
        fontSize: '18px',
        fontWeight: 'bold',
        '&:not(:first-of-type)': {
          marginTop: '6px',
        },
      },
      '& .work': {
        color: theme.palette.success.dark,
      },
      '& .wikend': {
        color: theme.palette.error.dark,
        fontWeight: 'bold',
      },
    },
  
    mob_block: {
      padding: '8px 8px 8px 8px',
      marginLeft: '0',
      alignSelf: 'flex-start',
    },
  
    address_block: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    map_container: {
      width: '100%',
      height: '200px',
      padding: '4px',
      marginTop: '16px',
      boxSizing: 'border-box',
      '& .leaflet-container': {
        height: '100%',
        width: '100%',
      },
    },
    map_container_mobile: {
      marginTop: '0',
      height: '250px',
    },
  }));