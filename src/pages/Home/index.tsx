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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import { Button, Card } from '@material-ui/core';

// import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const someLatLng = {lat: 39.764859, lng: -86.1706705};
const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAVlYwBTjVdzkmXPsxAud3XCHXasKGdJe8';

const MyGoogleMap = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultCenter={someLatLng}
    defaultZoom={16}
  >
    <Marker
      position={someLatLng}
    />
  </GoogleMap>))
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
  checkedB: boolean
};

class Home extends React.Component<WithStyles<'root'>, State> {
  state = {
    open: false,
    checkedB: true,
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

  handleChange = (event: any) => {
    this.setState({ checkedB: event.target.checked });
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

            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    // classes={{
                    //   switchBase: classes.iOSSwitchBase,
                    //   bar: classes.iOSBar,
                    //   icon: classes.iOSIcon,
                    //   iconChecked: classes.iOSIconChecked,
                    //   checked: classes.iOSChecked,
                    // }}
                    disableRipple
                    checked={this.state.checkedB}
                    onChange={this.handleChange}
                    value="checkedB"
                  />
                }
                label="Show map"
              />
            </FormGroup>

          </Toolbar>
        </AppBar>

        Search

        Filters

        { this.state.checkedB ?
          <Grid container spacing={0} className={this.props.classes.root}>
            <Grid item xs={12} md={7} lg={6}>
              <ListingCard
                horizontal={true}
              />
              {/* <ListingCard horizontal />
              <ListingCard horizontal />
              <ListingCard horizontal />
              <ListingCard horizontal />
              <ListingCard horizontal />
              <ListingCard horizontal /> */}
              paging
            </Grid>

            <Card style={{backgroundColor: '#CCC', position: 'fixed', top: 150, left: '50%', right: 24, bottom: 10}}>
              {map}
            </Card>
          </Grid>
        :
          <ListingCard/>
        }
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Home));
