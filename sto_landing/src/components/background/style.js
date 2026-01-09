import { makeStyles } from '@mui/styles';
import mainBckgr from '../../Assets/images/f-series.jpg';

export const useStyle = makeStyles((theme) => ({
    main: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
      bottom: 0,
      background: `url(${mainBckgr}) no-repeat `,
      backgroundSize: 'cover',
      boxSizing: 'border-box',
      opacity: '0.1',
    },
  }));