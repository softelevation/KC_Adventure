/* eslint-disable react-hooks/exhaustive-deps */
// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Keyboard, TouchableOpacity} from 'react-native';

import CommonStyles from 'src/assets/styles';
import {StyleSheet} from 'react-native';
import {
  Block,
  hp,
  wp,
  Button,
  CustomButton,
  ImageComponent,
  Text,
  Input,
} from '_elements';
import CustomRatingBar from 'src/components/rating';

import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import Modal from 'react-native-modal';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {data} from './data';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentLocation, requestPermission} from 'src/utils/helper';
import {light} from 'src/components/theme/colors';
import {RoutesName} from '_routeName';
import MapViewDirections from 'react-native-maps-directions';
import GooglePlacesTextInput from 'src/components/google-places';
import {Formik} from 'formik';
import {strictValidObjectWithKeys} from 'src/utils/commonUtils';
import {locationRequest} from 'src/redux/location/action';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;
const MapsScreen = () => {
  const [isEmergencyModalVisible, setEmergencyModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {goBack, navigate} = useNavigation();
  const location = useSelector(state => state.location.data);
  const [defaultHeight, setDefaultHeight] = useState(hp(45));
  const [modalloc, setModalLoc] = useState(true);
  const formikRef = useRef();

  const [state, setState] = useState({
    latitude: location.latitude || 0,
    longitude: location.longitude || 0,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  });

  const [destlat, setDestLat] = useState();
  const [destlong, setDestLong] = useState({});
  const dispatch = useDispatch();
  const [destinationCoords, setDestinationCoords] = useState({
    latitude: null,
    longitude: null,
  });

  const mapView = React.createRef();
  const animateMap = () => {
    mapView.current.animateToRegion(
      {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000,
    );
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setDefaultHeight(hp(70));
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setDefaultHeight(hp(40));
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const getLiveLocation = async () => {
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
      dispatch(
        locationRequest({
          latitude: latitude,
          longitude: longitude,
        }),
      );
      animateMap();
    }
  };

  const onSubmit = () => {
    navigate(RoutesName.EMERGENCY_CONTACT);
    Keyboard.dismiss();
  };
  const onCancelSubmit = () => {
    setTimeout(() => {
      setEmergencyModalVisible(false);
    }, 1000);
    Keyboard.dismiss();
  };
  const onStartSubmit = () => {
    setEmergencyModalVisible(false);
    setIsVisible(false);
    navigate(RoutesName.LOCATION_FOUND_SCREEN);
  };

  useFocusEffect(
    useCallback(() => {
      getLiveLocation();
    }, []),
  );
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBsm0dvdFzqBuomYIx3INjnHdxuuFpEEyk';
  return (
    <Block safearea>
      <Block style={styles.container} flex={false}>
        <MapView
          style={styles.map}
          mapType="hybrid"
          zoomControlEnabled={false}
          showsUserLocation
          zoomEnabled={true}
          showsMyLocationButton={false}
          ref={mapView}
          initialRegion={state}>
          {data.map((val, i) => {
            return (
              <Marker
                coordinate={val.coords}
                icon={val.image}
                image={val.image}
                description={'RESTAURANT'}>
                <Callout tooltip>
                  <Block
                    flex={false}
                    borderRadius={21}
                    height={hp(30)}
                    width={wp(85)}
                    header
                    center
                    shadow
                    padding={[hp(1), 0, hp(0)]}
                    column>
                    <Text margin={[hp(3), 0, 0, 0]} height={117}>
                      <ImageComponent
                        name={'restaurant_img'}
                        height={72}
                        width={72}
                      />
                    </Text>

                    <Text
                      gutterBottom
                      margin={[hp(1), 0, 0, 0]}
                      size={14}
                      regular
                      center>
                      Point of interest description or video{'\n'}button to
                      learn more or to close
                    </Text>
                    <Text gutterBottom size={18} bold center>
                      KEEP RIDING
                    </Text>
                    <Text height={50}>
                      <CustomRatingBar />
                    </Text>
                  </Block>
                </Callout>
              </Marker>
            );
          })}
          {strictValidObjectWithKeys(destinationCoords) &&
            destinationCoords.latitude && (
              <MapViewDirections
                origin={state}
                destination={destinationCoords}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeColor={light.success}
                strokeWidth={5}
              />
            )}
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
          <CustomButton
            onPress={() => {
              setModalLoc(!modalloc);
              setEmergencyModalVisible(false);
            }}
            // center
            middle
            padding={wp(4)}
            margin={[0, wp(2), 0, 0]}
            borderRadius={15}
            primary
            style={CommonStyles.icon}>
            <ImageComponent name="search_loc" width={25} height={25} />
          </CustomButton>
          <TouchableOpacity onPress={() => setEmergencyModalVisible(true)}>
            <ImageComponent name="camera_icon" height={45} width={45} />
          </TouchableOpacity>

          <Block flex={false} margin={[0, 0, 0, wp(2)]}>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <ImageComponent name="like_icon" height={45} width={45} />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <Modal
        style={{
          bottom: 0,
          right: 0,
          left: 0,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderRadius: 24,
          margin: 0,
          height: defaultHeight,
          backgroundColor: '#fff',
          padding: hp(2),
        }}
        coverScreen={false}
        hasBackdrop={false}
        // avoidKeyboard={false}
        isVisible={destinationCoords.latitude === null ? modalloc : !modalloc}>
        <>
          <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={{
              user_destination: '',
              dest_lat: destlat,
              dest_lng: destlong,
            }}
            validateOnMount={true}
            onSubmit={onSubmit}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              setFieldValue,
              handleSubmit,
              isValid,
              dirty,
              setFieldError,
            }) => (
              <>
                {console.log(destinationCoords, 'destinationCoords')}
                <Text medium gutterBottom size={20}>
                  Enter Location
                </Text>
                <GooglePlacesTextInput
                  searchKeyword={values.user_destination}
                  onSubmitEditing={Keyboard.dismiss}
                  placeholder={'Search Location'}
                  onPress={async (datas, details) => {
                    const {name, latLng} = datas;
                    setFieldValue('user_destination', name);
                    setDestinationCoords({
                      latitude: latLng.lat,
                      longitude: latLng.lng,
                    });
                    setFieldValue('dest_lat', latLng.lat);
                    setFieldValue('dest_lng', latLng.lng);
                  }}
                  onChangeText={e => {
                    if (e === '') {
                      setFieldValue('user_destination', '');
                      setDestLat('');
                      setDestLong('');
                    } else {
                      setFieldValue('user_destination', e);
                    }
                  }}
                />
              </>
            )}
          </Formik>
        </>
      </Modal>
      <Modal
        coverScreen={false}
        hasBackdrop={false}
        style={CommonStyles.modalWithoutMarginStyle}
        isVisible={isVisible}>
        <>
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
              style={{width: wp(85)}}
              flex={false}
              borderWidth={[0, 0, 0.5, 0]}
              borderColor={'#F2F2F2'}
            />
            <Block flex={false} center margin={[hp(1), 0, 0]}>
              <Button
                onPress={() => onSubmit()}
                style={{width: wp(70)}}
                color={'primary'}>
                Get Help
              </Button>
            </Block>
          </Block>
        </>
      </Modal>
      <Modal
        coverScreen={false}
        hasBackdrop={false}
        style={CommonStyles.modalEmergencyStyle}
        isVisible={isEmergencyModalVisible}>
        <>
          <Block
            padding={[hp(3), wp(5)]}
            borderRadius={24}
            header
            flex={false}
            style={{height: hp(85)}}>
            <Block flex={false} center>
              <ImageComponent name="done_icon" height={90} width={220} />
              <Text gutterBottom size={25} semibold center>
                Congratulations!
              </Text>
              <Block
                margin={[0, 0, hp(1)]}
                style={{width: wp(25)}}
                flex={false}
                center
                middle
                borderWidth={[0, 0, 1, 0]}
                borderColor={light.secondary}
              />
              <Text
                height={21}
                margin={[hp(1), wp(5)]}
                h4
                center
                color={'#323232'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra.
              </Text>
            </Block>
            <Block flex={false} row space="between">
              <Block flex={false} row center padding={[hp(0), wp(1)]}>
                <CustomRatingBar />
              </Block>
              <Block flex={false}>
                <CustomButton
                  center
                  middle
                  margin={[hp(1), 0, 0, 0]}
                  style={CommonStyles.icon}>
                  <ImageComponent name="share_icon" width={30} height={30} />
                </CustomButton>
              </Block>
            </Block>
            <Input
              style={{height: hp(15), backgroundColor: '#65837B'}}
              multiline
              textAlignVertical="top"
              color="#FFFFFF"
              placeholder={'WRITE YOUR FEEDBACK HERE'}
              placeholderTextColor="#FFFFFF"
            />
            <CustomButton
              center
              middle
              borderWidth={1}
              borderColor="#65837B"
              borderRadius={10}
              height={60}
              margin={[hp(2), 0, 0, 0]}
              style={CommonStyles.addPhoto}>
              <Block flex={false} column center>
                <ImageComponent name="add_photo" height={30} width={30} />
                <Text uppercase bold secondary>
                  add your photos
                </Text>
              </Block>
            </CustomButton>
            <Block
              row
              space={'between'}
              margin={[hp(2), 0, 0, 0]}
              center
              middle
              flex={false}>
              <Button
                onPress={() => onCancelSubmit()}
                style={{width: wp(40)}}
                uppercase
                color={'secondary'}>
                Cancel
              </Button>
              <Button
                onPress={() => onStartSubmit()}
                style={{width: wp(40)}}
                uppercase
                color={'primary'}>
                submit
              </Button>
            </Block>
          </Block>
        </>
      </Modal>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: hp(100),
    width: wp(100),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapsScreen;
