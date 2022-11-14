import {ImageBackground, SafeAreaView, ScrollView} from 'react-native';
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
// import {ScrollView} from 'react-native-gesture-handler';

const ExperienceDetails = ({route}) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const {goBack, navigate} = useNavigation();
  const {data, image} = route.params;
  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true);
    }, []),
  );
  return (
    <ImageBackground
      // source={{uri: `${API_URL.BASE_URL_IMAGE}${data.image}`}}
      source={image}
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
        propagateSwipe={true}
        hasBackdrop={false}
        // style={{marginTop: hp(20), height: hp(70),wif}}
        style={CommonStyles.modalWithoutMarginStyle}
        avoidKeyboard
        isVisible={isModalVisible}>
        <ScrollView>
          <Block
            padding={[hp(3), wp(5)]}
            borderRadius={24}
            primary
            flex={false}
            style={{height: hp(58)}}>
            <Text gutterBottom lightBlack bold h2>
              New Preston{/* {data.location} */}
            </Text>
            <Text gutterBottom info medium size={20}>
              Connecticut{/* {data.country} */}
            </Text>
            <Block
              margin={[hp(1), 0, hp(2)]}
              style={{width: wp(40)}}
              row
              center
              flex={false}>
              <ImageComponent name="star_icon" width={20} height={20} />
              <Text margin={[0, 0, 0, wp(3)]} h3 semibold color={'#303030'}>
                5{/* {data.rating} */}
                {'   '}
                {/* <Text size={16} medium>
                ({data.distance} km)
              </Text> */}
              </Text>
            </Block>
            <Text size={16} medium color={'#444444'}>
              {/* {data.description} */}
              New Preston, Connecticut is a village in Litchfield County close
              to Lake Waramaug. Native Americans first settled here around
              10,000 years ago, with the first tribe in the area being the
              Wyantenock. In 1741, colonists settled in the area and the area
              became part of the new town of Washington in 1778, the first
              official municipality in CT. Goerge Washington slept in Cogswel
              Tavern in 1781! The industrial era brought mills and eventually,
              the dawn of New Preston as a summer retreat with the creation of
              the Shepaug Railroad. These days, the village is known for its
              quaint shops, including The Smithy Market & Café. With easy access
              to the lake, it is the perfect New England village!
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
        </ScrollView>
      </Modal>
    </ImageBackground>
  );
};

export default ExperienceDetails;
