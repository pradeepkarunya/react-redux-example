import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import './maps.css';

class MapsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { latitude: 12.99, longitude: 80.27 },
        { latitude: 13.12, longitude: 80.27 },
        { latitude: 13.12, longitude: 80.218426208496 },
        { latitude: 13.12, longitude: 80.2134325 },
        { latitude: 13.12, longitude: 80.2140121 },
        { latitude: 13.12, longitude: 80.2125407 }
      ]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  styles = {
      width: '800px',
      height: '500px'
      
  }

  render() {
    return (
      <div className="mapDiv">
      <Map
        google={this.props.google}
        zoom={8}
        style={this.styles}
        initialCenter={{ lat: 13.08, lng: 80.27 }}
      >
        <Marker position={{ lat: 13.12, lng: 80.27 }} />
        {this.displayMarkers()}
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCmjp6tqeUtnNxiqBN8SgonoCkhWLmsekc"
})(MapsComponent);
