import  React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    state={
        selectedPlace:[]
    }
  render() {
    return (
      <Map 
      google={this.props.google}
      zoom={14}
 
      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCgZ4MSAN1Qa88ma5OWu4urlk0x4N7k-wE'
})(MapContainer)


// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.