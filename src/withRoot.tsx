import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },

  overrides: {
    MuiCard: {
      root: {
        border: `1px solid ${grey[300]}`,
        boxShadow: 'none',
        transition: 'all 500ms',

        '&:hover': {
          boxShadow: '0 5px 12px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.2)',
        },
      },
    },
  },

  typography: {
    fontFamily: '"Rubik","-apple-system,system-ui,BlinkMacSystemFont","Helvetica Neue",Arial,sans-serif',
    title: {
      fontWeight: 600,
    },
    button: {
      // letterSpacing: '1px',
      // fontSize: 12,
      // textTransform: 'uppercase',
    },
  }
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
