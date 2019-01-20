import React, { Component } from 'react';
import './App.css';
import Map from './MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map 
          initialCenter={{
            lat: 45.50884,
            lng: -73.58781
          }}
          zoom={12}
        ></Map>
      </div>
    );
  }
}

export default App;
