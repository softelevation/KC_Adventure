import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          heading: position.coords.heading,
        };
        resolve(cords);
      },
      error => {
        reject(error.message);
        console.log('error.message: ', error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  });

export const requestPermission = () => {
  if (Platform.OS === 'ios') {
    return request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
      console.log('result: ', result);
      if (result === RESULTS.GRANTED) {
        return true;
      }
      // …
    });
  } else {
  }
};

export const locationPermission = async () => {
  if (Platform.OS === 'ios') {
    return check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            return false;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            return false;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            return false;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            return true;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            return false;
          default:
            return false;
        }
      })
      .catch(error => {
        console.log('error: ', error);
        // …
      });
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        // getOneTimeLocation();
        // subscribeLocationLocation();
      } else {
        // setLocationStatus('Permission Denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};
