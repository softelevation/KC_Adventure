import React, { useState, useEffect } from 'react';
import Header from 'src/common/header';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { Block, hp, ImageComponent, wp, Text, Button } from '_elements';
import { Marker } from 'react-native-maps';
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
    Geolocation.getCurrentPosition(data=>console.log(data))
    console.log(Geolocation);
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                showsUserLocation
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>


    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default MapScreen;
