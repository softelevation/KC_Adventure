import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonStyles from 'src/assets/styles';
import Header from 'src/common/header';
import {locationRequest} from 'src/redux/location/action';
import {
  Block,
  CustomButton,
  hp,
  ImageComponent,
  Text,
  VirtualizedView,
  wp,
} from '_elements';
import {RoutesName} from '_routeName';
import {useFocusEffect} from '@react-navigation/native';
import {
  getCurrentLocation,
  locationPermission,
  requestPermission,
} from 'src/utils/helper';
import {categoryRequest} from 'src/redux/dashboard/category/action';
import {experienceRequest} from 'src/redux/dashboard/experience/action';
import {API_URL} from 'src/utils/config';
import DefaultSkeleton from 'src/components/defaultshimmer';
import {wishlistRequest, wishlistSuccess} from 'src/redux/wishlist/action';

const Experiences = () => {
  const dispatch = useDispatch();
  const [refreshing, setrefreshing] = useState(false);
  const [caterory_list, loading] = useSelector(v => [
    v.category.data,
    v.category.loading,
  ]);
  const experience_list = useSelector(state => state.experience.data);
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
        dispatch(
          locationRequest({
            latitude: latitude,
            longitude: longitude,
          }),
        );
      }
    }
  };

  const currentApiCall = () => {
    dispatch(categoryRequest());
    dispatch(experienceRequest());
  };
  useFocusEffect(
    React.useCallback(() => {
      getLiveLocation();
    }, []),
  );

  useEffect(() => {
    currentApiCall();
  }, []);

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false);
    }, 2000);
    currentApiCall();
  };

  const [active, setActive] = useState('All');
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    return (
      <Block margin={[hp(3), wp(4), 0]} center flex={false}>
        <CustomButton onPress={() => setActive(item)} activeOpacity={1}>
          <Text
            bold={active === item}
            semibold={active !== item}
            color={active !== item ? '#A5A4A4' : '#000000'}
            gutterBottom>
            {item}
          </Text>
        </CustomButton>
        {active === item && (
          <Block secondary flex={false} style={CommonStyles.dot} />
        )}
      </Block>
    );
  };
  const _renderVerticalItem = ({item}) => {
    return (
      <CustomButton
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate(RoutesName.LOCATION_FOUND_SCREEN);
        }}>
        <Block
          row
          header
          shadow
          margin={[hp(1.4), wp(2)]}
          borderRadius={20}
          flex={false}>
          <ImageComponent
            name="demo_icon"
            width={152}
            height={131}
            radius={14}
          />
          <Block center flex={false} margin={[hp(2), 0, 0, wp(5)]}>
            <Block style={{width: wp(40)}} space={'between'} row flex={false}>
              <Text h4 bold color={'#303030'}>
                Isola Bella
              </Text>
              <CustomButton>
                <ImageComponent name="hearts_icon" width={23} height={20} />
              </CustomButton>
            </Block>
            <Block
              margin={[hp(1), 0, 0]}
              style={{width: wp(40)}}
              row
              center
              flex={false}>
              <ImageComponent name="location_icon" width={16} height={16} />
              <Text margin={[0, 0, 0, wp(3)]} h4 medium color={'#303030'}>
                Italy
              </Text>
            </Block>
            <Block
              margin={[hp(1), 0, 0]}
              style={{width: wp(40)}}
              row
              center
              flex={false}>
              <ImageComponent name="star_icon" width={20} height={20} />
              <Text margin={[0, 0, 0, wp(3)]} h4 semibold color={'#303030'}>
                4.2{'   '}
                <Text h5 medium>
                  (2.1 km)
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </CustomButton>
    );
  };
  const _renderHorizontalItem = ({item}) => {
    return (
      <CustomButton
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate(RoutesName.EXPERIENCES_DETAILS_SCREEN, {
            data: item,
          });
        }}>
        <Block
          style={{width: wp(47)}}
          header
          shadow
          margin={[hp(3), wp(2), 0]}
          padding={[0, 0, hp(1)]}
          borderRadius={20}
          center
          flex={false}>
          <ImageComponent
            isURL
            name={`${API_URL.BASE_URL_IMAGE}${item.image}`}
            width={194}
            height={157}
            radius={14}
          />
          <Block
            space={'between'}
            padding={[hp(0.5)]}
            margin={[hp(1.5), 0, 0]}
            flex={false}
            row>
            <Text style={{width: wp(38)}} h5 color={'#303030'}>
              {item.title}
            </Text>
            <CustomButton
              onPress={() => {
                dispatch(
                  wishlistRequest({
                    data: item.is_wishlist,
                  }),
                );
              }}>
              <ImageComponent
                name={item.is_wishlist ? 'hearts_icon' : 'heart_icon'}
                width={22}
                height={22}
              />
            </CustomButton>
          </Block>
        </Block>
      </CustomButton>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header name="Experiences" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex={false}>
          {loading ? (
            <DefaultSkeleton />
          ) : (
            <Block flex={false}>
              <FlatList
                horizontal
                data={caterory_list}
                renderItem={_renderItem}
                showsHorizontalScrollIndicator={false}
              />
              <Block margin={[hp(3), 0]} flex={false} padding={[0, wp(4)]}>
                <Text semibold h3>
                  Top Experiences
                </Text>
                <Block flex={false}>
                  <VirtualizedView>
                    <FlatList
                      keyExtractor={(item, index) => index.toString()}
                      contentContainerStyle={{paddingBottom: hp(3)}}
                      horizontal
                      data={experience_list}
                      renderItem={_renderHorizontalItem}
                      showsHorizontalScrollIndicator={false}
                    />
                  </VirtualizedView>
                </Block>
                <Text semibold h3>
                  Top Rated
                </Text>
                <Block flex={false}>
                  <VirtualizedView>
                    <FlatList
                      scrollEnabled={false}
                      keyExtractor={(item, index) => index.toString()}
                      data={caterory_list}
                      renderItem={_renderVerticalItem}
                      showsHorizontalScrollIndicator={false}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                    />
                  </VirtualizedView>
                </Block>
              </Block>
            </Block>
          )}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Experiences;
