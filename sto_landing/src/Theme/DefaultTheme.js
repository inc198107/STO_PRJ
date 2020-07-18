import { createMuiTheme } from '@material-ui/core/styles';

export const defaultTheme = createMuiTheme({
  backgrounds: {
    mainBckgr: '#115292',
    backgroundSecondary: 'rgba(255, 255, 255, 0.5)',
  },
  blockShadows: {
    shadow1: '0 4px 6px 0 rgba(61, 65, 133, 0.08)',
    shadow2: '0 8px 14px 0 rgba(61, 65, 133, 0.08)',
    shadow3: '0 12px 36px 0 rgba(16, 19, 82, 0.12)',
  },
  colors: {
    primary: 'rgba(0, 0, 0, 0.87)',
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
  },
})

