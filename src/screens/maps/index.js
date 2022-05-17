import React, {useState, useEffect} from 'react';
import Header from 'src/common/header';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import {Block} from '_elements';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  // const [
  //     currentLongitude,
  //     setCurrentLongitude
  // ] = useState('...');
  // const [
  //     currentLatitude,
  //     setCurrentLatitude
  // ] = useState('...');
  // const [
  //     locationStatus,
  //     setLocationStatus
  // ] = useState('');
  // useEffect(() => {
  //     const requestLocationPermission = async () => {
  //         if (Platform.OS === 'ios') {

  //         } else {

  //         }
  //     };

  // }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(data => console.log(data));
    console.log(Geolocation);
  }, []);

  return (
    <Block flex={false} safearea>
      <Header menuIcon={false} name="Map Screen" />
      {/* <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View> */}
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;
