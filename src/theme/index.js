import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#22a565'
    },
    text: {
      primary: '#172b4d',
      secondary: '#616264'
    }
  },
  shadows,
  typography
});

export default theme;
