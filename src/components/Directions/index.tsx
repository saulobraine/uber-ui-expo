import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

interface DirectionsProp {
  destination: {
    latitude: number;
    longitude: number;
  };
  origin: {
    latitude: number;
    longitude: number;
  };
  onReady: ((...args: any[]) => any);
}

const Directions: React.FC<DirectionsProp> = ({ destination, origin, onReady }) => {
  return <MapViewDirections
    // @ts-ignore
    apikey={process.env.API_GOOGLEMAPS}
    destination={destination}
    origin={origin}
    onReady={onReady}
    strokeWidth={3}
    strokeColor={'#222'}
  />;
}

export default Directions;