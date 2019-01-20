import { Map, GoogleApiWrapper } from 'google-maps-react';


class MapContainer extends Map {
    componentDidMount() {
        // Get points from backend
        // Create Heatmap objects with reference to this.props.map
        // Config heatmaps
        super.componentDidMount()
        console.log('Hello world')
        const { map } = this.props;
    }
    
}

export default GoogleApiWrapper({apiKey: process.env.REACT_APP_API_KEY})(MapContainer);