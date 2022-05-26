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
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import WebView from 'react-native-webview';
import {
  Block,
  hp,
  wp,
  Button,
  CustomButton,
  ImageComponent,
  Text,
} from '_elements';
import CustomRatingBar from 'src/components/rating';
import {useFocusEffect} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import {images} from 'src/assets';
import Modal from 'react-native-modal';
import {RoutesName} from '_routeName';
import {useNavigation} from '@react-navigation/native';
import Restaurant_Image from 'src/assets/icons/restaurantimg.png';
import {data} from './data';
// const latitudeDelta = 0.0922;
// const longitudeDelta = 0.0421;
const MapsScreen = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  const {goBack, navigate} = useNavigation();
  const [state, setState] = useState({
    latitude: 30.7786,
    longitude: 76.906,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // const getLiveLocation = async () => {
  //   const checkPermission = await locationPermission();
  //   console.log(checkPermission, 'checkPermission');
  //   if (checkPermission) {
  //     const request = await requestPermission();
  //     if (request) {
  //       const {latitude, longitude, heading} = await getCurrentLocation();
  //       console.log(
  //         'latitude, longitude, heading: ',
  //         latitude,
  //         longitude,
  //         heading,
  //       );
  //       setState({
  //         latitude: latitude,
  //         longitude: longitude,
  //       });
  //     }
  //   }
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     getLiveLocation();
  //   }, []),
  // );
  return (
    <Block safearea>
      <Block style={styles.container} flex={false}>
        <MapView
          style={styles.map}
          zoomControlEnabled={false}
          showsUserLocation
          zoomEnabled={true}
          initialRegion={state}
          // region={{
          //   ...state,
          //   latitudeDelta: latitudeDelta,
          //   longitudeDelta: longitudeDelta,
          // }}
        >
          {data.map((val, i) => {
            return (
              <Marker
                coordinate={val.coords}
                title={'XYZ'}
                icon={val.image}
                calloutAnchor={{x: 0.4, y: 8}}
                description={'RESTAURANT'}>
                <Callout tooltip>
                  <Block
                    flex={false}
                    borderRadius={21}
                    height={hp(30)}
                    width={wp(85)}
                    header
                    shadow
                    // padding={[hp(5),wp(5),hp(5),wp(2)]}
                    column>
                    <Text
                      center
                      style={{
                        height: 100,
                        width: 100,
                        alignSelf: 'center',
                      }}>
                      <ImageComponent
                        name={'restaurant_img'}
                        // resizeMode="contain"
                        // style={{height: 72, borderRadius: 20, width: 72}}
                        height={72}
                        width={72}
                      />
                    </Text>

                    <Text size={14} regular center>
                      Point of interest description or video{'\n'}button to
                      learn more or to close
                    </Text>
                    <Text size={18} bold center>
                      KEEP RIDING
                    </Text>
                    <Text
                      center
                      style={{
                        height: 80,
                        width: 300,
                      }}>
                      <CustomRatingBar />
                    </Text>
                  </Block>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </Block>
      <Block flex={false} space="between" row margin={[hp(2)]}>
        <CustomButton
          onPress={() => goBack()}
          center
          middle
          borderRadius={40}
          primary
          style={CommonStyles.icon}>
          <ImageComponent name="back_icon" width={8} height={15} />
        </CustomButton>
        <Block flex={false} row>
          <ImageComponent name="camera_icon" height={45} width={45} />
          <Block flex={false} margin={[0, 0, 0, wp(2)]}>
            <ImageComponent name="like_icon" height={45} width={45} />
          </Block>
        </Block>
      </Block>
      <Modal
        coverScreen={false}
        hasBackdrop={false}
        style={CommonStyles.modalWithoutMarginStyle}
        avoidKeyboard
        isVisible={isModalVisible}>
        <Block
          padding={[hp(3), wp(5)]}
          borderRadius={24}
          primary
          flex={false}
          style={{height: hp(28)}}>
          <Block flex={false} padding={[0, wp(6)]} space="between" row>
            <Block flex={false} center>
              <Text center paragraph height={20}>
                Distance{'\n'}Traveled
              </Text>
              <Text size={18} bold>
                107{''}{' '}
                <Text semibold size={12}>
                  mi
                </Text>
              </Text>
            </Block>
            <Block flex={false} middle center>
              <Text center paragraph height={20}>
                Distance{'\n'}to next POI
              </Text>
              <Text size={18} bold>
                67{''}{' '}
                <Text semibold size={12}>
                  mi
                </Text>
              </Text>
            </Block>
            <Block flex={false} center>
              <Text center paragraph height={20}>
                Distance{'\n'}Remaining
              </Text>
              <Text size={18} bold>
                27{''}{' '}
                <Text semibold size={12}>
                  mi
                </Text>
              </Text>
            </Block>
          </Block>
          <Block
            margin={[hp(2), 0, hp(1.5)]}
            style={{width: wp(90)}}
            flex={false}
            borderWidth={[0, 0, 0.5, 0]}
            borderColor={'#F2F2F2'}
          />
          <Block flex={false} center margin={[hp(1), 0, 0]}>
            <Button
              // onPress={() => navigate(RoutesName.MAP_SCREEN)}
              style={{width: wp(70)}}
              color={'primary'}>
              Emergency contact
            </Button>
          </Block>
        </Block>
      </Modal>
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
