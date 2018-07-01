import * as React from 'react';
// import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

import withStyles, { StyledComponentProps } from '@material-ui/core/styles/withStyles';
// import withRoot from '../../withRoot';
import { Card, Grid, Typography, CardMedia } from '@material-ui/core';

import styleSheet from './styles';

interface FooProps extends StyledComponentProps {
  horizontal: boolean;
}

interface Styles {
  classes: any;
}

type State = {
  open: boolean;
};

class ListingCard extends React.Component<FooProps, State> {
  state = {
    open: false,
  };

  constructor(props: any) {
    super(props);
  }

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
      <Card className={this.props.classes!.root}>
        {/* <Grid container> */}
          <CardMedia>
            <Link to="/Listing">
              <img src="https://source.unsplash.com/random/300x200" alt="aldjf" className={this.props.classes!.image}/>
            </Link>
          </CardMedia>

          {this.props.horizontal ?
          
            <Link to="/Listing" className={this.props.classes!.blah}>
              {/* <CardContent > */}
                <Grid container className={this.props.classes!.boo}>
                  <Grid item xs={12} sm={8} style={{padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                      <Typography variant="body2">Private room in house</Typography>
                      <Typography variant="title">Something goes here with a cool title</Typography>
                      <Typography variant="body1">2 guests, 1 bedroom</Typography>
                    </div>

                    <Typography variant="caption">12 others are looking at this thing</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} style={{borderLeft: `1px solid ${grey[300]}`, padding: 16}}>
                    <Typography variant="title">$234</Typography>
                    <Typography variant="caption">per night</Typography>
                    <Chip label="New" style={{marginBottom: 10, marginTop: 10}}/>
                    <Typography variant="body1">Free cancellation</Typography>
                  </Grid>
                </Grid>
              {/* </CardContent> */}
            </Link>
          :
            <div>alkdjflkadjsf</div>
          }

        {/* </Grid> */}
      </Card>
    );
  }
}

export default withStyles<Styles['classes']>(styleSheet)(ListingCard) as any;
// export default withRoot(withStyles(styles)<FooProps>(ListingCard));
