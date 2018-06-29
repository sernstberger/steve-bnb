import * as React from 'react';

// import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';
// import withRoot from './withRoot';

import Home from './pages/Home';
import Listing from './pages/Listing';

import { Switch, Route } from 'react-router-dom';

// const styles: StyleRulesCallback<'root'> = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });

// type State = {
//   open: boolean;
// };

class AppRouter extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listing" component={Listing}/>
        </Switch>
      </div>
    );
  }
}

// export default withRoot(withStyles(styles)(AppRouter));
export default AppRouter;
