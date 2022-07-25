import {ImageBackground, Keyboard, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from 'src/assets';
import CommonStyles from 'src/assets/styles';
import {Block, Button, hp, ImageComponent, Input, Text, wp} from '_elements';
import Modal from 'react-native-modal';
import {light} from 'src/components/theme/colors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RoutesName} from '_routeName';

const Adventure = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [isEmergencyModalVisible, setEmergencyModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  console.log('isEmergencyModalVisible: ', isEmergencyModalVisible);
  const {navigate} = useNavigation();
  const [defaultHeight, setDefaultHeight] = useState(40);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setDefaultHeight(70);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setDefaultHeight(40);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const onSubmit = () => {
    setModalVisible(false);
    setTimeout(() => {
      setEmergencyModalVisible(true);
    }, 2000);
    Keyboard.dismiss();
    // navigate(RoutesName.EXPERIENCES_DRAWER_SCREEN);
  };
  const onCancelSubmit = () => {
    setModalVisible(true);
    setTimeout(() => {
      setEmergencyModalVisible(false);
    }, 2000);
    Keyboard.dismiss();
  };
  const onStartSubmit = () => {
    setModalVisible(false);
    setEmergencyModalVisible(false);
    setIsVisible(false);
    navigate(RoutesName.EXPERIENCES_DRAWER_SCREEN);
  };
  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true);
      setIsVisible(true);
    }, []),
  );
  return (
    <ImageBackground
      source={images.adventure_bg}
      style={CommonStyles.defaultFlex}>
      <SafeAreaView />
      <Block flex={false} margin={[hp(10), 0, 0]}>
        <Text semibold size={40} primary center>
          Let’s find your adventure!
        </Text>
      </Block>
      <Modal
        coverScreen={true}
        hasBackdrop={true}
        style={
          isModalVisible
            ? CommonStyles.modalStyle
            : CommonStyles.modalEmergencyStyle
        }
        isVisible={isVisible}>
        <>
          {isModalVisible ? (
            <Block
              padding={[hp(3), wp(5)]}
              borderRadius={24}
              header
              flex={false}
              style={{height: hp(defaultHeight)}}>
              <Text gutterBottom info semibold h5>
                Enter your unique code here
              </Text>
              <Input
                style={CommonStyles.inputWithBorder}
                placeholder={'Enter Code Here'}
              />
              <Text
                underline
                margin={[hp(1), 0]}
                h2
                extrabold
                center
                color={'#FABB05'}>
                OR
              </Text>
              <Text margin={[hp(1), 0]} h5 semibold center info>
                Browse experiences
              </Text>
              <Block center middle flex={false}>
                <Block
                  margin={[0, 0, hp(2)]}
                  style={{width: wp(25)}}
                  flex={false}
                  center
                  middle
                  borderWidth={[0, 0, 1, 0]}
                  borderColor={light.secondary}
                />
                <Button
                  onPress={() => onSubmit()}
                  style={{width: wp(50)}}
                  uppercase
                  color={'primary'}>
                  Start your search
                </Button>
              </Block>
            </Block>
          ) : (
            <Block
              padding={[hp(3), wp(5)]}
              borderRadius={24}
              header
              flex={false}
              style={{height: hp(55)}}>
              <Block flex={false} center>
                <ImageComponent name="done_icon" height={64} width={135} />
                <Text gutterBottom size={25} semibold center>
                  We found your experience!
                </Text>
                <Block
                  margin={[hp(2), 0, hp(2)]}
                  style={{width: wp(25)}}
                  flex={false}
                  center
                  middle
                  borderWidth={[0, 0, 1, 0]}
                  borderColor={light.secondary}
                />
                <Text
                  height={21}
                  margin={[hp(1), wp(4)]}
                  h4
                  center
                  color={'#323232'}>
                  But before we get started we need some more information in the
                  event of an emergency!
                </Text>
                <Text
                  margin={[hp(2), 0]}
                  size={10}
                  medium
                  center
                  color={'#323232'}>
                  This is where emergency contact form, waiver & email opt in
                  will all be, this is also where the app should ask to track
                  the user
                </Text>
              </Block>
              <Block row space={'between'} center middle flex={false}>
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
                  Start
                </Button>
              </Block>
            </Block>
          )}
        </>
      </Modal>
    </ImageBackground>
  );
};

export default Adventure;
