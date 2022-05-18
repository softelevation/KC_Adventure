// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useCallback, useEffect} from 'react';

import {
  getCurrentLocation,
  locationPermission,
  requestPermission,
} from 'src/utils/helper';
import Header from 'src/common/header';
import {Block} from '_elements';
import {useFocusEffect} from '@react-navigation/native';

const MapsScreen = () => {
  const getLiveLocation = async () => {
    const checkPermission = await locationPermission();
    console.log(checkPermission,'checkPermission')
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
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      getLiveLocation();
    }, []),
  );

  return (
    <Block flex={false} safearea>
      <Header menuIcon={false} name="Map Screen" />
    </Block>
  );
};

export default MapsScreen;
