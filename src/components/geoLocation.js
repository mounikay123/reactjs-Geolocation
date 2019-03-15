import React, { Component } from 'react';
import Geocode from "react-geocode";
class GeoLocation extends Component {
    constructor() {
        super()
 this.state = {
            latitude: '',
            longitude: '',
            address: ''
        }
 }
 componentDidMount() {
        this.getMyLocation()
    }
 getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
                console.log(this.state.latitude, this.state.longitude)
                const val = this.state;
                Geocode.setApiKey("AIzaSyCgZ4MSAN1Qa88ma5OWu4urlk0x4N7k-wE");
               // Enable or disable logs. Its optional.
                Geocode.enableDebug();
                // Get address from latidude & longitude.
                Geocode.fromLatLng(val.latitude, val.longitude).then(
                    response => {
                        const addressVal = response.results[0].formatted_address;
                        this.setState({ address: addressVal })
                        console.log(this.state.address);
                    },
                    error => {
                        console.error(error);
                    }
                );
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }

    render() {
 return (
            <div>
                <div>
                <h1>{this.state.address}</h1>
                </div>
            </div>
        )
    }

}
export default GeoLocation;


