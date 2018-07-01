import { StyleRules, Theme } from '@material-ui/core/styles';
// import variables from '../../assets/styles/variables';

const styleSheet = (theme: Theme): StyleRules => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    textDecoration: 'none',
  },
  image: {
    display: 'block',
  },
  boo: {
    // alignContent: 'center',
    // display: 'flex',
    // flex: '1 0 auto',
  },
  blah: {
    display: 'flex',
    flex: '1',
    textDecoration: 'none',
  },
});

export default styleSheet;
