import * as React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import grey from '@material-ui/core/colors/grey';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import { Card, Grid, Typography, CardMedia } from '@material-ui/core';

const styles: StyleRulesCallback<'root' | 'image' | 'boo' | 'blah'> = theme => ({
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

type State = {
  open: boolean;
};

class ListingCard extends React.Component<WithStyles<'root' | 'image' | 'boo' | 'blah'>, State> {
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

  render(): any {
    return (
      <Card className={this.props.classes.root}>
        {/* <Grid container> */}
          <CardMedia>
            <Link to="/Listing">
              <img src="https://source.unsplash.com/random/300x200" alt="aldjf" className={this.props.classes.image}/>
            </Link>
          </CardMedia>
          
          <Link to="/Listing" className={this.props.classes.blah}>
            {/* <CardContent > */}
              <Grid container className={this.props.classes.boo}>
                <Grid item xs={12} sm={8} style={{padding: 16}}>
                  <Typography variant="body2">Private room in house</Typography>
                  <Typography variant="title">Something goes here with a cool title</Typography>
                  <Typography variant="body1">2 guests, 1 bedroom</Typography>

                  <Typography variant="body1">12 others are looking at this thing</Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{borderLeft: `1px solid ${grey[300]}`, padding: 16}}>
                  <Typography variant="title">$234</Typography>
                  <Typography variant="body1">per night</Typography>
                  <Chip label="New" />
                </Grid>
              </Grid>
            {/* </CardContent> */}
          </Link>

        {/* </Grid> */}
      </Card>
    );
  }
}

export default withRoot(withStyles(styles)(ListingCard));
