import { Map, GoogleApiWrapper } from "google-maps-react";
import "google-maps-react";
import React, { Component } from "react";
import { getRentals } from "../utils/httpRequests";

class MapContainer extends Component {
  state = {
    high_ratings: [],
    low_ratings: []
  };
  componentDidMount() {
    // Request points from backend
    getRentals("high")
      .then(resp => {
        this.setState(
          {
            high_ratings: resp.data.map(
              item =>
                new this.props.google.maps.LatLng(item.latitude, item.longitude)
            )
          },
          () => {
            console.log(this.state.high_ratings);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
    getRentals("low")
      .then(resp => {
        this.setState({ high_ratings: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
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
      {/* <this.props.google.maps.HeatmapLayer
            data={[
                new this.props.google.maps.LatLng(37.782551, -122.445368),
                new this.props.google.maps.LatLng(37.782745, -122.444586),
                new this.props.google.maps.LatLng(37.782842, -122.443688),
                new this.props.google.maps.LatLng(37.782919, -122.442815),
                new this.props.google.maps.LatLng(37.782992, -122.442112),
                new this.props.google.maps.LatLng(37.783100, -122.441461)
            ]}
        /> */}
        {/* {this.state.high_ratings.length ? (
          <HeatmapLayer data={this.state.high_ratings} />
        ) : (
          ""
        )}
        {this.state.low_ratings.length ? (
          <HeatmapLayer data={this.state.low_ratings} />
        ) : (
          ""
        )} */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_API_KEY })(
  MapContainer
);
