import {ImageBackground, Keyboard, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from 'src/assets';
import CommonStyles from 'src/assets/styles';
import {Block, Button, hp, Input, Text, wp} from '_elements';
import Modal from 'react-native-modal';
import {light} from 'src/components/theme/colors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RoutesName} from '_routeName';

const Adventure = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  const {navigate} = useNavigation();
  const [defaultHeight, setDefaultHeight] = useState(35);
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
        setDefaultHeight(35);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const onSubmit = () => {
    setModalVisible(false);
    Keyboard.dismiss();
    navigate(RoutesName.EXPERIENCES_DRAWER_SCREEN);
  };

  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true);
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
        hasBackdrop={false}
        style={CommonStyles.modalStyle}
        avoidKeyboard
        isVisible={isModalVisible}>
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
            Or
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
      </Modal>
    </ImageBackground>
  );
};

export default Adventure;
