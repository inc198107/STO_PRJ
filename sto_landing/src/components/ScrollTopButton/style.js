import { makeStyles } from '@material-ui/core/styles';

export const UseStyles = makeStyles((theme) => ({
    go_top_btn: {
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      minWidth: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.background.default,
    },
  }));