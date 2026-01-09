import { makeStyles } from '@mui/styles';

 export const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
    },
    scroll_top_container_right: {
      position: 'sticky',
      bottom: '16px',
      paddingTop: '30px',
      paddingRight: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  }));