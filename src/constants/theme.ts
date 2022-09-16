import { createTheme } from '@mui/material';
import {
  FS_1,
  FS_2,
  FS_3,
  FS_4,
  FS_5,
  FS_6,
  PRIMARY_FONT,
  PRIMARY_FONT_DEFINITION,
} from '@constants/fonts';

const defaultTextOptions = {
  // lineHeight: '1.625'
  // fontFamily:
  // color: DEFAULT_TEXT_COLOR
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#EC1C24',
      dark: '#890C15',
      // contrastText: 'white',
    },
    secondary: {
      main: '#EC1C24',
      dark: '#890C15',
      // main: BGCOLORS.BLUE,
      // dark: BGCOLORS.DARKBLUE,
      // contrastText: 'white',
    },
  },
  typography: {
    fontSize: 16,
    allVariants: {
      textTransform: 'inherit',
      // fontSize: FS_3,
      // color: DEFAULT_TEXT_COLOR,
    },
    fontFamily: PRIMARY_FONT_DEFINITION,
    h1: {
      fontSize: FS_1,
      ...defaultTextOptions,
    },
    h2: {
      fontSize: FS_2,
      ...defaultTextOptions,
    },
    h3: {
      fontSize: FS_3,
      ...defaultTextOptions,
    },
    h4: {
      fontSize: FS_4,
      ...defaultTextOptions,
    },
    h5: {
      fontSize: FS_5,
      ...defaultTextOptions,
    },
    h6: {
      fontSize: FS_6,
      // color: TEXTCOLORS.GRAY,
      ...defaultTextOptions,
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: FS_3,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: FS_3,
        },
        root: {
          fontSize: FS_3,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // padding: SPC_INPUT_BASE,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        fullWidth: {
          fontSize: FS_3,
        },
        root: {
          fontSize: FS_3,
        },
      },
    },
  },
});
