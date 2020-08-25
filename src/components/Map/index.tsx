import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { BorderlessButton } from 'react-native-gesture-handler';
import { GetPixelSize } from '../../utils/GetPixelSize';

import Search from '../Search';
import Details from '../Details';
import Directions from '../Directions';

import markerImage from '../../assets/marker.png';
import backIcon from '../../assets/back.png';

import styles from './style';

const Map: React.FC = () => {


  const MapViewRef = useRef<any>();

  const [location, setLocation] = useState<any>();
  const [destination, setDestination] = useState<any>();

  const [duration, setDuration] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  const handleLocationSelected = (data: any, { geometry }: { geometry: any }) => {

    const { location: { lat: latitude, lng: longitude } } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text
    });

  }

  const requestUserPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      alert('Precisamos de sua localização');
    }

    let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

    const response = await Location.reverseGeocodeAsync({ latitude, longitude });

    setLocation({
      latitude,
      longitude,
      latitudeDelta: 0.0133,
      longitudeDelta: 0.0134,
      title: response[0].street
    });
  }

  const handleBack = () => {
    setDestination(null);
  }

  useEffect(() => {
    requestUserPosition();
  }, []);

  return <>
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={location}
        showsUserLocation
        loadingEnabled
        ref={MapViewRef}
      >
        {destination && (
          <>
            <Directions
              origin={location}
              destination={destination}
              onReady={(result: any) => {

                setTimeout(() => {
                  MapViewRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: GetPixelSize(50),
                      left: GetPixelSize(50),
                      top: GetPixelSize(50),
                      bottom: GetPixelSize(350)
                    },
                    animated: true
                  });
                }, 500);

                setDuration(Math.floor(result.duration));
                setDistance(result.distance)

              }}
            />
            <Marker
              coordinate={destination}
              anchor={{ x: 0, y: 0 }}
              image={markerImage}
            >
              <View style={styles.locationBox}>
                <View style={styles.locationTimeBox}>
                  <Text style={styles.locationTimeText}>{duration}</Text>
                  <Text style={styles.locationTimeTextSmall}>MIN</Text>
                </View>
                <Text style={styles.locationText}>
                  {destination.title}
                </Text>
              </View>
            </Marker>
            <Marker
              coordinate={location}
              anchor={{ x: 0, y: 0 }}
            >
              <View style={styles.locationBox}>
                <Text style={styles.locationText}>
                  {location.title}
                </Text>
              </View>
            </Marker>

          </>
        )}
      </MapView>



      {destination ? (
        <>
          <BorderlessButton style={styles.backButton} onPress={handleBack}>
            <Image source={backIcon}></Image>
          </BorderlessButton>
          <Details distance={distance} />
        </>
      ) : (
          <Search onLocationSelected={handleLocationSelected} />
        )}

    </View>
  </>;
}

export default Map;