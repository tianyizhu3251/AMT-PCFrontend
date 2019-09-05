import React from "react";
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";
import { Button } from 'antd';

class WeatherDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude:'',
      altitude: '',
      heading:'',
      speed: ''
    };
  }
  handleClick(e) {


        //通过props调用父组件的方法
        //用户点击后current值马上改变然后准备传值给父组件

      //  this.props.getType(this.props.coords.latitude,this.props.coords.longitude);
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyBMPLjYEZjXdJ0sFpfhyZrFFawgl5DLqkA");  //  // AIzaSyBtHxDsRHmdaWakuOLb28L-u7sQfOg246I
        // Enable or disable logs. Its optional.
        Geocode.enableDebug();

        // Get address from latidude & longitude.
        Geocode.fromLatLng(this.props.coords.latitude, this.props.coords.longitude).then(
          response => {

            const address = response.results[0].formatted_address;

            console.log(address);
            this.props.getType(address);
          },
          error => {
            console.log(error);
          }
        );


  };

  componentWillMount() {

  };
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
          <div>
          <Button onClick={this.handleClick.bind(this)} type="primary" class="weather_button">
          Click me to get my location weather accurately!
          </Button>
{/*

            <table>
                <tbody>
                    <tr>
                        <td>My latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>My longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>My altitude</td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>

                    <button onClick={this.handleClick.bind(this)}> get my loaction </button>
                    <Button onClick={this.handleClick.bind(this)} type="primary" >
                       get my loaction
                    </Button>
                    <tr>
                        <td>heading</td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
            */}
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
      console.log(this.props);
      console.log('222');


    }




}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(WeatherDemo);
