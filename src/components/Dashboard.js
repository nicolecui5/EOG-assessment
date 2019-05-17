import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";
import getDroneLocation from "./../store/api/getDroneLocation";
import findWeatherById from "./../store/api/findWeatherById";
import findLocationByLatLng from "../store/api/findLocationByLatLng";
import { map } from "rsvp";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: "5% 25%"
  }
};

class Dashboard extends Component {
  // constructor(){
  //   setInterval(() => {

      
  //   }, interval);
  // }
    componentDidMount() {
      this.props.onLoad();
    }
    render(){
    console.log(this.props);
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
            <CardHeader title="Dashboard" />
            <CardContent>
                
                Temperature: {this.props.weather}<br />
                Latitude: {this.props.latitude}<br />
                Longitude: {this.props.longitude}<br />
                Last received: 
            </CardContent>
            </Card>
        );
    }
};

const mapStatestoProps = (state) => {
  const{
    loading = this.state.location.loading,
    latitude = this.state.location.latitude,
    longitude = this.state.location.longitude,
    weather = this.state.weather.data.temperature,
    timestamp = 
  } 
  return{
    loading,
    latitude,
    longitude,
    weather,
    timestamp
  };
  console.log(state);
}

const mapDispatch = (dispatch) => ({
    onLoad: () =>
    dispatch({
    type:actions.FETCH_LOCATION,
    
    // latitude:latitude,
    // longitude:longitude
    })

    dispatch({
    type:actions.FETCH_WEATHER})

  });

export default connect(mapStatestoProps, mapDispatch)(withStyles(styles)(Dashboard));
