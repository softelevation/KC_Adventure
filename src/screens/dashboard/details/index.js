import {ImageBackground, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {images} from 'src/assets';
import CommonStyles from 'src/assets/styles';
import {
  Block,
  Button,
  CustomButton,
  hp,
  ImageComponent,
  Text,
  wp,
} from '_elements';
import Modal from 'react-native-modal';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RoutesName} from '_routeName';
import {API_URL} from 'src/utils/config';

const ExperienceDetails = ({route}) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const {goBack, navigate} = useNavigation();
  const {data} = route.params;
  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true);
    }, []),
  );
  return (
    <ImageBackground
      source={{uri: `${API_URL.BASE_URL_IMAGE}${data.image}`}}
      style={CommonStyles.defaultFlex}>
      <SafeAreaView />
      <Block
        row
        space="between"
        padding={[0, wp(3)]}
        flex={false}
        margin={[hp(2), 0, 0]}>
        <CustomButton
          onPress={() => goBack()}
          center
          middle
          borderRadius={40}
          primary
          style={CommonStyles.icon}>
          <ImageComponent name="back_icon" width={8} height={15} />
        </CustomButton>
        <CustomButton
          center
          middle
          flex={false}
          borderRadius={40}
          primary
          style={CommonStyles.icon}>
          <ImageComponent
            name={data.is_wishlist ? 'hearts_icon' : 'heart_icon'}
            width={20}
            height={20}
          />
        </CustomButton>
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
          style={{height: hp(58)}}>
          <Text gutterBottom lightBlack bold h2>
            {data.location}
          </Text>
          <Text gutterBottom info medium size={20}>
            {data.country}
          </Text>
          <Block
            margin={[hp(1), 0, hp(2)]}
            style={{width: wp(40)}}
            row
            center
            flex={false}>
            <ImageComponent name="star_icon" width={20} height={20} />
            <Text margin={[0, 0, 0, wp(3)]} h3 semibold color={'#303030'}>
              {data.rating}
              {'   '}
              <Text size={16} medium>
                ({data.distance} km)
              </Text>
            </Text>
          </Block>
          <Text size={16} medium color={'#444444'}>
            {data.description}
          </Text>
          <Block flex={false} center margin={[hp(3), 0, 0]}>
            <Button
              onPress={() => navigate(RoutesName.MAP_SCREEN)}
              icon="location_icon"
              iconColor={'#fff'}
              iconWithText
              iconWidth={16}
              iconHeight={16}
              style={{width: wp(40)}}
              color={'primary'}>
              View Map
            </Button>
          </Block>
        </Block>
      </Modal>
    </ImageBackground>
  );
};

export default ExperienceDetails;
