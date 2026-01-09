import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles((theme) => ({
  error_container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
  broken_page: {
    width: '100%',
    height: 'auto',
    borderRadius: '30%',
  },
  image_wrapper: {
    boxSizing: 'border-box',
    padding: '16px',
  },
  error_text_wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
  },
}));
