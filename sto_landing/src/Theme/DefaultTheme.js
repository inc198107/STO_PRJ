import { createMuiTheme } from '@material-ui/core/styles';

export const defaultTheme = createMuiTheme({
  backgrounds: {
    mainBckgr: '#115292',
    backgroundSecondary: 'rgba(255, 255, 255, 0.5)',
  },
  colors: {
    primary: 'rgba(0, 0, 0, 0.87)',
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
  },
})

