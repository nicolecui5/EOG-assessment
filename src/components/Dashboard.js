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
      // this.props.onLoad();
      this.props.onFetch();
    }
    render(){

    console.log(this.props);
    console.log('weather data')
    console.log(this.props.weather.data.consolidated_weather)
        const { classes } = this.props;
  //   const view = (
  //     <Card className={classes.card}>
  //     <CardHeader title="Dashboard" />
  //     <CardContent>
  //         Temperature: {this.props.weather.data.consolidated_weather[0].max_temp}<br />
  //         Latitude: {this.props.location.latitude}<br />
  //         Longitude: {this.props.location.longitude}<br />
  //         Last received: 
  //     </CardContent>
  //     </Card>
  // );

  // return this.props.weather.loading? (<h1>Loading...</h1>): view;
        return (
            <Card className={classes.card}>
            <CardHeader title="Dashboard" />
            <CardContent>
                
                Temperature: {this.props.weather.data.temp}<br />
                Latitude: {this.props.location.latitude}<br />
                Longitude: {this.props.location.longitude}<br />
                Last received: 
            </CardContent>
            </Card>
        );
    }
};

const mapStatesToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
    onFetch: () => dispatch({
      type: actions.FETCH_LOCATION,
    }),
    // onLoad: () => dispatch({
    //   type: actions.FETCH_WEATHER
    // })
});


export default connect(mapStatesToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
