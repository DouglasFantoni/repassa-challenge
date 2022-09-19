import { createTheme } from '@mui/material';
import {
  FS_1,
  FS_2,
  FS_3,
  FS_4,
  FS_5,
  FS_6,
  PRIMARY_FONT_DEFINITION,
} from '@constants/fonts';
import { BGCOLORS, TEXTCOLORS } from '@constants/colors';

const defaultTextOptions = {
  // lineHeight: '1.625'
  // fontFamily:
  color: TEXTCOLORS.DARK,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: BGCOLORS.DARKGREEN,
      dark: BGCOLORS.DARK,
    },
    secondary: {
      main: BGCOLORS.LIGHTGREEN,
      dark: BGCOLORS.DARK,
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
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: FS_6,
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
  },
});
