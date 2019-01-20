import { Map, GoogleApiWrapper, HeatmapLayer } from "google-maps-react";
import React, { Component } from "react";

class MapContainer extends Component {
  state = {
    layers: []
  };
  componentDidMount() {
    // Request points from backend
    console.log('Test')
  };
  render() {
    return (
      <Map
        initialCenter={{
          lat: 45.50884,
          lng: -73.58781
        }}
        zoom={12}
        {...this.props}
      >
        {this.state.layers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_API_KEY })(
  MapContainer
);
