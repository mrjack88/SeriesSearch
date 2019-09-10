import { indigo, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: { light: teal[300], main: teal[500], dark: teal[700] },
    accent: indigo,
    type: 'light',
  },
});

export default theme;
