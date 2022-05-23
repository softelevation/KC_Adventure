// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useCallback, useEffect, useState} from 'react';

import {
  getCurrentLocation,
  locationPermission,
  requestPermission,
} from 'src/utils/helper';
import Header from 'src/common/header';
import CommonStyles from 'src/assets/styles';
import {ImageBackground, StyleSheet} from 'react-native';
import {Block, hp, wp, ImageComponent, Text} from '_elements';
import {useFocusEffect} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import {images} from 'src/assets';
const latitudeDelta = 0.015;
const longitudeDelta = 0.0121;
const MapsScreen = () => {
  const [state, setState] = useState({
    latitude: 0,
    longitude: 0,
  });
  const getLiveLocation = async () => {
    const checkPermission = await locationPermission();
    console.log(checkPermission, 'checkPermission');
    if (checkPermission) {
      const request = await requestPermission();
      if (request) {
        const {latitude, longitude, heading} = await getCurrentLocation();
        console.log(
          'latitude, longitude, heading: ',
          latitude,
          longitude,
          heading,
        );
        setState({
          latitude: latitude,
          longitude: longitude,
        });
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      getLiveLocation();
    }, []),
  );

  return (
    <Block safearea>
      <Block style={styles.container} flex={false}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          zoomControlEnabled={false}
          zoomEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={false}
          region={{
            ...state,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}>
          <Marker
            coordinate={{...state}}
            title={'XYZ'}
            // icon={images.marker_background}
            description={'RESTAURANT'}>
            {/* <Callout tooltip>
              <Block flex={false}>
                <Text>XYZ</Text>
              </Block>
            </Callout> */}
            <ImageBackground
              source={images.marker_background}
              style={{
                height: 40,
                width: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Block
                flex={false}
                center
                middle
                margin={[-hp(1), 0, 0, 0]}
                style={{height: 29, width: 29}}
                color="#1DAEEF"
                borderRadius={15}>
                <ImageComponent name="dinner_icon" height={20} width={20} />
              </Block>
            </ImageBackground>
          </Marker>
        </MapView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapsScreen;
