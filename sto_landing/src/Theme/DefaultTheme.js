import { createMuiTheme } from '@material-ui/core/styles';
import WesternOtf from '../Assets/fonts/Western.otf'

const Western = {
    fontFamily: 'Western',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
  local('Western'),
  local('Western-Regular'),
  url(${WesternOtf}) format('otf')
`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const defaultTheme = createMuiTheme({
    backgrounds: {
        mainBckgr: '#115292',
    },
    colors:{
        primary: 'rgba(0, 0, 0, 0.87)',
    },
    typography: {
        fontFamily: ['Roboto', 'Arial', 'Western'].join(','),
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [Western],
          },
        },
      },
})

