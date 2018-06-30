import * as React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import ListingCard from '../../Components/ListingCard';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import { Button, Card } from '@material-ui/core';

// import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  // Marker,
} from 'react-google-maps';

// interface IFoo {
//   googleMapURL: string;
//   loadingElement: any;
//   containerElement: any;
//   mapElement: any;
// }

const someLatLng = {lat: 55.751244, lng: 37.618423};
// tslint:disable-next-line:max-line-length
export const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAVlYwBTjVdzkmXPsxAud3XCHXasKGdJe8';

// const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props: IFoo => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// )
// );

const MyGoogleMap = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultCenter={someLatLng}
    defaultZoom={16}
    options={{disableDefaultUI: true}} 
  />))
);
const loadingElement = <div/>;
const containerElement = <div style={{height: '100vh'}}/>;
const mapElement = <div style={{height: '100vh'}}/>;
const map = (
  <MyGoogleMap
    loadingElement={loadingElement}
    containerElement={containerElement}
    googleMapURL={googleMapURL}
    mapElement={mapElement}
  />
);

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 20,
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
});

type State = {
  open: boolean;
};

class Home extends React.Component<WithStyles<'root'>, State> {
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
      <div>

        <AppBar
          position="fixed"
          color="default"
          // className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <Typography variant="title" color="inherit" noWrap>
              Steve bnb
            </Typography>

            search

            login menu
          </Toolbar>
          
          <Toolbar disableGutters={!this.state.open}>
            <Button variant="contained">aljdsflkasjf</Button>
            <Button variant="contained">aljdsflkasjf</Button>
            <Button variant="contained">aljdsflkasjf</Button>
            <Button variant="contained">aljdsflkasjf</Button>

            Show map
          </Toolbar>
        </AppBar>

        Search

        Filters

        <Grid container spacing={0} className={this.props.classes.root}>
          <Grid item xs={12} md={7} xl={6}>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            paging
          </Grid>
          {/* <Grid item xs={12} md={5} xl={6}> */}

            <Card style={{backgroundColor: 'red', position: 'fixed', top: 150, left: '50%', right: 24, bottom: 10}}>
              {map}
            </Card>
            {/* <img src="https://source.unsplash.com/random/800x600" alt="aldjf" style={{maxWidth: '100%'}}/> */}
          {/* </Grid> */}
        </Grid>

        {/* <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button> */}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Home));
